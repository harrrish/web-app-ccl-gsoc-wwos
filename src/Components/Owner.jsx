import { ownerBhaskar, ownerHarish } from "../data";
import { MdFeedback } from "react-icons/md";

export default function Owner() {
  return (
    <div className="flex items-center justify-center gap-3 text-[var(--color-f2)] font-f2 text-lg font-semibold border-t border-[var(--color-border-soft)] pt-6">
      <MdFeedback className="text-[var(--color-green-glow)]" size={20} />
      For feedback or suggestions contact
      <div className="flex gap-1">
        <span className="text-[var(--color-primary)] font-f3 ml-1 hover:text-[var(--color-blue-glow)] transition-colors duration-300 cursor-pointer">
          <a href="https://atoz.amazon.work/phonetool/users/harisss">
            {ownerHarish}
          </a>
        </span>
        or
        <span className="text-[var(--color-primary)] font-f3 ml-1 hover:text-[var(--color-blue-glow)] transition-colors duration-300 cursor-pointer">
          <a href="https://atoz.amazon.work/phonetool/users/bhastrip">
            {ownerBhaskar}
          </a>
        </span>
      </div>{" "}
      !
    </div>
  );
}
