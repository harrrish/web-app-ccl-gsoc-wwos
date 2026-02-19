import { actionItemBody, actionItemTitle } from "../data";
import { MdContentCopy, MdChecklist, MdClose } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

export default function ActionItem({ setShowAction }) {
  async function handleCopyTitle() {
    await navigator.clipboard.writeText(actionItemTitle);
    alert(`Copied "${actionItemTitle}" to clipboard`);
  }
  async function handleCopyBody() {
    await navigator.clipboard.writeText(actionItemBody);
    alert(`Copied "${actionItemBody}" to clipboard`);
  }
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center w-full z-50 font-f1">
      <div className="flex flex-col gap-4 items-center w-[90%] max-w-2xl bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-md shadow-2xl shadow-black/50 p-6">
        <div className="flex items-center gap-3 text-[var(--color-f1)] font-f4 text-lg border-b border-[var(--color-border-soft)] pb-3 w-full justify-center">
          <FaClipboardList className="text-[var(--color-primary)]" size={20} />
          Action Item
        </div>

        <div className="bg-[var(--color-bg3)] border border-[var(--color-border)] flex items-center justify-between rounded-md px-4 py-3 w-full shadow-md">
          <div className="flex items-center gap-3 w-[80%]">
            <MdChecklist
              className="text-[var(--color-blue-glow)] flex-shrink-0"
              size={18}
            />
            <h1 className="text-[var(--color-f1)] font-f3 truncate">
              {actionItemTitle}
            </h1>
          </div>
          <button
            onClick={handleCopyTitle}
            className="flex items-center justify-center gap-2 bg-[var(--color-bg4)] border border-[var(--color-border)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] text-[var(--color-f2)] hover:text-white font-f3 px-3 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-[var(--color-primary)]/30"
          >
            <MdContentCopy size={16} />
            COPY
          </button>
        </div>

        <div className="bg-[var(--color-bg3)] border border-[var(--color-border)] flex items-center justify-between rounded-md px-4 py-3 w-full shadow-md">
          <div className="flex items-center gap-3 w-[80%]">
            <FaClipboardList
              className="text-[var(--color-green-glow)] flex-shrink-0"
              size={18}
            />
            <h1 className="text-[var(--color-f1)] font-f3 truncate">
              {actionItemBody}
            </h1>
          </div>
          <button
            onClick={handleCopyBody}
            className="flex items-center justify-center gap-2 bg-[var(--color-bg4)] border border-[var(--color-border)] hover:bg-[var(--color-success)] hover:border-[var(--color-success)] text-[var(--color-f2)] hover:text-white font-f3 px-3 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-[var(--color-success)]/30"
          >
            <MdContentCopy size={16} />
            COPY
          </button>
        </div>

        <button
          onClick={() => setShowAction(false)}
          className="flex items-center justify-center gap-2 bg-[var(--color-bg3)] border border-[var(--color-border)] hover:bg-[var(--color-err)] hover:border-[var(--color-err)] text-[var(--color-f1)] hover:text-white font-f4 tracking-wide px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-[var(--color-err)]/30 mt-2"
        >
          <MdClose size={18} />
          Close
        </button>
      </div>
    </div>
  );
}
