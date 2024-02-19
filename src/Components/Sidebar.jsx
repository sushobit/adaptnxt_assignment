import React, { useState } from "react";
import { sideBarJson } from "../Constants/SidebarJson";
function Sidebar() {
  const [activeTab, setActiveTab] = useState(3);
  const handleOption = (id) => {
    setActiveTab(id);
  };

  return (
    <ul
      style={{ width: "200px ", height: "728px" }}
      className="list-unstyled     bg-light "
    >
      {sideBarJson?.map((item) => {
        return (
          <li
            key={item.id}
            style={{
              backgroundColor: activeTab === item.id ? "#F0F8FF" : "",
              borderRight:
                activeTab === item.id
                  ? "2px solid #0071c5"
                  : "2px solid transparent",
              // Change text color based on condition
            }}
            className=" p-2 text-primary d-flex "
          >
            <button
              onClick={() => handleOption(item.id)}
              style={{ color: activeTab === item.id && "#0071c5" }}
              className="bg-transparent border-0"
            >
              {item.source}
              <span className="mx-3 bg-blue-100  "> {item.title}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Sidebar;
