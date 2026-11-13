// Apple iPhone Store - Comprehensive Luxury Product Catalog

export const CURRENCY = {
  symbol: "₹",
  code: "INR",
  format: (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }
};

export const MAGSAFE_CHARGER_IMAGE = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD74?.v=NTJadGxVMTVIZzE3TUFTdkZDTWhCd2tuVHYzMERCZURia3c5SzJFOTlPZ3hwd2F1dWM5TE1maUVxSVV1anZjQXdYczhRdkV0elVtZUJkWHRSQU9iaHc&fmt=jpeg&hei=1144&qlt=90&wid=1144";

export const IPHONE_PRODUCTS = [
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    series: "Pro",
    tagline: "Beyond the ordinary. Power. Beauty. Innovation.",
    description: "The most powerful iPhone ever. Featuring a stunning 6.9-inch Super Retina XDR display, Grade 5 titanium chassis, all-day battery life, and next-gen A19 Pro silicon.",
    startingPrice: 149900,
    startingPriceUSD: 1199,
    rating: 4.8,
    reviewsCount: "12k+",
    badge: "Popular",
    heroHighlight: true,
    displaySize: '6.9"',
    chip: "A19 Pro Chip",
    cameraMP: "48MP Triple",
    batteryLife: "Up to 33 hrs",
    storageDefault: "256GB",
    colors: [
      {
        name: "Deep Purple",
        hex: "#6b4fa0",
        bgClass: "bg-[#6b4fa0]",
        glowColor: "rgba(168, 85, 247, 0.45)",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Silver Titanium",
        hex: "#d5d5d8",
        bgClass: "bg-[#d5d5d8]",
        glowColor: "rgba(226, 232, 240, 0.35)",
        image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Desert Gold",
        hex: "#d4af88",
        bgClass: "bg-[#d4af88]",
        glowColor: "rgba(212, 175, 136, 0.4)",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Space Black",
        hex: "#27272a",
        bgClass: "bg-[#27272a]",
        glowColor: "rgba(100, 116, 139, 0.35)",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "256GB", priceDelta: 0 },
      { capacity: "512GB", priceDelta: 20000 },
      { capacity: "1TB", priceDelta: 40000 }
    ],
    specs: {
      screen: "6.9″ Super Retina XDR OLED with ProMotion 120Hz",
      chip: "A19 Pro chip with 6-core GPU & Apple Intelligence",
      camera: "48MP Triple Camera: Fusion, Ultra Wide, 5x Telephoto",
      battery: "Up to 33 hours video playback",
      material: "Grade 5 Titanium with textured matte glass back",
      weight: "227 grams",
      waterResistance: "IP68 (depth of 6 meters up to 30 mins)",
      connector: "USB-C with USB 3 speeds (up to 10Gb/s)",
      os: "iOS 26 with Apple Intelligence"
    },
    features: [
      "Titanium design with ultra-refined microblasted finish",
      "Camera Control button for instant photo and video capture",
      "4K 120 fps Dolby Vision recording with Studio Sound Audio Mix",
      "Action button customizable with your favorite quick shortcut"
    ]
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    series: "Pro",
    tagline: "Power. Beauty. Innovation.",
    description: "Compact flagship perfection with a 6.3-inch Super Retina XDR display, breakthrough A19 Pro silicon, and dedicated 5x optical telephoto lens.",
    startingPrice: 129900,
    startingPriceUSD: 999,
    rating: 4.8,
    reviewsCount: "9.4k",
    badge: "New",
    heroHighlight: true,
    displaySize: '6.3"',
    chip: "A19 Pro Chip",
    cameraMP: "48MP Camera",
    batteryLife: "Up to 27 hrs",
    storageDefault: "256GB",
    colors: [
      {
        name: "Silver Titanium",
        hex: "#e2e2e6",
        bgClass: "bg-[#e2e2e6]",
        glowColor: "rgba(226, 232, 240, 0.4)",
        image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Deep Purple",
        hex: "#6b4fa0",
        bgClass: "bg-[#6b4fa0]",
        glowColor: "rgba(168, 85, 247, 0.45)",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Space Black",
        hex: "#27272a",
        bgClass: "bg-[#27272a]",
        glowColor: "rgba(100, 116, 139, 0.35)",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "256GB", priceDelta: 0 },
      { capacity: "512GB", priceDelta: 20000 },
      { capacity: "1TB", priceDelta: 40000 }
    ],
    specs: {
      screen: "6.3″ Super Retina XDR OLED with ProMotion 120Hz",
      chip: "A19 Pro chip with 6-core GPU & Apple Intelligence",
      camera: "48MP Fusion, 48MP Ultra Wide, 5x Telephoto",
      battery: "Up to 27 hours video playback",
      material: "Grade 5 Titanium with textured matte glass back",
      weight: "199 grams",
      waterResistance: "IP68 (depth of 6 meters up to 30 mins)",
      connector: "USB-C with USB 3 speeds",
      os: "iOS 26 with Apple Intelligence"
    },
    features: [
      "Camera Control button with tactile haptic sensor",
      "Studio-quality 4-mic array with Audio Mix reduction",
      "Action button for instant camera or shortcut access",
      "Always-On ProMotion display technology"
    ]
  },
  {
    id: "iphone-17-air",
    name: "iPhone 17 Air",
    series: "Air",
    tagline: "Ultra-thin. Super powerful. Pure futuristic titanium.",
    description: "The thinnest iPhone in history at just 5.6mm. Crafted from ultralight Grade 5 titanium, featuring an immersive 6.6-inch ProMotion display, A19 Pro silicon, and single 48MP computational studio camera.",
    startingPrice: 119900,
    startingPriceUSD: 899,
    rating: 4.9,
    reviewsCount: "4.8k",
    badge: "Revolutionary",
    heroHighlight: false,
    displaySize: '6.6"',
    chip: "A19 Pro Chip",
    cameraMP: "48MP Studio",
    batteryLife: "Up to 26 hrs",
    storageDefault: "256GB",
    colors: [
      {
        name: "Cosmic Violet",
        hex: "#7c3aed",
        bgClass: "bg-[#7c3aed]",
        glowColor: "rgba(124, 58, 237, 0.45)",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Cloud Silver",
        hex: "#e2e4e9",
        bgClass: "bg-[#e2e4e9]",
        glowColor: "rgba(226, 228, 233, 0.35)",
        image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Space Graphite",
        hex: "#1f2128",
        bgClass: "bg-[#1f2128]",
        glowColor: "rgba(31, 33, 40, 0.35)",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "256GB", priceDelta: 0 },
      { capacity: "512GB", priceDelta: 20000 },
      { capacity: "1TB", priceDelta: 40000 }
    ],
    specs: {
      screen: "6.6″ Super Retina XDR OLED with ProMotion 120Hz",
      chip: "A19 Pro chip with breakthrough thermal graphene design",
      camera: "48MP Studio Fusion Camera with 2x optical quality crop",
      battery: "Up to 26 hours video playback",
      material: "Ultralight Grade 5 Titanium (5.6mm thickness)",
      weight: "165 grams",
      waterResistance: "IP68 water resistant",
      connector: "USB-C with USB 3 speeds",
      os: "iOS 26 with Apple Intelligence"
    },
    features: [
      "Breakthrough 5.6mm ultra-slim aerodynamic profile",
      "Ultralight titanium chassis weighing only 165 grams",
      "Camera Control button with pressure-sensitive gestures",
      "High-density silicon-anode battery technology"
    ]
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    series: "Standard",
    tagline: "Vibrant color. Infinite possibilities.",
    description: "Packed with the next-gen A18 chip, Camera Control, 48MP Dual Fusion camera, and durable color-infused back glass in breathtaking hues.",
    startingPrice: 89900,
    startingPriceUSD: 799,
    rating: 4.7,
    reviewsCount: "6.1k",
    badge: "New Arrival",
    displaySize: '6.1"',
    chip: "A18 Chip",
    cameraMP: "48MP Camera",
    batteryLife: "Up to 24 hrs",
    storageDefault: "256GB",
    colors: [
      {
        name: "Rose Pink",
        hex: "#dc8d9b",
        bgClass: "bg-[#dc8d9b]",
        glowColor: "rgba(220, 141, 155, 0.4)",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Deep Purple",
        hex: "#6b4fa0",
        bgClass: "bg-[#6b4fa0]",
        glowColor: "rgba(168, 85, 247, 0.45)",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Ultramarine",
        hex: "#4665a3",
        bgClass: "bg-[#4665a3]",
        glowColor: "rgba(70, 101, 163, 0.4)",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "128GB", priceDelta: 0 },
      { capacity: "256GB", priceDelta: 10000 },
      { capacity: "512GB", priceDelta: 30000 }
    ],
    specs: {
      screen: "6.1″ Super Retina XDR OLED display",
      chip: "A18 chip with 5-core GPU & Apple Intelligence",
      camera: "Advanced dual-camera system: 48MP Fusion & 12MP Ultra Wide",
      battery: "Up to 24 hours video playback",
      material: "Aerospace-grade aluminum with color-infused glass",
      weight: "170 grams",
      waterResistance: "IP68 water resistant",
      connector: "USB-C connector",
      os: "iOS 26"
    },
    features: [
      "Camera Control button with instant lens zoom",
      "Spatial photo and video capture for Apple Vision Pro",
      "Ceramic Shield front tougher than any smartphone glass",
      "Action button for custom workflows"
    ]
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    series: "Pro",
    tagline: "Titanium strength. 5x Telephoto mastery.",
    description: "Built for power users with a huge 6.9-inch display, A18 Pro silicon, Action Button, Camera Control, and 5x optical tetraprism telephoto lens.",
    startingPrice: 134900,
    startingPriceUSD: 1099,
    rating: 4.9,
    reviewsCount: "15k+",
    badge: "Pro Flagship",
    displaySize: '6.9"',
    chip: "A18 Pro Chip",
    cameraMP: "48MP Triple",
    batteryLife: "Up to 33 hrs",
    storageDefault: "256GB",
    colors: [
      {
        name: "Desert Titanium",
        hex: "#cbb59f",
        bgClass: "bg-[#cbb59f]",
        glowColor: "rgba(203, 181, 159, 0.4)",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Natural Titanium",
        hex: "#9a9893",
        bgClass: "bg-[#9a9893]",
        glowColor: "rgba(154, 152, 147, 0.4)",
        image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Black Titanium",
        hex: "#2a2a2c",
        bgClass: "bg-[#2a2a2c]",
        glowColor: "rgba(100, 116, 139, 0.35)",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "256GB", priceDelta: 0 },
      { capacity: "512GB", priceDelta: 20000 },
      { capacity: "1TB", priceDelta: 40000 }
    ],
    specs: {
      screen: "6.9″ Super Retina XDR OLED with ProMotion 120Hz",
      chip: "A18 Pro chip with 6-core GPU",
      camera: "Pro camera system: 48MP Fusion, 48MP Ultra Wide, 5x Telephoto",
      battery: "Up to 33 hours video playback",
      material: "Grade 5 Titanium with textured matte glass back",
      weight: "227 grams",
      waterResistance: "IP68 water resistant",
      connector: "USB-C with USB 3 speeds",
      os: "iOS 18 with Apple Intelligence"
    },
    features: [
      "Longest battery life ever in an iPhone 16 series",
      "Camera Control button with two-stage shutter",
      "Grade 5 Titanium enclosure with microblasted texture",
      "Next-generation 16-core Neural Engine"
    ]
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    series: "Pro",
    tagline: "Pro power in an all-titanium design.",
    description: "Built for speed with A18 Pro silicon, Action Button, and Pro camera system with 48MP Fusion lens.",
    startingPrice: 119900,
    startingPriceUSD: 899,
    rating: 4.8,
    reviewsCount: "8.2k",
    badge: "Popular Pro",
    displaySize: '6.3"',
    chip: "A18 Pro Chip",
    cameraMP: "48MP Camera",
    batteryLife: "Up to 27 hrs",
    storageDefault: "256GB",
    colors: [
      {
        name: "Space Black",
        hex: "#2c2c2e",
        bgClass: "bg-[#2c2c2e]",
        glowColor: "rgba(100, 116, 139, 0.35)",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Natural Titanium",
        hex: "#9a9893",
        bgClass: "bg-[#9a9893]",
        glowColor: "rgba(154, 152, 147, 0.4)",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "128GB", priceDelta: 0 },
      { capacity: "256GB", priceDelta: 10000 },
      { capacity: "512GB", priceDelta: 30000 }
    ],
    specs: {
      screen: "6.3″ Super Retina XDR OLED with ProMotion 120Hz",
      chip: "A18 Pro chip with 6-core GPU",
      camera: "Pro camera system: 48MP Fusion, 12MP 5x Telephoto",
      battery: "Up to 27 hours video playback",
      material: "Grade 5 Titanium",
      weight: "199 grams",
      waterResistance: "IP68 water resistant",
      connector: "USB-C with USB 3 speeds",
      os: "iOS 18"
    },
    features: [
      "Customizable Action button",
      "Camera Control button",
      "ProMotion 120Hz smooth scrolling",
      "All-day battery performance"
    ]
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    series: "Standard",
    tagline: "Big screen. Huge battery life.",
    description: "6.7-inch Super Retina XDR display with Dynamic Island, A18 silicon, dual 48MP camera, and incredible battery longevity for binge-watching and gaming.",
    startingPrice: 89900,
    startingPriceUSD: 799,
    rating: 4.8,
    reviewsCount: "9.1k",
    badge: "Battery Champ",
    displaySize: '6.7"',
    chip: "A18 Chip",
    cameraMP: "48MP Camera",
    batteryLife: "Up to 27 hrs",
    storageDefault: "128GB",
    colors: [
      {
        name: "Teal",
        hex: "#458b8b",
        bgClass: "bg-[#458b8b]",
        glowColor: "rgba(69, 139, 139, 0.4)",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Ultramarine",
        hex: "#3b5ba5",
        bgClass: "bg-[#3b5ba5]",
        glowColor: "rgba(59, 91, 165, 0.4)",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Pink",
        hex: "#e08fa3",
        bgClass: "bg-[#e08fa3]",
        glowColor: "rgba(224, 143, 163, 0.4)",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "128GB", priceDelta: 0 },
      { capacity: "256GB", priceDelta: 10000 },
      { capacity: "512GB", priceDelta: 30000 }
    ],
    specs: {
      screen: "6.7″ Super Retina XDR OLED display",
      chip: "A18 chip with 5-core GPU & Apple Intelligence",
      camera: "Dual camera system: 48MP Fusion & 12MP Ultra Wide with macro",
      battery: "Up to 27 hours video playback",
      material: "Aerospace-grade aluminum with color-infused glass",
      weight: "199 grams",
      waterResistance: "IP68 water resistant",
      connector: "USB-C connector",
      os: "iOS 18 with Apple Intelligence"
    },
    features: [
      "Expansive 6.7-inch display for cinema viewing",
      "Camera Control button for intuitive photo capture",
      "Dynamic Island notifications at a glance",
      "MagSafe wireless charging up to 25W"
    ]
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    series: "Standard",
    tagline: "Apple Intelligence. Supercharged.",
    description: "Dynamic Island, 48MP Fusion camera, versatile USB-C, and vivid saturated color options.",
    startingPrice: 79900,
    startingPriceUSD: 699,
    rating: 4.7,
    reviewsCount: "7.5k",
    badge: "Great Deal",
    displaySize: '6.1"',
    chip: "A18 Chip",
    cameraMP: "48MP Camera",
    batteryLife: "Up to 22 hrs",
    storageDefault: "128GB",
    colors: [
      {
        name: "Deep Blue",
        hex: "#3b5998",
        bgClass: "bg-[#3b5998]",
        glowColor: "rgba(59, 89, 152, 0.4)",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "White",
        hex: "#f4f4f5",
        bgClass: "bg-[#f4f4f5]",
        glowColor: "rgba(244, 244, 245, 0.3)",
        image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "128GB", priceDelta: 0 },
      { capacity: "256GB", priceDelta: 10000 },
      { capacity: "512GB", priceDelta: 30000 }
    ],
    specs: {
      screen: "6.1″ Super Retina XDR OLED display",
      chip: "A18 chip with 5-core GPU",
      camera: "Dual camera system: 48MP Fusion & 12MP Ultra Wide",
      battery: "Up to 22 hours video playback",
      material: "Aluminum with color-infused glass",
      weight: "170 grams",
      waterResistance: "IP68 water resistant",
      connector: "USB-C connector",
      os: "iOS 18"
    },
    features: [
      "Dynamic Island interactive pill notifications",
      "Camera Control button for intuitive zoom",
      "USB-C universal charging",
      "Super Retina XDR OLED display"
    ]
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    series: "Pro",
    tagline: "The original titanium icon with A17 Pro.",
    description: "Crafted with aerospace Grade 5 titanium, customizable Action Button, hardware-accelerated ray tracing, and 48MP Pro camera system.",
    startingPrice: 99900,
    startingPriceUSD: 799,
    rating: 4.8,
    reviewsCount: "22k+",
    badge: "Special Value",
    displaySize: '6.1"',
    chip: "A17 Pro Chip",
    cameraMP: "48MP Triple",
    batteryLife: "Up to 23 hrs",
    storageDefault: "128GB",
    colors: [
      {
        name: "Blue Titanium",
        hex: "#3b4959",
        bgClass: "bg-[#3b4959]",
        glowColor: "rgba(59, 73, 89, 0.4)",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Natural Titanium",
        hex: "#98948d",
        bgClass: "bg-[#98948d]",
        glowColor: "rgba(152, 148, 141, 0.4)",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "128GB", priceDelta: 0 },
      { capacity: "256GB", priceDelta: 10000 },
      { capacity: "512GB", priceDelta: 30000 }
    ],
    specs: {
      screen: "6.1″ Super Retina XDR OLED with ProMotion 120Hz",
      chip: "A17 Pro chip with console-grade graphics",
      camera: "48MP Fusion, 12MP Ultra Wide, 3x Telephoto",
      battery: "Up to 23 hours video playback",
      material: "Grade 5 Titanium with textured matte glass back",
      weight: "187 grams",
      waterResistance: "IP68 water resistant",
      connector: "USB-C with USB 3 speeds",
      os: "iOS 18"
    },
    features: [
      "Aerospace-grade titanium design with contoured edges",
      "Action button for quick shortcuts",
      "ProMotion 120Hz display with Always-On",
      "Console-level gaming with hardware ray tracing"
    ]
  },
  {
    id: "iphone-se-4",
    name: "iPhone SE (4th Gen)",
    series: "Standard",
    tagline: "Brilliant OLED. Apple Intelligence. Pure value.",
    description: "Modernized all-screen 6.1-inch OLED design with Face ID, powerful A18 silicon, 48MP Fusion camera, and USB-C port in a lightweight durable build.",
    startingPrice: 49900,
    startingPriceUSD: 499,
    rating: 4.7,
    reviewsCount: "11k+",
    badge: "Most Affordable",
    displaySize: '6.1"',
    chip: "A18 Chip",
    cameraMP: "48MP Fusion",
    batteryLife: "Up to 20 hrs",
    storageDefault: "128GB",
    colors: [
      {
        name: "Midnight Purple",
        hex: "#483d66",
        bgClass: "bg-[#483d66]",
        glowColor: "rgba(72, 61, 102, 0.4)",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Starlight",
        hex: "#f5f2eb",
        bgClass: "bg-[#f5f2eb]",
        glowColor: "rgba(245, 242, 235, 0.3)",
        image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        name: "Midnight Black",
        hex: "#1c1d22",
        bgClass: "bg-[#1c1d22]",
        glowColor: "rgba(28, 29, 34, 0.35)",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    storageOptions: [
      { capacity: "128GB", priceDelta: 0 },
      { capacity: "256GB", priceDelta: 10000 }
    ],
    specs: {
      screen: "6.1″ Super Retina XDR OLED display with Face ID",
      chip: "A18 chip with Apple Intelligence",
      camera: "48MP Fusion Camera with 2x optical quality crop",
      battery: "Up to 20 hours video playback",
      material: "Aerospace aluminum with durable Ceramic Shield front",
      weight: "165 grams",
      waterResistance: "IP68 water resistant",
      connector: "USB-C universal port",
      os: "iOS 26 with Apple Intelligence"
    },
    features: [
      "All-screen OLED design with Face ID",
      "Next-generation A18 silicon at an accessible price",
      "48MP high-resolution camera with 4K Dolby Vision",
      "USB-C universal charging"
    ]
  }
];

export const ACCESSORIES_PRODUCTS = [
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    category: "Audio",
    tagline: "Up to 2x more Active Noise Cancellation with USB-C.",
    startingPrice: 24900,
    startingPriceUSD: 249,
    rating: 4.9,
    reviewsCount: "14k+",
    badge: "Bestseller",
    colors: [
      { name: "White", hex: "#ffffff", bgClass: "bg-[#ffffff]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90" }
    ],
    specs: {
      sound: "H2 chip with Adaptive Audio, Transparency mode & Spatial Audio",
      battery: "Up to 6 hours listening time, 30 hours with case",
      case: "MagSafe Case with speaker and lanyard loop",
      charging: "USB-C, MagSafe, and Apple Watch charger compatible"
    }
  },
  {
    id: "airpods-max-usbc",
    name: "AirPods Max (USB-C)",
    category: "Audio",
    tagline: "The ultimate personal listening experience.",
    startingPrice: 59900,
    startingPriceUSD: 549,
    rating: 4.8,
    reviewsCount: "2.8k",
    badge: "New Colors",
    colors: [
      { name: "Deep Purple", hex: "#5b4b7a", bgClass: "bg-[#5b4b7a]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-purple?wid=1144&hei=1144&fmt=jpeg&qlt=90" },
      { name: "Midnight", hex: "#1f2229", bgClass: "bg-[#1f2229]", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80" }
    ],
    specs: {
      sound: "Custom acoustic design with Pro-level Active Noise Cancellation",
      chip: "Apple H1 headphone chip in each ear cup",
      battery: "Up to 20 hours listening with ANC enabled",
      charging: "USB-C charging with ultra-fast top-up"
    }
  },
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    category: "Wearables",
    tagline: "The ultimate sports and adventure watch in Satin Black.",
    startingPrice: 89900,
    startingPriceUSD: 799,
    rating: 4.9,
    reviewsCount: "4.1k",
    badge: "Pro Grade",
    colors: [
      { name: "Purple / Indigo", hex: "#7c3aed", bgClass: "bg-[#7c3aed]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90" },
      { name: "Satin Black", hex: "#262729", bgClass: "bg-[#262729]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409?wid=1144&hei=1144&fmt=jpeg&qlt=90" }
    ],
    specs: {
      case: "49mm Grade 5 Titanium with sapphire front crystal",
      display: "3000 nits Always-On Retina display",
      battery: "Up to 36 hours regular use, 72 hours in Low Power Mode",
      gps: "Precision dual-frequency GPS"
    }
  },
  {
    id: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    category: "Wearables",
    tagline: "Thinnest Apple Watch ever with wide-angle OLED display.",
    startingPrice: 46900,
    startingPriceUSD: 399,
    rating: 4.9,
    reviewsCount: "5.3k",
    badge: "New Release",
    colors: [
      { name: "Jet Black", hex: "#121316", bgClass: "bg-[#121316]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=1144&hei=1144&fmt=jpeg&qlt=90" },
      { name: "Rose Gold", hex: "#dfa89c", bgClass: "bg-[#dfa89c]", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" }
    ],
    specs: {
      case: "46mm polished aluminum or titanium chassis",
      display: "Wide-angle OLED with up to 40% brighter off-axis view",
      battery: "Up to 18 hours normal use, fast charge to 80% in 30 mins",
      sensors: "Water temperature sensor, depth gauge to 6m, ECG & Blood Oxygen"
    }
  },
  {
    id: "magsafe-charger-25w",
    name: "MagSafe Charger (25W)",
    category: "Power",
    tagline: "Snap into fast wireless charging up to 25W.",
    startingPrice: 5900,
    startingPriceUSD: 39,
    rating: 4.8,
    reviewsCount: "3.2k",
    badge: "Essential",
    colors: [
      { name: "White", hex: "#f0f0f0", bgClass: "bg-[#f0f0f0]", image: MAGSAFE_CHARGER_IMAGE }
    ],
    specs: {
      power: "Fast wireless charging up to 25W for iPhone",
      cable: "Braided cable design available in 1m or 2m lengths",
      compatibility: "Qi2 and MagSafe certified devices"
    }
  },
  {
    id: "magsafe-battery-pack-pro",
    name: "MagSafe Battery Pack Pro (Qi2)",
    category: "Power",
    tagline: "Snap-on magnetic power bank with fast wireless charging.",
    startingPrice: 9900,
    startingPriceUSD: 89,
    rating: 4.8,
    reviewsCount: "3.7k",
    badge: "Fast Charge",
    colors: [
      { name: "White", hex: "#f4f4f6", bgClass: "bg-[#f4f4f6]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJWY3?wid=1144&hei=1144&fmt=jpeg&qlt=90" }
    ],
    specs: {
      capacity: "High-density magnetic power bank cell",
      wireless: "Fast wireless charging via MagSafe magnetic ring",
      ports: "Bi-directional Lightning / USB-C fast charging pass-through",
      safety: "Dynamic temperature monitoring and overcharge protection"
    }
  },
  {
    id: "magsafe-finewoven-wallet",
    name: "FineWoven Wallet with MagSafe",
    category: "Power",
    tagline: "Luxury microtwill with Find My support. Snaps magnetically to iPhone.",
    startingPrice: 5900,
    startingPriceUSD: 59,
    rating: 4.7,
    reviewsCount: "2.1k",
    badge: "Luxury Carry",
    colors: [
      { name: "Mulberry Violet", hex: "#583b5c", bgClass: "bg-[#583b5c]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT263?wid=1144&hei=1144&fmt=jpeg&qlt=90" },
      { name: "Midnight Black", hex: "#212124", bgClass: "bg-[#212124]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT253?wid=1144&hei=1144&fmt=jpeg&qlt=90" }
    ],
    specs: {
      material: "Durable microtwill crafted from 68% post-consumer recycled content",
      capacity: "Holds up to 3 credit cards or IDs with built-in shielding",
      findMy: "Find My notification when wallet detaches from phone",
      compatibility: "iPhone 12 through iPhone 17 series"
    }
  },
  {
    id: "airtag-4pack",
    name: "AirTag (4 Pack)",
    category: "Wearables",
    tagline: "Keep track of your keys, wallet, luggage, and bag in the Find My app.",
    startingPrice: 11900,
    startingPriceUSD: 99,
    rating: 4.9,
    reviewsCount: "18k+",
    badge: "Must Have",
    colors: [
      { name: "Silver Stainless", hex: "#e4e4e7", bgClass: "bg-[#e4e4e7]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-4pack-select-202104?wid=1144&hei=1144&fmt=jpeg&qlt=90" }
    ],
    specs: {
      precision: "Ultra Wideband chip for Precision Finding with directional haptics",
      battery: "Over a year of battery life with standard replaceable CR2032 coin cell",
      durability: "IP67 water and dust resistance (depth of 1 meter up to 30 mins)",
      privacy: "Anonymous and encrypted tracking network protecting user privacy"
    }
  },
  {
    id: "apple-dual-usbc-adapter-35w",
    name: "35W Dual USB-C Compact Power Adapter",
    category: "Power",
    tagline: "Charge two Apple devices simultaneously at home or on the go.",
    startingPrice: 5900,
    startingPriceUSD: 59,
    rating: 4.8,
    reviewsCount: "4.6k",
    badge: "Essential",
    colors: [
      { name: "White", hex: "#ffffff", bgClass: "bg-[#ffffff]", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MNWM3?wid=1144&hei=1144&fmt=jpeg&qlt=90" }
    ],
    specs: {
      ports: "Dual USB-C ports with dynamic smart wattage allocation",
      power: "35W total output with Power Delivery (PD) fast charging",
      design: "Compact footprint with folding pins for travel",
      compatibility: "Compatible with all iPhone, Apple Watch, iPad, and AirPods models"
    }
  }
];

export const TRADE_IN_DEVICES = [
  { model: "iPhone 16 Pro Max", maxCredit: 75000 },
  { model: "iPhone 16 Pro", maxCredit: 62000 },
  { model: "iPhone 15 Pro Max", maxCredit: 52000 },
  { model: "iPhone 15 Pro", maxCredit: 44000 },
  { model: "iPhone 15", maxCredit: 34000 },
  { model: "iPhone 14 Pro Max", maxCredit: 36000 },
  { model: "iPhone 14 Pro", maxCredit: 30000 },
  { model: "iPhone 13", maxCredit: 20000 }
];
