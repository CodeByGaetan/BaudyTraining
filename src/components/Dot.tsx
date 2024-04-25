export default function Dot({
  onClick,
  isActive,
}: {
  onClick: () => void
  isActive: boolean
}) {
  const colorClass = isActive ? "bg-primary" : "bg-secondary"

  return (
    <button
      onClick={onClick}
      className={`rounded-full w-4 h-4 ${colorClass}`}
    ></button>
  )
}
