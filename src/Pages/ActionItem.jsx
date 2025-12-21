import { actionItemBody, actionItemTitle } from "../data";

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
    <div className="fixed top-0 left-0 bg-black/90 min-h-screen flex justify-center items-center w-full">
      <div className="flex flex-col gap-1 items-center w-[80%] justify-between rounded-sm">
        {/* //* ACTION ITEM TITLE */}
        <div className="bg-white flex items-center w-[80%] justify-between rounded-sm p-2 w-full">
          <h1 className="text-center font-bold truncate">{actionItemTitle}</h1>
          <button
            onClick={handleCopyTitle}
            className="hover:bg-[#146EB4] p-1 tracking-widest font-bold text-black hover:text-white rounded-sm cursor-pointer text-sm w-[20%] bg-gray-300"
          >
            COPY
          </button>
        </div>
        {/* //* ACTION ITEM BODY */}
        <div className="bg-white flex items-center  justify-between rounded-sm p-2 w-full">
          <h1 className="text-center font-bold truncate w-[80%]">
            {actionItemBody}
          </h1>
          <button
            onClick={handleCopyBody}
            className="hover:bg-[#146EB4] p-1 tracking-widest font-bold text-black hover:text-white rounded-sm cursor-pointer text-sm w-[20%] bg-gray-300"
          >
            COPY
          </button>
        </div>

        <button
          onClick={() => setShowAction(false)}
          className="bg-gray-300 w-1/2 cursor-pointer hover:bg-[#146EB4] hover:text-white font-extrabold tracking-wider p-1 rounded-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
