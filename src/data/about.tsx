import { FaCar } from "react-icons/fa";
import { MdPinDrop } from "react-icons/md";
import { FaFlagUsa } from "react-icons/fa";
import { GoCircuitBoard } from "react-icons/go";
import { GiBatMask } from "react-icons/gi";

export const aboutData = [
  {
    label: "title",
    value: "Software Engineer",
    icon: <GiBatMask />,
  },
  {
    label: "description",
    value:
      "I am a software engineer with a passion for learning and creating. My professional career has been in embedded systems development, but my technical interests span all areas of software development. In my free time I enjoy learning new things, traveling and dabbling in art.",
    icon: <GoCircuitBoard />,
  },
  {
    label: "nationality",
    value: "American",
    icon: <FaFlagUsa />,
  },
  {
    label: "location",
    value: "Stuttagrt, Germany",
    icon: <MdPinDrop />,
  },
  {
    label: "employer",
    value: "Bosch Engineering GmbH",
    icon: <FaCar />,
  },
];
