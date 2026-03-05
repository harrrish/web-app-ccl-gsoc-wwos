import { useState } from "react";
import ActionItem from "../Pages/ActionItem.jsx";
import ClosingStatement from "../Pages/ClosingStatement.jsx";
import { FaChevronRight, FaPhone } from "react-icons/fa";
import { MdChecklist, MdFactCheck } from "react-icons/md";
import { useLocation } from "react-router-dom";
import RegionNavs from "../Components/RegionNavs.jsx";
import OneDial from "../Components/OneDial.jsx";

export default function ESTools() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];
  const [showAction, setShowAction] = useState(false);
  const [showClosing, setShowClosing] = useState(false);
  const [showOneDial, setShowOneDial] = useState(false);

  return (
    <div className="min-h-screen bg-black to-blue-200 flex font-f1 flex-col items-center gap-2 p-8">
      <RegionNavs region={region} />

      {showAction && <ActionItem setShowAction={setShowAction} />}
      {showClosing && <ClosingStatement setShowClosing={setShowClosing} />}
      {showOneDial && <OneDial setShowOneDial={setShowOneDial} />}

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Action Item */}
        <button
          onClick={() => setShowAction(true)}
          className="group relative flex items-center justify-between bg-[var(--color-bg3)] border border-[var(--color-border)] hover:border-[var(--color-primary)] rounded-lg px-5 py-4 transition-all duration-300 shadow-lg hover:shadow-[var(--color-primary)]/30 hover:-translate-y-[2px]"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[var(--color-primary)]/20 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
              <MdChecklist size={20} />
            </div>

            <div className="flex flex-col items-start text-left">
              <span className="text-[var(--color-f2)] text-sm font-f2">
                Open modal
              </span>
              <span className="text-[var(--color-f1)] font-f4 tracking-wide">
                Action Item
              </span>
            </div>
          </div>

          <FaChevronRight className="text-[var(--color-f2)] group-hover:text-[var(--color-primary)] transition-all duration-300" />
        </button>

        {/* Closing Statement */}
        <button
          onClick={() => setShowClosing(true)}
          className="group relative flex items-center justify-between bg-[var(--color-bg3)] border border-[var(--color-border)] hover:border-[var(--color-success)] rounded-lg px-5 py-4 transition-all duration-300 shadow-lg hover:shadow-[var(--color-success)]/30 hover:-translate-y-[2px]"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[var(--color-success)]/20 text-[var(--color-success)] group-hover:bg-[var(--color-success)] group-hover:text-white transition-all duration-300">
              <MdFactCheck size={20} />
            </div>

            <div className="flex flex-col items-start text-left">
              <span className="text-[var(--color-f2)] text-sm font-f2">
                Open modal
              </span>
              <span className="text-[var(--color-f1)] font-f4 tracking-wide">
                Closing Statement
              </span>
            </div>
          </div>

          <FaChevronRight className="text-[var(--color-f2)] group-hover:text-[var(--color-success)] transition-all duration-300" />
        </button>

        {/* One Dial */}
        <button
          onClick={() => setShowOneDial(true)}
          className="group relative flex items-center justify-between bg-[var(--color-bg3)] border border-[var(--color-border)] hover:border-[var(--color-blue-glow)] rounded-lg px-5 py-4 transition-all duration-300 shadow-lg hover:shadow-[var(--color-blue-glow)]/30 hover:-translate-y-[2px]"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[var(--color-blue-glow)]/20 text-[var(--color-blue-glow)] group-hover:bg-[var(--color-blue-glow)] group-hover:text-black transition-all duration-300">
              <FaPhone size={18} />
            </div>

            <div className="flex flex-col items-start text-left">
              <span className="text-[var(--color-f2)] text-sm font-f2">
                Open modal
              </span>
              <span className="text-[var(--color-f1)] font-f4 tracking-wide">
                One Dial Directory
              </span>
            </div>
          </div>

          <FaChevronRight className="text-[var(--color-f2)] group-hover:text-[var(--color-blue-glow)] transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
