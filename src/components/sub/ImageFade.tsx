import Image, { StaticImageData } from "next/image"

interface ImageFadeProps {
  src: StaticImageData
  alt: string
  height: number
  angle: number
  className?: string
}

export default function ImageFade({
  src,
  alt,
  height,
  angle,
  className,
}: ImageFadeProps) {
  let rounded
  switch (angle) {
    case 0:
      rounded = "rounded-b-lg"
      break
    case 90:
      rounded = "rounded-l-lg"
      break
    case 180:
      rounded = "rounded-t-lg"
      break
    case 270:
      rounded = "rounded-r-lg"
      break
  }

  return (
    <div
      className={`relative w-full h-[${height}px] ${rounded} overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        placeholder="blur"
      />
      <div
        className={`absolute inset-0`}
        style={{
          backgroundImage: `linear-gradient(${angle}deg,rgba(0,0,0,0)80%,hsl(var(--background))100%)`,
        }}
      />
    </div>
  )
}
