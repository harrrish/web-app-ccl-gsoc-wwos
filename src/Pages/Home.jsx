import RegionNavs from "../Components/RegionNavs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#146EB4] flex items-center justify-center font-f1">
      <div className="bg-white w-full sm:max-w-5xl rounded-lg shadow-lg p-12 flex flex-col items-center relative gap-10">
        {/* //* Note */}
        <h1 className="text-lg font-bold bg-sky-400 text-black px-4 py-2 rounded-sm tracking-wide">
          NOTE: THIS IS USED ONLY FOR <span>OTR</span> INCIDENTS & DOES NOT
          SUPPORT <span>UTR</span> INCIDENTS FOR NOW !
        </h1>

        <div className="flex flex-col gap-4 items-center bg-gray-200 p-4 rounded-sm shadow-md w-full">
          <h1 className="text-3xl font-extrabold text-[#146EB4] tracking-wide">
            WWOS - GSOC
          </h1>

          <h2 className="text-lg font-semibold text-gray-700">
            Consolidated Contacts List
          </h2>

          <RegionNavs />
        </div>

        <h1 className="font-bold text-black">
          For any feedback or suggestions please out reach to harisss@amazon.com
        </h1>
      </div>
    </div>
  );
}
