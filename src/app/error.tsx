"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center p-4">
      <span className="text-[10px] text-primary-container">ERROR</span>
      <h2 className="font-display font-bold text-4xl mt-4">
        Something went wrong
      </h2>
      <p className="mt-2 text-sm text-primary-container text-center max-w-md">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-[#343D96] text-[#A8AFFF] text-sm hover:opacity-80 transition-opacity cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
