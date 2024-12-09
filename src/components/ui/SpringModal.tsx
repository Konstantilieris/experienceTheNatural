import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

import Image from "next/image";
import { Meteors } from "./meteors";

import RevealCard from "./RevealCard";
const ModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-light-900 px-4 py-2  hover:bg-indigo-600 right-8 absolute bottom-12 z-20 text-dark-100 font-semibold tracking-widest flex flex-row gap-2 items-center group hover:text-light-900 transition-all duration-800 ease-in-out "
      >
        Upcoming Adventure
        <Image
          src="/assets/hike.svg"
          width={24}
          height={24}
          alt="img"
          className="invert group-hover:rotate-45 group-hover:invert-0 transition-all duration-800 ease-in-out"
        />
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[8000] grid place-items-center  cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-neutral-800 to-dark-100 text-white p-1 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden min-h-[50vh] min-w-[80vw] z-[9000]"
          >
            <RevealCard
              setIsOpen={setIsOpen}
              imgSrc="/meteora.jpg"
              title="Ascending Wonders: A Hiking Adventure Through Meteora’s Majestic Pillars"
              description="Meteora’s towering rock pillars and clifftop monasteries promise a breathtaking adventure. Explore ancient trails, marvel at panoramic views, and uncover stories of faith and perseverance. Immerse yourself in rich history, stunning landscapes, and vibrant local culture. This journey offers awe, serenity, and unforgettable memories—an adventure into the heart of Meteora’s timeless wonder."
            />

            <Meteors number={20} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWrapper;
