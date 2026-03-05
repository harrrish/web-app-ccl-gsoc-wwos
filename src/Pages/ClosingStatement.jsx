import { MdFactCheck, MdClose, MdSupportAgent } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";

export default function ClosingStatement({ setShowClosing }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm min-h-screen flex justify-center items-center w-full z-50 font-f1">
      <div className="flex flex-col gap-5 items-center w-[90%] max-w-3xl bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-md shadow-2xl shadow-black/50 p-6">
        <div className="flex items-center justify-center gap-3 border-b border-[var(--color-border-soft)] pb-3 w-full">
          <MdFactCheck className="text-[var(--color-primary)]" size={22} />
          <h1 className="text-center font-f4 tracking-wider text-[var(--color-f1)] text-lg">
            CLOSING STATEMENT
          </h1>
        </div>

        <div className="rounded-md flex justify-between gap-4 items-stretch text-[var(--color-f1)] w-full bg-[var(--color-bg3)] border border-[var(--color-border)] shadow-md">
          <div className="font-f4 w-[25%] rounded-l-lg text-center py-4 flex flex-col items-center justify-center gap-2 bg-[var(--color-bg4)] border-r border-[var(--color-border)]">
            <FaUserShield className="text-[var(--color-blue-glow)]" size={20} />
            DSP DA
          </div>
          <div className="text-sm w-[75%] rounded-r-lg flex flex-col p-4 text-[var(--color-f1)] font-f3 tracking-wide leading-relaxed">
            Thank you for reporting this incident.
            <span className="text-[var(--color-f2)] mt-1">
              We take these reports seriously and will be escalating to
              additional teams for review and investigation.
            </span>
          </div>
        </div>

        <div className="rounded-md flex justify-between gap-4 items-stretch text-[var(--color-f1)] w-full bg-[var(--color-bg3)] border border-[var(--color-border)] shadow-md">
          <div className="font-f4 w-[25%] rounded-l-lg text-center py-4 flex flex-col items-center justify-center gap-2 bg-[var(--color-bg4)] border-r border-[var(--color-border)]">
            <MdSupportAgent
              className="text-[var(--color-green-glow)]"
              size={20}
            />
            CM/CX/US HUB DA/FLEX DP
          </div>
          <div className="text-sm w-[75%] rounded-r-lg flex flex-col p-4 text-[var(--color-f1)] font-f3 tracking-wide leading-relaxed">
            <span>Thank you for reporting this incident.</span>
            <span className="text-[var(--color-f2)] mt-1">
              We take these reports seriously and will be escalating to
              additional teams for review and investigation, the follow up team
              will give you a call in 12 hours to check on how you are doing and
              answer any additional questions.
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowClosing(false)}
          className="flex items-center justify-center gap-2 bg-[var(--color-bg3)] border border-[var(--color-border)] hover:bg-[var(--color-err)] hover:border-[var(--color-err)] text-[var(--color-f1)] hover:text-white font-f4 tracking-wide px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-[var(--color-err)]/30 mt-2"
        >
          <MdClose size={18} />
          Close
        </button>
      </div>
    </div>
  );
}
