// import { du, ru, nu } from "@/assets/icons";
import { RxDashboard } from "react-icons/rx";
import { GiWhiteBook } from "react-icons/gi";
import {  SiBookstack} from "react-icons/si";

const universityList = [
  {
    id: 1,
    title: "Dashboard",
    code: "dashboard",
    path: "/client/dashboard",
    Icon: RxDashboard,
  },
  {
    id: 2,
    title: "Books",
    code: "books",
    path: "/client/books",
    Icon: GiWhiteBook,
  },
  {
    id: 3,
    title: "Suggactions",
    code: "suggactions",
    path: "/client/suggactions",
    Icon: SiBookstack,
  },
];

export { universityList };
