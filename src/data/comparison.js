// Apple-style Comparison Matrix Data

export const COMPARISON_METRICS = [
  {
    category: "Display & Design",
    items: [
      {
        label: "Display Size",
        getValue: (p) => p.displaySize || (p.specs?.screen?.split("Super Retina")[0]?.trim() || "Retina display")
      },
      {
        label: "Display Tech",
        getValue: (p) => p.specs?.screen?.includes("ProMotion") ? "Super Retina XDR with ProMotion 120Hz" : "Super Retina XDR OLED (60Hz)"
      },
      {
        label: "Always-On Display",
        getValue: (p) => p.series === "Pro" ? "Yes" : "No"
      },
      {
        label: "Dynamic Island",
        getValue: () => "Yes"
      },
      {
        label: "Chassis Material",
        getValue: (p) => p.specs?.material || "Aluminum"
      }
    ]
  },
  {
    category: "Performance & Silicon",
    items: [
      {
        label: "Processor Chip",
        getValue: (p) => p.chip || p.specs?.chip?.split("with")[0]?.trim() || "Apple Silicon"
      },
      {
        label: "Apple Intelligence",
        getValue: () => "Built-in (A18/A19 Pro)"
      },
      {
        label: "Hardware Ray Tracing",
        getValue: (p) => p.series === "Pro" ? "Yes (Hardware accelerated)" : "Yes"
      }
    ]
  },
  {
    category: "Camera System",
    items: [
      {
        label: "Main Camera",
        getValue: (p) => p.cameraMP || "48MP Fusion"
      },
      {
        label: "Optical Zoom Range",
        getValue: (p) => p.series === "Pro" ? ".5x, 1x, 2x, 5x Optical" : ".5x, 1x, 2x Optical"
      },
      {
        label: "Camera Control Button",
        getValue: () => "Yes (Capacitive & Force sensor)"
      },
      {
        label: "Video Recording",
        getValue: (p) => p.series === "Pro" ? "4K 120 fps Dolby Vision" : "4K 60 fps Dolby Vision"
      }
    ]
  },
  {
    category: "Power & Battery",
    items: [
      {
        label: "Video Playback",
        getValue: (p) => p.batteryLife || p.specs?.battery || "All-day battery"
      },
      {
        label: "Connector",
        getValue: (p) => p.specs?.connector || "USB-C"
      },
      {
        label: "MagSafe Wireless",
        getValue: () => "Up to 25W MagSafe"
      }
    ]
  }
];
