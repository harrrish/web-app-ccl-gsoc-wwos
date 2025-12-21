import { NavLink } from "react-router-dom";
import { useState } from "react";
import ActionItem from "../Pages/ActionItem.jsx";
import ClosingStatement from "../Pages/ClosingStatement.jsx";

export default function RegionNavs({ region }) {
  const [showAction, setShowAction] = useState(false);
  const [showClosing, setShowClosing] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2 py-2 w-full">
      {showAction && <ActionItem setShowAction={setShowAction} />}
      {showClosing && <ClosingStatement setShowClosing={setShowClosing} />}

      <h1 className="text-lg w-full rounded-sm bg-green-600 text-white text-center font-bold flex justify-center gap-2 p-2 tracking-wider">
        Consolidated Contacts List Version: 11.12.2025
      </h1>

      <div className="flex justify-between gap-2 items-center w-full">
        <NavLink
          to={"/NA"}
          title="United States | Canada"
          className={`shadow-2xl ${
            region === "NA" ? "bg-[#146EB4] text-white" : "bg-white shadow-2xl"
          } hover:bg-sky-400 hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white tracking-widest`}
        >
          NA
        </NavLink>
        <NavLink
          to={"/LATAM"}
          title="Mexico | Brazil"
          className={`shadow-2xl ${
            region === "LATAM"
              ? "bg-[#146EB4] text-white"
              : "bg-white shadow-2xl"
          } hover:bg-sky-400 hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white tracking-widest`}
        >
          LATAM
        </NavLink>
        <NavLink
          to={"/EUROPE"}
          title="UK | Ireland | Germany | Austria | Luxembourg | Spain |
            France | Belgium | Italy"
          className={`shadow-2xl ${
            region === "EUROPE"
              ? "bg-[#146EB4] text-white"
              : "bg-white shadow-2xl"
          } hover:bg-sky-400 hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white tracking-widest`}
        >
          EUROPE
        </NavLink>
        <NavLink
          to={"/AMET"}
          title="UAE | SAUDI | EGYPT | TURKEY"
          className={`shadow-2xl ${
            region === "AMET"
              ? "bg-[#146EB4] text-white"
              : "bg-white shadow-2xl"
          } hover:bg-sky-400 hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white tracking-widest`}
        >
          AMET
        </NavLink>
        <NavLink
          to={"/APAC"}
          title="AUSTRALIA | JAPAN | SINGAPORE | INDIA"
          className={`shadow-2xl ${
            region === "APAC"
              ? "bg-[#146EB4] text-white"
              : "bg-white shadow-2xl"
          } hover:bg-sky-400 hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white tracking-widest`}
        >
          APAC
        </NavLink>
      </div>
      {region && (
        <div className="flex gap-1 w-full">
          <button
            onClick={() => setShowAction(true)}
            className="w-1/2 bg-black p-2 rounded-sm font-medium hover:bg-sky-400 hover:text-white text-white tracking-wide cursor-pointer hover:underline"
          >
            View <span className="uppercase font-extrabold">Action Item</span>
          </button>
          <button
            onClick={() => setShowClosing(true)}
            className="w-1/2 bg-black p-2 rounded-sm font-medium hover:bg-sky-400 hover:text-white text-white tracking-wide cursor-pointer hover:underline"
          >
            View
            <span className="uppercase font-extrabold"> Closing Statement</span>
          </button>
        </div>
      )}
    </div>
  );
}
