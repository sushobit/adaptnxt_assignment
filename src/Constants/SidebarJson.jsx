import Dashboard from "../Pages/Dashboard";
import { IoMdShare } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { ImTruck } from "react-icons/im";
import { AiOutlineShareAlt } from "react-icons/ai";

export const sideBarJson = [
  {
    id: 1,
    title: "Dashboard",
    source: <IoMdShare />,
  },
  {
    id: 2,
    title: "Inventory",
    source: <IoPricetagOutline />,
  },
  {
    id: 3,
    title: "Orders",
    source: <CgNotes />,
  },
  {
    id: 4,
    title: "Shipping",
    source: <ImTruck />,
  },
  {
    id: 5,
    title: "Channel",
    source: <AiOutlineShareAlt />,
  },
];

export const orderStatusJson = [
  "pending",
  "Accepted",
  "Ready to Ship",
  "Shipped",
  "Completed",
  "Cancelled",
];
