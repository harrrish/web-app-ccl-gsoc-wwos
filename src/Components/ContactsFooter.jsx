import { handleCopyArchive } from "../data";
import { MdContentCopy, MdEmail, MdContacts, MdWarning } from "react-icons/md";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";

export default function ContactsFooter({ contacts, sev }) {
  const sevBg =
    sev === "1"
      ? "bg-red-900 text-white border-red-700"
      : sev === "2"
      ? "bg-red-600 text-white border-red-500"
      : sev === "3"
      ? "bg-yellow-500 text-black border-yellow-400"
      : sev === "4"
      ? "bg-green-600 text-white border-green-500"
      : "bg-gray-500 text-white border-gray-400";

  async function handleCopy() {
    await navigator.clipboard.writeText(contacts);
    alert(" Copied to clipboard! \n\n Page will be now restored to default !");
    window.location.reload();
  }

  return (
    <footer className="bg-[var(--color-bg2)] border border-[var(--color-border)] p-4 w-full sm:w-full rounded-md flex flex-col gap-4 shadow-xl shadow-black/30 font-f1">
      <div className="grid grid-cols-5 gap-2 w-full text-xs sm:text-sm font-f4 tracking-widest text-center">
        <div className="flex items-center justify-center gap-1 bg-red-900 text-white rounded-md py-2 border border-red-700 shadow-md">
          <FaExclamationTriangle size={14} />
          SEV1
        </div>
        <div className="flex items-center justify-center gap-1 bg-red-600 text-white rounded-md py-2 border border-red-500 shadow-md">
          <MdWarning size={14} />
          SEV2
        </div>
        <div className="flex items-center justify-center gap-1 bg-yellow-500 text-black rounded-md py-2 border border-yellow-400 shadow-md">
          <HiShieldCheck size={14} />
          SEV3
        </div>
        <div className="flex items-center justify-center gap-1 bg-green-600 text-white rounded-md py-2 border border-green-500 shadow-md">
          <FaCheckCircle size={14} />
          SEV4
        </div>
        <div className="flex items-center justify-center gap-1 bg-gray-500 text-white rounded-md py-2 border border-gray-400 shadow-md">
          <MdContacts size={14} />
          SEV5
        </div>
      </div>

      {contacts.length > 0 && (
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <div className="flex items-center gap-2 w-full sm:w-[80%] bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-md px-4 py-3 shadow-md">
              <MdEmail
                className="text-[var(--color-blue-glow)] flex-shrink-0"
                size={18}
              />
              <h1 className="text-sm text-[var(--color-f1)] font-f3 truncate">
                wwos-gsoc-archive@amazon.com
              </h1>
            </div>
            <button
              onClick={handleCopyArchive}
              className="flex items-center justify-center gap-2 w-full sm:w-[20%] px-4 py-3 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-md duration-300 cursor-pointer border border-[var(--color-primary)] hover:border-[var(--color-blue-glow)] font-f3 tracking-wide shadow-md hover:shadow-[var(--color-primary)]/30"
            >
              <MdContentCopy size={16} />
              Copy
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="flex flex-wrap gap-2 w-full sm:w-[80%]">
              {contacts.map((c, i) => (
                <span
                  className={`flex items-center justify-center px-3 py-2 text-xs sm:text-sm text-center font-f3 truncate rounded-md border shadow-sm ${sevBg}`}
                  key={i}
                  title={c}
                >
                  {c}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleCopy(contacts)}
              className="flex items-center justify-center gap-2 w-full sm:w-[20%] px-4 py-3 text-white bg-[var(--color-success)] hover:bg-[var(--color-success-hover)] rounded-md duration-300 cursor-pointer border border-[var(--color-success)] hover:border-[var(--color-green-glow)] font-f3 tracking-wide shadow-md hover:shadow-[var(--color-success)]/30"
            >
              <MdContentCopy size={16} />
              Copy Contacts
            </button>
          </div>

          <div className="text-center text-sm font-f2 text-[var(--color-f2)] border-t border-[var(--color-border-soft)] pt-3 w-full">
            For feedback or suggestions contact
            <span className="font-f3 text-[var(--color-primary)] ml-1 hover:text-[var(--color-blue-glow)] transition-colors duration-300 cursor-pointer">
              harisss@amazon.com
            </span>
          </div>
        </div>
      )}
    </footer>
  );
}
