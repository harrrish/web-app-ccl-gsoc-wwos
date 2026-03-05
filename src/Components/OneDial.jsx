import { useState } from "react";
import { FaPhone, FaUser, FaTimes, FaArrowLeft } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function OneDial({ setShowOneDial }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const flags = {
    India: "🇮🇳",
    "United States": "🇺🇸",
    Canada: "🇨🇦",
    "United Kingdom": "🇬🇧",
    UAE: "🇦🇪",
    Australia: "🇦🇺",
    Singapore: "🇸🇬",
    Japan: "🇯🇵",
    Germany: "🇩🇪",
    Italy: "🇮🇹",
    Spain: "🇪🇸",
    "Saudi Arabia": "🇸🇦",
  };

  const contactDirectory = {
    India: {
      English: [
        { role: "Recipient", ext: "400", phone: "+91 226-891-0017" },
        { role: "Driver", ext: "410", phone: "+91 226-891-0017" },
        { role: "CS", ext: "490", phone: "+91 226-891-0017" },
      ],
      Hindi: [
        { role: "Recipient", ext: "401", phone: "+91 226-891-0017" },
        { role: "Driver", ext: "411", phone: "+91 226-891-0017" },
        { role: "CS", ext: "491", phone: "+91 226-891-0017" },
      ],
      Tamil: [
        { role: "Recipient", ext: "402", phone: "+91 226-891-0017" },
        { role: "Driver", ext: "414", phone: "+91 226-891-0017" },
        { role: "CS", ext: "492", phone: "+91 226-891-0017" },
      ],
      Telugu: [
        { role: "Recipient", ext: "403", phone: "+91 226-891-0017" },
        { role: "Driver", ext: "415", phone: "+91 226-891-0017" },
        { role: "CS", ext: "494", phone: "+91 226-891-0017" },
      ],
      Kannada: [
        { role: "Recipient", ext: "404", phone: "+91 226-891-0017" },
        { role: "Driver", ext: "412", phone: "+91 226-891-0017" },
        { role: "CS", ext: "493", phone: "+91 226-891-0017" },
      ],
      Malayalam: [{ role: "Driver", ext: "413", phone: "+91 226-891-0017" }],
    },

    "United States": {
      English: [
        { role: "Recipient", ext: "100", phone: "+1 347-503-0661" },
        { role: "Driver", ext: "101", phone: "+1 347-503-0661" },
        { role: "CASE", ext: "108", phone: "+1 347-503-0661" },
        { role: "LMIR", ext: "109", phone: "+1 347-503-0661" },
        { role: "CS", ext: "190", phone: "+1 347-503-0661" },
      ],
      Spanish: [
        { role: "Recipient", ext: "102", phone: "+1 347-503-0661" },
        { role: "Driver", ext: "103", phone: "+1 347-503-0661" },
        { role: "CS", ext: "191", phone: "+1 347-503-0661" },
        { role: "CASE", ext: "197", phone: "+1 347-503-0661" },
      ],
    },

    Canada: {
      English: [
        { role: "Recipient", ext: "110", phone: "+1 347-503-0661" },
        { role: "Driver", ext: "111", phone: "+1 347-503-0661" },
        { role: "CASE", ext: "114", phone: "+1 347-503-0661" },
        { role: "CS", ext: "195", phone: "+1 347-503-0661" },
      ],
      French: [
        { role: "Recipient", ext: "112", phone: "+1 347-503-0661" },
        { role: "Driver", ext: "113", phone: "+1 347-503-0661" },
        { role: "CASE", ext: "115", phone: "+1 347-503-0661" },
        { role: "CS", ext: "196", phone: "+1 347-503-0661" },
      ],
    },

    "United Kingdom": {
      English: [
        { role: "Recipient", ext: "200", phone: "+44 20-3830-2628" },
        { role: "Driver", ext: "201", phone: "+44 20-3830-2628" },
        { role: "CASE", ext: "208", phone: "+44 20-3830-2628" },
        { role: "CS", ext: "295", phone: "+44 20-3830-2628" },
      ],
      Romanian: [{ role: "Driver", ext: "203", phone: "+44 20-3830-2628" }],
    },

    UAE: {
      Arabic: [
        { role: "Recipient", ext: "500", phone: "+44 20-3830-2628" },
        { role: "Driver", ext: "501", phone: "+44 20-3830-2628" },
        { role: "CS", ext: "590", phone: "+44 20-3830-2628" },
        { role: "CASE", ext: "506", phone: "+44 20-3830-2629" },
      ],
      English: [
        { role: "Recipient", ext: "502", phone: "+44 20-3830-2628" },
        { role: "Driver", ext: "503", phone: "+44 20-3830-2628" },
        { role: "CASE", ext: "506", phone: "+44 20-3830-2628" },
      ],
      Hindi: [{ role: "Driver", ext: "505", phone: "+44 20-3830-2628" }],
    },

    Australia: {
      English: [
        { role: "Recipient", ext: "320", phone: "+61 27-908-7112" },
        { role: "Driver", ext: "321", phone: "+61 27-908-7112" },
        { role: "CS", ext: "395", phone: "+61 27-908-7112" },
      ],
    },

    Singapore: {
      English: [
        { role: "Recipient", ext: "310", phone: "+61 27-908-7112" },
        { role: "Driver", ext: "311", phone: "+61 27-908-7112" },
        { role: "CS", ext: "392", phone: "+61 27-908-7112" },
      ],
    },

    Japan: {
      Japanese: [
        { role: "Recipient", ext: "300", phone: "+61 27-908-7112" },
        { role: "Driver", ext: "301", phone: "+61 27-908-7112" },
        { role: "CASE", ext: "303", phone: "+61 27-908-7112" },
        { role: "CS", ext: "390", phone: "+61 27-908-7112" },
      ],
      English: [
        { role: "Recipient", ext: "302", phone: "+61 27-908-7112" },
        { role: "CS", ext: "391", phone: "+61 27-908-7112" },
      ],
    },

    Germany: {
      German: [
        { role: "Recipient", ext: "210", phone: "+44 20-3830-2628" },
        { role: "Driver", ext: "211", phone: "+44 20-3830-2628" },
        { role: "CS", ext: "296", phone: "+44 20-3830-2628" },
      ],
      English: [
        { role: "Recipient", ext: "212", phone: "+44 20-3830-2628" },
        { role: "CS", ext: "299", phone: "+44 20-3830-2628" },
      ],
    },

    Italy: {
      Italian: [
        { role: "Recipient", ext: "220", phone: "+44 20-3830-2628" },
        { role: "Driver", ext: "221", phone: "+44 20-3830-2628" },
        { role: "CS", ext: "294", phone: "+44 20-3830-2628" },
      ],
    },

    Spain: {
      "Spanish (Castilian)": [
        { role: "Recipient", ext: "230", phone: "+44 20-3830-2628" },
        { role: "Driver", ext: "231", phone: "+44 20-3830-2628" },
        { role: "CS", ext: "293", phone: "+44 20-3830-2628" },
      ],
    },

    "Saudi Arabia": {
      Arabic: [
        { role: "Recipient", ext: "510", phone: "+44 20-3830-2628" },
        { role: "Driver", ext: "511", phone: "+44 20-3830-2628" },
        { role: "CS", ext: "592", phone: "+44 20-3830-2628" },
        { role: "CASE", ext: "507", phone: "+44 20-3830-2629" },
      ],
      English: [
        { role: "Recipient", ext: "512", phone: "+44 20-3830-2628" },
        { role: "Driver", ext: "513", phone: "+44 20-3830-2628" },
        { role: "CASE", ext: "507", phone: "+44 20-3830-2629" },
      ],
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Country list modal */}
      {!selectedCountry && (
        <div className="w-full max-w-4xl bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-lg shadow-2xl p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center text-[var(--color-f1)] font-f4 text-lg">
            One Dial Directory
            <button onClick={() => setShowOneDial(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {Object.keys(contactDirectory).map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className="flex items-center gap-2 bg-[var(--color-bg2)] border border-[var(--color-border)] hover:bg-[var(--color-hover)] text-[var(--color-f1)] px-3 py-3 rounded-md font-f3 transition-all duration-200"
              >
                <span className="text-lg">{flags[country]}</span>
                {country}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Country detail modal */}
      {selectedCountry && (
        <div className="w-full max-w-5xl h-[90vh] bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-lg shadow-2xl flex flex-col text-white">
          <div className="flex justify-between items-center px-4 py-3 border-b border-[var(--color-border)] text-[var(--color-f1)] font-f4 text-lg">
            <button
              onClick={() => setSelectedCountry(null)}
              className="flex items-center gap-2"
            >
              <FaArrowLeft />
              {flags[selectedCountry]} {selectedCountry}
            </button>

            <button onClick={() => setShowOneDial(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-3">
            {Object.entries(contactDirectory[selectedCountry]).map(
              ([language, rows]) => (
                <div
                  key={language}
                  className="flex flex-col sm:flex-row items-start gap-3 w-full bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-md p-3"
                >
                  {/* Language label */}
                  <div className="flex items-center gap-2 text-[var(--color-blue-glow)] font-f4 min-w-[140px]">
                    <MdLanguage />
                    {language}
                  </div>

                  {/* Table */}
                  <div className="flex-1 w-full overflow-x-auto">
                    <table className="w-full border border-[var(--color-border)] rounded-md overflow-hidden">
                      <thead className="bg-[var(--color-bg4)] text-[var(--color-f1)]">
                        <tr>
                          <th className="px-3 py-2 text-left">Role</th>
                          <th className="px-3 py-2 text-left">Extension</th>
                          <th className="px-3 py-2 text-left">Phone</th>
                        </tr>
                      </thead>

                      <tbody>
                        {rows.map((row, i) => (
                          <tr
                            key={i}
                            className="border-t border-[var(--color-border)] hover:bg-[var(--color-hover)] transition-all duration-150"
                          >
                            <td className="px-3 py-2 flex items-center gap-2 text-[var(--color-f1)]">
                              <FaUser className="text-[var(--color-blue-glow)]" />
                              {row.role}
                            </td>

                            <td className="px-3 py-2 text-sky-500 font-f3">
                              {row.ext}
                            </td>

                            <td className="px-3 py-2 flex items-center gap-2 text-[var(--color-f1)]">
                              <FaPhone className="text-green-400" />
                              {row.phone}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
