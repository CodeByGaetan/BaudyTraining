export default function Dot({
  onClick,
  isActive,
}: {
  onClick: () => void
  isActive: boolean
}) {
  const colorClass = isActive ? "border-primary" : "border-secondary"

  return (
    <button
      onClick={onClick}
      className={`border-2 rounded-full w-4 h-4 ${colorClass}`}
    ></button>
  )
}
