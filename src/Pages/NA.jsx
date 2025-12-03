import { useState } from "react";
import RegionNavs from "../Components/RegionNavs";
import { useLocation } from "react-router-dom";
import ContactsFooter from "../Components/ContactsFooter";

export default function NA() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];

  const [language, setLanguage] = useState("ENGLISH");
  const [country, setCountry] = useState("US");
  const [siteType, setSiteType] = useState("AMZL");

  const [severity, setSeverity] = useState("5");
  const [driverInvolved, setDriverInvolved] = useState("DSP");
  const [reportedBy, setReportedBy] = useState("DA");

  const [cxImpact, setCxImpact] = useState("NO");
  const [detrimental, setDetrimental] = useState("NO");
  const [hazardous, setHazardous] = useState("NO");
  const [thermal, setThermal] = useState("NO");
  const [dotRegulated, setDotRegulated] = useState("NO");
  const [discrimination, setDiscrimination] = useState("NO");
  const [vehicleMalFunction, setVehicleMalFunction] = useState("NO");

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

    //* REPORTED BY
    if (country === "US") {
      if (reportedBy === "DP") {
        newCon.push("sds-gsoc-flex-incident@amazon.com");
        if (language === "SPANISH")
          newCon.push("sds-gsoc-flex-incident-spanish@amazon.com");
      } else if (reportedBy === "CXCMKnownDA") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.com");
        if (language === "SPANISH")
          newCon.push("sds-gsoc-driver-potentialharm-spanish@amazon.com");
      } else if (reportedBy === "CXCM") {
        newCon.push("sds-gsoc-cx-incident@amazon.com");
        if (language === "SPANISH")
          newCon.push("sds-gsoc-cx-incident@amazon.com");
      } else if (reportedBy === "HubDA") {
        newCon.push("sds-gsoc-hub-incident@amazon.com");
      }
    } else if (country === "CA") {
      if (reportedBy === "DP") {
        newCon.push("sds-gsoc-flex-incident@amazon.ca");
        if (language === "SPANISH")
          newCon.push("sds-gsoc-flex-incident-spanish@amazon.com,");
      } else if (reportedBy === "CXCMKnownDA") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.ca");
        if (language === "SPANISH")
          newCon.push("sds-gsoc-driver-potentialharm-spanish@amazon.com");
      } else if (reportedBy === "CXCM") {
        newCon.push("sds-gsoc-cx-incident@amazon.ca");
        if (language === "SPANISH")
          newCon.push("sds-gsoc-cx-incident@amazon.com");
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

    //* THERMAL
    if (thermal === "YES" && severity === "5")
      newCon.push("NA LAST MILE VEHICLE THERMAL EVENT LOW SEVERITY");
    else if (thermal === "YES") {
      newCon.push("NA LAST MILE VEHICLE THERMAL EVENT");
    }

    //* DOT  REGULATED
    if (dotRegulated === "YES") {
      newCon.push("floftus@arcclaims.com");
      newCon.push("ecarroll@arcclaims.com");
    }

    //* DISCRIMINATION
    if (discrimination === "YES") newCon.push("DISCRIMINATION SUPPORT GROUP");

    //* VEHICLE MALFUNCTION
    if (vehicleMalFunction === "YES" && country === "US")
      newCon.push("US AMZL FLEET SUPPORT GROUP");
    else if (vehicleMalFunction === "YES" && country === "CA")
      newCon.push("CA AMZL FLEET SUPPORT GROUP,");

    if (severity === "1" || severity === "2") {
      newCon.push("AMER LAST MILE RISK");
      newCon.push(`AMER SEV${severity}`);
      newCon.push("NA RESILIENCE");
    }

    //* ===========================> SMILEY CONTACTS
    newCon.push("AMER INTERNAL COMMS SUPPORT GROUP");
    newCon.push("NA ERC SUPPORT GROUP");
    newCon.push("NETWORK OPERATIONS CENTER SUPPORT GROUP");
    newCon.push("GSOC MGMT SUPPORT GROUP");
    newCon.push("RISK GLOBAL LAST MILE");
    newCon.push("GLOBAL OTR SAFETY SUPPORT GROUP");
    newCon.push("NORTH AMERICA ROC SUPPORT GROUP");
    newCon.push("NORTH AMERICA OPS PR");

    setContacts([...newCon]);
  };

  return (
    <div className="min-h-screen bg-[#146EB4] to-blue-200 flex font-f1 flex-col items-center gap-2">
      {/* //* NAVBAR */}
      <nav className="bg-[#146EB4] w-full sm:w-[90%] rounded-sm">
        <RegionNavs region={region} />
      </nav>

      {/* //* FORM */}
      <div className="bg-white w-full sm:w-[90%] p-3 rounded-sm flex flex-col gap-1">
        <h1 className="text-lg text-center font-extrabold text-gray-800 flex justify-between">
          NA <span className="text-lg font-bold">(US / CA)</span>
        </h1>

        {/* //* SELECT LANGUAGE */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Language:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="language"
                value="ENGLISH"
                id="ENGLISH"
                checked={language === "ENGLISH"}
                onChange={(e) => setLanguage(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="ENGLISH"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                English
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="language"
                value="SPANISH"
                id="SPANISH"
                checked={language === "SPANISH"}
                onChange={(e) => setLanguage(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="SPANISH"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Spanish
              </label>
            </div>
          </div>
        </div>

        {/* //* SELECT COUNTRY */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Country:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="US"
                id="US"
                checked={country === "US"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="US"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                US
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="CA"
                id="CA"
                checked={country === "CA"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="CA"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                CA
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

            <option
              className="font-bold uppercase"
              value="XL Delivery Station XLDS"
            >
              XL Delivery Station XLDS
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

            {country === "US" && (
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="driverInvolved"
                  value="BICYCLE DSP"
                  id="BICYCLE DSP"
                  checked={driverInvolved === "BICYCLE DSP"}
                  onChange={(e) => setDriverInvolved(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="BICYCLE DSP"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  BICYCLE DSP
                </label>
              </div>
            )}

            {country === "US" && (
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="driverInvolved"
                  value="HUB"
                  id="HUB"
                  checked={driverInvolved === "HUB"}
                  onChange={(e) => setDriverInvolved(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="HUB"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  HUB
                </label>
              </div>
            )}
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
            {country === "US" && (
              <option className="font-medium" value="HubDA">
                Hub DA
              </option>
            )}
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

        {/* //* HAZARDOUS MATERIAL */}
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

        {/* //* DETRIMENTAL BEHAVIOR */}
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

        {/* //* DELIVERY VEHICLE VAN THERMAL EVENT */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/4 text-center">
            Vehicle Thermal Event :
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="thermal"
                value="YES"
                id="YES_thermal"
                checked={thermal === "YES"}
                onChange={(e) => setThermal(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_thermal"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="thermal"
                value="NO"
                id="NO_thermal"
                checked={thermal === "NO"}
                onChange={(e) => setThermal(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_thermal"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

        {/* //* DOT REGULATED VEHICLE */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/4 text-center">
            DOT Regulated Vehicle:
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="dotRegulated"
                value="YES"
                id="YES_dotRegulated"
                checked={dotRegulated === "YES"}
                onChange={(e) => setDotRegulated(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_dotRegulated"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="dotRegulated"
                value="NO"
                id="NO_dotRegulated"
                checked={dotRegulated === "NO"}
                onChange={(e) => setDotRegulated(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_dotRegulated"
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

        {/* //* VEHICLE MALFUNCTION */}
        <div className="bg-gray-50 px-4 py-1 rounded-sm shadow-sm border border-gray-200 flex items-center justify-around">
          <h2 className="text-lg font-medium text-gray-800 mb-1 w-1/2 text-center">
            Vehicle Malfunction (Amazon-branded):
          </h2>
          <div className="w-1/2 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="vehicleMalFunction"
                value="YES"
                id="YES_vehicleMalfunction"
                checked={vehicleMalFunction === "YES"}
                onChange={(e) => setVehicleMalFunction(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_vehicleMalfunction"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="vehicleMalFunction"
                value="NO"
                id="NO_vehicleMalfunction"
                checked={vehicleMalFunction === "NO"}
                onChange={(e) => setVehicleMalFunction(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_vehicleMalfunction"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

        {/* //* GENERATE CONTACTS BUTTON */}
        <div className="flex gap-2">
          <button
            onClick={generateContacts}
            className="p-2 text-white bg-[#146EB4] hover:text-[#146EB4] border-[#146EB4] rounded-sm duration-300 cursor-pointer border-2 hover:bg-white font-medium tracking-wide w-full"
          >
            Generate Contacts
          </button>
        </div>
      </div>

      {/* //* DISPLAY GENERATED CONTACTS */}
      <ContactsFooter contacts={contacts} />
    </div>
  );
}
