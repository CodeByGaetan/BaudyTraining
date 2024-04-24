import React from "react"

export default function SliderSection({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return <div className="h-full w-full flex md:items-center">{children}</div>
}
