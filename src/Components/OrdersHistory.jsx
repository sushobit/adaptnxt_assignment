import React from "react";
import { LiaFileImportSolid } from "react-icons/lia";
import { LuSendHorizonal } from "react-icons/lu";
import { MdOutlinePrint } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { RiExpandUpDownFill } from "react-icons/ri";
import { MdFilterListAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";

import { SingleOrderJson } from "../Constants/SingleOrderJson";

const OrdersHistory = () => {
  return (
    <div className="bg-light py-3 px-2     ">
      <div className="d-flex justify-content-between">
        <div>
          <button
            style={{ border: "1.5px solid ", marginRight: "15px" }}
            className=" btn-outline-secondary px-4 py-1 bg-transparent"
          >
            <span>
              <LiaFileImportSolid /> Import
            </span>
          </button>
          <button
            disabled
            style={{ border: "1.5px solid", marginRight: "15px" }}
            className="mr-3 border-secondary px-4 py-1 bg-transparent"
          >
            <span>
              <LuSendHorizonal /> Accept
            </span>
          </button>
          <button
            disabled
            style={{ border: "1.5px solid", marginRight: "15px" }}
            className="border-secondary px-4 py-1 bg-transparent"
          >
            <span>
              <MdOutlinePrint /> Print
            </span>
          </button>
        </div>
        <button className="btn btn-primary">
          <span>
            <IoMdRefresh />
          </span>
          <span className="px-1">Refresh</span>
        </button>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th className="-primary"></th>
            <th>
              {" "}
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkbox1"
              />
            </th>
            <th>Channel</th>
            <th>
              <span>
                <RiExpandUpDownFill />
              </span>{" "}
              <span>
                <MdFilterListAlt />
              </span>{" "}
              Order
            </th>
            <th>
              <span>
                <RiExpandUpDownFill />
              </span>{" "}
              <span>
                <CiSearch />
              </span>{" "}
              Order Date
            </th>
            <th>
              <span>
                <RiExpandUpDownFill />
              </span>{" "}
              <span>
                <CiSearch />
              </span>{" "}
              City
            </th>
            <th>
              {" "}
              <span>
                <RiExpandUpDownFill />
              </span>{" "}
              Customer Name
            </th>
            <th>
              {" "}
              <span>
                <CiSearch />
              </span>{" "}
              Order Value
            </th>
            <th>
              {" "}
              Status{" "}
              <span>
                <RiExpandUpDownFill />
              </span>{" "}
            </th>
            <th> Operation</th>
          </tr>
        </thead>
        <tbody className="py-3 ">
          {SingleOrderJson?.map((item) => {
            return (
              <tr key={item.id} className="">
                <td style={{ width: "150px" }}>
                  <LuPlus />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox1"
                  />
                </td>
                <td className="">
                  <img
                    style={{ width: "45px" }}
                    src="https://iili.io/JE4huGS.png"
                  />
                </td>
                <td className="text-primary">{item.orderNo}</td>
                <td>{item.orderDate}</td>
                <td>{item.city}</td>
                <td>{item.customerName}</td>
                <td>{item.orderValue}</td>
                <td>
                  <button className="btn btn-outline-success   btn-sm">
                    {" "}
                    {item.status}
                  </button>
                </td>

                <td>
                  <button className="d-flex  btn btn-outline-secondary btn-sm ">
                    {item.operation}{" "}
                    <span className="">
                      <FaAngleDown />
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button
          style={{ marginLeft: "12px" }}
          className="btn btn-outline-secondary px-3 "
        >
          {"<"}
        </button>
        <button
          style={{ marginLeft: "12px" }}
          className="btn btn-outline-primary text-primary  px-3 "
        >
          1
        </button>
        <button
          style={{ marginLeft: "12px" }}
          className="btn btn-outline-secondary   px-3 "
        >
          {">"}
        </button>
        <button
          style={{ marginLeft: "12px" }}
          className="btn btn-outline-secondary"
        >
          20/page {""}
        </button>
      </div>
    </div>
  );
};

export default OrdersHistory;
