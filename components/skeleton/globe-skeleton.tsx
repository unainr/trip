import { Skeleton } from "@/components/ui/skeleton"

export function GlobeSkeleton() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-50">
      {/* Main Globe Skeleton Container */}
      <div className="relative aspect-[1/1] w-full max-w-[600px] flex items-center justify-center">
        {/* Main Globe Circle */}
        <div className="relative">
          <Skeleton className="h-[400px] w-[400px] rounded-full bg-gray-200" />
          
          {/* Simulated continent shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[400px] w-[400px] rounded-full overflow-hidden">
              {/* Continent-like shapes positioned to look realistic */}
              <Skeleton className="absolute top-16 left-20 h-8 w-16 rounded-full opacity-50 bg-gray-300" />
              <Skeleton className="absolute top-32 right-24 h-12 w-20 rounded-full opacity-50 bg-gray-300" />
              <Skeleton className="absolute bottom-20 left-16 h-10 w-14 rounded-full opacity-50 bg-gray-300" />
              <Skeleton className="absolute top-24 left-32 h-6 w-12 rounded-full opacity-50 bg-gray-300" />
              <Skeleton className="absolute bottom-32 right-20 h-8 w-18 rounded-full opacity-50 bg-gray-300" />
              <Skeleton className="absolute top-40 left-48 h-6 w-10 rounded-full opacity-40 bg-gray-300" />
              <Skeleton className="absolute bottom-40 right-32 h-4 w-8 rounded-full opacity-40 bg-gray-300" />
            </div>
          </div>

          {/* Subtle rotating animation for the globe */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-300 opacity-20 animate-spin" 
               style={{ animationDuration: '20s' }} />
        </div>
      </div>
      
      {/* Loading indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-20 bg-gray-300" />
            <Skeleton className="h-2 w-16 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}