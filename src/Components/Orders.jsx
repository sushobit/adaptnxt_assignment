import { MdOutlineCancel } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import { orderStatusJson } from "../Constants/SidebarJson";
import { useState } from "react";
import OrdersHistory from "./OrdersHistory";

const Orders = () => {
  const [activeOrderStatus, setActiveOrderStatus] = useState(0);
  return (
    <>
      {" "}
      <div>
        <div className="d-flex justify-content-between  ">
          <button className="align-items-center border flex p-2 px-3 py-2 text-primary bg-light ">
            {" "}
            Orders{" "}
            <span className="text-black px-2">
              <MdOutlineCancel />
            </span>
          </button>
          <button className="fs-4">
            <IoSettingsOutline />
          </button>
        </div>
        {/* order status tabs container */}
        <ul className="d-flex list-unstyled ">
          {orderStatusJson?.map((item, index) => {
            return (
              <li
                key={index}
                className="mx-2 py-2 mt-5"
                style={{
                  borderBottom:
                    activeOrderStatus === index ? "2px solid #0071c5 " : "",
                }}
              >
                <button
                  style={{ color: activeOrderStatus === index && "#0071c5" }}
                  className="bg-transparent border-0"
                  onClick={() => setActiveOrderStatus(index)}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <OrdersHistory />
      </div>
    </>
  );
};

export default Orders;
