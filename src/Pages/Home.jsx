import { FaHome, FaGlobeAmericas } from "react-icons/fa";
import { MdContacts, MdFeedback, MdSecurity } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import RegionNavs from "../Components/RegionNavs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg1)] text-[var(--color-f1)] font-f1 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl bg-[var(--color-bg2)] border border-[var(--color-border)] shadow-2xl shadow-black/40 rounded-md flex flex-col gap-8 p-10 relative">
        <div className="absolute top-6 left-6 flex items-center gap-3 text-[var(--color-primary)]">
          <div className="bg-[var(--color-bg3)] p-3 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-bg4)] transition-all duration-300">
            <FaHome size={20} />
          </div>
          <div className="flex items-center gap-2 text-sm font-f3 text-[var(--color-f2)]">
            <HiOutlineStatusOnline
              className="text-[var(--color-success)]"
              size={18}
            />
            Operational
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-blue-glow)] p-4 rounded-md shadow-lg shadow-[var(--color-primary)]/20">
              <MdSecurity size={28} className="text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl font-f4 tracking-wide text-[var(--color-f1)] flex items-center gap-3">
                WWOS - GSOC{" "}
                <FaGlobeAmericas
                  className="text-[var(--color-primary)]"
                  size={26}
                />
              </h1>
              <h2 className="text-sm font-f2 text-[var(--color-f2)] tracking-wide flex items-center gap-2">
                <MdContacts
                  className="text-[var(--color-blue-glow)]"
                  size={18}
                />
                Consolidated Contacts Platform
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-md px-6 py-4 flex items-center justify-center text-center font-f3 text-[var(--color-f2)] tracking-wide shadow-md">
          NOTE: Please prefer the application for only{" "}
          <span className="text-[var(--color-warning)] font-f4 ml-1">
            OTR incidents !
          </span>
        </div>

        <div className="w-full flex flex-col items-center justify-center bg-[var(--color-bg2)] border border-[var(--color-border-soft)] rounded-md p-6 shadow-inner shadow-black/30">
          <RegionNavs />
        </div>

        <div className="flex items-center justify-center gap-3 text-[var(--color-f2)] font-f2 text-sm border-t border-[var(--color-border-soft)] pt-6">
          <MdFeedback className="text-[var(--color-green-glow)]" size={20} />
          For feedback or suggestions contact
          <span className="text-[var(--color-primary)] font-f3 ml-1 hover:text-[var(--color-blue-glow)] transition-colors duration-300 cursor-pointer">
            harisss@amazon.com !
          </span>
        </div>
      </div>
    </div>
  );
}
