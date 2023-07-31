import "../App.css";
import CarouselGroup from "./components/CarouselGroup";
import Gallery from "./components/Gallery";
import {motion} from "framer-motion"

function HomeApp() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
    style={{color:"red",fontSize:"30px",padding:"20px"}}
>      <CarouselGroup />
      <Gallery />
    </motion.div>
  );
}

export default HomeApp;
