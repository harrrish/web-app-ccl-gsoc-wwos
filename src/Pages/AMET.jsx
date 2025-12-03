import { useState } from "react";
import RegionNavs from "../Components/RegionNavs";
import { useLocation } from "react-router-dom";

export default function AMET() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];

  const [country, setCountry] = useState("AE");
  const [siteType, setSiteType] = useState("AMZL");

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

    //* EUROPE SITE-TYPE SEV#
    newCon.push(`EUROPE ${siteType} SEV${severity === "5" ? "4" : severity}`);

    //* COUNTRY SITE-TYPE SEV#
    newCon.push(
      `${country} ${siteType} SEV${severity === "5" ? "4" : severity}`,
    );

    //* PR TRANSPORTATION
    newCon.push(`${country} PR TRANSPORTATION`);

    //* MIDDLE EAST SEV#
    newCon.push(`MIDDLE EAST SEV${severity === "5" ? "4" : severity}`);

    //* DRIVER INVOLVED
    newCon.push(
      `${country} ${driverInvolved} SEV${severity === "5" ? "4" : severity}`,
    );

    //* REPORTED BY

    if (
      reportedBy === "CXCMKnownDA" ||
      (reportedBy === "HubDA" && country === "AE")
    )
      newCon.push("sds-gsoc-driver-potentialharm@amazon.ae");
    else if (
      reportedBy === "CXCMKnownDA" ||
      (reportedBy === "HubDA" && country === "SA")
    )
      newCon.push("sds-gsoc-driver-potentialharm@amazon.sa");
    else if (
      reportedBy === "CXCMKnownDA" ||
      (reportedBy === "HubDA" && country === "EG")
    )
      newCon.push("sds-gsoc-driver-potentialharm@amazon.eg");
    else if (
      reportedBy === "CXCMKnownDA" ||
      (reportedBy === "HubDA" && country === "TR")
    )
      newCon.push("sds-gsoc-driver-potentialharm@amazon.com.tr");
    else if (reportedBy === "CXCM" && country === "AE")
      newCon.push("sds-gsoc-cx-incident@amazon.ae");
    else if (reportedBy === "CXCM" && country === "SA")
      newCon.push("sds-gsoc-cx-incident@amazon.sa");
    else if (reportedBy === "CXCM" && country === "EG")
      newCon.push("sds-gsoc-cx-incident@amazon.eg");
    else if (reportedBy === "CXCM" && country === "TR")
      newCon.push("sds-gsoc-cx-incident@amazon.com.tr");

    //* HAZARDOUS
    if (hazardous === "YES") {
      newCon.push(`EMEA HAZMAT SEV${severity === "5" ? "4" : severity}`);
    }

    //* CX FACING IMPACT
    if (cxImpact === "YES") {
      newCon.push(`${country} CX SUPPORT GROUP`);
      newCon.push(`cs-gcc-all@amazon.com`);
    }

    //* DISCRIMINATION
    if (discrimination === "YES") newCon.push("DISCRIMINATION SUPPORT GROUP");

    //* SEV1
    if (severity === "1") newCon.push("EMEA SEV1");

    //* SEV2
    if (severity === "2") newCon.push("EMEA SEV2");

    //* ===========================> SMILEY CONTACTS
    newCon.push("GLOBAL OTR SAFETY SUPPORT GROUP");
    newCon.push("EMEA ERC SUPPORT GROUP");
    newCon.push("NETWORK OPERATIONS CENTER SUPPORT GROUP");
    newCon.push("GSOC MGMT SUPPORT GROUP");
    newCon.push("RISK GLOBAL LAST MILE");
    newCon.push("EUROPE ROC SUPPORT GROUP");
    newCon.push("EMEA LAST MILE OPS DISRUPTION");
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
    <div className="min-h-screen bg-[#146EB4] to-blue-200 flex font-f1 flex-col items-center">
      {/* //* NAVBAR */}
      <nav className="fixed top-0 bg-[#146EB4] w-full sm:w-[90%] rounded-sm">
        <RegionNavs region={region} />
      </nav>

      {/* //* FORM */}
      <div className="bg-white w-full sm:w-[90%] mt-24 mx-auto py-4 px-8 rounded-sm shadow-xl space-y-2">
        <h1 className="text-lg text-center font-extrabold text-gray-800 flex justify-between">
          AMET <span className="text-lg font-bold">(AE / SA / EG / TR)</span>
        </h1>

        {/* //* SELECT COUNTRY */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Country:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="AE"
                id="AE"
                checked={country === "AE"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="AE"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                AE
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="SA"
                id="SA"
                checked={country === "SA"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="SA"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                SA
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="EG"
                id="EG"
                checked={country === "EG"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="EG"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                EG
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="TR"
                id="TR"
                checked={country === "TR"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="TR"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                TR
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
            Reported by:
          </h2>
          <select
            value={reportedBy}
            onChange={(event) => setReportedBy(event.target.value)}
            className="border p-2 rounded-sm font-medium w-1/4 text-center"
          >
            <option className="font-medium" value="DA">
              DSP DA / HUB DA (CX/CM is Unknown)
            </option>
            <option className="font-medium" value="CXCMKnownDA">
              DSP DA / HUB DA (CX/CM is Known)
            </option>
            <option className="font-medium" value="CXCM">
              CX/CM
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
