import RegionNavs from "../Components/RegionNavs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#146EB4] flex items-center justify-center font-f1">
      <div className="bg-white w-full sm:max-w-5xl rounded-lg shadow-lg p-12 flex flex-col items-center relative gap-10">
        {/* //* Note */}
        <h1 className="text-lg font-medium text-gray-600 px-4 py-2 rounded-sm tracking-wide">
          NOTE: Please prefer the application for only{" "}
          <span className="font-bold text-black">OTR</span> incidents !
        </h1>

        <div className="flex flex-col gap-4 items-center  p-4 w-full">
          <h1 className="text-3xl font-extrabold text-[#146EB4] tracking-wide">
            WWOS - GSOC
          </h1>

          <h2 className="text-lg font-semibold text-gray-700">
            Consolidated Contacts List
          </h2>

          <RegionNavs />
        </div>

        <h1 className="font-medium text-gray-600">
          For any feedback or suggestions please out reach to
          <span className="font-bold text-black"> harisss@amazon.com</span> !
        </h1>
      </div>
    </div>
  );
}
