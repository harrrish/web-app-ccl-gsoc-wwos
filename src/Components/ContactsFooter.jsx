import { handleCopyArchive } from "../data";

export default function ContactsFooter({ contacts }) {
  async function handleCopy() {
    await navigator.clipboard.writeText(contacts);
    alert(" Copied to clipboard! \n\n Page will be now restored to default !");
    window.location.reload();
  }
  return (
    <footer className="bg-white p-2 w-full sm:w-[90%] rounded-sm">
      {contacts.length > 0 && (
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex items-center gap-3 w-full">
            <h1 className="w-[80%] px-4 py-2 text-sm text-gray-900 bg-gray-300 border-sky-400 rounded-sm font-bold truncate text-left">
              wwos-gsoc-archive@amazon.com
            </h1>
            <button
              onClick={handleCopyArchive}
              className="w-[20%] p-1 text-white bg-[#146EB4] hover:text-[#146EB4] rounded-sm duration-300 cursor-pointer border-2 border-[#146EB4] hover:bg-white font-medium tracking-wide"
            >
              Copy
            </button>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-2 w-[80%]">
              {/* //* CONTACTS DISPLAY */}
              <div className="flex flex-wrap gap-2 w-full">
                {contacts.map((c, i) => (
                  <span
                    className="w-[32.5%] px-4 text-sm text-center text-gray-900 bg-gray-300 border-sky-400 rounded-sm font-bold truncate py-1"
                    key={i}
                    title={c}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {/* //* COPY CONTACTS */}
            <button
              onClick={() => handleCopy(contacts)}
              className="w-[20%] text-white bg-[#146EB4] hover:text-[#146EB4] rounded-sm duration-300 cursor-pointer border-2 border-[#146EB4] hover:bg-white font-medium tracking-wide"
            >
              Copy Contacts
            </button>
          </div>
          <h1 className="font-bold text-black">
            For any feedback or suggestions please out reach to
            harisss@amazon.com
          </h1>
        </div>
      )}
    </footer>
  );
}
