import { useState } from "react";
import RegionNavs from "../Components/RegionNavs";
import { useLocation } from "react-router-dom";
import IndiaRegion from "../images/IN_AMZL.png";

export default function APAC() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];

  const [country, setCountry] = useState("AU");
  const [siteType, setSiteType] = useState("AMZL");

  const [siteRegion, setSiteRegion] = useState("NORTH");

  const [severity, setSeverity] = useState("5");
  const [driverInvolved, setDriverInvolved] = useState("DSP");
  const [reportedBy, setReportedBy] = useState("DA");

  const [cxImpact, setCxImpact] = useState("NO");
  const [hazardous, setHazardous] = useState("NO");
  const [discrimination, setDiscrimination] = useState("NO");

  const [contacts, setContacts] = useState([]);

  //* GENERATE CONTACTS
  const generateContacts = () => {
    contacts.length = 0;
    const newCon = [];

    //* COUNTRY SITE-TYPE SEV#
    newCon.push(
      `${country} ${siteType} SEV${severity === "5" ? "4" : severity}`,
    );

    //* PR TRANSPORTATION
    newCon.push(`${country} PR TRANSPORTATION`);

    //* JAPAN AMZL && AMXL
    if (country === "JP" && siteType === "AMXL") {
      newCon.push("jp-amxl-ops@amazon.co.jp");
    } else if (country === "JP") {
      newCon.push("jp-amzl-edsp@amazon.com");
    }

    //* INDIA SITE WITH REGION FOR AMZL
    if (country === "IN" && siteType === "AMZL") {
      newCon.push(
        `${country} ${siteType} ${siteRegion} SEV${
          severity === "5" ? "4" : severity
        }`,
      );
    }

    //* DRIVER INVOLVED
    newCon.push(
      `${country} ${driverInvolved} SEV${severity === "5" ? "4" : severity}`,
    );

    //* REPORTED BY
    if (reportedBy === "DP" && country === "AU")
      newCon.push("sds-gsoc-flex-incident@amazon.com.au");
    else if (reportedBy === "DP" && country === "JP")
      newCon.push("sds-gsoc-flex-incident@amazon.co.jp");
    else if (reportedBy === "DP" && country === "SG")
      newCon.push("sds-gsoc-flex-incident@amazon.sg");
    else if (reportedBy === "DP" && country === "IN")
      newCon.push("sds-gsoc-flex-incident@amazon.in");
    else if (reportedBy === "CXCMKnownDA" && country === "AU")
      newCon.push("sds-gsoc-driver-potentialharm@amazon.com.au");
    else if (reportedBy === "CXCMKnownDA" && country === "JP")
      newCon.push("sds-gsoc-driver-potentialharm@amazon.co.jp");
    else if (reportedBy === "CXCMKnownDA" && country === "SG")
      newCon.push("sds-gsoc-driver-potentialharm@amazon.sg");
    else if (reportedBy === "CXCMKnownDA" && country === "IN")
      newCon.push("sds-gsoc-driver-potentialharm@amazon.in");
    else if (reportedBy === "CXCM" && country === "AU")
      newCon.push("sds-gsoc-cx-incident@amazon.com.au");
    else if (reportedBy === "CXCM" && country === "JP")
      newCon.push("sds-gsoc-cx-incident@amazon.co.jp");
    else if (reportedBy === "CXCM" && country === "SG")
      newCon.push("sds-gsoc-cx-incident@amazon.sg");
    else if (reportedBy === "CXCM" && country === "IN")
      newCon.push("sds-gsoc-cx-incident@amazon.in");
    else if (reportedBy === "HubDA" && country === "AU")
      newCon.push("sds-gsoc-driver-potentialharm@amazon.com.au");
    else if (reportedBy === "HubDA" && country === "JP") {
      newCon.push("jp-hubdelivery-gsoc@amazon.co.jp");
      newCon.push("munekaa@amazon.co.jp");
      newCon.push("symeont@amazon.co.jp");
      newCon.push("kkpra@amazon.co.jp");
      newCon.push("navkumaz@amazon.co.jp");
      newCon.push("miyamoko@amazon.co.jp");
    } else if (reportedBy === "HubDA" && country === "SG")
      newCon.push("sds-gsoc-driver-potentialharm@amazon.sg");
    else if (reportedBy === "HubDA" && country === "IN") {
      newCon.push("sds-gsoc-driver-potentialharm@amazon.in");
      newCon.push("abhishhp");
    }

    //* HAZARDOUS
    if (hazardous === "YES") {
      newCon.push(`APAC HAZMAT SEV${severity === "5" ? "4" : severity}`);
    }

    //* CX FACING IMPACT
    if (cxImpact === "YES") {
      newCon.push(`${country} CX SUPPORT GROUP`);
      newCon.push(`cs-gcc-all@amazon.com`);
    }

    //* DISCRIMINATION
    if (discrimination === "YES") newCon.push("DISCRIMINATION SUPPORT GROUP");

    //* SEV1
    if (severity === "1") newCon.push("APAC SEV1");

    //* SEV2
    if (severity === "2") newCon.push("APAC SEV2");

    //* ===========================> SMILEY CONTACTS
    newCon.push("APAC ERC SUPPORT GROUP");
    newCon.push("NETWORK OPERATIONS CENTER SUPPORT GROUP");
    newCon.push("GSOC MGMT SUPPORT GROUP");
    newCon.push("RISK GLOBAL LAST MILE");
    newCon.push("APAC AMET INTERNAL COMMS SUPPORT GROUP");

    setContacts([...newCon]);
  };

  //* COPY CONTACTS
  async function handleCopy() {
    await navigator.clipboard.writeText(contacts);
    alert(" Copied to clipboard! \n\n Page will be now restored to default !");
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-[#146EB4] to-blue-200 flex items-center justify-center p-8 font-f1">
      {/* //* NAVBAR */}
      <nav className="fixed top-0 bg-[#146EB4] w-3/4 py-4 px-2 rounded-sm">
        <RegionNavs region={region} />
      </nav>

      {/* //* FORM */}
      <div className="bg-white w-full sm:[90%] mt-24 mx-auto py-4 px-8 rounded-sm shadow-xl space-y-2">
        <h1 className="text-lg text-center font-extrabold text-gray-800 flex justify-between">
          APAC <span className="text-lg font-bold">(AU / JP / SG / IN)</span>
        </h1>

        {/* //* SELECT COUNTRY */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Country:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="AU"
                id="AU"
                checked={country === "AU"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="AU"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                AU
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="JP"
                id="JP"
                checked={country === "JP"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="JP"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                JP
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="SG"
                id="SG"
                checked={country === "SG"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="SG"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                SG
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="IN"
                id="IN"
                checked={country === "IN"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="IN"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                IN
              </label>
            </div>
          </div>
        </div>

        {/* //* SELECT SITE TYPE */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium w-1/4 text-center">Site type:</h2>
          <select
            value={siteType}
            onChange={(event) => setSiteType(event.target.value)}
            className="border p-2 rounded-sm font-medium w-1/4 text-center"
          >
            <option className="font-bold uppercase" value="AMZL">
              AMZL
            </option>

            {country === "JP" && (
              <option className="font-bold uppercase" value="AMXL">
                AMXL
              </option>
            )}

            <option
              className="font-bold uppercase"
              value="3RD PARTY LOGISTICS 3PL"
            >
              3RD PARTY LOGISTICS 3PL
            </option>

            <option className="font-bold uppercase" value="SUB SAME DAY SSD">
              SUB SAME DAY SSD
            </option>

            <option
              className="font-bold uppercase"
              value="Rural Super Rural RSR"
            >
              Rural Super Rural RSR
            </option>

            <option className="font-bold uppercase" value="TRADITIONAL FC">
              TRADITIONAL FC
            </option>

            <option
              className="font-bold uppercase"
              value="Traditional Sortable AR"
            >
              Traditional Sortable AR
            </option>

            <option className="font-bold uppercase" value="Sort Center SC">
              Sort Center SC
            </option>
          </select>
        </div>

        {/* //* INDIA SITE REGION */}
        {country === "IN" && siteType === "AMZL" && (
          <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
            <h1 className="text-lg font-medium w-1/4 text-center">
              Site Region:
            </h1>
            <div className="w-1/4 flex justify-center gap-8">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="siteRegion"
                  value="NORTH"
                  id="NORTH"
                  checked={siteRegion === "NORTH"}
                  onChange={(e) => setSiteRegion(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="NORTH"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  NORTH
                </label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="siteRegion"
                  value="WEST"
                  id="WEST"
                  checked={siteRegion === "WEST"}
                  onChange={(e) => setSiteRegion(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="WEST"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  WEST
                </label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="siteRegion"
                  value="SOUTH"
                  id="SOUTH"
                  checked={siteRegion === "SOUTH"}
                  onChange={(e) => setSiteRegion(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="SOUTH"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  SOUTH
                </label>
              </div>
            </div>
          </div>
        )}

        {/* //* SITE REGION */}
        {country === "IN" && siteType === "AMZL" && (
          <img
            src={IndiaRegion}
            className="w-3/4 mx-auto rounded-sm shadow-2xl"
            alt="India Site Region"
          />
        )}

        {/* //* SELECT SEV */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Severity:</h1>
          <div className="w-1/4 flex justify-between gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="1"
                id="1"
                checked={severity === "1"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="1"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                1
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="2"
                id="2"
                checked={severity === "2"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="2"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                2
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="3"
                id="3"
                checked={severity === "3"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="3"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                3
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="4"
                id="4"
                checked={severity === "4"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="4"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                4
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="5"
                id="5"
                checked={severity === "5"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="5"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                5
              </label>
            </div>
          </div>
        </div>

        {/* //* DRIVER INVOLVED */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-center">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/2 text-center">
            Driver involved:
          </h2>
          <div className="w-1/2 flex justify-center gap-6">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="driverInvolved"
                value="DSP"
                id="DSP"
                checked={driverInvolved === "DSP"}
                onChange={(e) => setDriverInvolved(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="DSP"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                DSP
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="driverInvolved"
                value="FLEX"
                id="FLEX"
                checked={driverInvolved === "FLEX"}
                onChange={(e) => setDriverInvolved(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="FLEX"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                FLEX
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="driverInvolved"
                value="HUB DA"
                id="HUB DA"
                checked={driverInvolved === "HUB DA"}
                onChange={(e) => setDriverInvolved(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="HUB DA"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                HUB DA
              </label>
            </div>
          </div>
        </div>

        {/* //* REPORTED BY */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/4 text-center">
            Reported By:
          </h2>
          <select
            value={reportedBy}
            onChange={(event) => setReportedBy(event.target.value)}
            className="border p-2 rounded-sm font-medium w-1/4 text-center"
          >
            <option className="font-medium" value="DA">
              DA (CX/CM is Unknown)
            </option>
            <option className="font-medium" value="DP">
              Flex DP
            </option>
            <option className="font-medium" value="CXCMKnownDA">
              DA (CX/CM is Known)
            </option>
            <option className="font-medium" value="CXCM">
              CX/CM
            </option>
            <option className="font-medium" value="HubDA">
              Hub DA
            </option>
          </select>
        </div>

        {/* //* CX FACING IMPACT */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/4 text-center">
            Customer Facing Impact:
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="cxImpact"
                value="YES"
                id="YES_cxImpact"
                checked={cxImpact === "YES"}
                onChange={(e) => setCxImpact(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_cxImpact"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="cxImpact"
                value="NO"
                id="NO_cxImpact"
                checked={cxImpact === "NO"}
                onChange={(e) => setCxImpact(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_cxImpact"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

        {/* //* Hazardous Material */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/4 text-center">
            Hazardous Material:
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="hazardous"
                value="YES"
                id="YES_hazardous"
                checked={hazardous === "YES"}
                onChange={(e) => setHazardous(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_hazardous"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="hazardous"
                value="NO"
                id="NO_hazardous"
                checked={hazardous === "NO"}
                onChange={(e) => setHazardous(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_hazardous"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

        {/* //* DISCRIMINATION */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/4 text-center">
            Discrimination (hate-bias):
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="discrimination"
                value="YES"
                id="YES_discrimination"
                checked={discrimination === "YES"}
                onChange={(e) => setDiscrimination(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_discrimination"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="discrimination"
                value="NO"
                id="NO_discrimination"
                checked={discrimination === "NO"}
                onChange={(e) => setDiscrimination(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_discrimination"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

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
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              {/* //* CONTACTS DISPLAY */}
              <div className="flex flex-wrap gap-2">
                {contacts.map((c, i) => (
                  <span
                    className="w-fit px-4 text-sm text-center border-2 text-gray-900 bg-gray-200 border-sky-400 rounded-full font-bold"
                    key={i}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {/* //* COPY CONTACTS */}
            <button
              onClick={handleCopy}
              className="w-full p-1 py-2 text-white bg-[#146EB4] hover:text-[#146EB4] rounded-sm duration-300 cursor-pointer border-2 hover:bg-white font-medium tracking-wide"
            >
              Copy Contacts
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
