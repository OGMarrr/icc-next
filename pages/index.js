import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import AffliatesPage from "../components/affliates";
import { motion, AnimatePresence } from "framer-motion";
import { Router, useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* <AnimatePresence>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
          className="base-page-size"
        > */}
      <Navbar />
      <Hero />

      <Cards />
      <AffliatesPage />
      {/* </motion.div>
      </AnimatePresence> */}
    </>
  );
}
