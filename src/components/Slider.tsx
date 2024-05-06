import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { CarouselApi } from "@/components/ui/carousel"
import { SectionTitles } from "@/data/SectionId"
import { ArrowBigRightIcon } from "lucide-react"
import { Children, ReactNode, isValidElement, useEffect, useState } from "react"
import Dot from "./Dot"
import { Button } from "./ui/button"

export default function Slider({ children }: { children: ReactNode }) {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  const sectionIds = Children.toArray(children).map((child) => {
    if (!isValidElement(child)) {
      return
    }
    return child.props.id
  })

  const setHashFromIndex = (index: number) => {
    const current = sectionIds[index]
    window.location.hash = current
  }

  const scrollToSection = (id: string) => {
    const index = sectionIds.indexOf(id)
    if (index === -1) {
      return
    }
    api?.scrollTo(index)
  }

  useEffect(() => {
    if (!api) {
      return
    }

    let ignoreNextHashChange = false

    // MANAGE CAROUSEL EVENTS
    api.on("select", () => {
      setSelected(api.selectedScrollSnap())

      ignoreNextHashChange = true
      setHashFromIndex(api.selectedScrollSnap())
    })

    // MANAGE SCROLLING
    // let lastScrollTime = 0
    // const handleWheel = (event: WheelEvent) => {
    //   const now = Date.now()
    //   if (now - lastScrollTime > 1000) {
    //     lastScrollTime = now
    //     console.log("Wheel Event", event.deltaY)
    //     if (event.deltaY > 0) {
    //       api?.scrollNext()
    //     } else {
    //       api?.scrollPrev()
    //     }
    //   }
    // }
    // document.addEventListener("wheel", handleWheel)

    // MANAGE HASH CHANGE
    scrollToSection(window.location.hash.slice(1))
    const handleHashChange = () => {
      if (ignoreNextHashChange) {
        ignoreNextHashChange = false
        return
      }
      console.log("Hash Change Event")
      scrollToSection(window.location.hash.slice(1))
    }
    window.addEventListener("hashchange", handleHashChange)

    // CLEANUP
    return () => {
      // document.removeEventListener("wheel", handleWheel)
      window.removeEventListener("hashchange", handleHashChange)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api])

  return (
    <Carousel
      orientation="horizontal"
      setApi={setApi}
      opts={{
        watchDrag: true,
      }}
      // plugins={[WheelGesturesPlugin()]}
    >
      <CarouselContent>
        {Children.map(children, (child, index) => (
          <CarouselItem className="h-svh overflow-y-auto flex">
            <div className="my-auto py-16 container">{child}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <div className="absolute top-4 right-6">
        <ToggleMode />
      </div> */}
      {/* <div className="absolute bottom-4 left-4">
        {sectionIds[selected + 1] && (
          <Button variant="outline" onClick={() => api?.scrollNext()}>
            <p>{SectionTitles.get(sectionIds[selected + 1])}</p>
            <ArrowDownIcon className="ml-2" />
          </Button>
        )}
      </div>
      <div className="absolute bottom-8 right-6">
        <div className="flex flex-col gap-1">
          {sectionIds.map((id, index) => (
            <Dot
              key={id}
              onClick={() => scrollToSection(id)}
              isActive={api?.selectedScrollSnap() === index}
            />
          ))}
        </div>
      </div> */}
      <div className="absolute bottom-4 right-6">
        {sectionIds[selected + 1] && (
          <Button variant="outline" onClick={() => api?.scrollNext()}>
            <p>{SectionTitles.get(sectionIds[selected + 1])}</p>
            <ArrowBigRightIcon className="ml-2" />
          </Button>
        )}
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        {/* <div className="flex gap-1 border border-input px-3 py-1 bg-background shadow-sm rounded-full"> */}
        <div className="flex gap-1.5 ">
          {sectionIds.map((id, index) => (
            <Dot
              key={id}
              onClick={() => scrollToSection(id)}
              isActive={api?.selectedScrollSnap() === index}
            />
          ))}
        </div>
      </div>
    </Carousel>
  )
}
