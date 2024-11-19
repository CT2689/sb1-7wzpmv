import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  )
}