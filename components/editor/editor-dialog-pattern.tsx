import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface EditorDialogPatternProps {
  title: string
  description?: string
  footer?: ReactNode
  children?: ReactNode
  className?: string
}

export function EditorDialogPattern({
  title,
  description,
  footer,
  children,
  className,
}: EditorDialogPatternProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-surface-border bg-elevated text-copy-primary shadow-2xl shadow-background/40 backdrop-blur",
        className
      )}
    >
      <div className="space-y-2 p-6">
        <h2 className="font-heading text-base font-medium">{title}</h2>
        {description ? (
          <p className="text-sm leading-6 text-copy-muted">{description}</p>
        ) : null}
      </div>

      {children ? <div className="px-6 pb-6">{children}</div> : null}

      {footer ? (
        <footer className="flex justify-end gap-2 border-t border-surface-border p-4">
          {footer}
        </footer>
      ) : null}
    </section>
  )
}
