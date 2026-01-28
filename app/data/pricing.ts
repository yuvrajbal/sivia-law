const realEstateHeaderRows = [
  [
    { label: "Home/Mortgage Value", colSpan: 1, align: "left" as const },
    { label: "Purchase", colSpan: 2 },
    { label: "Sale", colSpan: 1 },
    { label: "Refinance", colSpan: 1 },
    { label: "Transfer", colSpan: 1 },
  ],
  [
    { label: "", colSpan: 1, align: "left" as const },
    { label: "With Mortgage*", colSpan: 1 },
    { label: "Cash Purchase", colSpan: 1 },
    { label: "", colSpan: 1 },
    { label: "", colSpan: 1 },
    { label: "", colSpan: 1 },
  ],
];

const realEstateRows = [
  ["$100 – $199K", "$1,600", "$1,390", "$1,000", "$1,350", "$600"],
  ["$200K – $299K", "$1,825", "$1,535", "$1,050", "$1,475", "$700"],
  ["$300K – $399K", "$2,050", "$1,680", "$1,100", "$1,600", "$800"],
  ["$400K – $499K", "$2,275", "$1,825", "$1,150", "$1,725", "$900"],
  ["$500K – $599K", "$2,500", "$1,970", "$1,200", "$1,850", "$1,000"],
  ["$600K – $699K", "$2,725", "$2,115", "$1,250", "$1,975", "$1,100"],
  ["$700K – $799K", "$2,950", "$2,260", "$1,300", "$2,100", "$1,200"],
  ["$800K – $899K", "$3,175", "$2,405", "$1,350", "$2,225", "$1,300"],
  ["$900K – $999K", "$3,400", "$2,550", "$1,400", "$2,350", "$1,400"],
];

export const familyLawTable = {
  headerRows: [
    [
      { label: "", colSpan: 1, align: "left" as const },
      { label: "Without Children", colSpan: 1 },
      { label: "With Children", colSpan: 1 },
    ],
  ],
  rows: [
    ["Separation Agreement", "$2,500", "$3,000"],
    ["Uncontested Divorce**", "$1,850", "$2,250"],
    ["Prenuptial / Cohabitation Agreement", "$3,000", "$3,000"],
  ],
  footnotes: [
    "* Additional charges may apply if extensive negotiations with opposing counsel or additional consultations are required.",
    "** Plus court filing fee of $310.",
  ],
};

export const realEstateTableFull = {
  headerRows: realEstateHeaderRows,
  rows: realEstateRows,
};

export const realEstateTablePreview = {
  headerRows: realEstateHeaderRows,
  rows: realEstateRows.filter((row) => row[0] === "$500K – $599K" || row[0] === "$900K – $999K"),
};
