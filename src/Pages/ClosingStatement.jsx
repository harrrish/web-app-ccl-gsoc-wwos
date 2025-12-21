import React from "react";

export default function ClosingStatement({ setShowClosing }) {
  return (
    <div className="fixed top-0 left-0 bg-black/90 min-h-screen flex justify-center items-center w-full">
      <div className="flex flex-col gap-1 items-center w-[80%] justify-between rounded-sm">
        <div className="flex gap-1 flex-col rounded-sm gap-2 items-center">
          <h1 className="text-center font-extrabold tracking-wider text-white rounded-sm">
            CLOSING STATEMENT
          </h1>
          <div className="rounded-sm flex justify-between gap-2 items-center text-white w-full">
            <h1 className="font-extrabold w-[20%] rounded-sm text-center py-1">
              DSP DA
            </h1>
            <h1 className="text-center text-md w-[80%] rounded-sm flex flex-col p-1 bg-sky-200 text-black font-extrabold tracking-wide">
              Thank you for reporting this incident.
              <span>
                We take these reports seriously and will be escalating to
                additional teams for review and investigation.
              </span>
            </h1>
          </div>
          <div className="rounded-sm flex justify-between gap-2 items-center text-white w-full">
            <h1 className="font-extrabold w-[20%] rounded-sm text-center py-1">
              CM/CX/US HUB DA/FLEX DP
            </h1>
            <h1 className="text-center text-md w-[80%] rounded-sm flex flex-col p-1 bg-sky-200 text-black font-extrabold tracking-wide">
              <span>Thank you for reporting this incident.</span>
              <span>
                We take these reports seriously and will be escalating to
                additional teams for review and investigation, the follow up
                team will give you a call in 12 hours to check on how you are
                doing and answer any additional questions.
              </span>
            </h1>
          </div>
          <button
            onClick={() => setShowClosing(false)}
            className="bg-gray-300 w-1/2 cursor-pointer hover:bg-[#146EB4] hover:text-white font-extrabold tracking-wider p-1 rounded-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
