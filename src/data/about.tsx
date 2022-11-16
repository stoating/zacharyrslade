import { FaCar } from "react-icons/fa";
import { MdPinDrop } from "react-icons/md";
import { FaFlagUsa } from "react-icons/fa";
import { GoCircuitBoard } from "react-icons/go";
import { GiBatMask } from "react-icons/gi";

export const AboutData = [
  {
    label: "title",
    value: "Software Engineer",
    icon: <GiBatMask />,
  },
  {
    label: "description",
    value:
      `My name is Zachary (but most people just call me Zack). I am a software engineer
      with a passion for learning and creating. My professional career has
      focused on embedded systems development but my technical interests
      span many areas of software development. I have experience in software
      project management, education, and hardware test systems scaling and design.
      In my free time I enjoy programming personal projects, camping, traveling
      and dabbling in art.`,
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
