export default function Footer() {
  return (
    <footer className="mt-10 md:mt-0 h-[10dvh] bg-[#0E0E13] border-t border-primary/40 px-4 sm:px-8 w-full">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between text-sm text-[#8A8E99]">
        <div className="flex flex-col gap-1 text-xs">
          <span className="text-primary font-semibold">
            DOSI_DEV // SYSTEM_ROOT
          </span>
          <span>© 2026 DOSI_DEV</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-[#5F6B8E]">
          <a
            href="https://github.com/dosideveloper"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-[10px]"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/dosi-developer/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-[10px]"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:dosideveloper@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-[10px]"
          >
            EMAIL
          </a>
          <a href="#" className="hover:text-white text-[10px]">
            SOURCE
          </a>
        </div>
      </div>
    </footer>
  );
}
