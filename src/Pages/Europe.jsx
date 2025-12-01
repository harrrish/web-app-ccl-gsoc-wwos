import { useState } from "react";
import RegionNavs from "../Components/RegionNavs";
import { useLocation } from "react-router-dom";

export default function Europe() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];

  const [country, setCountry] = useState("UK");
  const [siteType, setSiteType] = useState("AMZL");

  const [severity, setSeverity] = useState("5");
  const [driverInvolved, setDriverInvolved] = useState("DSP");
  const [reportedBy, setReportedBy] = useState("DA");

  const [cxImpact, setCxImpact] = useState("NO");
  const [detrimental, setDetrimental] = useState("NO");
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

    //* NA SEV#
    newCon.push(`NA SEV${severity}`);

    //* DRIVER INVOLVED
    newCon.push(
      `${country} ${driverInvolved} SEV${severity === "5" ? "4" : severity}`,
    );

    if (country === "UK" || country === "IE") {
      newCon.push(`UK IE SEV${severity}`);
    } else newCon.push(`CEU SEV${severity}`);

    //* REPORTED BY
    if (country === "UK" || country === "IE") {
      if (reportedBy === "DP") {
        newCon.push(`sds-gsoc-flex-incident@amazon.co.uk`);
      }
    }

    if (reportedBy === "CXCM") {
      if (country === "UK") {
        newCon.push(`sds-gsoc-flex-incident@amazon.co.uk`);
      } else if (country === "IE") {
        newCon.push(`sds-gsoc-cx-incident@amazon.ie`);
      } else if (country === "NL") {
        newCon.push(`sds-gsoc-cx-incident@amazon.nl`);
      } else if (country === "DE") {
        newCon.push(`sds-gsoc-cx-incident@amazon.de`);
      } else if (country === "ES") {
        newCon.push(`sds-gsoc-cx-incident@amazon.es`);
      } else if (country === "FR") {
        newCon.push(`sds-gsoc-cx-incident@amazon.fr`);
      } else if (country === "IT") {
        newCon.push(`sds-gsoc-cx-incident@amazon.it`);
      }
    }

    if (reportedBy === "CXCMKnownDA" || reportedBy === "CXCMKnownHubDA") {
      if (country === "UK") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.co.uk`);
      } else if (country === "IE") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.ie`);
      } else if (country === "NL") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.nl`);
      } else if (country === "DE") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.de`);
      } else if (country === "ES") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.es`);
      } else if (country === "FR") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.fr`);
      } else if (country === "IT") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.it`);
      }
    }

    //* CX FACING IMPACT
    if (cxImpact === "YES") {
      newCon.push(`${country} CX SUPPORT GROUP`);
      newCon.push(`cs-gcc-all@amazon.com`);
    }

    //* HAZARDOUS
    if (hazardous === "YES") {
      newCon.push("NA HAZMAT SUPPORT GROUP");
      newCon.push("DANGEROUS GOODS SUPPORT GROUP");
    }

    //* DETRIMENTAL
    if (detrimental === "YES") newCon.push(`AMER LAST MILE RISK`);

    //* DISCRIMINATION
    if (discrimination === "YES") newCon.push("DISCRIMINATION SUPPORT GROUP");

    if (severity === "1" || severity === "2") {
      newCon.push(`EMEA SEV${severity}`);
    }

    //* ===========================> SMILEY CONTACTS
    newCon.push("GLOBAL OTR SAFETY SUPPORT GROUP");
    newCon.push("EMEA ERC SUPPORT GROUP");
    newCon.push("NETWORK OPERATIONS CENTER SUPPORT GROUP");
    newCon.push("GSOC MGMT SUPPORT GROUP");
    newCon.push("RISK GLOBAL LAST MILE");
    newCon.push("EUROPE ROC SUPPORT GROUP");
    newCon.push("EMEA LAST MILE OPS DISRUPTION");
    newCon.push("EUROPE INTERNAL COMMS SUPPORT GROUP");

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
          Europe{" "}
          <span className="text-lg font-bold">
            (UK / IE / NL / DE / ES / FR / IT)
          </span>
        </h1>

        {/* //* SELECT COUNTRY */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Country:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="UK"
                id="UK"
                checked={country === "UK"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="UK"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                UK
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="IE"
                id="IE"
                checked={country === "IE"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="IE"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                IE
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="NL"
                id="NL"
                checked={country === "NL"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NL"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                NL
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="DE"
                id="DE"
                checked={country === "DE"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="DE"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                DE
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="ES"
                id="ES"
                checked={country === "ES"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="ES"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                ES
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="FR"
                id="FR"
                checked={country === "FR"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="FR"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                FR
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="IT"
                id="IT"
                checked={country === "IT"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="IT"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                IT
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
            Reported By:
          </h2>
          <select
            value={reportedBy}
            onChange={(event) => setReportedBy(event.target.value)}
            className="border p-2 rounded-sm font-medium w-1/4 text-center"
          >
            <option className="font-medium" value="DA">
              DSP DA (CX/CM is Unknown)
            </option>
            <option className="font-medium" value="DP">
              Flex DP
            </option>
            <option className="font-medium" value="CXCMKnownDA">
              DSP DA (CX/CM is Known)
            </option>
            <option className="font-medium" value="CXCM">
              CX/CM
            </option>
            <option className="font-medium" value="HubDA">
              Hub DA
            </option>
            <option className="font-medium" value="CXCMKnownHubDA">
              Hub DA (CX/CM is Known)
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

        {/* //* Detrimental Behavior */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/4 text-center">
            Detrimental Behavior:
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="detrimental"
                value="YES"
                id="YES_detrimental"
                checked={detrimental === "YES"}
                onChange={(e) => setDetrimental(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_detrimental"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="detrimental"
                value="NO"
                id="NO_detrimental"
                checked={detrimental === "NO"}
                onChange={(e) => setDetrimental(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_detrimental"
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
