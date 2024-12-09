import { motion, useAnimation } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconSquareXFilled } from "@tabler/icons-react";
const RevealCard = ({
  imgSrc,
  title,
  description,
  setIsOpen,
}: {
  imgSrc: string;
  title: string;
  description: string;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const control = useAnimation();
  return (
    <motion.div
      className="w-full min-h-[50vh] max-md:min-h-[80vh] relative select-none z-[9999]"
      onTouchStart={() => control.start("hover")}
      onHoverStart={() => control.start("hover")}
      onHoverEnd={() => control.start("initial")}
    >
      <IconSquareXFilled
        className="absolute top-1 right-1 md:hidden text-light-900 cursor-pointer"
        size={24}
        onClick={() => setIsOpen(false)}
      />
      <div className="h-1/2 p-6 flex flex-col justify-center  z-[9000] rounded-2xl">
        <h3 className="text-3xl mb-4 font-semibold text-light-900 font-serif max-md:text-2xl ">
          {title}
        </h3>
        <ScrollArea className="text-2xl font-light text-light-800 leading-8 font-serif max-md:text-lg overflow-y-auto max-md:max-h-[19vh] px-2 max-md:px-0 md:max-h-[15vh]">
          {description}
        </ScrollArea>
      </div>
      <motion.div
        initial="initial"
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
          initial: {
            top: "0%",
            right: "0%",
          },
        }}
        animate={control}
        className="absolute inset-0 bg-neutral-950 z-10 max-md:mx-1 rounded-xl"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.span
        className="absolute bottom-2 left-2 text-3xl font-serif tracking-widest z-10"
        animate={control}
        variants={{
          hover: {
            opacity: 0,
          },
          initial: {
            opacity: 1,
          },
        }}
        initial="initial"
      >
        Meteora <span className="text-sm animate-pulse">29.12 - 02.01</span>
      </motion.span>
      <a
        href="#"
        rel="nofollow"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-[#2A003D] text-light-500 hover:text-light-900 transition-colors max-md:mx-1 rounded-xl"
      >
        <div className="flex items-center font-serif">
          <span className="text-lg">LEARN MORE</span>
          <FiArrowUpRight className="text-lg" />
        </div>
      </a>
    </motion.div>
  );
};

export default RevealCard;
