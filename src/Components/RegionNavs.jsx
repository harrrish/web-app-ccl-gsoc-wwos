import { NavLink } from "react-router-dom";
import { FaGlobeAmericas, FaChevronRight } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { CCLVersion } from "../data.js";

export default function RegionNavs({ region }) {
  return (
    <div className="flex flex-col items-center w-full font-f1 gap-2">
      {/* VERSION BANNER */}
      <div className="w-full bg-[var(--color-bg2)] border border-[var(--color-border)] text-[var(--color-f1)] flex items-center justify-center gap-3 p-2 rounded-lg tracking-wide shadow-lg shadow-black/40">
        <span className="font-f3 text-center text-sm sm:text-base">
          Consolidated Contacts List Version: "
          <span className="text-[var(--color-orange-glow)] font-f4">
            {CCLVersion}
          </span>
          "
        </span>
      </div>

      {/* REGION GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
        <NavLink
          to={"/NA"}
          title="United States | Canada"
          className={`group flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-f3 tracking-wide transition-all duration-300 shadow-md active:scale-[0.98] ${
            region === "NA"
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--color-primary)]/40"
              : "bg-[var(--color-bg3)] text-[var(--color-f2)] border-[var(--color-border)] hover:bg-[var(--color-hover)] hover:text-[var(--color-f1)] hover:border-[var(--color-blue-glow)] hover:shadow-[var(--color-blue-glow)]/20"
          }`}
        >
          <FaGlobeAmericas size={16} />
          <span>NA</span>
          {region === "NA" && (
            <FaChevronRight className="text-white" size={12} />
          )}
        </NavLink>

        <NavLink
          to={"/LATAM"}
          title="Mexico | Brazil"
          className={`group flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-f3 tracking-wide transition-all duration-300 shadow-md active:scale-[0.98] ${
            region === "LATAM"
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--color-primary)]/40"
              : "bg-[var(--color-bg3)] text-[var(--color-f2)] border-[var(--color-border)] hover:bg-[var(--color-hover)] hover:text-[var(--color-f1)] hover:border-[var(--color-blue-glow)] hover:shadow-[var(--color-blue-glow)]/20"
          }`}
        >
          <FaGlobeAmericas size={16} />
          <span>LATAM</span>
          {region === "LATAM" && (
            <FaChevronRight className="text-white" size={12} />
          )}
        </NavLink>

        <NavLink
          to={"/EUROPE"}
          title="UK | Ireland | Germany | Austria | Luxembourg | Spain | France | Belgium | Italy"
          className={`group flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-f3 tracking-wide transition-all duration-300 shadow-md active:scale-[0.98] ${
            region === "EUROPE"
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--color-primary)]/40"
              : "bg-[var(--color-bg3)] text-[var(--color-f2)] border-[var(--color-border)] hover:bg-[var(--color-hover)] hover:text-[var(--color-f1)] hover:border-[var(--color-blue-glow)] hover:shadow-[var(--color-blue-glow)]/20"
          }`}
        >
          <FaGlobeAmericas size={16} />
          <span>EUROPE</span>
          {region === "EUROPE" && (
            <FaChevronRight className="text-white" size={12} />
          )}
        </NavLink>

        <NavLink
          to={"/AMET"}
          title="UAE | SAUDI | EGYPT | TURKEY"
          className={`group flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-f3 tracking-wide transition-all duration-300 shadow-md active:scale-[0.98] ${
            region === "AMET"
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--color-primary)]/40"
              : "bg-[var(--color-bg3)] text-[var(--color-f2)] border-[var(--color-border)] hover:bg-[var(--color-hover)] hover:text-[var(--color-f1)] hover:border-[var(--color-blue-glow)] hover:shadow-[var(--color-blue-glow)]/20"
          }`}
        >
          <FaGlobeAmericas size={16} />
          <span>AMET</span>
          {region === "AMET" && (
            <FaChevronRight className="text-white" size={12} />
          )}
        </NavLink>

        <NavLink
          to={"/APAC"}
          title="AUSTRALIA | JAPAN | SINGAPORE | INDIA"
          className={`group flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-f3 tracking-wide transition-all duration-300 shadow-md active:scale-[0.98] ${
            region === "APAC"
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--color-primary)]/40"
              : "bg-[var(--color-bg3)] text-[var(--color-f2)] border-[var(--color-border)] hover:bg-[var(--color-hover)] hover:text-[var(--color-f1)] hover:border-[var(--color-blue-glow)] hover:shadow-[var(--color-blue-glow)]/20"
          }`}
        >
          <FaGlobeAmericas size={16} />
          <span>APAC</span>
          {region === "APAC" && (
            <FaChevronRight className="text-white" size={12} />
          )}
        </NavLink>

        <NavLink
          to={"/tools"}
          title="ES Tools"
          className={`group flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-f3 tracking-wide transition-all duration-300 shadow-md active:scale-[0.98] ${
            region === "tools"
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--color-primary)]/40"
              : "bg-[var(--color-bg3)] text-[var(--color-f2)] border-[var(--color-border)] hover:bg-[var(--color-hover)] hover:text-[var(--color-f1)] hover:border-[var(--color-blue-glow)] hover:shadow-[var(--color-blue-glow)]/20"
          }`}
        >
          <MdChecklist size={16} />
          <span>ES Tools</span>
        </NavLink>
      </div>
    </div>
  );
}
