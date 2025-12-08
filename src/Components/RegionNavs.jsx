import { NavLink } from "react-router-dom";
import { actionItemBody, actionItemTitle } from "../data";

export default function RegionNavs({ region }) {
  async function handleCopyTitle() {
    await navigator.clipboard.writeText(actionItemTitle);
    alert(`Copied "${actionItemTitle}" to clipboard`);
  }
  async function handleCopyBody() {
    await navigator.clipboard.writeText(actionItemBody);
    alert(`Copied "${actionItemBody}" to clipboard`);
  }

  return (
    <div className="flex flex-col items-center gap-2 py-2">
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
        <div className="flex flex-col gap-1 w-full">
          <div className="flex gap-1 flex-col rounded-sm">
            <h1 className="text-center font-extrabold tracking-wider text-white rounded-sm border-2">
              CLOSING STATEMENT
            </h1>
            <div className="rounded-sm flex justify-between gap-2 items-center border-2 text-white">
              <h1 className="font-extrabold w-[20%] rounded-sm text-center py-1">
                DSP DA
              </h1>
              <h1 className="text-center text-md w-[80%] rounded-sm flex flex-col p-1 bg-sky-200 text-black font-extrabold tracking-wide">
                Thank you for reporting this incident.{" "}
                <span>
                  We take these reports seriously and will be escalating to
                  additional teams for review and investigation.
                </span>
              </h1>
            </div>
            <div className="rounded-sm flex justify-between gap-2 items-center border-2 text-white">
              <h1 className="font-extrabold w-[20%] rounded-sm text-center py-1">
                CM/CX/US HUB DA/FLEX DP
              </h1>
              <h1 className="text-center text-md w-[80%] rounded-sm flex flex-col p-1 bg-sky-200 text-black font-extrabold tracking-wide">
                <span>Thank you for reporting this incident.</span>{" "}
                <span>
                  We take these reports seriously and will be escalating to
                  additional teams for review and investigation, the follow up
                  team will give you a call in 12 hours to check on how you are
                  doing and answer any additional questions.
                </span>
              </h1>
            </div>
          </div>

          <div className="flex gap-1 items-center w-full justify-between rounded-sm">
            {/* //* ACTION ITEM TITLE */}
            <div className="bg-black text-white flex items-center w-[30%] justify-between rounded-sm p-2">
              <h1 className="text-center font-bold truncate">
                {actionItemTitle}
              </h1>
              <button
                onClick={handleCopyTitle}
                className="hover:bg-[#146EB4] p-1 tracking-widest font-bold bg-white text-black hover:text-white rounded-sm cursor-pointer text-sm"
              >
                COPY
              </button>
            </div>
            {/* //* ACTION ITEM BODY */}
            <div className="bg-black text-white flex items-center w-[70%] justify-between rounded-sm p-2">
              <h1 className="text-center font-bold truncate">
                {actionItemBody}
              </h1>
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
