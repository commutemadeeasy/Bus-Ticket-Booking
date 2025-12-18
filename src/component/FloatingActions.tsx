import { Plus } from "lucide-react"
import { cn } from "../lib/utils"

interface FloatingActionButtonProps {
  onClick?: () => void
  className?: string
}

export function FloatingActionButton({ onClick, className }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors w-14 h-14",
        className
      )}
    >
      <Plus className="h-6 w-6" />
    </button>
  )
}
