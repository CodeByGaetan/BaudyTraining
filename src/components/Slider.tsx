"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CarouselApi } from "@/components/ui/carousel"
import { Children, ReactNode, isValidElement, useEffect, useState } from "react"

export default function Slider({ children }: { children: ReactNode }) {
  const [api, setApi] = useState<CarouselApi>()

  // const itemIds = Children.toArray(children).map((child) => {
  //   if (!isValidElement(child)) {
  //     return
  //   }
  //   return child.props.id
  // })

  const scrollToFragment = (fragment: string) => {
    const index = Children.toArray(children).findIndex((child) => {
      if (isValidElement(child)) {
        return child.props.id === fragment
      }
      return false
    })

    if (index !== -1) {
      api?.scrollTo(index)
    }
  }

  useEffect(() => {
    if (!api) {
      return
    }

    // Manage scroll events
    let lastScrollTime = 0
    const handleWheel = (event: WheelEvent) => {
      const now = Date.now()
      if (now - lastScrollTime > 500) {
        lastScrollTime = now
        if (event.deltaY > 0) {
          api?.scrollNext()
        } else {
          api?.scrollPrev()
        }
      }
    }
    document.addEventListener("wheel", handleWheel)

    // Manage hash changes
    const handleHashChange = () => {
      scrollToFragment(window.location.hash.slice(1))
    }
    scrollToFragment(window.location.hash.slice(1))
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      document.removeEventListener("wheel", handleWheel)
      window.removeEventListener("hashchange", handleHashChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api])

  return (
    <Carousel
      orientation="vertical"
      setApi={setApi}
      opts={{
        watchDrag: false,
      }}
    >
      <CarouselContent className="h-screen w-full">
        {Children.map(children, (child, index) => (
          <CarouselItem className="">{child}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
