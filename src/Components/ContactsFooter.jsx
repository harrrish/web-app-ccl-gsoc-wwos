import { archiveEmail, handleCopy, handleCopyArchive } from "../data";

export default function ContactsFooter({ contacts, generateContacts }) {
  return (
    <footer>
      <div className="flex gap-2">
        {/* //* GENERATE CONTACTS BUTTON */}
        <button
          onClick={generateContacts}
          className="p-2 text-white bg-[#146EB4] hover:text-[#146EB4] border-[#146EB4] rounded-sm duration-300 cursor-pointer border-2 hover:bg-white font-medium tracking-wide w-full"
        >
          Generate Contacts
        </button>
      </div>

      {contacts.length > 0 && (
        <div className="flex flex-col gap-1">
          <div className="bg-sky-400 flex w-full justify-between rounded-sm p-2 gap-2">
            <h1 className="text-left px-2 font-bold w-[80%] bg-white text-black rounded-sm">
              {archiveEmail}
            </h1>
            <button
              onClick={handleCopyArchive}
              className="hover:bg-[#146EB4] p-1 tracking-widest font-bold bg-white hover:text-white rounded-sm cursor-pointer text-sm w-[20%]"
            >
              COPY
            </button>
          </div>
          <div className="flex bg-sky-400 p-2 rounded-sm">
            {/* //* CONTACTS DISPLAY */}
            <div className="flex flex-wrap gap-1 w-[80%]">
              {contacts.map((c, i) => (
                <span
                  className="w-[32.75%] px-2 py-1 text-sm text-center bg-white text-black rounded-sm font-bold truncate"
                  key={i}
                  title={c}
                >
                  {c}
                </span>
              ))}
            </div>
            {/* //* COPY CONTACTS */}
            <button
              onClick={() => handleCopy(contacts)}
              className="w-[20%] text-black hover:bg-[#146eb4] bg-white hover:text-white rounded-sm duration-300 cursor-pointer font-bold  tracking-wide"
            >
              Copy Contacts
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
