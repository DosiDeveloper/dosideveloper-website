import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <section
      className="h-dvh flex flex-col justify-center md:justify-evenly items-center gap-10 px-6 scroll-mt-20"
      id="presentation"
    >
      <div className="mx-auto w-full flex justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 relative">
          <motion.div
            className="p-5 corner-tr-bl max-w-xs"
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <Image
              src={logo}
              loading="eager"
              alt="Douglas Barreto logo"
              className="mx-auto corner-tr-bl"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex flex-col"
          >
            <div className="relative z-10 uppercase text-center md:text-left">
              <h1 className="text-5xl lg:text-8xl font-display font-bold tracking-tight">
                <span className="text-foreground">Douglas</span>
                <br />
                <span className="text-primary">Barreto</span>
              </h1>
            </div>
            <div className="uppercase text-center md:text-left">
              <p className="text-lg font-body text-primary-container max-w-2xl italic uppercase">
                software engineer
              </p>
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-primary text-on-primary font-display font-semibold uppercase tracking-wide cursor-pointer"
                >
                  [ Deploy_Mission ]
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mx-auto text-center text-[10px] text-primary-container"
        initial={{ y: 10, opacity: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>DOWNLOAD_DATA</p>
        <span className="arrow-down mx-auto"></span>
      </motion.div>
    </section>
  );
}
