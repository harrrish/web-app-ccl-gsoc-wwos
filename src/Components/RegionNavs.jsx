import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function RegionNavs({ region }) {
  const [title] = useState("Investigate Driver Incident Claim");
  const [body] = useState(
    "Investigate to substantiate or disprove incident claim. If incident did occur, please provide the GSOC with further incident details that can be included in the update notification.",
  );

  async function handleCopy() {
    await navigator.clipboard.writeText("wwos-gsoc-archive@amazon.com");
    alert(`Copied "wwos-gsoc-archive@amazon.com" to clipboard`);
  }
  async function handleCopyTitle() {
    await navigator.clipboard.writeText("Investigate Driver Incident Claim");
    alert(`Copied "Action Item Title" to clipboard`);
  }
  async function handleCopyBody() {
    await navigator.clipboard.writeText(
      "Investigate to substantiate or disprove incident claim. If incident did occur, please provide the GSOC with further incident details that can be included in the update notification.",
    );
    alert(`Copied "Action Item Body" to clipboard`);
  }

  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <div className="flex justify-between gap-2 items-center w-full">
        <NavLink
          to={"/NA"}
          title="United States | Canada"
          className={`shadow-2xl ${
            region === "NA" ? "bg-[#146EB4] text-white" : "bg-white shadow-2xl"
          } hover:bg-[#146EB4] hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white`}
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
          } hover:bg-[#146EB4] hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white`}
        >
          LATAM
        </NavLink>
        <NavLink
          to={"/Europe"}
          title="UK | Ireland | Germany | Austria | Luxembourg | Spain |
            France | Belgium | Italy"
          className={`shadow-2xl ${
            region === "Europe"
              ? "bg-[#146EB4] text-white"
              : "bg-white shadow-2xl"
          } hover:bg-[#146EB4] hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white`}
        >
          Europe
        </NavLink>
        <NavLink
          to={"/AMET"}
          title="UAE | SAUDI | EGYPT | TURKEY"
          className={`shadow-2xl ${
            region === "AMET"
              ? "bg-[#146EB4] text-white"
              : "bg-white shadow-2xl"
          } hover:bg-[#146EB4] hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white`}
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
          } hover:bg-[#146EB4] hover:text-black font-bold p-1 px-4 rounded-sm w-full text-center border-2 border-white`}
        >
          APAC
        </NavLink>
      </div>
      {region && (
        <div className="flex flex-col gap-1 w-full">
          <div className="flex gap-1">
            {/* //* ARCHIVE EMAIL */}
            <div className="bg-green-500 flex items-center w-full justify-between rounded-sm p-2">
              <h1 className="text-center font-bold">
                wwos-gsoc-archive@amazon.com
              </h1>
              <button
                onClick={handleCopy}
                className="hover:bg-[#146EB4] p-1 tracking-widest font-bold bg-white hover:text-white rounded-sm cursor-pointer text-sm"
              >
                COPY
              </button>
            </div>
          </div>

          <div className="flex gap-1 items-center w-full justify-between rounded-sm">
            {/* //* ACTION ITEM TITLE */}
            <div className="bg-black text-white flex items-center w-[30%] justify-between rounded-sm p-2">
              <h1 className="text-center font-bold px-1">{title}</h1>
              <button
                onClick={handleCopyTitle}
                className="hover:bg-[#146EB4] p-1 tracking-widest font-bold bg-white text-black hover:text-white rounded-sm cursor-pointer text-sm"
              >
                COPY
              </button>
            </div>
            {/* //* ACTION ITEM BODY */}
            <div className="bg-black text-white flex items-center w-[70%] justify-between rounded-sm p-2">
              <h1 className="text-center font-bold px-1 truncate">{body}</h1>
              <button
                onClick={handleCopyBody}
                className="hover:bg-[#146EB4] p-1 tracking-widest font-bold bg-white text-black hover:text-white rounded-sm cursor-pointer text-sm"
              >
                COPY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
