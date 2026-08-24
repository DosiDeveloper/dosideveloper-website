interface ProjectSkeletonProps {
  isLarge: boolean;
}

export default function ProjectSkeleton({ isLarge }: ProjectSkeletonProps) {
  return (
    <article
      className={`min-h-70 sm:min-h-sm bg-[#1B1B20] border-t-4 border-[#35343A] flex justify-around p-4 sm:p-6 shadow-lg backdrop-blur-sm ${isLarge ? "lg:col-span-2" : ""}`}
    >
      <div className="flex flex-col justify-between w-full">
        <span className="px-2 py-1 bg-[#343D96]/60 text-[#A8AFFF] text-[10px] h-fit w-fit">
          <span className="invisible">DEV_AREA</span>
        </span>
        <header className="text-balance space-y-2">
          <div className="h-6 sm:h-7 bg-white/20 rounded w-2/3" />
          <div className="h-4 bg-primary-container/20 rounded w-full" />
          <div className="h-4 bg-primary-container/20 rounded w-3/4" />
        </header>
        <footer className="mb-3 inline-flex flex-wrap items-center gap-2">
          <div className="px-2 py-1 border border-[#35343A] bg-white/5 h-6 w-16 rounded" />
          <div className="px-2 py-1 border border-[#35343A] bg-white/5 h-6 w-12 rounded" />
          <div className="px-2 py-1 border border-[#35343A] bg-white/5 h-6 w-14 rounded" />
        </footer>
      </div>
      {isLarge && (
        <div className="hidden sm:block max-w-30 lg:max-w-sm self-center bg-[#2a292f] animate-pulse rounded aspect-4/3" />
      )}
    </article>
  );
}
