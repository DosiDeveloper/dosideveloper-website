import Image from "next/image";
import placeholder from "../../../public/placeholder.svg";
import * as motion from "motion/react-client";

interface ProjectItemsProps {
  title: string;
  description: string;
  skills: string[];
  dev_area: string;
  isLarge: boolean;
  index: number;
}

export default function ProjectItems({
  title,
  description,
  skills,
  dev_area,
  index,
  isLarge,
}: ProjectItemsProps) {
  return (
    <motion.article
      className={`min-h-70 sm:min-h-sm bg-[#1B1B20] border-t-4 border-[#35343A] flex justify-around p-4 sm:p-6 shadow-lg backdrop-blur-sm hover:border-primary transition-all ${isLarge ? "lg:col-span-2" : ""}`}
      initial={index % 2 == 0 ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <div className="flex flex-col justify-between w-full">
        {dev_area ? (
          <span className="px-2 py-1 bg-[#343D96] text-[#A8AFFF] text-[10px] h-fit w-fit">
            {dev_area}
          </span>
        ) : (
          <span className="px-2 py-1 bg-[#343D96] text-[#A8AFFF] text-[10px] h-fit w-fit">
            No tags
          </span>
        )}
        <header className="text-balance">
          <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm text-primary-container line-clamp-2">
            {description}
          </p>
        </header>
        <footer className="mb-3 inline-flex flex-wrap gap-3">
          {skills?.length > 0 && (
            <div className="inline-flex flex-wrap items-center gap-2 text-xs text-primary-container/70 capitalize">
              {skills.map((lang, index) => (
                <span key={index} className="px-2 py-1 border">
                  {lang}
                </span>
              ))}
            </div>
          )}
        </footer>
      </div>
      {isLarge && (
        <Image
          src={placeholder}
          alt=""
          role="presentation"
          placeholder="empty"
          loading="eager"
          className="hidden sm:block max-w-30 lg:max-w-sm self-center"
        />
      )}
    </motion.article>
  );
}
