export default function Dot({
  onClick,
  isActive,
}: {
  onClick: () => void
  isActive: boolean
}) {
  const colorClass = isActive ? "" : ""

  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-foreground bg-background w-4 h-4 ${colorClass} flex items-center justify-center`}
    >
      {isActive && <span className="rounded-full bg-foreground w-3 h-3" />}
    </button>
  )
}
