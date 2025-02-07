'use client'

interface ProjectInfoListProps {
  label: string
  items?: string[]
  title: string
}

export function ProjectInfoList({ label, items, title }: ProjectInfoListProps) {
  if (!items?.length) return null

  return (
    <div className="flex flex-row items-center gap-3 text-sm tracking-[-0.02em]">
      <span className="w-[120px] shrink-0 font-normal">{label}</span>
      {items.map((item, index) => (
        <span
          key={`${item}-${index}-${title}`}
          className="text-nowrap font-light text-[color:rgb(var(--project-card-light-text-rgb))]"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
