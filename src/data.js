export const station = [
  "AMZL",
  "3RD PARTY LOGISTICS 3PL",
  "SUB SAME DAY SSD",
  "Rural Super Rural RSR",
  "XL Delivery Station XLDS",
  "Traditional Sortable AR",
  "Sort Center SC",
  "GROCERY FULFILLMENT CENTER GFC",
  "EXCHANGE POINT XPT",
];

export const archiveEmail = "wwos-gsoc-archive@amazon.com";

export const actionItemTitle = "Investigate Driver Incident Claim";

export const actionItemBody =
  "Investigate to substantiate or disprove incident claim. If incident did occur, please provide the GSOC with further incident details that can be included in the update notification.";

export async function handleCopyArchive() {
  await navigator.clipboard.writeText("wwos-gsoc-archive@amazon.com");
  alert(`Copied "wwos-gsoc-archive@amazon.com" to clipboard`);
}
