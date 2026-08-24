"use client";
import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

const FORMSPREE_KEY = process.env.NEXT_PUBLIC_FORMSPREE_KEY || "";

export default function ContactMe() {
  const [state, handleSubmit] = useForm(FORMSPREE_KEY);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded || state.errors) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, state.errors, state.submitting]);

  return (
    <section
      className="p-6 h-auto flex flex-col items-center justify-center scroll-mt-15 gap-6 w-full mb-10"
      id="contact"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center justify-center w-full"
      >
        <span className="text-[10px] text-primary-container">
          SECTION_04 // CONTACT
        </span>
        <h2 className="font-display font-bold text-[60px] text-left scroll-pt-60">
          INITIATE_CONTACT
        </h2>
      </motion.div>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        onSubmit={handleSubmit}
        className="w-[90%] lg:w-1/2 bg-[#1B1B20] grid grid-cols-2 gap-8 p-12"
      >
        <span className="text-[10px] text-primary-container/50 uppercase col-span-2 justify-self-end">
          TERMINAL_CONTACT_V2.0.0
        </span>
        <label className="col-span-1 flex flex-col gap-2 text-sm text-primary-container">
          <span>&gt; IDENT_USER</span>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            className="w-full p-4 border-b text-primary-container placeholder:text-primary-container/30 bg-transparent focus:outline-none"
          />
        </label>

        <label className="col-span-1 flex flex-col gap-2 text-sm text-primary-container none">
          <span>&gt; IDENT_EMAIL</span>
          <input
            type="email"
            name="email"
            placeholder="user@network.com"
            className="w-full p-4 border-b text-primary-container placeholder:text-primary-container/30 bg-transparent focus:outline-none"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </label>

        <label className="col-span-2 flex flex-col gap-2 text-sm text-primary-container">
          <span>&gt; TRANSMIT_MESSAGE</span>
          <textarea
            name="message"
            placeholder="Enter technical specifications or query..."
            className="w-full p-4 border-b text-primary-container placeholder:text-primary-container/30 bg-transparent focus:outline-none h-40 resize-none"
          />
        </label>
        <div className="col-span-2 flex items-end-safe justify-between w-full mt-8">
          <span className="text-[10px] text-primary-container/50 uppercase hidden md:block">
            End-to-End Encrypted Tunnel
          </span>
          <a
            href="mailto:dosideveloper@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-primary-container/50 text-[10px] uppercase">
              To dosideveloper@gmail.com
            </span>
          </a>
          <div className="flex flex-col relative">
            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-3 bg-primary text-white font-display font-semibold uppercase tracking-wide cursor-pointer border-l-2 hover:bg-primary transition-colors duration-300"
            >
              [ SEND_MESSAGE ]
            </button>
            <AnimatePresence>
              {state.succeeded && showModal && (
                <motion.span
                  key="modal"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="text-green-500 text-xs text-center mt-2 w-full absolute left-0 top-full border"
                >
                  Message sent successfully!
                </motion.span>
              )}
              {state.errors && showModal && (
                <motion.span
                  key="modal"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="text-red-500 text-xs text-center mt-2 w-full absolute left-0 top-full border"
                >
                  {state.errors.getFormErrors()[0].message ||
                    "An error occurred. Please try again."}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.form>
    </section>
  );
}
