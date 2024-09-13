import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <h2 className="mt-4 text-2xl font-semibold text-foreground">
        Loading...
      </h2>
      <p className="mt-2 text-muted-foreground">
        Please wait while we prepare your content.
      </p>
    </div>
  )
}
