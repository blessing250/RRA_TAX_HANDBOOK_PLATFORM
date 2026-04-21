type TableOfContentsProps = {
  heading: string
  items: {
    id: string
    title: string
  }[]
}

export function TableOfContents({ heading, items }: TableOfContentsProps) {
  return (
    <aside className="rounded-lg border bg-card p-4">
      <h2 className="text-sm font-semibold">{heading}</h2>
      <nav className="mt-3 grid gap-2" aria-label={heading}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-sm leading-6 text-muted-foreground hover:text-foreground"
          >
            {item.title}
          </a>
        ))}
      </nav>
    </aside>
  )
}
