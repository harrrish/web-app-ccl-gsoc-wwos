import { FaHome, FaGlobeAmericas } from "react-icons/fa";
import { MdContacts, MdFeedback, MdSecurity } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import RegionNavs from "../Components/RegionNavs";
import wwosLogo from "../images/wwos-gsoc.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg1)] text-[var(--color-f1)] font-f1 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl bg-[var(--color-bg2)] border border-[var(--color-border)] shadow-2xl shadow-black/40 rounded-md flex flex-col gap-4 p-2 relative">
        <div className="flex flex-col items-center gap-3 mt-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <img
                src={wwosLogo}
                alt=""
                className="rounded-sm shadow-md shadow-white"
              />

              <h2 className="text-xl font-bold font-f2 text-[var(--color-f2)] tracking-wide flex items-center gap-2">
                <MdContacts
                  className="text-[var(--color-blue-glow)]"
                  size={18}
                />
                Consolidated Contacts List
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

        <RegionNavs />

        <div className="flex items-center justify-center gap-3 text-[var(--color-f2)] font-f2 text-lg font-semibold border-t border-[var(--color-border-soft)] pt-6">
          <MdFeedback className="text-[var(--color-green-glow)]" size={20} />
          For feedback or suggestions contact
          <span className="text-[var(--color-primary)] font-f3 ml-1 hover:text-[var(--color-blue-glow)] transition-colors duration-300 cursor-pointer">
            harisss@amazon.com !bhastrip@amazon.com
          </span>
        </div>
      </div>
    </div>
  );
}
