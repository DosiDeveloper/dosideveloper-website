import * as motion from "motion/react-client";

interface StackItemProps {
  title: string;
  percentage: string;
  languages: string[];
}

export default function StackItem({ title, percentage, languages }: StackItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -50 }}
      whileInView={{opacity: 1, x: 0}}
      className="flex flex-col gap-5 mt-10"
    >
      <div className="flex justify-between items-end">
        <h3 className="text-2xl font-bold">{title}</h3>
        <motion.span
          initial={{ x: 20, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-xs text-primary-container"
        >
          {percentage}
        </motion.span>
      </div>
      <section className="flex flex-col gap-2">
        <div className="w-full bg-[#1F1F24] h-1">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: percentage }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-primary h-1"
            style={{ width: percentage }}
          ></motion.div>
        </div>
        <ul className="uppercase font-mono text-[12px] mt-2 flex gap-4 list-['/'] list-inside text-primary-container/70">
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
}