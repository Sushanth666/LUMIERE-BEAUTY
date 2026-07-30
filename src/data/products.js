// Mock product data for the Beauty E-Commerce Platform (450 Products)
export const categories = [
  {
    "id": "skincare",
    "name": "Skincare",
    "icon": "🧴",
    "color": "#f9b8c4",
    "count": 140,
    "image": "/assets/images/skincare/serum.png"
  },
  {
    "id": "makeup",
    "name": "Makeup",
    "icon": "💄",
    "color": "#e879a0",
    "count": 130,
    "image": "/assets/images/makeup/lipstick.png"
  },
  {
    "id": "haircare",
    "name": "Haircare",
    "icon": "💆",
    "color": "#c4b5fd",
    "count": 70,
    "image": "/assets/images/haircare/hair_serum.png"
  },
  {
    "id": "fragrance",
    "name": "Fragrances",
    "icon": "🌸",
    "color": "#fcd34d",
    "count": 50,
    "image": "/assets/images/fragrance/rose_oud.png"
  },
  {
    "id": "bodycare",
    "name": "Body Care",
    "icon": "🛁",
    "color": "#6ee7b7",
    "count": 40,
    "image": "/assets/images/bodycare/body_butter.png"
  },
  {
    "id": "accessories",
    "name": "Accessories",
    "icon": "🪞",
    "color": "#93c5fd",
    "count": 20,
    "image": "/assets/images/accessories/jade_roller.png"
  }
];

export const brands = [
  "Lumière Paris",
  "Lumière Lab",
  "Lumière Éclat",
  "Lumière Velvet",
  "Lumière Botanica",
  "Lumière NovaDerm",
  "Lumière Pure Bliss"
];

export const skinTypes = [
  "Normal",
  "Dry",
  "Oily",
  "Combination",
  "Sensitive",
  "All"
];

export const products = [
  {
    "id": 1,
    "name": "Lumière Radiance Glow Serum",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 3199,
    "originalPrice": 3967,
    "discount": 19,
    "rating": 4.4,
    "reviewCount": 950,
    "badge": "bestseller",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p1_lumi_re_radiance_glow_serum.png"
    ],
    "description": "Premium radiance glow serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "radiance",
      "glow serum",
      "clean beauty"
    ]
  },
  {
    "id": 2,
    "name": "Lumière Midnight Repair Hydrating Cleanser",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1299,
    "originalPrice": 1767,
    "discount": 26,
    "rating": 4.7,
    "reviewCount": 974,
    "badge": "new",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p2_lumi_re_midnight_repair_hydrating_cleanser.png"
    ],
    "description": "Premium midnight repair hydrating cleanser engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "hydrating cleanser",
      "clean beauty"
    ]
  },
  {
    "id": 3,
    "name": "Lumière Ultra Hydrating Barrier Cream",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 1099,
    "originalPrice": 1330,
    "discount": 17,
    "rating": 4.7,
    "reviewCount": 974,
    "badge": "trending",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p3_lumi_re_ultra_hydrating_barrier_cream.png"
    ],
    "description": "Premium ultra hydrating barrier cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "barrier cream",
      "clean beauty"
    ]
  },
  {
    "id": 4,
    "name": "Lumière Youth Renew Anti-Aging Elixir",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 1099,
    "originalPrice": 1308,
    "discount": 16,
    "rating": 4.8,
    "reviewCount": 2090,
    "badge": "sale",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p4_lumi_re_youth_renew_anti_aging_elixir.png"
    ],
    "description": "Premium youth renew anti-aging elixir engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "youth renew",
      "anti-aging elixir",
      "clean beauty"
    ]
  },
  {
    "id": 5,
    "name": "Lumière Deep Cleanse Eye Cream",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 699,
    "originalPrice": 930,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 1389,
    "badge": "limited",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p5_lumi_re_deep_cleanse_eye_cream.png"
    ],
    "description": "Premium deep cleanse eye cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "eye cream",
      "clean beauty"
    ]
  },
  {
    "id": 6,
    "name": "Lumière Pore Refining Exfoliating Toner",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 2399,
    "originalPrice": 2903,
    "discount": 17,
    "rating": 4.4,
    "reviewCount": 1452,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p6_lumi_re_pore_refining_exfoliating_toner.png"
    ],
    "description": "Premium pore refining exfoliating toner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "exfoliating toner",
      "clean beauty"
    ]
  },
  {
    "id": 7,
    "name": "Lumière Barrier Shield Clarifying Lotion",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2699,
    "originalPrice": 3401,
    "discount": 21,
    "rating": 4.8,
    "reviewCount": 1263,
    "badge": null,
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p7_lumi_re_barrier_shield_clarifying_lotion.png"
    ],
    "description": "Premium barrier shield clarifying lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "barrier shield",
      "clarifying lotion",
      "clean beauty"
    ]
  },
  {
    "id": 8,
    "name": "Lumière Calming Botanicals Peptide Essence",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 699,
    "originalPrice": 965,
    "discount": 28,
    "rating": 5,
    "reviewCount": 1479,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p8_lumi_re_calming_botanicals_peptide_essence.png"
    ],
    "description": "Premium calming botanicals peptide essence engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "peptide essence",
      "clean beauty"
    ]
  },
  {
    "id": 9,
    "name": "Lumière Dewy Glow Squalane Oil",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 2499,
    "originalPrice": 3199,
    "discount": 22,
    "rating": 4.5,
    "reviewCount": 2606,
    "badge": "bestseller",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p9_lumi_re_dewy_glow_squalane_oil.png"
    ],
    "description": "Premium dewy glow squalane oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "squalane oil",
      "clean beauty"
    ]
  },
  {
    "id": 10,
    "name": "Lumière Advanced Renewal Niacinamide Drops",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 3399,
    "originalPrice": 4215,
    "discount": 19,
    "rating": 4.5,
    "reviewCount": 1005,
    "badge": "new",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p10_lumi_re_advanced_renewal_niacinamide_drops.png"
    ],
    "description": "Premium advanced renewal niacinamide drops engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "advanced renewal",
      "niacinamide drops",
      "clean beauty"
    ]
  },
  {
    "id": 11,
    "name": "Lumière Pure Vitality Clay Mask",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 3799,
    "originalPrice": 4749,
    "discount": 20,
    "rating": 4.8,
    "reviewCount": 1448,
    "badge": "trending",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p11_lumi_re_pure_vitality_clay_mask.png"
    ],
    "description": "Premium pure vitality clay mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "clay mask",
      "clean beauty"
    ]
  },
  {
    "id": 12,
    "name": "Lumière Illuminating Sleeping Pack",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 1899,
    "originalPrice": 2241,
    "discount": 15,
    "rating": 4.5,
    "reviewCount": 441,
    "badge": "sale",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p12_lumi_re_illuminating_sleeping_pack.png"
    ],
    "description": "Premium illuminating sleeping pack engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "sleeping pack",
      "clean beauty"
    ]
  },
  {
    "id": 13,
    "name": "Lumière Nutri-Complex Sunscreen Fluid",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 2099,
    "originalPrice": 2414,
    "discount": 13,
    "rating": 4.8,
    "reviewCount": 523,
    "badge": "limited",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p13_lumi_re_nutri_complex_sunscreen_fluid.png"
    ],
    "description": "Premium nutri-complex sunscreen fluid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "nutri-complex",
      "sunscreen fluid",
      "clean beauty"
    ]
  },
  {
    "id": 14,
    "name": "Lumière Bio-Cellular Caffeine Eye Gel",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 699,
    "originalPrice": 916,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 973,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p14_lumi_re_bio_cellular_caffeine_eye_gel.png"
    ],
    "description": "Premium bio-cellular caffeine eye gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "caffeine eye gel",
      "clean beauty"
    ]
  },
  {
    "id": 15,
    "name": "Lumière Organic Blossom Lip Repair Balm",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 3899,
    "originalPrice": 4718,
    "discount": 17,
    "rating": 4.7,
    "reviewCount": 629,
    "badge": null,
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p15_lumi_re_organic_blossom_lip_repair_balm.png"
    ],
    "description": "Premium organic blossom lip repair balm engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "lip repair balm",
      "clean beauty"
    ]
  },
  {
    "id": 16,
    "name": "Lumière Radiance Centella Soothing Gel",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1399,
    "originalPrice": 1847,
    "discount": 24,
    "rating": 4.7,
    "reviewCount": 258,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p16_lumi_re_radiance_centella_soothing_gel.png"
    ],
    "description": "Premium radiance centella soothing gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "radiance",
      "centella soothing gel",
      "clean beauty"
    ]
  },
  {
    "id": 17,
    "name": "Lumière Midnight Repair Bakuchiol Oil Serum",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 1999,
    "originalPrice": 2459,
    "discount": 19,
    "rating": 4.4,
    "reviewCount": 2406,
    "badge": "bestseller",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p17_lumi_re_midnight_repair_bakuchiol_oil_serum.png"
    ],
    "description": "Premium midnight repair bakuchiol oil serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "bakuchiol oil serum",
      "clean beauty"
    ]
  },
  {
    "id": 18,
    "name": "Lumière Ultra Hydrating AHA BHA Liquid",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 1699,
    "originalPrice": 2294,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 1636,
    "badge": "new",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p18_lumi_re_ultra_hydrating_aha_bha_liquid.png"
    ],
    "description": "Premium ultra hydrating aha bha liquid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "aha bha liquid",
      "clean beauty"
    ]
  },
  {
    "id": 19,
    "name": "Lumière Youth Renew Micro-Dermabrasion Scrub",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 3799,
    "originalPrice": 4483,
    "discount": 15,
    "rating": 4.5,
    "reviewCount": 825,
    "badge": "trending",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p19_lumi_re_youth_renew_micro_dermabrasion_scrub.png"
    ],
    "description": "Premium youth renew micro-dermabrasion scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "youth renew",
      "micro-dermabrasion scrub",
      "clean beauty"
    ]
  },
  {
    "id": 20,
    "name": "Lumière Deep Cleanse Vitamin C Concentrate",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 2899,
    "originalPrice": 3943,
    "discount": 26,
    "rating": 4.6,
    "reviewCount": 1474,
    "badge": "sale",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p20_lumi_re_deep_cleanse_vitamin_c_concentrate.png"
    ],
    "description": "Premium deep cleanse vitamin c concentrate engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "vitamin c concentrate",
      "clean beauty"
    ]
  },
  {
    "id": 21,
    "name": "Lumière Pore Refining Ferulic Acid Booster",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 799,
    "originalPrice": 1015,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 1153,
    "badge": "limited",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p21_lumi_re_pore_refining_ferulic_acid_booster.png"
    ],
    "description": "Premium pore refining ferulic acid booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "ferulic acid booster",
      "clean beauty"
    ]
  },
  {
    "id": 22,
    "name": "Lumière Barrier Shield Collagen Firming Cream",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 999,
    "originalPrice": 1179,
    "discount": 15,
    "rating": 4.9,
    "reviewCount": 396,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p22_lumi_re_barrier_shield_collagen_firming_cream.png"
    ],
    "description": "Premium barrier shield collagen firming cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "barrier shield",
      "collagen firming cream",
      "clean beauty"
    ]
  },
  {
    "id": 23,
    "name": "Lumière Calming Botanicals Hydrosol Mist",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 3299,
    "originalPrice": 4388,
    "discount": 25,
    "rating": 4.6,
    "reviewCount": 1391,
    "badge": null,
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p23_lumi_re_calming_botanicals_hydrosol_mist.png"
    ],
    "description": "Premium calming botanicals hydrosol mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "hydrosol mist",
      "clean beauty"
    ]
  },
  {
    "id": 24,
    "name": "Lumière Dewy Glow Glow Serum 2",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 899,
    "originalPrice": 1079,
    "discount": 17,
    "rating": 4.8,
    "reviewCount": 1001,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p24_lumi_re_dewy_glow_glow_serum_2.png"
    ],
    "description": "Premium dewy glow glow serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "glow serum",
      "clean beauty"
    ]
  },
  {
    "id": 25,
    "name": "Lumière Advanced Renewal Hydrating Cleanser 2",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 3599,
    "originalPrice": 4859,
    "discount": 26,
    "rating": 4.5,
    "reviewCount": 1165,
    "badge": "bestseller",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p25_lumi_re_advanced_renewal_hydrating_cleanser_2.png"
    ],
    "description": "Premium advanced renewal hydrating cleanser engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "advanced renewal",
      "hydrating cleanser",
      "clean beauty"
    ]
  },
  {
    "id": 26,
    "name": "Lumière Pure Vitality Barrier Cream 2",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 3599,
    "originalPrice": 4607,
    "discount": 22,
    "rating": 4.9,
    "reviewCount": 213,
    "badge": "new",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p26_lumi_re_pure_vitality_barrier_cream_2.png"
    ],
    "description": "Premium pure vitality barrier cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "barrier cream",
      "clean beauty"
    ]
  },
  {
    "id": 27,
    "name": "Lumière Illuminating Anti-Aging Elixir 2",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 3599,
    "originalPrice": 4751,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 1051,
    "badge": "trending",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p27_lumi_re_illuminating_anti_aging_elixir_2.png"
    ],
    "description": "Premium illuminating anti-aging elixir engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "anti-aging elixir",
      "clean beauty"
    ]
  },
  {
    "id": 28,
    "name": "Lumière Nutri-Complex Eye Cream 2",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2999,
    "originalPrice": 4169,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 2235,
    "badge": "sale",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p28_lumi_re_nutri_complex_eye_cream_2.png"
    ],
    "description": "Premium nutri-complex eye cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "nutri-complex",
      "eye cream",
      "clean beauty"
    ]
  },
  {
    "id": 29,
    "name": "Lumière Bio-Cellular Exfoliating Toner 2",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 799,
    "originalPrice": 1007,
    "discount": 21,
    "rating": 4.6,
    "reviewCount": 722,
    "badge": "limited",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p29_lumi_re_bio_cellular_exfoliating_toner_2.png"
    ],
    "description": "Premium bio-cellular exfoliating toner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "exfoliating toner",
      "clean beauty"
    ]
  },
  {
    "id": 30,
    "name": "Lumière Organic Blossom Clarifying Lotion 2",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1199,
    "originalPrice": 1595,
    "discount": 25,
    "rating": 4.7,
    "reviewCount": 290,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p30_lumi_re_organic_blossom_clarifying_lotion_2.png"
    ],
    "description": "Premium organic blossom clarifying lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "clarifying lotion",
      "clean beauty"
    ]
  },
  {
    "id": 31,
    "name": "Lumière Radiance Peptide Essence 2",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 999,
    "originalPrice": 1159,
    "discount": 14,
    "rating": 4.8,
    "reviewCount": 2246,
    "badge": null,
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p31_lumi_re_radiance_peptide_essence_2.png"
    ],
    "description": "Premium radiance peptide essence engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "radiance",
      "peptide essence",
      "clean beauty"
    ]
  },
  {
    "id": 32,
    "name": "Lumière Midnight Repair Squalane Oil 2",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 1899,
    "originalPrice": 2241,
    "discount": 15,
    "rating": 4.7,
    "reviewCount": 1977,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p32_lumi_re_midnight_repair_squalane_oil_2.png"
    ],
    "description": "Premium midnight repair squalane oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "squalane oil",
      "clean beauty"
    ]
  },
  {
    "id": 33,
    "name": "Lumière Ultra Hydrating Niacinamide Drops 2",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 2599,
    "originalPrice": 3119,
    "discount": 17,
    "rating": 4.8,
    "reviewCount": 446,
    "badge": "bestseller",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p33_lumi_re_ultra_hydrating_niacinamide_drops_2.png"
    ],
    "description": "Premium ultra hydrating niacinamide drops engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "niacinamide drops",
      "clean beauty"
    ]
  },
  {
    "id": 34,
    "name": "Lumière Youth Renew Clay Mask 2",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 1799,
    "originalPrice": 2339,
    "discount": 23,
    "rating": 4.5,
    "reviewCount": 1641,
    "badge": "new",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p34_lumi_re_youth_renew_clay_mask_2.png"
    ],
    "description": "Premium youth renew clay mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "youth renew",
      "clay mask",
      "clean beauty"
    ]
  },
  {
    "id": 35,
    "name": "Lumière Deep Cleanse Sleeping Pack 2",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2699,
    "originalPrice": 3131,
    "discount": 14,
    "rating": 4.5,
    "reviewCount": 2041,
    "badge": "trending",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p35_lumi_re_deep_cleanse_sleeping_pack_2.png"
    ],
    "description": "Premium deep cleanse sleeping pack engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "sleeping pack",
      "clean beauty"
    ]
  },
  {
    "id": 36,
    "name": "Lumière Pore Refining Sunscreen Fluid 2",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 799,
    "originalPrice": 1095,
    "discount": 27,
    "rating": 4.9,
    "reviewCount": 2284,
    "badge": "sale",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p36_lumi_re_pore_refining_sunscreen_fluid_2.png"
    ],
    "description": "Premium pore refining sunscreen fluid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "sunscreen fluid",
      "clean beauty"
    ]
  },
  {
    "id": 37,
    "name": "Lumière Barrier Shield Caffeine Eye Gel 2",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1899,
    "originalPrice": 2184,
    "discount": 13,
    "rating": 5,
    "reviewCount": 498,
    "badge": "limited",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p37_lumi_re_barrier_shield_caffeine_eye_gel_2.png"
    ],
    "description": "Premium barrier shield caffeine eye gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "barrier shield",
      "caffeine eye gel",
      "clean beauty"
    ]
  },
  {
    "id": 38,
    "name": "Lumière Calming Botanicals Lip Repair Balm 2",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 2199,
    "originalPrice": 2859,
    "discount": 23,
    "rating": 4.5,
    "reviewCount": 1644,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p38_lumi_re_calming_botanicals_lip_repair_balm_2.png"
    ],
    "description": "Premium calming botanicals lip repair balm engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "lip repair balm",
      "clean beauty"
    ]
  },
  {
    "id": 39,
    "name": "Lumière Dewy Glow Centella Soothing Gel 2",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 2599,
    "originalPrice": 3275,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 1646,
    "badge": null,
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p39_lumi_re_dewy_glow_centella_soothing_gel_2.png"
    ],
    "description": "Premium dewy glow centella soothing gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "centella soothing gel",
      "clean beauty"
    ]
  },
  {
    "id": 40,
    "name": "Lumière Advanced Renewal Bakuchiol Oil Serum 2",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 1099,
    "originalPrice": 1385,
    "discount": 21,
    "rating": 4.8,
    "reviewCount": 698,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p40_lumi_re_advanced_renewal_bakuchiol_oil_serum_2.png"
    ],
    "description": "Premium advanced renewal bakuchiol oil serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "advanced renewal",
      "bakuchiol oil serum",
      "clean beauty"
    ]
  },
  {
    "id": 41,
    "name": "Lumière Pure Vitality AHA BHA Liquid 2",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 3399,
    "originalPrice": 4589,
    "discount": 26,
    "rating": 4.8,
    "reviewCount": 1734,
    "badge": "bestseller",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p41_lumi_re_pure_vitality_aha_bha_liquid_2.png"
    ],
    "description": "Premium pure vitality aha bha liquid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "aha bha liquid",
      "clean beauty"
    ]
  },
  {
    "id": 42,
    "name": "Lumière Illuminating Micro-Dermabrasion Scrub 2",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2399,
    "originalPrice": 2879,
    "discount": 17,
    "rating": 4.7,
    "reviewCount": 1460,
    "badge": "new",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p42_lumi_re_illuminating_micro_dermabrasion_scrub_2.png"
    ],
    "description": "Premium illuminating micro-dermabrasion scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "micro-dermabrasion scrub",
      "clean beauty"
    ]
  },
  {
    "id": 43,
    "name": "Lumière Nutri-Complex Vitamin C Concentrate 2",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 2299,
    "originalPrice": 3196,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 803,
    "badge": "trending",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p43_lumi_re_nutri_complex_vitamin_c_concentrate_2.png"
    ],
    "description": "Premium nutri-complex vitamin c concentrate engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "nutri-complex",
      "vitamin c concentrate",
      "clean beauty"
    ]
  },
  {
    "id": 44,
    "name": "Lumière Bio-Cellular Ferulic Acid Booster 2",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 3199,
    "originalPrice": 4223,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 658,
    "badge": "sale",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p44_lumi_re_bio_cellular_ferulic_acid_booster_2.png"
    ],
    "description": "Premium bio-cellular ferulic acid booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "ferulic acid booster",
      "clean beauty"
    ]
  },
  {
    "id": 45,
    "name": "Lumière Organic Blossom Collagen Firming Cream 2",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 3599,
    "originalPrice": 4463,
    "discount": 19,
    "rating": 4.8,
    "reviewCount": 2137,
    "badge": "limited",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p45_lumi_re_organic_blossom_collagen_firming_cream_2.png"
    ],
    "description": "Premium organic blossom collagen firming cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "collagen firming cream",
      "clean beauty"
    ]
  },
  {
    "id": 46,
    "name": "Lumière Radiance Hydrosol Mist 2",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 2599,
    "originalPrice": 3457,
    "discount": 25,
    "rating": 4.8,
    "reviewCount": 422,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p46_lumi_re_radiance_hydrosol_mist_2.png"
    ],
    "description": "Premium radiance hydrosol mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "radiance",
      "hydrosol mist",
      "clean beauty"
    ]
  },
  {
    "id": 47,
    "name": "Lumière Midnight Repair Glow Serum 3",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 2099,
    "originalPrice": 2792,
    "discount": 25,
    "rating": 4.7,
    "reviewCount": 1248,
    "badge": null,
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p47_lumi_re_midnight_repair_glow_serum_3.png"
    ],
    "description": "Premium midnight repair glow serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "glow serum",
      "clean beauty"
    ]
  },
  {
    "id": 48,
    "name": "Lumière Ultra Hydrating Hydrating Cleanser 3",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 899,
    "originalPrice": 1133,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 1622,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p48_lumi_re_ultra_hydrating_hydrating_cleanser_3.png"
    ],
    "description": "Premium ultra hydrating hydrating cleanser engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "hydrating cleanser",
      "clean beauty"
    ]
  },
  {
    "id": 49,
    "name": "Lumière Youth Renew Barrier Cream 3",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 599,
    "originalPrice": 785,
    "discount": 24,
    "rating": 4.4,
    "reviewCount": 1429,
    "badge": "bestseller",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p49_lumi_re_youth_renew_barrier_cream_3.png"
    ],
    "description": "Premium youth renew barrier cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "youth renew",
      "barrier cream",
      "clean beauty"
    ]
  },
  {
    "id": 50,
    "name": "Lumière Deep Cleanse Anti-Aging Elixir 3",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 2899,
    "originalPrice": 3856,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 2043,
    "badge": "new",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p50_lumi_re_deep_cleanse_anti_aging_elixir_3.png"
    ],
    "description": "Premium deep cleanse anti-aging elixir engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "anti-aging elixir",
      "clean beauty"
    ]
  },
  {
    "id": 51,
    "name": "Lumière Pore Refining Eye Cream 3",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1999,
    "originalPrice": 2739,
    "discount": 27,
    "rating": 5,
    "reviewCount": 634,
    "badge": "trending",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p51_lumi_re_pore_refining_eye_cream_3.png"
    ],
    "description": "Premium pore refining eye cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "eye cream",
      "clean beauty"
    ]
  },
  {
    "id": 52,
    "name": "Lumière Barrier Shield Exfoliating Toner 3",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 999,
    "originalPrice": 1209,
    "discount": 17,
    "rating": 4.8,
    "reviewCount": 671,
    "badge": "sale",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p52_lumi_re_barrier_shield_exfoliating_toner_3.png"
    ],
    "description": "Premium barrier shield exfoliating toner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "barrier shield",
      "exfoliating toner",
      "clean beauty"
    ]
  },
  {
    "id": 53,
    "name": "Lumière Calming Botanicals Clarifying Lotion 3",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 799,
    "originalPrice": 1023,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 534,
    "badge": "limited",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p53_lumi_re_calming_botanicals_clarifying_lotion_3.png"
    ],
    "description": "Premium calming botanicals clarifying lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "clarifying lotion",
      "clean beauty"
    ]
  },
  {
    "id": 54,
    "name": "Lumière Dewy Glow Peptide Essence 3",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 3399,
    "originalPrice": 3909,
    "discount": 13,
    "rating": 4.5,
    "reviewCount": 2294,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p54_lumi_re_dewy_glow_peptide_essence_3.png"
    ],
    "description": "Premium dewy glow peptide essence engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "peptide essence",
      "clean beauty"
    ]
  },
  {
    "id": 55,
    "name": "Lumière Advanced Renewal Squalane Oil 3",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 1899,
    "originalPrice": 2488,
    "discount": 24,
    "rating": 4.7,
    "reviewCount": 1353,
    "badge": null,
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p55_lumi_re_advanced_renewal_squalane_oil_3.png"
    ],
    "description": "Premium advanced renewal squalane oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "advanced renewal",
      "squalane oil",
      "clean beauty"
    ]
  },
  {
    "id": 56,
    "name": "Lumière Pure Vitality Niacinamide Drops 3",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2099,
    "originalPrice": 2519,
    "discount": 17,
    "rating": 4.9,
    "reviewCount": 806,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p56_lumi_re_pure_vitality_niacinamide_drops_3.png"
    ],
    "description": "Premium pure vitality niacinamide drops engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "niacinamide drops",
      "clean beauty"
    ]
  },
  {
    "id": 57,
    "name": "Lumière Illuminating Clay Mask 3",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 3899,
    "originalPrice": 4757,
    "discount": 18,
    "rating": 4.8,
    "reviewCount": 635,
    "badge": "bestseller",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p57_lumi_re_illuminating_clay_mask_3.png"
    ],
    "description": "Premium illuminating clay mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "clay mask",
      "clean beauty"
    ]
  },
  {
    "id": 58,
    "name": "Lumière Nutri-Complex Sleeping Pack 3",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 3599,
    "originalPrice": 4427,
    "discount": 19,
    "rating": 4.9,
    "reviewCount": 465,
    "badge": "new",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p58_lumi_re_nutri_complex_sleeping_pack_3.png"
    ],
    "description": "Premium nutri-complex sleeping pack engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "nutri-complex",
      "sleeping pack",
      "clean beauty"
    ]
  },
  {
    "id": 59,
    "name": "Lumière Bio-Cellular Sunscreen Fluid 3",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 2099,
    "originalPrice": 2456,
    "discount": 15,
    "rating": 4.7,
    "reviewCount": 466,
    "badge": "trending",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p59_lumi_re_bio_cellular_sunscreen_fluid_3.png"
    ],
    "description": "Premium bio-cellular sunscreen fluid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "sunscreen fluid",
      "clean beauty"
    ]
  },
  {
    "id": 60,
    "name": "Lumière Organic Blossom Caffeine Eye Gel 3",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 3199,
    "originalPrice": 4415,
    "discount": 28,
    "rating": 5,
    "reviewCount": 2053,
    "badge": "sale",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p60_lumi_re_organic_blossom_caffeine_eye_gel_3.png"
    ],
    "description": "Premium organic blossom caffeine eye gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "caffeine eye gel",
      "clean beauty"
    ]
  },
  {
    "id": 61,
    "name": "Lumière Radiance Lip Repair Balm 3",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 1699,
    "originalPrice": 2362,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 1919,
    "badge": "limited",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p61_lumi_re_radiance_lip_repair_balm_3.png"
    ],
    "description": "Premium radiance lip repair balm engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "radiance",
      "lip repair balm",
      "clean beauty"
    ]
  },
  {
    "id": 62,
    "name": "Lumière Midnight Repair Centella Soothing Gel 3",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 699,
    "originalPrice": 916,
    "discount": 24,
    "rating": 4.8,
    "reviewCount": 1228,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p62_lumi_re_midnight_repair_centella_soothing_gel_3.png"
    ],
    "description": "Premium midnight repair centella soothing gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "centella soothing gel",
      "clean beauty"
    ]
  },
  {
    "id": 63,
    "name": "Lumière Ultra Hydrating Bakuchiol Oil Serum 3",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2699,
    "originalPrice": 3266,
    "discount": 17,
    "rating": 4.6,
    "reviewCount": 2475,
    "badge": null,
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p63_lumi_re_ultra_hydrating_bakuchiol_oil_serum_3.png"
    ],
    "description": "Premium ultra hydrating bakuchiol oil serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "bakuchiol oil serum",
      "clean beauty"
    ]
  },
  {
    "id": 64,
    "name": "Lumière Youth Renew AHA BHA Liquid 3",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 2899,
    "originalPrice": 3392,
    "discount": 15,
    "rating": 4.4,
    "reviewCount": 505,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p64_lumi_re_youth_renew_aha_bha_liquid_3.png"
    ],
    "description": "Premium youth renew aha bha liquid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "youth renew",
      "aha bha liquid",
      "clean beauty"
    ]
  },
  {
    "id": 65,
    "name": "Lumière Deep Cleanse Micro-Dermabrasion Scrub 3",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 3499,
    "originalPrice": 4619,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 1169,
    "badge": "bestseller",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p65_lumi_re_deep_cleanse_micro_dermabrasion_scrub_3.png"
    ],
    "description": "Premium deep cleanse micro-dermabrasion scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "micro-dermabrasion scrub",
      "clean beauty"
    ]
  },
  {
    "id": 66,
    "name": "Lumière Pore Refining Vitamin C Concentrate 3",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 1199,
    "originalPrice": 1583,
    "discount": 24,
    "rating": 4.7,
    "reviewCount": 1668,
    "badge": "new",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p66_lumi_re_pore_refining_vitamin_c_concentrate_3.png"
    ],
    "description": "Premium pore refining vitamin c concentrate engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "vitamin c concentrate",
      "clean beauty"
    ]
  },
  {
    "id": 67,
    "name": "Lumière Barrier Shield Ferulic Acid Booster 3",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 2299,
    "originalPrice": 3173,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 595,
    "badge": "trending",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p67_lumi_re_barrier_shield_ferulic_acid_booster_3.png"
    ],
    "description": "Premium barrier shield ferulic acid booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "barrier shield",
      "ferulic acid booster",
      "clean beauty"
    ]
  },
  {
    "id": 68,
    "name": "Lumière Calming Botanicals Collagen Firming Cream 3",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 3699,
    "originalPrice": 4994,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 1845,
    "badge": "sale",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p68_lumi_re_calming_botanicals_collagen_firming_cream_3.png"
    ],
    "description": "Premium calming botanicals collagen firming cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "collagen firming cream",
      "clean beauty"
    ]
  },
  {
    "id": 69,
    "name": "Lumière Dewy Glow Hydrosol Mist 3",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 1199,
    "originalPrice": 1619,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 1899,
    "badge": "limited",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p69_lumi_re_dewy_glow_hydrosol_mist_3.png"
    ],
    "description": "Premium dewy glow hydrosol mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "hydrosol mist",
      "clean beauty"
    ]
  },
  {
    "id": 70,
    "name": "Lumière Advanced Renewal Glow Serum 4",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 1699,
    "originalPrice": 2141,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 1451,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p70_lumi_re_advanced_renewal_glow_serum_4.png"
    ],
    "description": "Premium advanced renewal glow serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "advanced renewal",
      "glow serum",
      "clean beauty"
    ]
  },
  {
    "id": 71,
    "name": "Lumière Pure Vitality Hydrating Cleanser 4",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 3299,
    "originalPrice": 4520,
    "discount": 27,
    "rating": 4.7,
    "reviewCount": 2221,
    "badge": null,
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p71_lumi_re_pure_vitality_hydrating_cleanser_4.png"
    ],
    "description": "Premium pure vitality hydrating cleanser engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "hydrating cleanser",
      "clean beauty"
    ]
  },
  {
    "id": 72,
    "name": "Lumière Illuminating Barrier Cream 4",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 699,
    "originalPrice": 839,
    "discount": 17,
    "rating": 4.8,
    "reviewCount": 455,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p72_lumi_re_illuminating_barrier_cream_4.png"
    ],
    "description": "Premium illuminating barrier cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "barrier cream",
      "clean beauty"
    ]
  },
  {
    "id": 73,
    "name": "Lumière Nutri-Complex Anti-Aging Elixir 4",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 3199,
    "originalPrice": 4127,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 2613,
    "badge": "bestseller",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p73_lumi_re_nutri_complex_anti_aging_elixir_4.png"
    ],
    "description": "Premium nutri-complex anti-aging elixir engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "nutri-complex",
      "anti-aging elixir",
      "clean beauty"
    ]
  },
  {
    "id": 74,
    "name": "Lumière Bio-Cellular Eye Cream 4",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 3199,
    "originalPrice": 3679,
    "discount": 13,
    "rating": 4.8,
    "reviewCount": 2108,
    "badge": "new",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p74_lumi_re_bio_cellular_eye_cream_4.png"
    ],
    "description": "Premium bio-cellular eye cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "eye cream",
      "clean beauty"
    ]
  },
  {
    "id": 75,
    "name": "Lumière Organic Blossom Exfoliating Toner 4",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 1099,
    "originalPrice": 1396,
    "discount": 21,
    "rating": 4.8,
    "reviewCount": 2156,
    "badge": "trending",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p75_lumi_re_organic_blossom_exfoliating_toner_4.png"
    ],
    "description": "Premium organic blossom exfoliating toner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "exfoliating toner",
      "clean beauty"
    ]
  },
  {
    "id": 76,
    "name": "Lumière Radiance Clarifying Lotion 4",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 2899,
    "originalPrice": 3537,
    "discount": 18,
    "rating": 4.4,
    "reviewCount": 1226,
    "badge": "sale",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p76_lumi_re_radiance_clarifying_lotion_4.png"
    ],
    "description": "Premium radiance clarifying lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "radiance",
      "clarifying lotion",
      "clean beauty"
    ]
  },
  {
    "id": 77,
    "name": "Lumière Midnight Repair Peptide Essence 4",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 3399,
    "originalPrice": 4351,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 2379,
    "badge": "limited",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p77_lumi_re_midnight_repair_peptide_essence_4.png"
    ],
    "description": "Premium midnight repair peptide essence engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "peptide essence",
      "clean beauty"
    ]
  },
  {
    "id": 78,
    "name": "Lumière Ultra Hydrating Squalane Oil 4",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 599,
    "originalPrice": 719,
    "discount": 17,
    "rating": 4.8,
    "reviewCount": 1020,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p78_lumi_re_ultra_hydrating_squalane_oil_4.png"
    ],
    "description": "Premium ultra hydrating squalane oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "squalane oil",
      "clean beauty"
    ]
  },
  {
    "id": 79,
    "name": "Lumière Youth Renew Niacinamide Drops 4",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 2899,
    "originalPrice": 3392,
    "discount": 15,
    "rating": 4.9,
    "reviewCount": 1569,
    "badge": null,
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p79_lumi_re_youth_renew_niacinamide_drops_4.png"
    ],
    "description": "Premium youth renew niacinamide drops engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "youth renew",
      "niacinamide drops",
      "clean beauty"
    ]
  },
  {
    "id": 80,
    "name": "Lumière Deep Cleanse Clay Mask 4",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 1399,
    "originalPrice": 1693,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 1993,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p80_lumi_re_deep_cleanse_clay_mask_4.png"
    ],
    "description": "Premium deep cleanse clay mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "clay mask",
      "clean beauty"
    ]
  },
  {
    "id": 81,
    "name": "Lumière Pore Refining Sleeping Pack 4",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 2699,
    "originalPrice": 3725,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 1811,
    "badge": "bestseller",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p81_lumi_re_pore_refining_sleeping_pack_4.png"
    ],
    "description": "Premium pore refining sleeping pack engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "sleeping pack",
      "clean beauty"
    ]
  },
  {
    "id": 82,
    "name": "Lumière Barrier Shield Sunscreen Fluid 4",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 1099,
    "originalPrice": 1528,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 587,
    "badge": "new",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p82_lumi_re_barrier_shield_sunscreen_fluid_4.png"
    ],
    "description": "Premium barrier shield sunscreen fluid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "barrier shield",
      "sunscreen fluid",
      "clean beauty"
    ]
  },
  {
    "id": 83,
    "name": "Lumière Calming Botanicals Caffeine Eye Gel 4",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 1699,
    "originalPrice": 2345,
    "discount": 28,
    "rating": 4.4,
    "reviewCount": 735,
    "badge": "trending",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p83_lumi_re_calming_botanicals_caffeine_eye_gel_4.png"
    ],
    "description": "Premium calming botanicals caffeine eye gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "caffeine eye gel",
      "clean beauty"
    ]
  },
  {
    "id": 84,
    "name": "Lumière Dewy Glow Lip Repair Balm 4",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2799,
    "originalPrice": 3471,
    "discount": 19,
    "rating": 5,
    "reviewCount": 2273,
    "badge": "sale",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p84_lumi_re_dewy_glow_lip_repair_balm_4.png"
    ],
    "description": "Premium dewy glow lip repair balm engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "lip repair balm",
      "clean beauty"
    ]
  },
  {
    "id": 85,
    "name": "Lumière Advanced Renewal Centella Soothing Gel 4",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 1299,
    "originalPrice": 1650,
    "discount": 21,
    "rating": 4.7,
    "reviewCount": 2005,
    "badge": "limited",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p85_lumi_re_advanced_renewal_centella_soothing_gel_4.png"
    ],
    "description": "Premium advanced renewal centella soothing gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "advanced renewal",
      "centella soothing gel",
      "clean beauty"
    ]
  },
  {
    "id": 86,
    "name": "Lumière Pure Vitality Bakuchiol Oil Serum 4",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 3499,
    "originalPrice": 4444,
    "discount": 21,
    "rating": 4.7,
    "reviewCount": 2160,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p86_lumi_re_pure_vitality_bakuchiol_oil_serum_4.png"
    ],
    "description": "Premium pure vitality bakuchiol oil serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "bakuchiol oil serum",
      "clean beauty"
    ]
  },
  {
    "id": 87,
    "name": "Lumière Illuminating AHA BHA Liquid 4",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 3199,
    "originalPrice": 3807,
    "discount": 16,
    "rating": 4.7,
    "reviewCount": 609,
    "badge": null,
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p87_lumi_re_illuminating_aha_bha_liquid_4.png"
    ],
    "description": "Premium illuminating aha bha liquid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "aha bha liquid",
      "clean beauty"
    ]
  },
  {
    "id": 88,
    "name": "Lumière Nutri-Complex Micro-Dermabrasion Scrub 4",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 2999,
    "originalPrice": 3839,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 1644,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p88_lumi_re_nutri_complex_micro_dermabrasion_scrub_4.png"
    ],
    "description": "Premium nutri-complex micro-dermabrasion scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "nutri-complex",
      "micro-dermabrasion scrub",
      "clean beauty"
    ]
  },
  {
    "id": 89,
    "name": "Lumière Bio-Cellular Vitamin C Concentrate 4",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 2499,
    "originalPrice": 3324,
    "discount": 25,
    "rating": 5,
    "reviewCount": 1419,
    "badge": "bestseller",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p89_lumi_re_bio_cellular_vitamin_c_concentrate_4.png"
    ],
    "description": "Premium bio-cellular vitamin c concentrate engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "vitamin c concentrate",
      "clean beauty"
    ]
  },
  {
    "id": 90,
    "name": "Lumière Organic Blossom Ferulic Acid Booster 4",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 499,
    "originalPrice": 594,
    "discount": 16,
    "rating": 4.9,
    "reviewCount": 2251,
    "badge": "new",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p90_lumi_re_organic_blossom_ferulic_acid_booster_4.png"
    ],
    "description": "Premium organic blossom ferulic acid booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "ferulic acid booster",
      "clean beauty"
    ]
  },
  {
    "id": 91,
    "name": "Lumière Radiance Collagen Firming Cream 4",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2799,
    "originalPrice": 3751,
    "discount": 25,
    "rating": 4.9,
    "reviewCount": 1239,
    "badge": "trending",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p91_lumi_re_radiance_collagen_firming_cream_4.png"
    ],
    "description": "Premium radiance collagen firming cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "radiance",
      "collagen firming cream",
      "clean beauty"
    ]
  },
  {
    "id": 92,
    "name": "Lumière Midnight Repair Hydrosol Mist 4",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 1299,
    "originalPrice": 1663,
    "discount": 22,
    "rating": 4.8,
    "reviewCount": 2604,
    "badge": "sale",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p92_lumi_re_midnight_repair_hydrosol_mist_4.png"
    ],
    "description": "Premium midnight repair hydrosol mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "hydrosol mist",
      "clean beauty"
    ]
  },
  {
    "id": 93,
    "name": "Lumière Ultra Hydrating Glow Serum 5",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1399,
    "originalPrice": 1791,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 1362,
    "badge": "limited",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p93_lumi_re_ultra_hydrating_glow_serum_5.png"
    ],
    "description": "Premium ultra hydrating glow serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "glow serum",
      "clean beauty"
    ]
  },
  {
    "id": 94,
    "name": "Lumière Youth Renew Hydrating Cleanser 5",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 1599,
    "originalPrice": 1887,
    "discount": 15,
    "rating": 5,
    "reviewCount": 1898,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p94_lumi_re_youth_renew_hydrating_cleanser_5.png"
    ],
    "description": "Premium youth renew hydrating cleanser engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "youth renew",
      "hydrating cleanser",
      "clean beauty"
    ]
  },
  {
    "id": 95,
    "name": "Lumière Deep Cleanse Barrier Cream 5",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 1199,
    "originalPrice": 1499,
    "discount": 20,
    "rating": 4.8,
    "reviewCount": 1515,
    "badge": null,
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p95_lumi_re_deep_cleanse_barrier_cream_5.png"
    ],
    "description": "Premium deep cleanse barrier cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "barrier cream",
      "clean beauty"
    ]
  },
  {
    "id": 96,
    "name": "Lumière Pore Refining Anti-Aging Elixir 5",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 3399,
    "originalPrice": 4351,
    "discount": 22,
    "rating": 4.9,
    "reviewCount": 2410,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p96_lumi_re_pore_refining_anti_aging_elixir_5.png"
    ],
    "description": "Premium pore refining anti-aging elixir engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "anti-aging elixir",
      "clean beauty"
    ]
  },
  {
    "id": 97,
    "name": "Lumière Barrier Shield Eye Cream 5",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 499,
    "originalPrice": 664,
    "discount": 25,
    "rating": 4.7,
    "reviewCount": 1000,
    "badge": "bestseller",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p97_lumi_re_barrier_shield_eye_cream_5.png"
    ],
    "description": "Premium barrier shield eye cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "barrier shield",
      "eye cream",
      "clean beauty"
    ]
  },
  {
    "id": 98,
    "name": "Lumière Calming Botanicals Exfoliating Toner 5",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 1799,
    "originalPrice": 2321,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 822,
    "badge": "new",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p98_lumi_re_calming_botanicals_exfoliating_toner_5.png"
    ],
    "description": "Premium calming botanicals exfoliating toner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "exfoliating toner",
      "clean beauty"
    ]
  },
  {
    "id": 99,
    "name": "Lumière Dewy Glow Clarifying Lotion 5",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 1499,
    "originalPrice": 1949,
    "discount": 23,
    "rating": 4.9,
    "reviewCount": 2519,
    "badge": "trending",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p99_lumi_re_dewy_glow_clarifying_lotion_5.png"
    ],
    "description": "Premium dewy glow clarifying lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "clarifying lotion",
      "clean beauty"
    ]
  },
  {
    "id": 100,
    "name": "Lumière Advanced Renewal Peptide Essence 5",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1299,
    "originalPrice": 1520,
    "discount": 15,
    "rating": 4.9,
    "reviewCount": 2076,
    "badge": "sale",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p100_lumi_re_advanced_renewal_peptide_essence_5.png"
    ],
    "description": "Premium advanced renewal peptide essence engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "advanced renewal",
      "peptide essence",
      "clean beauty"
    ]
  },
  {
    "id": 101,
    "name": "Lumière Pure Vitality Squalane Oil 5",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 599,
    "originalPrice": 767,
    "discount": 22,
    "rating": 4.5,
    "reviewCount": 2037,
    "badge": "limited",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p101_lumi_re_pure_vitality_squalane_oil_5.png"
    ],
    "description": "Premium pure vitality squalane oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "squalane oil",
      "clean beauty"
    ]
  },
  {
    "id": 102,
    "name": "Lumière Illuminating Niacinamide Drops 5",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 1699,
    "originalPrice": 2294,
    "discount": 26,
    "rating": 4.4,
    "reviewCount": 1085,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p102_lumi_re_illuminating_niacinamide_drops_5.png"
    ],
    "description": "Premium illuminating niacinamide drops engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "niacinamide drops",
      "clean beauty"
    ]
  },
  {
    "id": 103,
    "name": "Lumière Nutri-Complex Clay Mask 5",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 799,
    "originalPrice": 951,
    "discount": 16,
    "rating": 4.5,
    "reviewCount": 1238,
    "badge": null,
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p103_lumi_re_nutri_complex_clay_mask_5.png"
    ],
    "description": "Premium nutri-complex clay mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "nutri-complex",
      "clay mask",
      "clean beauty"
    ]
  },
  {
    "id": 104,
    "name": "Lumière Bio-Cellular Sleeping Pack 5",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 999,
    "originalPrice": 1319,
    "discount": 24,
    "rating": 5,
    "reviewCount": 2533,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p104_lumi_re_bio_cellular_sleeping_pack_5.png"
    ],
    "description": "Premium bio-cellular sleeping pack engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "sleeping pack",
      "clean beauty"
    ]
  },
  {
    "id": 105,
    "name": "Lumière Organic Blossom Sunscreen Fluid 5",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 2299,
    "originalPrice": 2851,
    "discount": 19,
    "rating": 4.8,
    "reviewCount": 1414,
    "badge": "bestseller",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p105_lumi_re_organic_blossom_sunscreen_fluid_5.png"
    ],
    "description": "Premium organic blossom sunscreen fluid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "sunscreen fluid",
      "clean beauty"
    ]
  },
  {
    "id": 106,
    "name": "Lumière Radiance Caffeine Eye Gel 5",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 2999,
    "originalPrice": 3629,
    "discount": 17,
    "rating": 4.8,
    "reviewCount": 341,
    "badge": "new",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p106_lumi_re_radiance_caffeine_eye_gel_5.png"
    ],
    "description": "Premium radiance caffeine eye gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "radiance",
      "caffeine eye gel",
      "clean beauty"
    ]
  },
  {
    "id": 107,
    "name": "Lumière Midnight Repair Lip Repair Balm 5",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 699,
    "originalPrice": 811,
    "discount": 14,
    "rating": 4.5,
    "reviewCount": 816,
    "badge": "trending",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p107_lumi_re_midnight_repair_lip_repair_balm_5.png"
    ],
    "description": "Premium midnight repair lip repair balm engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "lip repair balm",
      "clean beauty"
    ]
  },
  {
    "id": 108,
    "name": "Lumière Ultra Hydrating Centella Soothing Gel 5",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 1999,
    "originalPrice": 2379,
    "discount": 16,
    "rating": 4.5,
    "reviewCount": 210,
    "badge": "sale",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p108_lumi_re_ultra_hydrating_centella_soothing_gel_5.png"
    ],
    "description": "Premium ultra hydrating centella soothing gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "centella soothing gel",
      "clean beauty"
    ]
  },
  {
    "id": 109,
    "name": "Lumière Youth Renew Bakuchiol Oil Serum 5",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 3899,
    "originalPrice": 5303,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 234,
    "badge": "limited",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p109_lumi_re_youth_renew_bakuchiol_oil_serum_5.png"
    ],
    "description": "Premium youth renew bakuchiol oil serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "youth renew",
      "bakuchiol oil serum",
      "clean beauty"
    ]
  },
  {
    "id": 110,
    "name": "Lumière Deep Cleanse AHA BHA Liquid 5",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 2299,
    "originalPrice": 3081,
    "discount": 25,
    "rating": 5,
    "reviewCount": 309,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p110_lumi_re_deep_cleanse_aha_bha_liquid_5.png"
    ],
    "description": "Premium deep cleanse aha bha liquid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "aha bha liquid",
      "clean beauty"
    ]
  },
  {
    "id": 111,
    "name": "Lumière Pore Refining Micro-Dermabrasion Scrub 5",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 3099,
    "originalPrice": 4029,
    "discount": 23,
    "rating": 4.4,
    "reviewCount": 1917,
    "badge": null,
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p111_lumi_re_pore_refining_micro_dermabrasion_scrub_5.png"
    ],
    "description": "Premium pore refining micro-dermabrasion scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "micro-dermabrasion scrub",
      "clean beauty"
    ]
  },
  {
    "id": 112,
    "name": "Lumière Barrier Shield Vitamin C Concentrate 5",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 3299,
    "originalPrice": 4421,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 2517,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p112_lumi_re_barrier_shield_vitamin_c_concentrate_5.png"
    ],
    "description": "Premium barrier shield vitamin c concentrate engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "barrier shield",
      "vitamin c concentrate",
      "clean beauty"
    ]
  },
  {
    "id": 113,
    "name": "Lumière Calming Botanicals Ferulic Acid Booster 5",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 999,
    "originalPrice": 1259,
    "discount": 21,
    "rating": 4.7,
    "reviewCount": 724,
    "badge": "bestseller",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p113_lumi_re_calming_botanicals_ferulic_acid_booster_5.png"
    ],
    "description": "Premium calming botanicals ferulic acid booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "ferulic acid booster",
      "clean beauty"
    ]
  },
  {
    "id": 114,
    "name": "Lumière Dewy Glow Collagen Firming Cream 5",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1999,
    "originalPrice": 2519,
    "discount": 21,
    "rating": 4.9,
    "reviewCount": 1234,
    "badge": "new",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p114_lumi_re_dewy_glow_collagen_firming_cream_5.png"
    ],
    "description": "Premium dewy glow collagen firming cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "collagen firming cream",
      "clean beauty"
    ]
  },
  {
    "id": 115,
    "name": "Lumière Advanced Renewal Hydrosol Mist 5",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 1399,
    "originalPrice": 1679,
    "discount": 17,
    "rating": 4.4,
    "reviewCount": 326,
    "badge": "trending",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p115_lumi_re_advanced_renewal_hydrosol_mist_5.png"
    ],
    "description": "Premium advanced renewal hydrosol mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "advanced renewal",
      "hydrosol mist",
      "clean beauty"
    ]
  },
  {
    "id": 116,
    "name": "Lumière Pure Vitality Glow Serum 6",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 1799,
    "originalPrice": 2339,
    "discount": 23,
    "rating": 4.5,
    "reviewCount": 1459,
    "badge": "sale",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p116_lumi_re_pure_vitality_glow_serum_6.png"
    ],
    "description": "Premium pure vitality glow serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "glow serum",
      "clean beauty"
    ]
  },
  {
    "id": 117,
    "name": "Lumière Illuminating Hydrating Cleanser 6",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 1499,
    "originalPrice": 1904,
    "discount": 21,
    "rating": 5,
    "reviewCount": 2131,
    "badge": "limited",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p117_lumi_re_illuminating_hydrating_cleanser_6.png"
    ],
    "description": "Premium illuminating hydrating cleanser engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "hydrating cleanser",
      "clean beauty"
    ]
  },
  {
    "id": 118,
    "name": "Lumière Nutri-Complex Barrier Cream 6",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 1699,
    "originalPrice": 1988,
    "discount": 15,
    "rating": 4.5,
    "reviewCount": 137,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p118_lumi_re_nutri_complex_barrier_cream_6.png"
    ],
    "description": "Premium nutri-complex barrier cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "nutri-complex",
      "barrier cream",
      "clean beauty"
    ]
  },
  {
    "id": 119,
    "name": "Lumière Bio-Cellular Anti-Aging Elixir 6",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 599,
    "originalPrice": 785,
    "discount": 24,
    "rating": 4.8,
    "reviewCount": 544,
    "badge": null,
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p119_lumi_re_bio_cellular_anti_aging_elixir_6.png"
    ],
    "description": "Premium bio-cellular anti-aging elixir engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "anti-aging elixir",
      "clean beauty"
    ]
  },
  {
    "id": 120,
    "name": "Lumière Organic Blossom Eye Cream 6",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 2799,
    "originalPrice": 3303,
    "discount": 15,
    "rating": 4.7,
    "reviewCount": 2525,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p120_lumi_re_organic_blossom_eye_cream_6.png"
    ],
    "description": "Premium organic blossom eye cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "eye cream",
      "clean beauty"
    ]
  },
  {
    "id": 121,
    "name": "Lumière Radiance Exfoliating Toner 6",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1799,
    "originalPrice": 2303,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 1815,
    "badge": "bestseller",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p121_lumi_re_radiance_exfoliating_toner_6.png"
    ],
    "description": "Premium radiance exfoliating toner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "radiance",
      "exfoliating toner",
      "clean beauty"
    ]
  },
  {
    "id": 122,
    "name": "Lumière Midnight Repair Clarifying Lotion 6",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 999,
    "originalPrice": 1319,
    "discount": 24,
    "rating": 5,
    "reviewCount": 2157,
    "badge": "new",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p122_lumi_re_midnight_repair_clarifying_lotion_6.png"
    ],
    "description": "Premium midnight repair clarifying lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "clarifying lotion",
      "clean beauty"
    ]
  },
  {
    "id": 123,
    "name": "Lumière Ultra Hydrating Peptide Essence 6",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 1299,
    "originalPrice": 1715,
    "discount": 24,
    "rating": 4.5,
    "reviewCount": 2593,
    "badge": "trending",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p123_lumi_re_ultra_hydrating_peptide_essence_6.png"
    ],
    "description": "Premium ultra hydrating peptide essence engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "peptide essence",
      "clean beauty"
    ]
  },
  {
    "id": 124,
    "name": "Lumière Youth Renew Squalane Oil 6",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 1399,
    "originalPrice": 1791,
    "discount": 22,
    "rating": 4.8,
    "reviewCount": 1587,
    "badge": "sale",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p124_lumi_re_youth_renew_squalane_oil_6.png"
    ],
    "description": "Premium youth renew squalane oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "youth renew",
      "squalane oil",
      "clean beauty"
    ]
  },
  {
    "id": 125,
    "name": "Lumière Deep Cleanse Niacinamide Drops 6",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 3099,
    "originalPrice": 3874,
    "discount": 20,
    "rating": 4.5,
    "reviewCount": 935,
    "badge": "limited",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p125_lumi_re_deep_cleanse_niacinamide_drops_6.png"
    ],
    "description": "Premium deep cleanse niacinamide drops engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "niacinamide drops",
      "clean beauty"
    ]
  },
  {
    "id": 126,
    "name": "Lumière Pore Refining Clay Mask 6",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 3499,
    "originalPrice": 4654,
    "discount": 25,
    "rating": 5,
    "reviewCount": 737,
    "badge": null,
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p126_lumi_re_pore_refining_clay_mask_6.png"
    ],
    "description": "Premium pore refining clay mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pore refining",
      "clay mask",
      "clean beauty"
    ]
  },
  {
    "id": 127,
    "name": "Lumière Barrier Shield Sleeping Pack 6",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 3199,
    "originalPrice": 4223,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 2264,
    "badge": null,
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p127_lumi_re_barrier_shield_sleeping_pack_6.png"
    ],
    "description": "Premium barrier shield sleeping pack engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "barrier shield",
      "sleeping pack",
      "clean beauty"
    ]
  },
  {
    "id": 128,
    "name": "Lumière Calming Botanicals Sunscreen Fluid 6",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 3499,
    "originalPrice": 4024,
    "discount": 13,
    "rating": 4.5,
    "reviewCount": 1537,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p128_lumi_re_calming_botanicals_sunscreen_fluid_6.png"
    ],
    "description": "Premium calming botanicals sunscreen fluid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "calming botanicals",
      "sunscreen fluid",
      "clean beauty"
    ]
  },
  {
    "id": 129,
    "name": "Lumière Dewy Glow Caffeine Eye Gel 6",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 1099,
    "originalPrice": 1374,
    "discount": 20,
    "rating": 4.9,
    "reviewCount": 2214,
    "badge": "bestseller",
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p129_lumi_re_dewy_glow_caffeine_eye_gel_6.png"
    ],
    "description": "Premium dewy glow caffeine eye gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "dewy glow",
      "caffeine eye gel",
      "clean beauty"
    ]
  },
  {
    "id": 130,
    "name": "Lumière Advanced Renewal Lip Repair Balm 6",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 1399,
    "originalPrice": 1917,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 2391,
    "badge": "new",
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p130_lumi_re_advanced_renewal_lip_repair_balm_6.png"
    ],
    "description": "Premium advanced renewal lip repair balm engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "advanced renewal",
      "lip repair balm",
      "clean beauty"
    ]
  },
  {
    "id": 131,
    "name": "Lumière Pure Vitality Centella Soothing Gel 6",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 2299,
    "originalPrice": 2989,
    "discount": 23,
    "rating": 4.7,
    "reviewCount": 1812,
    "badge": "trending",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p131_lumi_re_pure_vitality_centella_soothing_gel_6.png"
    ],
    "description": "Premium pure vitality centella soothing gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "pure vitality",
      "centella soothing gel",
      "clean beauty"
    ]
  },
  {
    "id": 132,
    "name": "Lumière Illuminating Bakuchiol Oil Serum 6",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 3599,
    "originalPrice": 4931,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 1496,
    "badge": "sale",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p132_lumi_re_illuminating_bakuchiol_oil_serum_6.png"
    ],
    "description": "Premium illuminating bakuchiol oil serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "illuminating",
      "bakuchiol oil serum",
      "clean beauty"
    ]
  },
  {
    "id": 133,
    "name": "Lumière Nutri-Complex AHA BHA Liquid 6",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 3499,
    "originalPrice": 4409,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 1040,
    "badge": "limited",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p133_lumi_re_nutri_complex_aha_bha_liquid_6.png"
    ],
    "description": "Premium nutri-complex aha bha liquid engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "nutri-complex",
      "aha bha liquid",
      "clean beauty"
    ]
  },
  {
    "id": 134,
    "name": "Lumière Bio-Cellular Micro-Dermabrasion Scrub 6",
    "brand": "Lumière Paris",
    "category": "skincare",
    "price": 1699,
    "originalPrice": 2277,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 425,
    "badge": null,
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p134_lumi_re_bio_cellular_micro_dermabrasion_scrub_6.png"
    ],
    "description": "Premium bio-cellular micro-dermabrasion scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "bio-cellular",
      "micro-dermabrasion scrub",
      "clean beauty"
    ]
  },
  {
    "id": 135,
    "name": "Lumière Organic Blossom Vitamin C Concentrate 6",
    "brand": "Lumière Lab",
    "category": "skincare",
    "price": 1999,
    "originalPrice": 2559,
    "discount": 22,
    "rating": 4.5,
    "reviewCount": 585,
    "badge": null,
    "skinType": "Oily",
    "images": [
      "/assets/images/skincare/p135_lumi_re_organic_blossom_vitamin_c_concentrate_6.png"
    ],
    "description": "Premium organic blossom vitamin c concentrate engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "organic blossom",
      "vitamin c concentrate",
      "clean beauty"
    ]
  },
  {
    "id": 136,
    "name": "Lumière Radiance Ferulic Acid Booster 6",
    "brand": "Lumière Éclat",
    "category": "skincare",
    "price": 2199,
    "originalPrice": 2727,
    "discount": 19,
    "rating": 4.7,
    "reviewCount": 2335,
    "badge": null,
    "skinType": "Combination",
    "images": [
      "/assets/images/skincare/p136_lumi_re_radiance_ferulic_acid_booster_6.png"
    ],
    "description": "Premium radiance ferulic acid booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "radiance",
      "ferulic acid booster",
      "clean beauty"
    ]
  },
  {
    "id": 137,
    "name": "Lumière Midnight Repair Collagen Firming Cream 6",
    "brand": "Lumière Velvet",
    "category": "skincare",
    "price": 3099,
    "originalPrice": 4060,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 803,
    "badge": "bestseller",
    "skinType": "Sensitive",
    "images": [
      "/assets/images/skincare/p137_lumi_re_midnight_repair_collagen_firming_cream_6.png"
    ],
    "description": "Premium midnight repair collagen firming cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "midnight repair",
      "collagen firming cream",
      "clean beauty"
    ]
  },
  {
    "id": 138,
    "name": "Lumière Ultra Hydrating Hydrosol Mist 6",
    "brand": "Lumière Botanica",
    "category": "skincare",
    "price": 2399,
    "originalPrice": 3335,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 1999,
    "badge": "new",
    "skinType": "All",
    "images": [
      "/assets/images/skincare/p138_lumi_re_ultra_hydrating_hydrosol_mist_6.png"
    ],
    "description": "Premium ultra hydrating hydrosol mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "ultra hydrating",
      "hydrosol mist",
      "clean beauty"
    ]
  },
  {
    "id": 139,
    "name": "Lumière Youth Renew Glow Serum 7",
    "brand": "Lumière NovaDerm",
    "category": "skincare",
    "price": 3299,
    "originalPrice": 4322,
    "discount": 24,
    "rating": 4.8,
    "reviewCount": 2439,
    "badge": "trending",
    "skinType": "Normal",
    "images": [
      "/assets/images/skincare/p139_lumi_re_youth_renew_glow_serum_7.png"
    ],
    "description": "Premium youth renew glow serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "skincare",
      "youth renew",
      "glow serum",
      "clean beauty"
    ]
  },
  {
    "id": 140,
    "name": "Lumière Deep Cleanse Hydrating Cleanser 7",
    "brand": "Lumière Pure Bliss",
    "category": "skincare",
    "price": 3299,
    "originalPrice": 3926,
    "discount": 16,
    "rating": 4.9,
    "reviewCount": 1411,
    "badge": "sale",
    "skinType": "Dry",
    "images": [
      "/assets/images/skincare/p140_lumi_re_deep_cleanse_hydrating_cleanser_7.png"
    ],
    "description": "Premium deep cleanse hydrating cleanser engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "skincare",
      "deep cleanse",
      "hydrating cleanser",
      "clean beauty"
    ]
  },
  {
    "id": 141,
    "name": "Lumière Velvet Matte Lipstick",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3299,
    "originalPrice": 4091,
    "discount": 19,
    "rating": 4.7,
    "reviewCount": 575,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p141_lumi_re_velvet_matte_lipstick.png"
    ],
    "description": "Premium velvet matte lipstick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "velvet",
      "matte lipstick",
      "clean beauty"
    ]
  },
  {
    "id": 142,
    "name": "Lumière Flawless 24H Liquid Foundation",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 599,
    "originalPrice": 797,
    "discount": 25,
    "rating": 4.8,
    "reviewCount": 1193,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p142_lumi_re_flawless_24h_liquid_foundation.png"
    ],
    "description": "Premium flawless 24h liquid foundation engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "liquid foundation",
      "clean beauty"
    ]
  },
  {
    "id": 143,
    "name": "Lumière Luminous Gold Eyeshadow Palette",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 899,
    "originalPrice": 1232,
    "discount": 27,
    "rating": 4.6,
    "reviewCount": 157,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p143_lumi_re_luminous_gold_eyeshadow_palette.png"
    ],
    "description": "Premium luminous gold eyeshadow palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "eyeshadow palette",
      "clean beauty"
    ]
  },
  {
    "id": 144,
    "name": "Lumière Champagne Glow Volumizing Mascara",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 1199,
    "originalPrice": 1391,
    "discount": 14,
    "rating": 4.6,
    "reviewCount": 1033,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p144_lumi_re_champagne_glow_volumizing_mascara.png"
    ],
    "description": "Premium champagne glow volumizing mascara engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "champagne glow",
      "volumizing mascara",
      "clean beauty"
    ]
  },
  {
    "id": 145,
    "name": "Lumière Dramatic Lift Highlighter Stick",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 2999,
    "originalPrice": 3959,
    "discount": 24,
    "rating": 4.5,
    "reviewCount": 546,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p145_lumi_re_dramatic_lift_highlighter_stick.png"
    ],
    "description": "Premium dramatic lift highlighter stick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "highlighter stick",
      "clean beauty"
    ]
  },
  {
    "id": 146,
    "name": "Lumière Silk Touch Dewy Liquid Blush",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 1599,
    "originalPrice": 2191,
    "discount": 27,
    "rating": 4.4,
    "reviewCount": 733,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p146_lumi_re_silk_touch_dewy_liquid_blush.png"
    ],
    "description": "Premium silk touch dewy liquid blush engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "dewy liquid blush",
      "clean beauty"
    ]
  },
  {
    "id": 147,
    "name": "Lumière HD Photogenic Setting Spray",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 3499,
    "originalPrice": 4199,
    "discount": 17,
    "rating": 5,
    "reviewCount": 1807,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p147_lumi_re_hd_photogenic_setting_spray.png"
    ],
    "description": "Premium hd photogenic setting spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "hd photogenic",
      "setting spray",
      "clean beauty"
    ]
  },
  {
    "id": 148,
    "name": "Lumière Starlight Shimmer Concealer Wand",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3299,
    "originalPrice": 4454,
    "discount": 26,
    "rating": 4.8,
    "reviewCount": 148,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p148_lumi_re_starlight_shimmer_concealer_wand.png"
    ],
    "description": "Premium starlight shimmer concealer wand engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "concealer wand",
      "clean beauty"
    ]
  },
  {
    "id": 149,
    "name": "Lumière Satin Smooth Bronzing Powder",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 2999,
    "originalPrice": 3689,
    "discount": 19,
    "rating": 4.6,
    "reviewCount": 2206,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p149_lumi_re_satin_smooth_bronzing_powder.png"
    ],
    "description": "Premium satin smooth bronzing powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "bronzing powder",
      "clean beauty"
    ]
  },
  {
    "id": 150,
    "name": "Lumière Pure Pigment Precision Eyeliner",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 3699,
    "originalPrice": 4846,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 2437,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p150_lumi_re_pure_pigment_precision_eyeliner.png"
    ],
    "description": "Premium pure pigment precision eyeliner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "pure pigment",
      "precision eyeliner",
      "clean beauty"
    ]
  },
  {
    "id": 151,
    "name": "Lumière Longwear Luxe Lip Gloss Shine",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 2199,
    "originalPrice": 2617,
    "discount": 16,
    "rating": 4.9,
    "reviewCount": 2411,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p151_lumi_re_longwear_luxe_lip_gloss_shine.png"
    ],
    "description": "Premium longwear luxe lip gloss shine engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "longwear luxe",
      "lip gloss shine",
      "clean beauty"
    ]
  },
  {
    "id": 152,
    "name": "Lumière Glass Skin Plumping Lip Oil",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 2399,
    "originalPrice": 3143,
    "discount": 24,
    "rating": 4.8,
    "reviewCount": 2391,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p152_lumi_re_glass_skin_plumping_lip_oil.png"
    ],
    "description": "Premium glass skin plumping lip oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "glass skin",
      "plumping lip oil",
      "clean beauty"
    ]
  },
  {
    "id": 153,
    "name": "Lumière Nude Elegance Brow Sculpting Gel",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 2999,
    "originalPrice": 3869,
    "discount": 22,
    "rating": 4.8,
    "reviewCount": 2536,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p153_lumi_re_nude_elegance_brow_sculpting_gel.png"
    ],
    "description": "Premium nude elegance brow sculpting gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "nude elegance",
      "brow sculpting gel",
      "clean beauty"
    ]
  },
  {
    "id": 154,
    "name": "Lumière Midnight Glam Translucent Powder",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 2599,
    "originalPrice": 3197,
    "discount": 19,
    "rating": 4.6,
    "reviewCount": 2584,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p154_lumi_re_midnight_glam_translucent_powder.png"
    ],
    "description": "Premium midnight glam translucent powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "midnight glam",
      "translucent powder",
      "clean beauty"
    ]
  },
  {
    "id": 155,
    "name": "Lumière Rose Luxe Strobe Cream",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 2199,
    "originalPrice": 2573,
    "discount": 15,
    "rating": 4.7,
    "reviewCount": 2245,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p155_lumi_re_rose_luxe_strobe_cream.png"
    ],
    "description": "Premium rose luxe strobe cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "rose luxe",
      "strobe cream",
      "clean beauty"
    ]
  },
  {
    "id": 156,
    "name": "Lumière Velvet Velvet Lip Tint",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 1799,
    "originalPrice": 2285,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 1384,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p156_lumi_re_velvet_velvet_lip_tint.png"
    ],
    "description": "Premium velvet velvet lip tint engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "velvet",
      "velvet lip tint",
      "clean beauty"
    ]
  },
  {
    "id": 157,
    "name": "Lumière Flawless 24H Contour Palette",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 2299,
    "originalPrice": 3058,
    "discount": 25,
    "rating": 4.9,
    "reviewCount": 1319,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p157_lumi_re_flawless_24h_contour_palette.png"
    ],
    "description": "Premium flawless 24h contour palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "contour palette",
      "clean beauty"
    ]
  },
  {
    "id": 158,
    "name": "Lumière Luminous Gold Eyeshadow Crayon",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 3299,
    "originalPrice": 3794,
    "discount": 13,
    "rating": 4.4,
    "reviewCount": 2048,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p158_lumi_re_luminous_gold_eyeshadow_crayon.png"
    ],
    "description": "Premium luminous gold eyeshadow crayon engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "eyeshadow crayon",
      "clean beauty"
    ]
  },
  {
    "id": 159,
    "name": "Lumière Champagne Glow Lash Primer Booster",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 2299,
    "originalPrice": 2690,
    "discount": 15,
    "rating": 4.7,
    "reviewCount": 1600,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p159_lumi_re_champagne_glow_lash_primer_booster.png"
    ],
    "description": "Premium champagne glow lash primer booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "champagne glow",
      "lash primer booster",
      "clean beauty"
    ]
  },
  {
    "id": 160,
    "name": "Lumière Dramatic Lift Matte Lip Liner",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 3799,
    "originalPrice": 4711,
    "discount": 19,
    "rating": 4.5,
    "reviewCount": 1812,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p160_lumi_re_dramatic_lift_matte_lip_liner.png"
    ],
    "description": "Premium dramatic lift matte lip liner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "matte lip liner",
      "clean beauty"
    ]
  },
  {
    "id": 161,
    "name": "Lumière Silk Touch Matte Lipstick 2",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 2499,
    "originalPrice": 2949,
    "discount": 15,
    "rating": 4.6,
    "reviewCount": 1925,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p161_lumi_re_silk_touch_matte_lipstick_2.png"
    ],
    "description": "Premium silk touch matte lipstick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "matte lipstick",
      "clean beauty"
    ]
  },
  {
    "id": 162,
    "name": "Lumière HD Photogenic Liquid Foundation 2",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 599,
    "originalPrice": 815,
    "discount": 27,
    "rating": 4.4,
    "reviewCount": 807,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p162_lumi_re_hd_photogenic_liquid_foundation_2.png"
    ],
    "description": "Premium hd photogenic liquid foundation engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "hd photogenic",
      "liquid foundation",
      "clean beauty"
    ]
  },
  {
    "id": 163,
    "name": "Lumière Starlight Shimmer Eyeshadow Palette 2",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 2199,
    "originalPrice": 2529,
    "discount": 13,
    "rating": 4.9,
    "reviewCount": 2102,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p163_lumi_re_starlight_shimmer_eyeshadow_palette_2.png"
    ],
    "description": "Premium starlight shimmer eyeshadow palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "eyeshadow palette",
      "clean beauty"
    ]
  },
  {
    "id": 164,
    "name": "Lumière Satin Smooth Volumizing Mascara 2",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 1899,
    "originalPrice": 2374,
    "discount": 20,
    "rating": 4.5,
    "reviewCount": 2179,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p164_lumi_re_satin_smooth_volumizing_mascara_2.png"
    ],
    "description": "Premium satin smooth volumizing mascara engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "volumizing mascara",
      "clean beauty"
    ]
  },
  {
    "id": 165,
    "name": "Lumière Pure Pigment Highlighter Stick 2",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 1699,
    "originalPrice": 2209,
    "discount": 23,
    "rating": 4.7,
    "reviewCount": 1316,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p165_lumi_re_pure_pigment_highlighter_stick_2.png"
    ],
    "description": "Premium pure pigment highlighter stick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "pure pigment",
      "highlighter stick",
      "clean beauty"
    ]
  },
  {
    "id": 166,
    "name": "Lumière Longwear Luxe Dewy Liquid Blush 2",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 3399,
    "originalPrice": 4419,
    "discount": 23,
    "rating": 4.8,
    "reviewCount": 1013,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p166_lumi_re_longwear_luxe_dewy_liquid_blush_2.png"
    ],
    "description": "Premium longwear luxe dewy liquid blush engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "longwear luxe",
      "dewy liquid blush",
      "clean beauty"
    ]
  },
  {
    "id": 167,
    "name": "Lumière Glass Skin Setting Spray 2",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 2599,
    "originalPrice": 3327,
    "discount": 22,
    "rating": 4.8,
    "reviewCount": 721,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p167_lumi_re_glass_skin_setting_spray_2.png"
    ],
    "description": "Premium glass skin setting spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "glass skin",
      "setting spray",
      "clean beauty"
    ]
  },
  {
    "id": 168,
    "name": "Lumière Nude Elegance Concealer Wand 2",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 2199,
    "originalPrice": 2837,
    "discount": 22,
    "rating": 4.4,
    "reviewCount": 864,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p168_lumi_re_nude_elegance_concealer_wand_2.png"
    ],
    "description": "Premium nude elegance concealer wand engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "nude elegance",
      "concealer wand",
      "clean beauty"
    ]
  },
  {
    "id": 169,
    "name": "Lumière Midnight Glam Bronzing Powder 2",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3199,
    "originalPrice": 4223,
    "discount": 24,
    "rating": 4.4,
    "reviewCount": 2475,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p169_lumi_re_midnight_glam_bronzing_powder_2.png"
    ],
    "description": "Premium midnight glam bronzing powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "midnight glam",
      "bronzing powder",
      "clean beauty"
    ]
  },
  {
    "id": 170,
    "name": "Lumière Rose Luxe Precision Eyeliner 2",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 1499,
    "originalPrice": 1739,
    "discount": 14,
    "rating": 4.8,
    "reviewCount": 2019,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p170_lumi_re_rose_luxe_precision_eyeliner_2.png"
    ],
    "description": "Premium rose luxe precision eyeliner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "rose luxe",
      "precision eyeliner",
      "clean beauty"
    ]
  },
  {
    "id": 171,
    "name": "Lumière Velvet Lip Gloss Shine 2",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 2699,
    "originalPrice": 3266,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 915,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p171_lumi_re_velvet_lip_gloss_shine_2.png"
    ],
    "description": "Premium velvet lip gloss shine engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "velvet",
      "lip gloss shine",
      "clean beauty"
    ]
  },
  {
    "id": 172,
    "name": "Lumière Flawless 24H Plumping Lip Oil 2",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 2499,
    "originalPrice": 3449,
    "discount": 28,
    "rating": 4.5,
    "reviewCount": 1531,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p172_lumi_re_flawless_24h_plumping_lip_oil_2.png"
    ],
    "description": "Premium flawless 24h plumping lip oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "plumping lip oil",
      "clean beauty"
    ]
  },
  {
    "id": 173,
    "name": "Lumière Luminous Gold Brow Sculpting Gel 2",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 2399,
    "originalPrice": 2951,
    "discount": 19,
    "rating": 4.5,
    "reviewCount": 2082,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p173_lumi_re_luminous_gold_brow_sculpting_gel_2.png"
    ],
    "description": "Premium luminous gold brow sculpting gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "brow sculpting gel",
      "clean beauty"
    ]
  },
  {
    "id": 174,
    "name": "Lumière Champagne Glow Translucent Powder 2",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 3199,
    "originalPrice": 4031,
    "discount": 21,
    "rating": 4.8,
    "reviewCount": 1786,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p174_lumi_re_champagne_glow_translucent_powder_2.png"
    ],
    "description": "Premium champagne glow translucent powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "champagne glow",
      "translucent powder",
      "clean beauty"
    ]
  },
  {
    "id": 175,
    "name": "Lumière Dramatic Lift Strobe Cream 2",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 3699,
    "originalPrice": 4957,
    "discount": 25,
    "rating": 4.4,
    "reviewCount": 442,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p175_lumi_re_dramatic_lift_strobe_cream_2.png"
    ],
    "description": "Premium dramatic lift strobe cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "strobe cream",
      "clean beauty"
    ]
  },
  {
    "id": 176,
    "name": "Lumière Silk Touch Velvet Lip Tint 2",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3899,
    "originalPrice": 4718,
    "discount": 17,
    "rating": 4.7,
    "reviewCount": 1449,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p176_lumi_re_silk_touch_velvet_lip_tint_2.png"
    ],
    "description": "Premium silk touch velvet lip tint engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "velvet lip tint",
      "clean beauty"
    ]
  },
  {
    "id": 177,
    "name": "Lumière HD Photogenic Contour Palette 2",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 2199,
    "originalPrice": 3013,
    "discount": 27,
    "rating": 4.6,
    "reviewCount": 475,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p177_lumi_re_hd_photogenic_contour_palette_2.png"
    ],
    "description": "Premium hd photogenic contour palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "hd photogenic",
      "contour palette",
      "clean beauty"
    ]
  },
  {
    "id": 178,
    "name": "Lumière Starlight Shimmer Eyeshadow Crayon 2",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 2199,
    "originalPrice": 3035,
    "discount": 28,
    "rating": 4.6,
    "reviewCount": 740,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p178_lumi_re_starlight_shimmer_eyeshadow_crayon_2.png"
    ],
    "description": "Premium starlight shimmer eyeshadow crayon engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "eyeshadow crayon",
      "clean beauty"
    ]
  },
  {
    "id": 179,
    "name": "Lumière Satin Smooth Lash Primer Booster 2",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 3599,
    "originalPrice": 4787,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 2027,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p179_lumi_re_satin_smooth_lash_primer_booster_2.png"
    ],
    "description": "Premium satin smooth lash primer booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "lash primer booster",
      "clean beauty"
    ]
  },
  {
    "id": 180,
    "name": "Lumière Pure Pigment Matte Lip Liner 2",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 1999,
    "originalPrice": 2519,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 1375,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p180_lumi_re_pure_pigment_matte_lip_liner_2.png"
    ],
    "description": "Premium pure pigment matte lip liner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "pure pigment",
      "matte lip liner",
      "clean beauty"
    ]
  },
  {
    "id": 181,
    "name": "Lumière Longwear Luxe Matte Lipstick 3",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 699,
    "originalPrice": 846,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 1784,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p181_lumi_re_longwear_luxe_matte_lipstick_3.png"
    ],
    "description": "Premium longwear luxe matte lipstick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "longwear luxe",
      "matte lipstick",
      "clean beauty"
    ]
  },
  {
    "id": 182,
    "name": "Lumière Glass Skin Liquid Foundation 3",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 3899,
    "originalPrice": 5225,
    "discount": 25,
    "rating": 4.6,
    "reviewCount": 2210,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p182_lumi_re_glass_skin_liquid_foundation_3.png"
    ],
    "description": "Premium glass skin liquid foundation engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "glass skin",
      "liquid foundation",
      "clean beauty"
    ]
  },
  {
    "id": 183,
    "name": "Lumière Nude Elegance Eyeshadow Palette 3",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 1199,
    "originalPrice": 1475,
    "discount": 19,
    "rating": 4.4,
    "reviewCount": 1013,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p183_lumi_re_nude_elegance_eyeshadow_palette_3.png"
    ],
    "description": "Premium nude elegance eyeshadow palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "nude elegance",
      "eyeshadow palette",
      "clean beauty"
    ]
  },
  {
    "id": 184,
    "name": "Lumière Midnight Glam Volumizing Mascara 3",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 3699,
    "originalPrice": 4994,
    "discount": 26,
    "rating": 4.6,
    "reviewCount": 1966,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p184_lumi_re_midnight_glam_volumizing_mascara_3.png"
    ],
    "description": "Premium midnight glam volumizing mascara engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "midnight glam",
      "volumizing mascara",
      "clean beauty"
    ]
  },
  {
    "id": 185,
    "name": "Lumière Rose Luxe Highlighter Stick 3",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 3199,
    "originalPrice": 4223,
    "discount": 24,
    "rating": 4.5,
    "reviewCount": 406,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p185_lumi_re_rose_luxe_highlighter_stick_3.png"
    ],
    "description": "Premium rose luxe highlighter stick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "rose luxe",
      "highlighter stick",
      "clean beauty"
    ]
  },
  {
    "id": 186,
    "name": "Lumière Velvet Dewy Liquid Blush 3",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 2799,
    "originalPrice": 3443,
    "discount": 19,
    "rating": 4.4,
    "reviewCount": 808,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p186_lumi_re_velvet_dewy_liquid_blush_3.png"
    ],
    "description": "Premium velvet dewy liquid blush engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "velvet",
      "dewy liquid blush",
      "clean beauty"
    ]
  },
  {
    "id": 187,
    "name": "Lumière Flawless 24H Setting Spray 3",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 3399,
    "originalPrice": 4725,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 1273,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p187_lumi_re_flawless_24h_setting_spray_3.png"
    ],
    "description": "Premium flawless 24h setting spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "setting spray",
      "clean beauty"
    ]
  },
  {
    "id": 188,
    "name": "Lumière Luminous Gold Concealer Wand 3",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 3199,
    "originalPrice": 3871,
    "discount": 17,
    "rating": 4.6,
    "reviewCount": 2202,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p188_lumi_re_luminous_gold_concealer_wand_3.png"
    ],
    "description": "Premium luminous gold concealer wand engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "concealer wand",
      "clean beauty"
    ]
  },
  {
    "id": 189,
    "name": "Lumière Champagne Glow Bronzing Powder 3",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 1199,
    "originalPrice": 1427,
    "discount": 16,
    "rating": 4.7,
    "reviewCount": 2047,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p189_lumi_re_champagne_glow_bronzing_powder_3.png"
    ],
    "description": "Premium champagne glow bronzing powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "champagne glow",
      "bronzing powder",
      "clean beauty"
    ]
  },
  {
    "id": 190,
    "name": "Lumière Dramatic Lift Precision Eyeliner 3",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 1399,
    "originalPrice": 1609,
    "discount": 13,
    "rating": 4.6,
    "reviewCount": 383,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p190_lumi_re_dramatic_lift_precision_eyeliner_3.png"
    ],
    "description": "Premium dramatic lift precision eyeliner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "precision eyeliner",
      "clean beauty"
    ]
  },
  {
    "id": 191,
    "name": "Lumière Silk Touch Lip Gloss Shine 3",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 3699,
    "originalPrice": 4661,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 2095,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p191_lumi_re_silk_touch_lip_gloss_shine_3.png"
    ],
    "description": "Premium silk touch lip gloss shine engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "lip gloss shine",
      "clean beauty"
    ]
  },
  {
    "id": 192,
    "name": "Lumière HD Photogenic Plumping Lip Oil 3",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 3399,
    "originalPrice": 4045,
    "discount": 16,
    "rating": 4.5,
    "reviewCount": 329,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p192_lumi_re_hd_photogenic_plumping_lip_oil_3.png"
    ],
    "description": "Premium hd photogenic plumping lip oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "hd photogenic",
      "plumping lip oil",
      "clean beauty"
    ]
  },
  {
    "id": 193,
    "name": "Lumière Starlight Shimmer Brow Sculpting Gel 3",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 1999,
    "originalPrice": 2439,
    "discount": 18,
    "rating": 4.9,
    "reviewCount": 918,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p193_lumi_re_starlight_shimmer_brow_sculpting_gel_3.png"
    ],
    "description": "Premium starlight shimmer brow sculpting gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "brow sculpting gel",
      "clean beauty"
    ]
  },
  {
    "id": 194,
    "name": "Lumière Satin Smooth Translucent Powder 3",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 2899,
    "originalPrice": 3508,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 704,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p194_lumi_re_satin_smooth_translucent_powder_3.png"
    ],
    "description": "Premium satin smooth translucent powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "translucent powder",
      "clean beauty"
    ]
  },
  {
    "id": 195,
    "name": "Lumière Pure Pigment Strobe Cream 3",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 3699,
    "originalPrice": 4402,
    "discount": 16,
    "rating": 4.5,
    "reviewCount": 1012,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p195_lumi_re_pure_pigment_strobe_cream_3.png"
    ],
    "description": "Premium pure pigment strobe cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "pure pigment",
      "strobe cream",
      "clean beauty"
    ]
  },
  {
    "id": 196,
    "name": "Lumière Longwear Luxe Velvet Lip Tint 3",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 2599,
    "originalPrice": 3431,
    "discount": 24,
    "rating": 4.5,
    "reviewCount": 582,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p196_lumi_re_longwear_luxe_velvet_lip_tint_3.png"
    ],
    "description": "Premium longwear luxe velvet lip tint engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "longwear luxe",
      "velvet lip tint",
      "clean beauty"
    ]
  },
  {
    "id": 197,
    "name": "Lumière Glass Skin Contour Palette 3",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3899,
    "originalPrice": 4913,
    "discount": 21,
    "rating": 4.8,
    "reviewCount": 1171,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p197_lumi_re_glass_skin_contour_palette_3.png"
    ],
    "description": "Premium glass skin contour palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "glass skin",
      "contour palette",
      "clean beauty"
    ]
  },
  {
    "id": 198,
    "name": "Lumière Nude Elegance Eyeshadow Crayon 3",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 2599,
    "originalPrice": 3223,
    "discount": 19,
    "rating": 4.9,
    "reviewCount": 1749,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p198_lumi_re_nude_elegance_eyeshadow_crayon_3.png"
    ],
    "description": "Premium nude elegance eyeshadow crayon engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "nude elegance",
      "eyeshadow crayon",
      "clean beauty"
    ]
  },
  {
    "id": 199,
    "name": "Lumière Midnight Glam Lash Primer Booster 3",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 699,
    "originalPrice": 825,
    "discount": 15,
    "rating": 4.5,
    "reviewCount": 2318,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p199_lumi_re_midnight_glam_lash_primer_booster_3.png"
    ],
    "description": "Premium midnight glam lash primer booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "midnight glam",
      "lash primer booster",
      "clean beauty"
    ]
  },
  {
    "id": 200,
    "name": "Lumière Rose Luxe Matte Lip Liner 3",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 2499,
    "originalPrice": 3074,
    "discount": 19,
    "rating": 4.7,
    "reviewCount": 1356,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p200_lumi_re_rose_luxe_matte_lip_liner_3.png"
    ],
    "description": "Premium rose luxe matte lip liner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "rose luxe",
      "matte lip liner",
      "clean beauty"
    ]
  },
  {
    "id": 201,
    "name": "Lumière Velvet Matte Lipstick 4",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 599,
    "originalPrice": 827,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 1356,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p201_lumi_re_velvet_matte_lipstick_4.png"
    ],
    "description": "Premium velvet matte lipstick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "velvet",
      "matte lipstick",
      "clean beauty"
    ]
  },
  {
    "id": 202,
    "name": "Lumière Flawless 24H Liquid Foundation 4",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 2399,
    "originalPrice": 3071,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 998,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p202_lumi_re_flawless_24h_liquid_foundation_4.png"
    ],
    "description": "Premium flawless 24h liquid foundation engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "liquid foundation",
      "clean beauty"
    ]
  },
  {
    "id": 203,
    "name": "Lumière Luminous Gold Eyeshadow Palette 4",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 1299,
    "originalPrice": 1533,
    "discount": 15,
    "rating": 4.5,
    "reviewCount": 700,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p203_lumi_re_luminous_gold_eyeshadow_palette_4.png"
    ],
    "description": "Premium luminous gold eyeshadow palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "eyeshadow palette",
      "clean beauty"
    ]
  },
  {
    "id": 204,
    "name": "Lumière Champagne Glow Volumizing Mascara 4",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 999,
    "originalPrice": 1389,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 1905,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p204_lumi_re_champagne_glow_volumizing_mascara_4.png"
    ],
    "description": "Premium champagne glow volumizing mascara engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "champagne glow",
      "volumizing mascara",
      "clean beauty"
    ]
  },
  {
    "id": 205,
    "name": "Lumière Dramatic Lift Highlighter Stick 4",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 2899,
    "originalPrice": 3450,
    "discount": 16,
    "rating": 4.9,
    "reviewCount": 1841,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p205_lumi_re_dramatic_lift_highlighter_stick_4.png"
    ],
    "description": "Premium dramatic lift highlighter stick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "highlighter stick",
      "clean beauty"
    ]
  },
  {
    "id": 206,
    "name": "Lumière Silk Touch Dewy Liquid Blush 4",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 1299,
    "originalPrice": 1611,
    "discount": 19,
    "rating": 5,
    "reviewCount": 989,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p206_lumi_re_silk_touch_dewy_liquid_blush_4.png"
    ],
    "description": "Premium silk touch dewy liquid blush engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "dewy liquid blush",
      "clean beauty"
    ]
  },
  {
    "id": 207,
    "name": "Lumière HD Photogenic Setting Spray 4",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 2799,
    "originalPrice": 3891,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 146,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p207_lumi_re_hd_photogenic_setting_spray_4.png"
    ],
    "description": "Premium hd photogenic setting spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "hd photogenic",
      "setting spray",
      "clean beauty"
    ]
  },
  {
    "id": 208,
    "name": "Lumière Starlight Shimmer Concealer Wand 4",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 3899,
    "originalPrice": 4718,
    "discount": 17,
    "rating": 4.4,
    "reviewCount": 2045,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p208_lumi_re_starlight_shimmer_concealer_wand_4.png"
    ],
    "description": "Premium starlight shimmer concealer wand engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "concealer wand",
      "clean beauty"
    ]
  },
  {
    "id": 209,
    "name": "Lumière Satin Smooth Bronzing Powder 4",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 3099,
    "originalPrice": 3750,
    "discount": 17,
    "rating": 4.9,
    "reviewCount": 1956,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p209_lumi_re_satin_smooth_bronzing_powder_4.png"
    ],
    "description": "Premium satin smooth bronzing powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "bronzing powder",
      "clean beauty"
    ]
  },
  {
    "id": 210,
    "name": "Lumière Pure Pigment Precision Eyeliner 4",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 1999,
    "originalPrice": 2699,
    "discount": 26,
    "rating": 4.5,
    "reviewCount": 1734,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p210_lumi_re_pure_pigment_precision_eyeliner_4.png"
    ],
    "description": "Premium pure pigment precision eyeliner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "pure pigment",
      "precision eyeliner",
      "clean beauty"
    ]
  },
  {
    "id": 211,
    "name": "Lumière Longwear Luxe Lip Gloss Shine 4",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 599,
    "originalPrice": 743,
    "discount": 19,
    "rating": 5,
    "reviewCount": 359,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p211_lumi_re_longwear_luxe_lip_gloss_shine_4.png"
    ],
    "description": "Premium longwear luxe lip gloss shine engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "longwear luxe",
      "lip gloss shine",
      "clean beauty"
    ]
  },
  {
    "id": 212,
    "name": "Lumière Glass Skin Plumping Lip Oil 4",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 3199,
    "originalPrice": 4191,
    "discount": 24,
    "rating": 4.5,
    "reviewCount": 1248,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p212_lumi_re_glass_skin_plumping_lip_oil_4.png"
    ],
    "description": "Premium glass skin plumping lip oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "glass skin",
      "plumping lip oil",
      "clean beauty"
    ]
  },
  {
    "id": 213,
    "name": "Lumière Nude Elegance Brow Sculpting Gel 4",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 3799,
    "originalPrice": 4901,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 621,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p213_lumi_re_nude_elegance_brow_sculpting_gel_4.png"
    ],
    "description": "Premium nude elegance brow sculpting gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "nude elegance",
      "brow sculpting gel",
      "clean beauty"
    ]
  },
  {
    "id": 214,
    "name": "Lumière Midnight Glam Translucent Powder 4",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 599,
    "originalPrice": 743,
    "discount": 19,
    "rating": 4.9,
    "reviewCount": 530,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p214_lumi_re_midnight_glam_translucent_powder_4.png"
    ],
    "description": "Premium midnight glam translucent powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "midnight glam",
      "translucent powder",
      "clean beauty"
    ]
  },
  {
    "id": 215,
    "name": "Lumière Rose Luxe Strobe Cream 4",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 599,
    "originalPrice": 695,
    "discount": 14,
    "rating": 4.6,
    "reviewCount": 1344,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p215_lumi_re_rose_luxe_strobe_cream_4.png"
    ],
    "description": "Premium rose luxe strobe cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "rose luxe",
      "strobe cream",
      "clean beauty"
    ]
  },
  {
    "id": 216,
    "name": "Lumière Velvet Velvet Lip Tint 4",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 3899,
    "originalPrice": 4718,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 200,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p216_lumi_re_velvet_velvet_lip_tint_4.png"
    ],
    "description": "Premium velvet velvet lip tint engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "velvet",
      "velvet lip tint",
      "clean beauty"
    ]
  },
  {
    "id": 217,
    "name": "Lumière Flawless 24H Contour Palette 4",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 999,
    "originalPrice": 1209,
    "discount": 17,
    "rating": 5,
    "reviewCount": 1793,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p217_lumi_re_flawless_24h_contour_palette_4.png"
    ],
    "description": "Premium flawless 24h contour palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "contour palette",
      "clean beauty"
    ]
  },
  {
    "id": 218,
    "name": "Lumière Luminous Gold Eyeshadow Crayon 4",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3199,
    "originalPrice": 3807,
    "discount": 16,
    "rating": 4.4,
    "reviewCount": 169,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p218_lumi_re_luminous_gold_eyeshadow_crayon_4.png"
    ],
    "description": "Premium luminous gold eyeshadow crayon engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "eyeshadow crayon",
      "clean beauty"
    ]
  },
  {
    "id": 219,
    "name": "Lumière Champagne Glow Lash Primer Booster 4",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 3899,
    "originalPrice": 5420,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 719,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p219_lumi_re_champagne_glow_lash_primer_booster_4.png"
    ],
    "description": "Premium champagne glow lash primer booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "champagne glow",
      "lash primer booster",
      "clean beauty"
    ]
  },
  {
    "id": 220,
    "name": "Lumière Dramatic Lift Matte Lip Liner 4",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 3899,
    "originalPrice": 4913,
    "discount": 21,
    "rating": 4.9,
    "reviewCount": 2207,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p220_lumi_re_dramatic_lift_matte_lip_liner_4.png"
    ],
    "description": "Premium dramatic lift matte lip liner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "matte lip liner",
      "clean beauty"
    ]
  },
  {
    "id": 221,
    "name": "Lumière Silk Touch Matte Lipstick 5",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 1499,
    "originalPrice": 2069,
    "discount": 28,
    "rating": 4.5,
    "reviewCount": 1420,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p221_lumi_re_silk_touch_matte_lipstick_5.png"
    ],
    "description": "Premium silk touch matte lipstick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "matte lipstick",
      "clean beauty"
    ]
  },
  {
    "id": 222,
    "name": "Lumière HD Photogenic Liquid Foundation 5",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 1599,
    "originalPrice": 1839,
    "discount": 13,
    "rating": 4.5,
    "reviewCount": 1006,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p222_lumi_re_hd_photogenic_liquid_foundation_5.png"
    ],
    "description": "Premium hd photogenic liquid foundation engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "hd photogenic",
      "liquid foundation",
      "clean beauty"
    ]
  },
  {
    "id": 223,
    "name": "Lumière Starlight Shimmer Eyeshadow Palette 5",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 1999,
    "originalPrice": 2559,
    "discount": 22,
    "rating": 4.5,
    "reviewCount": 1079,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p223_lumi_re_starlight_shimmer_eyeshadow_palette_5.png"
    ],
    "description": "Premium starlight shimmer eyeshadow palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "eyeshadow palette",
      "clean beauty"
    ]
  },
  {
    "id": 224,
    "name": "Lumière Satin Smooth Volumizing Mascara 5",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 2699,
    "originalPrice": 3536,
    "discount": 24,
    "rating": 4.8,
    "reviewCount": 2344,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p224_lumi_re_satin_smooth_volumizing_mascara_5.png"
    ],
    "description": "Premium satin smooth volumizing mascara engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "volumizing mascara",
      "clean beauty"
    ]
  },
  {
    "id": 225,
    "name": "Lumière Pure Pigment Highlighter Stick 5",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 2999,
    "originalPrice": 3809,
    "discount": 21,
    "rating": 4.8,
    "reviewCount": 689,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p225_lumi_re_pure_pigment_highlighter_stick_5.png"
    ],
    "description": "Premium pure pigment highlighter stick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "pure pigment",
      "highlighter stick",
      "clean beauty"
    ]
  },
  {
    "id": 226,
    "name": "Lumière Longwear Luxe Dewy Liquid Blush 5",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 999,
    "originalPrice": 1339,
    "discount": 25,
    "rating": 4.7,
    "reviewCount": 2041,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p226_lumi_re_longwear_luxe_dewy_liquid_blush_5.png"
    ],
    "description": "Premium longwear luxe dewy liquid blush engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "longwear luxe",
      "dewy liquid blush",
      "clean beauty"
    ]
  },
  {
    "id": 227,
    "name": "Lumière Glass Skin Setting Spray 5",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 2099,
    "originalPrice": 2792,
    "discount": 25,
    "rating": 4.8,
    "reviewCount": 297,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p227_lumi_re_glass_skin_setting_spray_5.png"
    ],
    "description": "Premium glass skin setting spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "glass skin",
      "setting spray",
      "clean beauty"
    ]
  },
  {
    "id": 228,
    "name": "Lumière Nude Elegance Concealer Wand 5",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 2199,
    "originalPrice": 2815,
    "discount": 22,
    "rating": 4.5,
    "reviewCount": 830,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p228_lumi_re_nude_elegance_concealer_wand_5.png"
    ],
    "description": "Premium nude elegance concealer wand engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "nude elegance",
      "concealer wand",
      "clean beauty"
    ]
  },
  {
    "id": 229,
    "name": "Lumière Midnight Glam Bronzing Powder 5",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 899,
    "originalPrice": 1115,
    "discount": 19,
    "rating": 4.6,
    "reviewCount": 296,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p229_lumi_re_midnight_glam_bronzing_powder_5.png"
    ],
    "description": "Premium midnight glam bronzing powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "midnight glam",
      "bronzing powder",
      "clean beauty"
    ]
  },
  {
    "id": 230,
    "name": "Lumière Rose Luxe Precision Eyeliner 5",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 1499,
    "originalPrice": 2084,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 1991,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p230_lumi_re_rose_luxe_precision_eyeliner_5.png"
    ],
    "description": "Premium rose luxe precision eyeliner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "rose luxe",
      "precision eyeliner",
      "clean beauty"
    ]
  },
  {
    "id": 231,
    "name": "Lumière Velvet Lip Gloss Shine 5",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 2299,
    "originalPrice": 3196,
    "discount": 28,
    "rating": 5,
    "reviewCount": 1913,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p231_lumi_re_velvet_lip_gloss_shine_5.png"
    ],
    "description": "Premium velvet lip gloss shine engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "velvet",
      "lip gloss shine",
      "clean beauty"
    ]
  },
  {
    "id": 232,
    "name": "Lumière Flawless 24H Plumping Lip Oil 5",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 599,
    "originalPrice": 689,
    "discount": 13,
    "rating": 4.9,
    "reviewCount": 768,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p232_lumi_re_flawless_24h_plumping_lip_oil_5.png"
    ],
    "description": "Premium flawless 24h plumping lip oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "plumping lip oil",
      "clean beauty"
    ]
  },
  {
    "id": 233,
    "name": "Lumière Luminous Gold Brow Sculpting Gel 5",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 2899,
    "originalPrice": 4001,
    "discount": 28,
    "rating": 4.6,
    "reviewCount": 1654,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p233_lumi_re_luminous_gold_brow_sculpting_gel_5.png"
    ],
    "description": "Premium luminous gold brow sculpting gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "brow sculpting gel",
      "clean beauty"
    ]
  },
  {
    "id": 234,
    "name": "Lumière Champagne Glow Translucent Powder 5",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 999,
    "originalPrice": 1169,
    "discount": 15,
    "rating": 4.6,
    "reviewCount": 255,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p234_lumi_re_champagne_glow_translucent_powder_5.png"
    ],
    "description": "Premium champagne glow translucent powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "champagne glow",
      "translucent powder",
      "clean beauty"
    ]
  },
  {
    "id": 235,
    "name": "Lumière Dramatic Lift Strobe Cream 5",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 2899,
    "originalPrice": 3740,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 2483,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p235_lumi_re_dramatic_lift_strobe_cream_5.png"
    ],
    "description": "Premium dramatic lift strobe cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "strobe cream",
      "clean beauty"
    ]
  },
  {
    "id": 236,
    "name": "Lumière Silk Touch Velvet Lip Tint 5",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 699,
    "originalPrice": 860,
    "discount": 19,
    "rating": 5,
    "reviewCount": 1083,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p236_lumi_re_silk_touch_velvet_lip_tint_5.png"
    ],
    "description": "Premium silk touch velvet lip tint engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "velvet lip tint",
      "clean beauty"
    ]
  },
  {
    "id": 237,
    "name": "Lumière HD Photogenic Contour Palette 5",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 699,
    "originalPrice": 902,
    "discount": 23,
    "rating": 4.7,
    "reviewCount": 471,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p237_lumi_re_hd_photogenic_contour_palette_5.png"
    ],
    "description": "Premium hd photogenic contour palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "hd photogenic",
      "contour palette",
      "clean beauty"
    ]
  },
  {
    "id": 238,
    "name": "Lumière Starlight Shimmer Eyeshadow Crayon 5",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 2599,
    "originalPrice": 3275,
    "discount": 21,
    "rating": 4.7,
    "reviewCount": 231,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p238_lumi_re_starlight_shimmer_eyeshadow_crayon_5.png"
    ],
    "description": "Premium starlight shimmer eyeshadow crayon engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "eyeshadow crayon",
      "clean beauty"
    ]
  },
  {
    "id": 239,
    "name": "Lumière Satin Smooth Lash Primer Booster 5",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 1199,
    "originalPrice": 1619,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 2585,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p239_lumi_re_satin_smooth_lash_primer_booster_5.png"
    ],
    "description": "Premium satin smooth lash primer booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "lash primer booster",
      "clean beauty"
    ]
  },
  {
    "id": 240,
    "name": "Lumière Pure Pigment Matte Lip Liner 5",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 3299,
    "originalPrice": 3959,
    "discount": 17,
    "rating": 4.4,
    "reviewCount": 671,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p240_lumi_re_pure_pigment_matte_lip_liner_5.png"
    ],
    "description": "Premium pure pigment matte lip liner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "pure pigment",
      "matte lip liner",
      "clean beauty"
    ]
  },
  {
    "id": 241,
    "name": "Lumière Longwear Luxe Matte Lipstick 6",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 2199,
    "originalPrice": 2727,
    "discount": 19,
    "rating": 4.8,
    "reviewCount": 362,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p241_lumi_re_longwear_luxe_matte_lipstick_6.png"
    ],
    "description": "Premium longwear luxe matte lipstick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "longwear luxe",
      "matte lipstick",
      "clean beauty"
    ]
  },
  {
    "id": 242,
    "name": "Lumière Glass Skin Liquid Foundation 6",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 499,
    "originalPrice": 574,
    "discount": 13,
    "rating": 4.9,
    "reviewCount": 2456,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p242_lumi_re_glass_skin_liquid_foundation_6.png"
    ],
    "description": "Premium glass skin liquid foundation engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "glass skin",
      "liquid foundation",
      "clean beauty"
    ]
  },
  {
    "id": 243,
    "name": "Lumière Nude Elegance Eyeshadow Palette 6",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 2499,
    "originalPrice": 3224,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 749,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p243_lumi_re_nude_elegance_eyeshadow_palette_6.png"
    ],
    "description": "Premium nude elegance eyeshadow palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "nude elegance",
      "eyeshadow palette",
      "clean beauty"
    ]
  },
  {
    "id": 244,
    "name": "Lumière Midnight Glam Volumizing Mascara 6",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 3299,
    "originalPrice": 4520,
    "discount": 27,
    "rating": 4.9,
    "reviewCount": 1937,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p244_lumi_re_midnight_glam_volumizing_mascara_6.png"
    ],
    "description": "Premium midnight glam volumizing mascara engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "midnight glam",
      "volumizing mascara",
      "clean beauty"
    ]
  },
  {
    "id": 245,
    "name": "Lumière Rose Luxe Highlighter Stick 6",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 899,
    "originalPrice": 1205,
    "discount": 25,
    "rating": 4.6,
    "reviewCount": 2323,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p245_lumi_re_rose_luxe_highlighter_stick_6.png"
    ],
    "description": "Premium rose luxe highlighter stick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "rose luxe",
      "highlighter stick",
      "clean beauty"
    ]
  },
  {
    "id": 246,
    "name": "Lumière Velvet Dewy Liquid Blush 6",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3499,
    "originalPrice": 4549,
    "discount": 23,
    "rating": 4.7,
    "reviewCount": 2374,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p246_lumi_re_velvet_dewy_liquid_blush_6.png"
    ],
    "description": "Premium velvet dewy liquid blush engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "velvet",
      "dewy liquid blush",
      "clean beauty"
    ]
  },
  {
    "id": 247,
    "name": "Lumière Flawless 24H Setting Spray 6",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 3899,
    "originalPrice": 4562,
    "discount": 15,
    "rating": 4.9,
    "reviewCount": 1806,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p247_lumi_re_flawless_24h_setting_spray_6.png"
    ],
    "description": "Premium flawless 24h setting spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "setting spray",
      "clean beauty"
    ]
  },
  {
    "id": 248,
    "name": "Lumière Luminous Gold Concealer Wand 6",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 3199,
    "originalPrice": 4319,
    "discount": 26,
    "rating": 4.4,
    "reviewCount": 338,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p248_lumi_re_luminous_gold_concealer_wand_6.png"
    ],
    "description": "Premium luminous gold concealer wand engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "concealer wand",
      "clean beauty"
    ]
  },
  {
    "id": 249,
    "name": "Lumière Champagne Glow Bronzing Powder 6",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 1499,
    "originalPrice": 2069,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 1629,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p249_lumi_re_champagne_glow_bronzing_powder_6.png"
    ],
    "description": "Premium champagne glow bronzing powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "champagne glow",
      "bronzing powder",
      "clean beauty"
    ]
  },
  {
    "id": 250,
    "name": "Lumière Dramatic Lift Precision Eyeliner 6",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 1399,
    "originalPrice": 1931,
    "discount": 28,
    "rating": 5,
    "reviewCount": 2464,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p250_lumi_re_dramatic_lift_precision_eyeliner_6.png"
    ],
    "description": "Premium dramatic lift precision eyeliner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "precision eyeliner",
      "clean beauty"
    ]
  },
  {
    "id": 251,
    "name": "Lumière Silk Touch Lip Gloss Shine 6",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 2099,
    "originalPrice": 2876,
    "discount": 27,
    "rating": 4.6,
    "reviewCount": 327,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p251_lumi_re_silk_touch_lip_gloss_shine_6.png"
    ],
    "description": "Premium silk touch lip gloss shine engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "lip gloss shine",
      "clean beauty"
    ]
  },
  {
    "id": 252,
    "name": "Lumière HD Photogenic Plumping Lip Oil 6",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 1399,
    "originalPrice": 1679,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 1759,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p252_lumi_re_hd_photogenic_plumping_lip_oil_6.png"
    ],
    "description": "Premium hd photogenic plumping lip oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "hd photogenic",
      "plumping lip oil",
      "clean beauty"
    ]
  },
  {
    "id": 253,
    "name": "Lumière Starlight Shimmer Brow Sculpting Gel 6",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3599,
    "originalPrice": 4283,
    "discount": 16,
    "rating": 4.5,
    "reviewCount": 736,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p253_lumi_re_starlight_shimmer_brow_sculpting_gel_6.png"
    ],
    "description": "Premium starlight shimmer brow sculpting gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "brow sculpting gel",
      "clean beauty"
    ]
  },
  {
    "id": 254,
    "name": "Lumière Satin Smooth Translucent Powder 6",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 2699,
    "originalPrice": 3752,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 800,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p254_lumi_re_satin_smooth_translucent_powder_6.png"
    ],
    "description": "Premium satin smooth translucent powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "translucent powder",
      "clean beauty"
    ]
  },
  {
    "id": 255,
    "name": "Lumière Pure Pigment Strobe Cream 6",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 1299,
    "originalPrice": 1741,
    "discount": 25,
    "rating": 4.4,
    "reviewCount": 653,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p255_lumi_re_pure_pigment_strobe_cream_6.png"
    ],
    "description": "Premium pure pigment strobe cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "pure pigment",
      "strobe cream",
      "clean beauty"
    ]
  },
  {
    "id": 256,
    "name": "Lumière Longwear Luxe Velvet Lip Tint 6",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 1499,
    "originalPrice": 2039,
    "discount": 26,
    "rating": 4.7,
    "reviewCount": 2114,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p256_lumi_re_longwear_luxe_velvet_lip_tint_6.png"
    ],
    "description": "Premium longwear luxe velvet lip tint engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "longwear luxe",
      "velvet lip tint",
      "clean beauty"
    ]
  },
  {
    "id": 257,
    "name": "Lumière Glass Skin Contour Palette 6",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 2699,
    "originalPrice": 3347,
    "discount": 19,
    "rating": 4.7,
    "reviewCount": 1287,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p257_lumi_re_glass_skin_contour_palette_6.png"
    ],
    "description": "Premium glass skin contour palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "glass skin",
      "contour palette",
      "clean beauty"
    ]
  },
  {
    "id": 258,
    "name": "Lumière Nude Elegance Eyeshadow Crayon 6",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 1499,
    "originalPrice": 2039,
    "discount": 26,
    "rating": 5,
    "reviewCount": 604,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p258_lumi_re_nude_elegance_eyeshadow_crayon_6.png"
    ],
    "description": "Premium nude elegance eyeshadow crayon engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "nude elegance",
      "eyeshadow crayon",
      "clean beauty"
    ]
  },
  {
    "id": 259,
    "name": "Lumière Midnight Glam Lash Primer Booster 6",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 2899,
    "originalPrice": 3856,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 1876,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p259_lumi_re_midnight_glam_lash_primer_booster_6.png"
    ],
    "description": "Premium midnight glam lash primer booster engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "midnight glam",
      "lash primer booster",
      "clean beauty"
    ]
  },
  {
    "id": 260,
    "name": "Lumière Rose Luxe Matte Lip Liner 6",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 1499,
    "originalPrice": 1889,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 999,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p260_lumi_re_rose_luxe_matte_lip_liner_6.png"
    ],
    "description": "Premium rose luxe matte lip liner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "rose luxe",
      "matte lip liner",
      "clean beauty"
    ]
  },
  {
    "id": 261,
    "name": "Lumière Velvet Matte Lipstick 7",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 3399,
    "originalPrice": 4589,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 877,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p261_lumi_re_velvet_matte_lipstick_7.png"
    ],
    "description": "Premium velvet matte lipstick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "velvet",
      "matte lipstick",
      "clean beauty"
    ]
  },
  {
    "id": 262,
    "name": "Lumière Flawless 24H Liquid Foundation 7",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 999,
    "originalPrice": 1379,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 1107,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p262_lumi_re_flawless_24h_liquid_foundation_7.png"
    ],
    "description": "Premium flawless 24h liquid foundation engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "flawless 24h",
      "liquid foundation",
      "clean beauty"
    ]
  },
  {
    "id": 263,
    "name": "Lumière Luminous Gold Eyeshadow Palette 7",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 2399,
    "originalPrice": 3119,
    "discount": 23,
    "rating": 4.7,
    "reviewCount": 2310,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p263_lumi_re_luminous_gold_eyeshadow_palette_7.png"
    ],
    "description": "Premium luminous gold eyeshadow palette engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "luminous gold",
      "eyeshadow palette",
      "clean beauty"
    ]
  },
  {
    "id": 264,
    "name": "Lumière Champagne Glow Volumizing Mascara 7",
    "brand": "Lumière Botanica",
    "category": "makeup",
    "price": 899,
    "originalPrice": 1142,
    "discount": 21,
    "rating": 4.9,
    "reviewCount": 1772,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p264_lumi_re_champagne_glow_volumizing_mascara_7.png"
    ],
    "description": "Premium champagne glow volumizing mascara engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "champagne glow",
      "volumizing mascara",
      "clean beauty"
    ]
  },
  {
    "id": 265,
    "name": "Lumière Dramatic Lift Highlighter Stick 7",
    "brand": "Lumière NovaDerm",
    "category": "makeup",
    "price": 1599,
    "originalPrice": 2015,
    "discount": 21,
    "rating": 4.6,
    "reviewCount": 1515,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p265_lumi_re_dramatic_lift_highlighter_stick_7.png"
    ],
    "description": "Premium dramatic lift highlighter stick engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "dramatic lift",
      "highlighter stick",
      "clean beauty"
    ]
  },
  {
    "id": 266,
    "name": "Lumière Silk Touch Dewy Liquid Blush 7",
    "brand": "Lumière Pure Bliss",
    "category": "makeup",
    "price": 3599,
    "originalPrice": 4283,
    "discount": 16,
    "rating": 4.6,
    "reviewCount": 1155,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p266_lumi_re_silk_touch_dewy_liquid_blush_7.png"
    ],
    "description": "Premium silk touch dewy liquid blush engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "silk touch",
      "dewy liquid blush",
      "clean beauty"
    ]
  },
  {
    "id": 267,
    "name": "Lumière HD Photogenic Setting Spray 7",
    "brand": "Lumière Paris",
    "category": "makeup",
    "price": 3099,
    "originalPrice": 3626,
    "discount": 15,
    "rating": 4.8,
    "reviewCount": 1860,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p267_lumi_re_hd_photogenic_setting_spray_7.png"
    ],
    "description": "Premium hd photogenic setting spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "makeup",
      "hd photogenic",
      "setting spray",
      "clean beauty"
    ]
  },
  {
    "id": 268,
    "name": "Lumière Starlight Shimmer Concealer Wand 7",
    "brand": "Lumière Lab",
    "category": "makeup",
    "price": 2099,
    "originalPrice": 2750,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 2464,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/makeup/p268_lumi_re_starlight_shimmer_concealer_wand_7.png"
    ],
    "description": "Premium starlight shimmer concealer wand engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": [
      {
        "name": "Rose Nude",
        "color": "#e8a598"
      },
      {
        "name": "Berry Velvet",
        "color": "#a03b5b"
      },
      {
        "name": "Ruby Red",
        "color": "#be123c"
      },
      {
        "name": "Warm Honey",
        "color": "#f59e0b"
      }
    ],
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "starlight shimmer",
      "concealer wand",
      "clean beauty"
    ]
  },
  {
    "id": 269,
    "name": "Lumière Satin Smooth Bronzing Powder 7",
    "brand": "Lumière Éclat",
    "category": "makeup",
    "price": 2899,
    "originalPrice": 3769,
    "discount": 23,
    "rating": 4.9,
    "reviewCount": 2190,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p269_lumi_re_satin_smooth_bronzing_powder_7.png"
    ],
    "description": "Premium satin smooth bronzing powder engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "satin smooth",
      "bronzing powder",
      "clean beauty"
    ]
  },
  {
    "id": 270,
    "name": "Lumière Pure Pigment Precision Eyeliner 7",
    "brand": "Lumière Velvet",
    "category": "makeup",
    "price": 1399,
    "originalPrice": 1623,
    "discount": 14,
    "rating": 4.9,
    "reviewCount": 1438,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/makeup/p270_lumi_re_pure_pigment_precision_eyeliner_7.png"
    ],
    "description": "Premium pure pigment precision eyeliner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "makeup",
      "pure pigment",
      "precision eyeliner",
      "clean beauty"
    ]
  },
  {
    "id": 271,
    "name": "Lumière Argan Gold Hair Serum",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 2799,
    "originalPrice": 3303,
    "discount": 15,
    "rating": 4.6,
    "reviewCount": 640,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p271_lumi_re_argan_gold_hair_serum.png"
    ],
    "description": "Premium argan gold hair serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "argan gold",
      "hair serum",
      "clean beauty"
    ]
  },
  {
    "id": 272,
    "name": "Lumière Keratin Intensive Keratin Mask",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 3799,
    "originalPrice": 4635,
    "discount": 18,
    "rating": 4.5,
    "reviewCount": 2199,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p272_lumi_re_keratin_intensive_keratin_mask.png"
    ],
    "description": "Premium keratin intensive keratin mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "keratin intensive",
      "keratin mask",
      "clean beauty"
    ]
  },
  {
    "id": 273,
    "name": "Lumière Scalp Detox Scalp Shampoo",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 799,
    "originalPrice": 991,
    "discount": 19,
    "rating": 4.4,
    "reviewCount": 2587,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p273_lumi_re_scalp_detox_scalp_shampoo.png"
    ],
    "description": "Premium scalp detox scalp shampoo engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "scalp detox",
      "scalp shampoo",
      "clean beauty"
    ]
  },
  {
    "id": 274,
    "name": "Lumière Biotin Boost Hair Growth Oil",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 1699,
    "originalPrice": 1988,
    "discount": 15,
    "rating": 4.9,
    "reviewCount": 1254,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p274_lumi_re_biotin_boost_hair_growth_oil.png"
    ],
    "description": "Premium biotin boost hair growth oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "biotin boost",
      "hair growth oil",
      "clean beauty"
    ]
  },
  {
    "id": 275,
    "name": "Lumière Silk Hydration Leave-In Conditioner",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 1299,
    "originalPrice": 1559,
    "discount": 17,
    "rating": 4.6,
    "reviewCount": 2122,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p275_lumi_re_silk_hydration_leave_in_conditioner.png"
    ],
    "description": "Premium silk hydration leave-in conditioner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "silk hydration",
      "leave-in conditioner",
      "clean beauty"
    ]
  },
  {
    "id": 276,
    "name": "Lumière Rosemary Infused Heat Protectant Mist",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 3699,
    "originalPrice": 4624,
    "discount": 20,
    "rating": 4.6,
    "reviewCount": 643,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p276_lumi_re_rosemary_infused_heat_protectant_mist.png"
    ],
    "description": "Premium rosemary infused heat protectant mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "rosemary infused",
      "heat protectant mist",
      "clean beauty"
    ]
  },
  {
    "id": 277,
    "name": "Lumière Coconut Moisture Volumizing Mousse",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 3699,
    "originalPrice": 4772,
    "discount": 22,
    "rating": 4.4,
    "reviewCount": 1820,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p277_lumi_re_coconut_moisture_volumizing_mousse.png"
    ],
    "description": "Premium coconut moisture volumizing mousse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "coconut moisture",
      "volumizing mousse",
      "clean beauty"
    ]
  },
  {
    "id": 278,
    "name": "Lumière Repair & Protect Anti-Frizz Spray",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 3699,
    "originalPrice": 4291,
    "discount": 14,
    "rating": 4.7,
    "reviewCount": 2028,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p278_lumi_re_repair_protect_anti_frizz_spray.png"
    ],
    "description": "Premium repair & protect anti-frizz spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "repair & protect",
      "anti-frizz spray",
      "clean beauty"
    ]
  },
  {
    "id": 279,
    "name": "Lumière Gloss & Shine Deep Moisture Butter",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 2999,
    "originalPrice": 3689,
    "discount": 19,
    "rating": 4.9,
    "reviewCount": 733,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p279_lumi_re_gloss_shine_deep_moisture_butter.png"
    ],
    "description": "Premium gloss & shine deep moisture butter engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "gloss & shine",
      "deep moisture butter",
      "clean beauty"
    ]
  },
  {
    "id": 280,
    "name": "Lumière Density Vitality Scalp Detox Scrub",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 1999,
    "originalPrice": 2339,
    "discount": 15,
    "rating": 4.5,
    "reviewCount": 161,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p280_lumi_re_density_vitality_scalp_detox_scrub.png"
    ],
    "description": "Premium density vitality scalp detox scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "density vitality",
      "scalp detox scrub",
      "clean beauty"
    ]
  },
  {
    "id": 281,
    "name": "Lumière Argan Gold Color Shield Rinse",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 3699,
    "originalPrice": 4476,
    "discount": 17,
    "rating": 4.8,
    "reviewCount": 1221,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p281_lumi_re_argan_gold_color_shield_rinse.png"
    ],
    "description": "Premium argan gold color shield rinse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "argan gold",
      "color shield rinse",
      "clean beauty"
    ]
  },
  {
    "id": 282,
    "name": "Lumière Keratin Intensive Biotin Fortifying Tonic",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 599,
    "originalPrice": 815,
    "discount": 27,
    "rating": 4.9,
    "reviewCount": 305,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p282_lumi_re_keratin_intensive_biotin_fortifying_tonic.png"
    ],
    "description": "Premium keratin intensive biotin fortifying tonic engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "keratin intensive",
      "biotin fortifying tonic",
      "clean beauty"
    ]
  },
  {
    "id": 283,
    "name": "Lumière Scalp Detox Hair Serum 2",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 2099,
    "originalPrice": 2561,
    "discount": 18,
    "rating": 4.8,
    "reviewCount": 1630,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p283_lumi_re_scalp_detox_hair_serum_2.png"
    ],
    "description": "Premium scalp detox hair serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "scalp detox",
      "hair serum",
      "clean beauty"
    ]
  },
  {
    "id": 284,
    "name": "Lumière Biotin Boost Keratin Mask 2",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 3699,
    "originalPrice": 4735,
    "discount": 22,
    "rating": 5,
    "reviewCount": 2395,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p284_lumi_re_biotin_boost_keratin_mask_2.png"
    ],
    "description": "Premium biotin boost keratin mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "biotin boost",
      "keratin mask",
      "clean beauty"
    ]
  },
  {
    "id": 285,
    "name": "Lumière Silk Hydration Scalp Shampoo 2",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 1599,
    "originalPrice": 2223,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 2411,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p285_lumi_re_silk_hydration_scalp_shampoo_2.png"
    ],
    "description": "Premium silk hydration scalp shampoo engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "silk hydration",
      "scalp shampoo",
      "clean beauty"
    ]
  },
  {
    "id": 286,
    "name": "Lumière Rosemary Infused Hair Growth Oil 2",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 1199,
    "originalPrice": 1667,
    "discount": 28,
    "rating": 4.6,
    "reviewCount": 470,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p286_lumi_re_rosemary_infused_hair_growth_oil_2.png"
    ],
    "description": "Premium rosemary infused hair growth oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "rosemary infused",
      "hair growth oil",
      "clean beauty"
    ]
  },
  {
    "id": 287,
    "name": "Lumière Coconut Moisture Leave-In Conditioner 2",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 2799,
    "originalPrice": 3387,
    "discount": 17,
    "rating": 4.6,
    "reviewCount": 2493,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p287_lumi_re_coconut_moisture_leave_in_conditioner_2.png"
    ],
    "description": "Premium coconut moisture leave-in conditioner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "coconut moisture",
      "leave-in conditioner",
      "clean beauty"
    ]
  },
  {
    "id": 288,
    "name": "Lumière Repair & Protect Heat Protectant Mist 2",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 1199,
    "originalPrice": 1379,
    "discount": 13,
    "rating": 4.5,
    "reviewCount": 2151,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p288_lumi_re_repair_protect_heat_protectant_mist_2.png"
    ],
    "description": "Premium repair & protect heat protectant mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "repair & protect",
      "heat protectant mist",
      "clean beauty"
    ]
  },
  {
    "id": 289,
    "name": "Lumière Gloss & Shine Volumizing Mousse 2",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 1499,
    "originalPrice": 1829,
    "discount": 18,
    "rating": 4.8,
    "reviewCount": 1170,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p289_lumi_re_gloss_shine_volumizing_mousse_2.png"
    ],
    "description": "Premium gloss & shine volumizing mousse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "gloss & shine",
      "volumizing mousse",
      "clean beauty"
    ]
  },
  {
    "id": 290,
    "name": "Lumière Density Vitality Anti-Frizz Spray 2",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 2299,
    "originalPrice": 3173,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 935,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p290_lumi_re_density_vitality_anti_frizz_spray_2.png"
    ],
    "description": "Premium density vitality anti-frizz spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "density vitality",
      "anti-frizz spray",
      "clean beauty"
    ]
  },
  {
    "id": 291,
    "name": "Lumière Argan Gold Deep Moisture Butter 2",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 2299,
    "originalPrice": 3035,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 1676,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p291_lumi_re_argan_gold_deep_moisture_butter_2.png"
    ],
    "description": "Premium argan gold deep moisture butter engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "argan gold",
      "deep moisture butter",
      "clean beauty"
    ]
  },
  {
    "id": 292,
    "name": "Lumière Keratin Intensive Scalp Detox Scrub 2",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 599,
    "originalPrice": 827,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 1561,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p292_lumi_re_keratin_intensive_scalp_detox_scrub_2.png"
    ],
    "description": "Premium keratin intensive scalp detox scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "keratin intensive",
      "scalp detox scrub",
      "clean beauty"
    ]
  },
  {
    "id": 293,
    "name": "Lumière Scalp Detox Color Shield Rinse 2",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 2799,
    "originalPrice": 3807,
    "discount": 26,
    "rating": 4.8,
    "reviewCount": 2376,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p293_lumi_re_scalp_detox_color_shield_rinse_2.png"
    ],
    "description": "Premium scalp detox color shield rinse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "scalp detox",
      "color shield rinse",
      "clean beauty"
    ]
  },
  {
    "id": 294,
    "name": "Lumière Biotin Boost Biotin Fortifying Tonic 2",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 2799,
    "originalPrice": 3807,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 226,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p294_lumi_re_biotin_boost_biotin_fortifying_tonic_2.png"
    ],
    "description": "Premium biotin boost biotin fortifying tonic engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "biotin boost",
      "biotin fortifying tonic",
      "clean beauty"
    ]
  },
  {
    "id": 295,
    "name": "Lumière Silk Hydration Hair Serum 3",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 1699,
    "originalPrice": 2107,
    "discount": 19,
    "rating": 4.7,
    "reviewCount": 1096,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p295_lumi_re_silk_hydration_hair_serum_3.png"
    ],
    "description": "Premium silk hydration hair serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "silk hydration",
      "hair serum",
      "clean beauty"
    ]
  },
  {
    "id": 296,
    "name": "Lumière Rosemary Infused Keratin Mask 3",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 3699,
    "originalPrice": 4920,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 2213,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p296_lumi_re_rosemary_infused_keratin_mask_3.png"
    ],
    "description": "Premium rosemary infused keratin mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "rosemary infused",
      "keratin mask",
      "clean beauty"
    ]
  },
  {
    "id": 297,
    "name": "Lumière Coconut Moisture Scalp Shampoo 3",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 3099,
    "originalPrice": 3564,
    "discount": 13,
    "rating": 4.6,
    "reviewCount": 2501,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p297_lumi_re_coconut_moisture_scalp_shampoo_3.png"
    ],
    "description": "Premium coconut moisture scalp shampoo engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "coconut moisture",
      "scalp shampoo",
      "clean beauty"
    ]
  },
  {
    "id": 298,
    "name": "Lumière Repair & Protect Hair Growth Oil 3",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 2599,
    "originalPrice": 3301,
    "discount": 21,
    "rating": 4.9,
    "reviewCount": 438,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p298_lumi_re_repair_protect_hair_growth_oil_3.png"
    ],
    "description": "Premium repair & protect hair growth oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "repair & protect",
      "hair growth oil",
      "clean beauty"
    ]
  },
  {
    "id": 299,
    "name": "Lumière Gloss & Shine Leave-In Conditioner 3",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 1399,
    "originalPrice": 1749,
    "discount": 20,
    "rating": 4.8,
    "reviewCount": 1208,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p299_lumi_re_gloss_shine_leave_in_conditioner_3.png"
    ],
    "description": "Premium gloss & shine leave-in conditioner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "gloss & shine",
      "leave-in conditioner",
      "clean beauty"
    ]
  },
  {
    "id": 300,
    "name": "Lumière Density Vitality Heat Protectant Mist 3",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 1499,
    "originalPrice": 1874,
    "discount": 20,
    "rating": 4.7,
    "reviewCount": 947,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p300_lumi_re_density_vitality_heat_protectant_mist_3.png"
    ],
    "description": "Premium density vitality heat protectant mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "density vitality",
      "heat protectant mist",
      "clean beauty"
    ]
  },
  {
    "id": 301,
    "name": "Lumière Argan Gold Volumizing Mousse 3",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 3399,
    "originalPrice": 4215,
    "discount": 19,
    "rating": 4.5,
    "reviewCount": 2600,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p301_lumi_re_argan_gold_volumizing_mousse_3.png"
    ],
    "description": "Premium argan gold volumizing mousse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "argan gold",
      "volumizing mousse",
      "clean beauty"
    ]
  },
  {
    "id": 302,
    "name": "Lumière Keratin Intensive Anti-Frizz Spray 3",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 1399,
    "originalPrice": 1749,
    "discount": 20,
    "rating": 4.9,
    "reviewCount": 1697,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p302_lumi_re_keratin_intensive_anti_frizz_spray_3.png"
    ],
    "description": "Premium keratin intensive anti-frizz spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "keratin intensive",
      "anti-frizz spray",
      "clean beauty"
    ]
  },
  {
    "id": 303,
    "name": "Lumière Scalp Detox Deep Moisture Butter 3",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 2499,
    "originalPrice": 3374,
    "discount": 26,
    "rating": 4.7,
    "reviewCount": 1804,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p303_lumi_re_scalp_detox_deep_moisture_butter_3.png"
    ],
    "description": "Premium scalp detox deep moisture butter engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "scalp detox",
      "deep moisture butter",
      "clean beauty"
    ]
  },
  {
    "id": 304,
    "name": "Lumière Biotin Boost Scalp Detox Scrub 3",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 799,
    "originalPrice": 919,
    "discount": 13,
    "rating": 4.9,
    "reviewCount": 1263,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p304_lumi_re_biotin_boost_scalp_detox_scrub_3.png"
    ],
    "description": "Premium biotin boost scalp detox scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "biotin boost",
      "scalp detox scrub",
      "clean beauty"
    ]
  },
  {
    "id": 305,
    "name": "Lumière Silk Hydration Color Shield Rinse 3",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 3699,
    "originalPrice": 4661,
    "discount": 21,
    "rating": 4.7,
    "reviewCount": 1222,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p305_lumi_re_silk_hydration_color_shield_rinse_3.png"
    ],
    "description": "Premium silk hydration color shield rinse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "silk hydration",
      "color shield rinse",
      "clean beauty"
    ]
  },
  {
    "id": 306,
    "name": "Lumière Rosemary Infused Biotin Fortifying Tonic 3",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 1999,
    "originalPrice": 2679,
    "discount": 25,
    "rating": 4.7,
    "reviewCount": 423,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p306_lumi_re_rosemary_infused_biotin_fortifying_tonic_3.png"
    ],
    "description": "Premium rosemary infused biotin fortifying tonic engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "rosemary infused",
      "biotin fortifying tonic",
      "clean beauty"
    ]
  },
  {
    "id": 307,
    "name": "Lumière Coconut Moisture Hair Serum 4",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 3099,
    "originalPrice": 4215,
    "discount": 26,
    "rating": 4.4,
    "reviewCount": 509,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p307_lumi_re_coconut_moisture_hair_serum_4.png"
    ],
    "description": "Premium coconut moisture hair serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "coconut moisture",
      "hair serum",
      "clean beauty"
    ]
  },
  {
    "id": 308,
    "name": "Lumière Repair & Protect Keratin Mask 4",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 1399,
    "originalPrice": 1735,
    "discount": 19,
    "rating": 4.5,
    "reviewCount": 2044,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p308_lumi_re_repair_protect_keratin_mask_4.png"
    ],
    "description": "Premium repair & protect keratin mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "repair & protect",
      "keratin mask",
      "clean beauty"
    ]
  },
  {
    "id": 309,
    "name": "Lumière Gloss & Shine Scalp Shampoo 4",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 3199,
    "originalPrice": 4159,
    "discount": 23,
    "rating": 4.7,
    "reviewCount": 687,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p309_lumi_re_gloss_shine_scalp_shampoo_4.png"
    ],
    "description": "Premium gloss & shine scalp shampoo engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "gloss & shine",
      "scalp shampoo",
      "clean beauty"
    ]
  },
  {
    "id": 310,
    "name": "Lumière Density Vitality Hair Growth Oil 4",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 2099,
    "originalPrice": 2897,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 712,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p310_lumi_re_density_vitality_hair_growth_oil_4.png"
    ],
    "description": "Premium density vitality hair growth oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "density vitality",
      "hair growth oil",
      "clean beauty"
    ]
  },
  {
    "id": 311,
    "name": "Lumière Argan Gold Leave-In Conditioner 4",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 2299,
    "originalPrice": 2851,
    "discount": 19,
    "rating": 4.4,
    "reviewCount": 2214,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p311_lumi_re_argan_gold_leave_in_conditioner_4.png"
    ],
    "description": "Premium argan gold leave-in conditioner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "argan gold",
      "leave-in conditioner",
      "clean beauty"
    ]
  },
  {
    "id": 312,
    "name": "Lumière Keratin Intensive Heat Protectant Mist 4",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 2399,
    "originalPrice": 2903,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 309,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p312_lumi_re_keratin_intensive_heat_protectant_mist_4.png"
    ],
    "description": "Premium keratin intensive heat protectant mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "keratin intensive",
      "heat protectant mist",
      "clean beauty"
    ]
  },
  {
    "id": 313,
    "name": "Lumière Scalp Detox Volumizing Mousse 4",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 799,
    "originalPrice": 1031,
    "discount": 23,
    "rating": 4.9,
    "reviewCount": 2529,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p313_lumi_re_scalp_detox_volumizing_mousse_4.png"
    ],
    "description": "Premium scalp detox volumizing mousse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "scalp detox",
      "volumizing mousse",
      "clean beauty"
    ]
  },
  {
    "id": 314,
    "name": "Lumière Biotin Boost Anti-Frizz Spray 4",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 499,
    "originalPrice": 579,
    "discount": 14,
    "rating": 5,
    "reviewCount": 2535,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p314_lumi_re_biotin_boost_anti_frizz_spray_4.png"
    ],
    "description": "Premium biotin boost anti-frizz spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "biotin boost",
      "anti-frizz spray",
      "clean beauty"
    ]
  },
  {
    "id": 315,
    "name": "Lumière Silk Hydration Deep Moisture Butter 4",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 3699,
    "originalPrice": 4476,
    "discount": 17,
    "rating": 4.7,
    "reviewCount": 841,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p315_lumi_re_silk_hydration_deep_moisture_butter_4.png"
    ],
    "description": "Premium silk hydration deep moisture butter engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "silk hydration",
      "deep moisture butter",
      "clean beauty"
    ]
  },
  {
    "id": 316,
    "name": "Lumière Rosemary Infused Scalp Detox Scrub 4",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 1799,
    "originalPrice": 2069,
    "discount": 13,
    "rating": 4.6,
    "reviewCount": 647,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p316_lumi_re_rosemary_infused_scalp_detox_scrub_4.png"
    ],
    "description": "Premium rosemary infused scalp detox scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "rosemary infused",
      "scalp detox scrub",
      "clean beauty"
    ]
  },
  {
    "id": 317,
    "name": "Lumière Coconut Moisture Color Shield Rinse 4",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 599,
    "originalPrice": 767,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 528,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p317_lumi_re_coconut_moisture_color_shield_rinse_4.png"
    ],
    "description": "Premium coconut moisture color shield rinse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "coconut moisture",
      "color shield rinse",
      "clean beauty"
    ]
  },
  {
    "id": 318,
    "name": "Lumière Repair & Protect Biotin Fortifying Tonic 4",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 599,
    "originalPrice": 821,
    "discount": 27,
    "rating": 4.7,
    "reviewCount": 1326,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p318_lumi_re_repair_protect_biotin_fortifying_tonic_4.png"
    ],
    "description": "Premium repair & protect biotin fortifying tonic engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "repair & protect",
      "biotin fortifying tonic",
      "clean beauty"
    ]
  },
  {
    "id": 319,
    "name": "Lumière Gloss & Shine Hair Serum 5",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 899,
    "originalPrice": 1214,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 1366,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p319_lumi_re_gloss_shine_hair_serum_5.png"
    ],
    "description": "Premium gloss & shine hair serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "gloss & shine",
      "hair serum",
      "clean beauty"
    ]
  },
  {
    "id": 320,
    "name": "Lumière Density Vitality Keratin Mask 5",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 2299,
    "originalPrice": 2736,
    "discount": 16,
    "rating": 4.9,
    "reviewCount": 841,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p320_lumi_re_density_vitality_keratin_mask_5.png"
    ],
    "description": "Premium density vitality keratin mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "density vitality",
      "keratin mask",
      "clean beauty"
    ]
  },
  {
    "id": 321,
    "name": "Lumière Argan Gold Scalp Shampoo 5",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 699,
    "originalPrice": 937,
    "discount": 25,
    "rating": 4.7,
    "reviewCount": 1662,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p321_lumi_re_argan_gold_scalp_shampoo_5.png"
    ],
    "description": "Premium argan gold scalp shampoo engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "argan gold",
      "scalp shampoo",
      "clean beauty"
    ]
  },
  {
    "id": 322,
    "name": "Lumière Keratin Intensive Hair Growth Oil 5",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 1399,
    "originalPrice": 1875,
    "discount": 25,
    "rating": 4.7,
    "reviewCount": 2288,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p322_lumi_re_keratin_intensive_hair_growth_oil_5.png"
    ],
    "description": "Premium keratin intensive hair growth oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "keratin intensive",
      "hair growth oil",
      "clean beauty"
    ]
  },
  {
    "id": 323,
    "name": "Lumière Scalp Detox Leave-In Conditioner 5",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 2699,
    "originalPrice": 3536,
    "discount": 24,
    "rating": 4.8,
    "reviewCount": 865,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p323_lumi_re_scalp_detox_leave_in_conditioner_5.png"
    ],
    "description": "Premium scalp detox leave-in conditioner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "scalp detox",
      "leave-in conditioner",
      "clean beauty"
    ]
  },
  {
    "id": 324,
    "name": "Lumière Biotin Boost Heat Protectant Mist 5",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 1699,
    "originalPrice": 2209,
    "discount": 23,
    "rating": 4.6,
    "reviewCount": 1849,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p324_lumi_re_biotin_boost_heat_protectant_mist_5.png"
    ],
    "description": "Premium biotin boost heat protectant mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "biotin boost",
      "heat protectant mist",
      "clean beauty"
    ]
  },
  {
    "id": 325,
    "name": "Lumière Silk Hydration Volumizing Mousse 5",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 499,
    "originalPrice": 679,
    "discount": 27,
    "rating": 4.9,
    "reviewCount": 1878,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p325_lumi_re_silk_hydration_volumizing_mousse_5.png"
    ],
    "description": "Premium silk hydration volumizing mousse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "silk hydration",
      "volumizing mousse",
      "clean beauty"
    ]
  },
  {
    "id": 326,
    "name": "Lumière Rosemary Infused Anti-Frizz Spray 5",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 2399,
    "originalPrice": 2927,
    "discount": 18,
    "rating": 4.6,
    "reviewCount": 2381,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p326_lumi_re_rosemary_infused_anti_frizz_spray_5.png"
    ],
    "description": "Premium rosemary infused anti-frizz spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "rosemary infused",
      "anti-frizz spray",
      "clean beauty"
    ]
  },
  {
    "id": 327,
    "name": "Lumière Coconut Moisture Deep Moisture Butter 5",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 3899,
    "originalPrice": 5420,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 2315,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p327_lumi_re_coconut_moisture_deep_moisture_butter_5.png"
    ],
    "description": "Premium coconut moisture deep moisture butter engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "coconut moisture",
      "deep moisture butter",
      "clean beauty"
    ]
  },
  {
    "id": 328,
    "name": "Lumière Repair & Protect Scalp Detox Scrub 5",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 1599,
    "originalPrice": 1855,
    "discount": 14,
    "rating": 4.8,
    "reviewCount": 1314,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p328_lumi_re_repair_protect_scalp_detox_scrub_5.png"
    ],
    "description": "Premium repair & protect scalp detox scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "repair & protect",
      "scalp detox scrub",
      "clean beauty"
    ]
  },
  {
    "id": 329,
    "name": "Lumière Gloss & Shine Color Shield Rinse 5",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 1099,
    "originalPrice": 1528,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 702,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p329_lumi_re_gloss_shine_color_shield_rinse_5.png"
    ],
    "description": "Premium gloss & shine color shield rinse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "gloss & shine",
      "color shield rinse",
      "clean beauty"
    ]
  },
  {
    "id": 330,
    "name": "Lumière Density Vitality Biotin Fortifying Tonic 5",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 3099,
    "originalPrice": 3781,
    "discount": 18,
    "rating": 4.8,
    "reviewCount": 1734,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p330_lumi_re_density_vitality_biotin_fortifying_tonic_5.png"
    ],
    "description": "Premium density vitality biotin fortifying tonic engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "density vitality",
      "biotin fortifying tonic",
      "clean beauty"
    ]
  },
  {
    "id": 331,
    "name": "Lumière Argan Gold Hair Serum 6",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 499,
    "originalPrice": 679,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 1688,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p331_lumi_re_argan_gold_hair_serum_6.png"
    ],
    "description": "Premium argan gold hair serum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "argan gold",
      "hair serum",
      "clean beauty"
    ]
  },
  {
    "id": 332,
    "name": "Lumière Keratin Intensive Keratin Mask 6",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 2199,
    "originalPrice": 2705,
    "discount": 19,
    "rating": 4.5,
    "reviewCount": 675,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p332_lumi_re_keratin_intensive_keratin_mask_6.png"
    ],
    "description": "Premium keratin intensive keratin mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "keratin intensive",
      "keratin mask",
      "clean beauty"
    ]
  },
  {
    "id": 333,
    "name": "Lumière Scalp Detox Scalp Shampoo 6",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 2399,
    "originalPrice": 2903,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 2160,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p333_lumi_re_scalp_detox_scalp_shampoo_6.png"
    ],
    "description": "Premium scalp detox scalp shampoo engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "scalp detox",
      "scalp shampoo",
      "clean beauty"
    ]
  },
  {
    "id": 334,
    "name": "Lumière Biotin Boost Hair Growth Oil 6",
    "brand": "Lumière Paris",
    "category": "haircare",
    "price": 3799,
    "originalPrice": 4977,
    "discount": 24,
    "rating": 4.4,
    "reviewCount": 534,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p334_lumi_re_biotin_boost_hair_growth_oil_6.png"
    ],
    "description": "Premium biotin boost hair growth oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "biotin boost",
      "hair growth oil",
      "clean beauty"
    ]
  },
  {
    "id": 335,
    "name": "Lumière Silk Hydration Leave-In Conditioner 6",
    "brand": "Lumière Lab",
    "category": "haircare",
    "price": 1199,
    "originalPrice": 1475,
    "discount": 19,
    "rating": 4.6,
    "reviewCount": 657,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p335_lumi_re_silk_hydration_leave_in_conditioner_6.png"
    ],
    "description": "Premium silk hydration leave-in conditioner engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "silk hydration",
      "leave-in conditioner",
      "clean beauty"
    ]
  },
  {
    "id": 336,
    "name": "Lumière Rosemary Infused Heat Protectant Mist 6",
    "brand": "Lumière Éclat",
    "category": "haircare",
    "price": 2999,
    "originalPrice": 3719,
    "discount": 19,
    "rating": 4.4,
    "reviewCount": 681,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p336_lumi_re_rosemary_infused_heat_protectant_mist_6.png"
    ],
    "description": "Premium rosemary infused heat protectant mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "rosemary infused",
      "heat protectant mist",
      "clean beauty"
    ]
  },
  {
    "id": 337,
    "name": "Lumière Coconut Moisture Volumizing Mousse 6",
    "brand": "Lumière Velvet",
    "category": "haircare",
    "price": 2099,
    "originalPrice": 2456,
    "discount": 15,
    "rating": 4.7,
    "reviewCount": 268,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p337_lumi_re_coconut_moisture_volumizing_mousse_6.png"
    ],
    "description": "Premium coconut moisture volumizing mousse engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "haircare",
      "coconut moisture",
      "volumizing mousse",
      "clean beauty"
    ]
  },
  {
    "id": 338,
    "name": "Lumière Repair & Protect Anti-Frizz Spray 6",
    "brand": "Lumière Botanica",
    "category": "haircare",
    "price": 999,
    "originalPrice": 1249,
    "discount": 20,
    "rating": 4.5,
    "reviewCount": 2440,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p338_lumi_re_repair_protect_anti_frizz_spray_6.png"
    ],
    "description": "Premium repair & protect anti-frizz spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "repair & protect",
      "anti-frizz spray",
      "clean beauty"
    ]
  },
  {
    "id": 339,
    "name": "Lumière Gloss & Shine Deep Moisture Butter 6",
    "brand": "Lumière NovaDerm",
    "category": "haircare",
    "price": 2299,
    "originalPrice": 2667,
    "discount": 14,
    "rating": 4.7,
    "reviewCount": 2366,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/haircare/p339_lumi_re_gloss_shine_deep_moisture_butter_6.png"
    ],
    "description": "Premium gloss & shine deep moisture butter engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "gloss & shine",
      "deep moisture butter",
      "clean beauty"
    ]
  },
  {
    "id": 340,
    "name": "Lumière Density Vitality Scalp Detox Scrub 6",
    "brand": "Lumière Pure Bliss",
    "category": "haircare",
    "price": 2099,
    "originalPrice": 2855,
    "discount": 26,
    "rating": 4.5,
    "reviewCount": 256,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/haircare/p340_lumi_re_density_vitality_scalp_detox_scrub_6.png"
    ],
    "description": "Premium density vitality scalp detox scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "haircare",
      "density vitality",
      "scalp detox scrub",
      "clean beauty"
    ]
  },
  {
    "id": 341,
    "name": "Lumière Rose Oud Eau de Parfum",
    "brand": "Lumière Paris",
    "category": "fragrance",
    "price": 3499,
    "originalPrice": 4374,
    "discount": 20,
    "rating": 4.9,
    "reviewCount": 165,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p341_lumi_re_rose_oud_eau_de_parfum.png"
    ],
    "description": "Premium rose oud eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "rose oud",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 342,
    "name": "Lumière Blush Jasmine Perfume Mist",
    "brand": "Lumière Lab",
    "category": "fragrance",
    "price": 2599,
    "originalPrice": 3119,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 556,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p342_lumi_re_blush_jasmine_perfume_mist.png"
    ],
    "description": "Premium blush jasmine perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "blush jasmine",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 343,
    "name": "Lumière Midnight Noir Extrait de Parfum",
    "brand": "Lumière Éclat",
    "category": "fragrance",
    "price": 899,
    "originalPrice": 1169,
    "discount": 23,
    "rating": 4.8,
    "reviewCount": 1890,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p343_lumi_re_midnight_noir_extrait_de_parfum.png"
    ],
    "description": "Premium midnight noir extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "midnight noir",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 344,
    "name": "Lumière Vanilla Dream Fragrance Oil",
    "brand": "Lumière Velvet",
    "category": "fragrance",
    "price": 2399,
    "originalPrice": 2951,
    "discount": 19,
    "rating": 5,
    "reviewCount": 1372,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p344_lumi_re_vanilla_dream_fragrance_oil.png"
    ],
    "description": "Premium vanilla dream fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "vanilla dream",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 345,
    "name": "Lumière Amber Warmth Body Spray",
    "brand": "Lumière Botanica",
    "category": "fragrance",
    "price": 899,
    "originalPrice": 1169,
    "discount": 23,
    "rating": 4.8,
    "reviewCount": 1248,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p345_lumi_re_amber_warmth_body_spray.png"
    ],
    "description": "Premium amber warmth body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "amber warmth",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 346,
    "name": "Lumière Ocean Mist Eau de Parfum 2",
    "brand": "Lumière NovaDerm",
    "category": "fragrance",
    "price": 799,
    "originalPrice": 1031,
    "discount": 23,
    "rating": 4.7,
    "reviewCount": 2007,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p346_lumi_re_ocean_mist_eau_de_parfum_2.png"
    ],
    "description": "Premium ocean mist eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "ocean mist",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 347,
    "name": "Lumière Citrus Bloom Perfume Mist 2",
    "brand": "Lumière Pure Bliss",
    "category": "fragrance",
    "price": 3899,
    "originalPrice": 5342,
    "discount": 27,
    "rating": 4.6,
    "reviewCount": 971,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p347_lumi_re_citrus_bloom_perfume_mist_2.png"
    ],
    "description": "Premium citrus bloom perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "citrus bloom",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 348,
    "name": "Lumière Velvet Orchid Extrait de Parfum 2",
    "brand": "Lumière Paris",
    "category": "fragrance",
    "price": 599,
    "originalPrice": 833,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 347,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p348_lumi_re_velvet_orchid_extrait_de_parfum_2.png"
    ],
    "description": "Premium velvet orchid extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "velvet orchid",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 349,
    "name": "Lumière Smokey Vetiver Fragrance Oil 2",
    "brand": "Lumière Lab",
    "category": "fragrance",
    "price": 1099,
    "originalPrice": 1264,
    "discount": 13,
    "rating": 4.7,
    "reviewCount": 1903,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p349_lumi_re_smokey_vetiver_fragrance_oil_2.png"
    ],
    "description": "Premium smokey vetiver fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "smokey vetiver",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 350,
    "name": "Lumière White Musk Body Spray 2",
    "brand": "Lumière Éclat",
    "category": "fragrance",
    "price": 2399,
    "originalPrice": 3167,
    "discount": 24,
    "rating": 4.8,
    "reviewCount": 904,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p350_lumi_re_white_musk_body_spray_2.png"
    ],
    "description": "Premium white musk body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "white musk",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 351,
    "name": "Lumière Rose Oud Eau de Parfum 3",
    "brand": "Lumière Velvet",
    "category": "fragrance",
    "price": 1499,
    "originalPrice": 1934,
    "discount": 22,
    "rating": 4.9,
    "reviewCount": 1305,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p351_lumi_re_rose_oud_eau_de_parfum_3.png"
    ],
    "description": "Premium rose oud eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "rose oud",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 352,
    "name": "Lumière Blush Jasmine Perfume Mist 3",
    "brand": "Lumière Botanica",
    "category": "fragrance",
    "price": 3499,
    "originalPrice": 4829,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 2011,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p352_lumi_re_blush_jasmine_perfume_mist_3.png"
    ],
    "description": "Premium blush jasmine perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "blush jasmine",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 353,
    "name": "Lumière Midnight Noir Extrait de Parfum 3",
    "brand": "Lumière NovaDerm",
    "category": "fragrance",
    "price": 2599,
    "originalPrice": 3561,
    "discount": 27,
    "rating": 4.6,
    "reviewCount": 181,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p353_lumi_re_midnight_noir_extrait_de_parfum_3.png"
    ],
    "description": "Premium midnight noir extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "midnight noir",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 354,
    "name": "Lumière Vanilla Dream Fragrance Oil 3",
    "brand": "Lumière Pure Bliss",
    "category": "fragrance",
    "price": 2599,
    "originalPrice": 3119,
    "discount": 17,
    "rating": 4.9,
    "reviewCount": 2588,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p354_lumi_re_vanilla_dream_fragrance_oil_3.png"
    ],
    "description": "Premium vanilla dream fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "vanilla dream",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 355,
    "name": "Lumière Amber Warmth Body Spray 3",
    "brand": "Lumière Paris",
    "category": "fragrance",
    "price": 3099,
    "originalPrice": 3688,
    "discount": 16,
    "rating": 5,
    "reviewCount": 979,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p355_lumi_re_amber_warmth_body_spray_3.png"
    ],
    "description": "Premium amber warmth body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "amber warmth",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 356,
    "name": "Lumière Ocean Mist Eau de Parfum 4",
    "brand": "Lumière Lab",
    "category": "fragrance",
    "price": 1599,
    "originalPrice": 1919,
    "discount": 17,
    "rating": 4.9,
    "reviewCount": 1668,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p356_lumi_re_ocean_mist_eau_de_parfum_4.png"
    ],
    "description": "Premium ocean mist eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "ocean mist",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 357,
    "name": "Lumière Citrus Bloom Perfume Mist 4",
    "brand": "Lumière Éclat",
    "category": "fragrance",
    "price": 1399,
    "originalPrice": 1917,
    "discount": 27,
    "rating": 4.7,
    "reviewCount": 1214,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p357_lumi_re_citrus_bloom_perfume_mist_4.png"
    ],
    "description": "Premium citrus bloom perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "citrus bloom",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 358,
    "name": "Lumière Velvet Orchid Extrait de Parfum 4",
    "brand": "Lumière Velvet",
    "category": "fragrance",
    "price": 3199,
    "originalPrice": 4319,
    "discount": 26,
    "rating": 4.5,
    "reviewCount": 1005,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p358_lumi_re_velvet_orchid_extrait_de_parfum_4.png"
    ],
    "description": "Premium velvet orchid extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "velvet orchid",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 359,
    "name": "Lumière Smokey Vetiver Fragrance Oil 4",
    "brand": "Lumière Botanica",
    "category": "fragrance",
    "price": 1099,
    "originalPrice": 1462,
    "discount": 25,
    "rating": 4.6,
    "reviewCount": 723,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p359_lumi_re_smokey_vetiver_fragrance_oil_4.png"
    ],
    "description": "Premium smokey vetiver fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "smokey vetiver",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 360,
    "name": "Lumière White Musk Body Spray 4",
    "brand": "Lumière NovaDerm",
    "category": "fragrance",
    "price": 2399,
    "originalPrice": 2903,
    "discount": 17,
    "rating": 4.9,
    "reviewCount": 2406,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p360_lumi_re_white_musk_body_spray_4.png"
    ],
    "description": "Premium white musk body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "white musk",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 361,
    "name": "Lumière Rose Oud Eau de Parfum 5",
    "brand": "Lumière Pure Bliss",
    "category": "fragrance",
    "price": 2299,
    "originalPrice": 3196,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 2027,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p361_lumi_re_rose_oud_eau_de_parfum_5.png"
    ],
    "description": "Premium rose oud eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "rose oud",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 362,
    "name": "Lumière Blush Jasmine Perfume Mist 5",
    "brand": "Lumière Paris",
    "category": "fragrance",
    "price": 2199,
    "originalPrice": 2749,
    "discount": 20,
    "rating": 4.8,
    "reviewCount": 2060,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p362_lumi_re_blush_jasmine_perfume_mist_5.png"
    ],
    "description": "Premium blush jasmine perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "blush jasmine",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 363,
    "name": "Lumière Midnight Noir Extrait de Parfum 5",
    "brand": "Lumière Lab",
    "category": "fragrance",
    "price": 2699,
    "originalPrice": 3455,
    "discount": 22,
    "rating": 4.9,
    "reviewCount": 372,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p363_lumi_re_midnight_noir_extrait_de_parfum_5.png"
    ],
    "description": "Premium midnight noir extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "midnight noir",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 364,
    "name": "Lumière Vanilla Dream Fragrance Oil 5",
    "brand": "Lumière Éclat",
    "category": "fragrance",
    "price": 2199,
    "originalPrice": 3013,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 485,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p364_lumi_re_vanilla_dream_fragrance_oil_5.png"
    ],
    "description": "Premium vanilla dream fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "vanilla dream",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 365,
    "name": "Lumière Amber Warmth Body Spray 5",
    "brand": "Lumière Velvet",
    "category": "fragrance",
    "price": 699,
    "originalPrice": 804,
    "discount": 13,
    "rating": 5,
    "reviewCount": 1751,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p365_lumi_re_amber_warmth_body_spray_5.png"
    ],
    "description": "Premium amber warmth body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "amber warmth",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 366,
    "name": "Lumière Ocean Mist Eau de Parfum 6",
    "brand": "Lumière Botanica",
    "category": "fragrance",
    "price": 799,
    "originalPrice": 999,
    "discount": 20,
    "rating": 4.7,
    "reviewCount": 1313,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p366_lumi_re_ocean_mist_eau_de_parfum_6.png"
    ],
    "description": "Premium ocean mist eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "ocean mist",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 367,
    "name": "Lumière Citrus Bloom Perfume Mist 6",
    "brand": "Lumière NovaDerm",
    "category": "fragrance",
    "price": 3699,
    "originalPrice": 4772,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 945,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p367_lumi_re_citrus_bloom_perfume_mist_6.png"
    ],
    "description": "Premium citrus bloom perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "citrus bloom",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 368,
    "name": "Lumière Velvet Orchid Extrait de Parfum 6",
    "brand": "Lumière Pure Bliss",
    "category": "fragrance",
    "price": 1299,
    "originalPrice": 1494,
    "discount": 13,
    "rating": 4.7,
    "reviewCount": 534,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p368_lumi_re_velvet_orchid_extrait_de_parfum_6.png"
    ],
    "description": "Premium velvet orchid extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "velvet orchid",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 369,
    "name": "Lumière Smokey Vetiver Fragrance Oil 6",
    "brand": "Lumière Paris",
    "category": "fragrance",
    "price": 2699,
    "originalPrice": 3752,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 157,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p369_lumi_re_smokey_vetiver_fragrance_oil_6.png"
    ],
    "description": "Premium smokey vetiver fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "smokey vetiver",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 370,
    "name": "Lumière White Musk Body Spray 6",
    "brand": "Lumière Lab",
    "category": "fragrance",
    "price": 3399,
    "originalPrice": 4147,
    "discount": 18,
    "rating": 4.6,
    "reviewCount": 1658,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p370_lumi_re_white_musk_body_spray_6.png"
    ],
    "description": "Premium white musk body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "white musk",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 371,
    "name": "Lumière Rose Oud Eau de Parfum 7",
    "brand": "Lumière Éclat",
    "category": "fragrance",
    "price": 3499,
    "originalPrice": 4514,
    "discount": 22,
    "rating": 4.9,
    "reviewCount": 2426,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p371_lumi_re_rose_oud_eau_de_parfum_7.png"
    ],
    "description": "Premium rose oud eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "rose oud",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 372,
    "name": "Lumière Blush Jasmine Perfume Mist 7",
    "brand": "Lumière Velvet",
    "category": "fragrance",
    "price": 899,
    "originalPrice": 1223,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 1709,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p372_lumi_re_blush_jasmine_perfume_mist_7.png"
    ],
    "description": "Premium blush jasmine perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "blush jasmine",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 373,
    "name": "Lumière Midnight Noir Extrait de Parfum 7",
    "brand": "Lumière Botanica",
    "category": "fragrance",
    "price": 3499,
    "originalPrice": 4164,
    "discount": 16,
    "rating": 4.7,
    "reviewCount": 1007,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p373_lumi_re_midnight_noir_extrait_de_parfum_7.png"
    ],
    "description": "Premium midnight noir extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "midnight noir",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 374,
    "name": "Lumière Vanilla Dream Fragrance Oil 7",
    "brand": "Lumière NovaDerm",
    "category": "fragrance",
    "price": 499,
    "originalPrice": 614,
    "discount": 19,
    "rating": 4.6,
    "reviewCount": 2215,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p374_lumi_re_vanilla_dream_fragrance_oil_7.png"
    ],
    "description": "Premium vanilla dream fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "vanilla dream",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 375,
    "name": "Lumière Amber Warmth Body Spray 7",
    "brand": "Lumière Pure Bliss",
    "category": "fragrance",
    "price": 2799,
    "originalPrice": 3527,
    "discount": 21,
    "rating": 4.7,
    "reviewCount": 1680,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p375_lumi_re_amber_warmth_body_spray_7.png"
    ],
    "description": "Premium amber warmth body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "amber warmth",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 376,
    "name": "Lumière Ocean Mist Eau de Parfum 8",
    "brand": "Lumière Paris",
    "category": "fragrance",
    "price": 3199,
    "originalPrice": 3679,
    "discount": 13,
    "rating": 4.9,
    "reviewCount": 2243,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p376_lumi_re_ocean_mist_eau_de_parfum_8.png"
    ],
    "description": "Premium ocean mist eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "ocean mist",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 377,
    "name": "Lumière Citrus Bloom Perfume Mist 8",
    "brand": "Lumière Lab",
    "category": "fragrance",
    "price": 999,
    "originalPrice": 1179,
    "discount": 15,
    "rating": 4.6,
    "reviewCount": 470,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p377_lumi_re_citrus_bloom_perfume_mist_8.png"
    ],
    "description": "Premium citrus bloom perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "citrus bloom",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 378,
    "name": "Lumière Velvet Orchid Extrait de Parfum 8",
    "brand": "Lumière Éclat",
    "category": "fragrance",
    "price": 3299,
    "originalPrice": 4520,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 1577,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p378_lumi_re_velvet_orchid_extrait_de_parfum_8.png"
    ],
    "description": "Premium velvet orchid extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "velvet orchid",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 379,
    "name": "Lumière Smokey Vetiver Fragrance Oil 8",
    "brand": "Lumière Velvet",
    "category": "fragrance",
    "price": 699,
    "originalPrice": 839,
    "discount": 17,
    "rating": 4.7,
    "reviewCount": 1661,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p379_lumi_re_smokey_vetiver_fragrance_oil_8.png"
    ],
    "description": "Premium smokey vetiver fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "smokey vetiver",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 380,
    "name": "Lumière White Musk Body Spray 8",
    "brand": "Lumière Botanica",
    "category": "fragrance",
    "price": 3199,
    "originalPrice": 3743,
    "discount": 15,
    "rating": 4.9,
    "reviewCount": 1026,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p380_lumi_re_white_musk_body_spray_8.png"
    ],
    "description": "Premium white musk body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "white musk",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 381,
    "name": "Lumière Rose Oud Eau de Parfum 9",
    "brand": "Lumière NovaDerm",
    "category": "fragrance",
    "price": 2699,
    "originalPrice": 3347,
    "discount": 19,
    "rating": 4.9,
    "reviewCount": 1270,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p381_lumi_re_rose_oud_eau_de_parfum_9.png"
    ],
    "description": "Premium rose oud eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "rose oud",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 382,
    "name": "Lumière Blush Jasmine Perfume Mist 9",
    "brand": "Lumière Pure Bliss",
    "category": "fragrance",
    "price": 2299,
    "originalPrice": 3150,
    "discount": 27,
    "rating": 4.6,
    "reviewCount": 1988,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p382_lumi_re_blush_jasmine_perfume_mist_9.png"
    ],
    "description": "Premium blush jasmine perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "blush jasmine",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 383,
    "name": "Lumière Midnight Noir Extrait de Parfum 9",
    "brand": "Lumière Paris",
    "category": "fragrance",
    "price": 3499,
    "originalPrice": 4409,
    "discount": 21,
    "rating": 5,
    "reviewCount": 1621,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p383_lumi_re_midnight_noir_extrait_de_parfum_9.png"
    ],
    "description": "Premium midnight noir extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "midnight noir",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 384,
    "name": "Lumière Vanilla Dream Fragrance Oil 9",
    "brand": "Lumière Lab",
    "category": "fragrance",
    "price": 2299,
    "originalPrice": 2667,
    "discount": 14,
    "rating": 5,
    "reviewCount": 1963,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p384_lumi_re_vanilla_dream_fragrance_oil_9.png"
    ],
    "description": "Premium vanilla dream fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "vanilla dream",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 385,
    "name": "Lumière Amber Warmth Body Spray 9",
    "brand": "Lumière Éclat",
    "category": "fragrance",
    "price": 1299,
    "originalPrice": 1728,
    "discount": 25,
    "rating": 5,
    "reviewCount": 1172,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p385_lumi_re_amber_warmth_body_spray_9.png"
    ],
    "description": "Premium amber warmth body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "amber warmth",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 386,
    "name": "Lumière Ocean Mist Eau de Parfum 10",
    "brand": "Lumière Velvet",
    "category": "fragrance",
    "price": 999,
    "originalPrice": 1229,
    "discount": 19,
    "rating": 4.9,
    "reviewCount": 1521,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p386_lumi_re_ocean_mist_eau_de_parfum_10.png"
    ],
    "description": "Premium ocean mist eau de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "ocean mist",
      "eau de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 387,
    "name": "Lumière Citrus Bloom Perfume Mist 10",
    "brand": "Lumière Botanica",
    "category": "fragrance",
    "price": 1999,
    "originalPrice": 2439,
    "discount": 18,
    "rating": 4.8,
    "reviewCount": 569,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p387_lumi_re_citrus_bloom_perfume_mist_10.png"
    ],
    "description": "Premium citrus bloom perfume mist engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "citrus bloom",
      "perfume mist",
      "clean beauty"
    ]
  },
  {
    "id": 388,
    "name": "Lumière Velvet Orchid Extrait de Parfum 10",
    "brand": "Lumière NovaDerm",
    "category": "fragrance",
    "price": 1299,
    "originalPrice": 1494,
    "discount": 13,
    "rating": 4.7,
    "reviewCount": 2371,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p388_lumi_re_velvet_orchid_extrait_de_parfum_10.png"
    ],
    "description": "Premium velvet orchid extrait de parfum engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "velvet orchid",
      "extrait de parfum",
      "clean beauty"
    ]
  },
  {
    "id": 389,
    "name": "Lumière Smokey Vetiver Fragrance Oil 10",
    "brand": "Lumière Pure Bliss",
    "category": "fragrance",
    "price": 3799,
    "originalPrice": 4901,
    "discount": 22,
    "rating": 4.5,
    "reviewCount": 1347,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p389_lumi_re_smokey_vetiver_fragrance_oil_10.png"
    ],
    "description": "Premium smokey vetiver fragrance oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "fragrance",
      "smokey vetiver",
      "fragrance oil",
      "clean beauty"
    ]
  },
  {
    "id": 390,
    "name": "Lumière White Musk Body Spray 10",
    "brand": "Lumière Paris",
    "category": "fragrance",
    "price": 3499,
    "originalPrice": 4479,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 562,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/fragrance/p390_lumi_re_white_musk_body_spray_10.png"
    ],
    "description": "Premium white musk body spray engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "50ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "fragrance",
      "white musk",
      "body spray",
      "clean beauty"
    ]
  },
  {
    "id": 391,
    "name": "Lumière Shea & Mango Body Butter Whip",
    "brand": "Lumière Paris",
    "category": "bodycare",
    "price": 3899,
    "originalPrice": 5303,
    "discount": 26,
    "rating": 4.4,
    "reviewCount": 2545,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p391_lumi_re_shea_mango_body_butter_whip.png"
    ],
    "description": "Premium shea & mango body butter whip engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "bodycare",
      "shea & mango",
      "body butter whip",
      "clean beauty"
    ]
  },
  {
    "id": 392,
    "name": "Lumière Arabica Firming Coffee Body Scrub",
    "brand": "Lumière Lab",
    "category": "bodycare",
    "price": 799,
    "originalPrice": 1055,
    "discount": 24,
    "rating": 4.5,
    "reviewCount": 1321,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p392_lumi_re_arabica_firming_coffee_body_scrub.png"
    ],
    "description": "Premium arabica firming coffee body scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "arabica firming",
      "coffee body scrub",
      "clean beauty"
    ]
  },
  {
    "id": 393,
    "name": "Lumière Velvet Rose Rose Lotion",
    "brand": "Lumière Éclat",
    "category": "bodycare",
    "price": 2899,
    "originalPrice": 3740,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 1637,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p393_lumi_re_velvet_rose_rose_lotion.png"
    ],
    "description": "Premium velvet rose rose lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "velvet rose",
      "rose lotion",
      "clean beauty"
    ]
  },
  {
    "id": 394,
    "name": "Lumière Coconut Cream Firming Body Oil",
    "brand": "Lumière Velvet",
    "category": "bodycare",
    "price": 3199,
    "originalPrice": 3903,
    "discount": 18,
    "rating": 4.8,
    "reviewCount": 377,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p394_lumi_re_coconut_cream_firming_body_oil.png"
    ],
    "description": "Premium coconut cream firming body oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "coconut cream",
      "firming body oil",
      "clean beauty"
    ]
  },
  {
    "id": 395,
    "name": "Lumière Eucalyptus Mint Shower Gel",
    "brand": "Lumière Botanica",
    "category": "bodycare",
    "price": 2199,
    "originalPrice": 2771,
    "discount": 21,
    "rating": 5,
    "reviewCount": 880,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p395_lumi_re_eucalyptus_mint_shower_gel.png"
    ],
    "description": "Premium eucalyptus mint shower gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "eucalyptus mint",
      "shower gel",
      "clean beauty"
    ]
  },
  {
    "id": 396,
    "name": "Lumière Lavender Bliss Hydrating Hand Cream",
    "brand": "Lumière NovaDerm",
    "category": "bodycare",
    "price": 899,
    "originalPrice": 1052,
    "discount": 15,
    "rating": 4.9,
    "reviewCount": 951,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p396_lumi_re_lavender_bliss_hydrating_hand_cream.png"
    ],
    "description": "Premium lavender bliss hydrating hand cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "lavender bliss",
      "hydrating hand cream",
      "clean beauty"
    ]
  },
  {
    "id": 397,
    "name": "Lumière Almond Milk Smoothing Foot Scrub",
    "brand": "Lumière Pure Bliss",
    "category": "bodycare",
    "price": 3899,
    "originalPrice": 4796,
    "discount": 19,
    "rating": 4.7,
    "reviewCount": 649,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p397_lumi_re_almond_milk_smoothing_foot_scrub.png"
    ],
    "description": "Premium almond milk smoothing foot scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "bodycare",
      "almond milk",
      "smoothing foot scrub",
      "clean beauty"
    ]
  },
  {
    "id": 398,
    "name": "Lumière Gold Shimmer Body Glow Polish",
    "brand": "Lumière Paris",
    "category": "bodycare",
    "price": 1999,
    "originalPrice": 2439,
    "discount": 18,
    "rating": 4.9,
    "reviewCount": 1239,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p398_lumi_re_gold_shimmer_body_glow_polish.png"
    ],
    "description": "Premium gold shimmer body glow polish engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "gold shimmer",
      "body glow polish",
      "clean beauty"
    ]
  },
  {
    "id": 399,
    "name": "Lumière Shea & Mango Body Butter Whip 2",
    "brand": "Lumière Lab",
    "category": "bodycare",
    "price": 599,
    "originalPrice": 689,
    "discount": 13,
    "rating": 4.8,
    "reviewCount": 1508,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p399_lumi_re_shea_mango_body_butter_whip_2.png"
    ],
    "description": "Premium shea & mango body butter whip engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "shea & mango",
      "body butter whip",
      "clean beauty"
    ]
  },
  {
    "id": 400,
    "name": "Lumière Arabica Firming Coffee Body Scrub 2",
    "brand": "Lumière Éclat",
    "category": "bodycare",
    "price": 2999,
    "originalPrice": 3629,
    "discount": 17,
    "rating": 4.7,
    "reviewCount": 966,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p400_lumi_re_arabica_firming_coffee_body_scrub_2.png"
    ],
    "description": "Premium arabica firming coffee body scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "arabica firming",
      "coffee body scrub",
      "clean beauty"
    ]
  },
  {
    "id": 401,
    "name": "Lumière Velvet Rose Rose Lotion 2",
    "brand": "Lumière Velvet",
    "category": "bodycare",
    "price": 799,
    "originalPrice": 991,
    "discount": 19,
    "rating": 4.8,
    "reviewCount": 587,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p401_lumi_re_velvet_rose_rose_lotion_2.png"
    ],
    "description": "Premium velvet rose rose lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "velvet rose",
      "rose lotion",
      "clean beauty"
    ]
  },
  {
    "id": 402,
    "name": "Lumière Coconut Cream Firming Body Oil 2",
    "brand": "Lumière Botanica",
    "category": "bodycare",
    "price": 2899,
    "originalPrice": 3856,
    "discount": 25,
    "rating": 4.8,
    "reviewCount": 1311,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p402_lumi_re_coconut_cream_firming_body_oil_2.png"
    ],
    "description": "Premium coconut cream firming body oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "coconut cream",
      "firming body oil",
      "clean beauty"
    ]
  },
  {
    "id": 403,
    "name": "Lumière Eucalyptus Mint Shower Gel 2",
    "brand": "Lumière NovaDerm",
    "category": "bodycare",
    "price": 499,
    "originalPrice": 599,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 783,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p403_lumi_re_eucalyptus_mint_shower_gel_2.png"
    ],
    "description": "Premium eucalyptus mint shower gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "bodycare",
      "eucalyptus mint",
      "shower gel",
      "clean beauty"
    ]
  },
  {
    "id": 404,
    "name": "Lumière Lavender Bliss Hydrating Hand Cream 2",
    "brand": "Lumière Pure Bliss",
    "category": "bodycare",
    "price": 1299,
    "originalPrice": 1572,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 1969,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p404_lumi_re_lavender_bliss_hydrating_hand_cream_2.png"
    ],
    "description": "Premium lavender bliss hydrating hand cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "lavender bliss",
      "hydrating hand cream",
      "clean beauty"
    ]
  },
  {
    "id": 405,
    "name": "Lumière Almond Milk Smoothing Foot Scrub 2",
    "brand": "Lumière Paris",
    "category": "bodycare",
    "price": 3599,
    "originalPrice": 4463,
    "discount": 19,
    "rating": 4.7,
    "reviewCount": 2154,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p405_lumi_re_almond_milk_smoothing_foot_scrub_2.png"
    ],
    "description": "Premium almond milk smoothing foot scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "almond milk",
      "smoothing foot scrub",
      "clean beauty"
    ]
  },
  {
    "id": 406,
    "name": "Lumière Gold Shimmer Body Glow Polish 2",
    "brand": "Lumière Lab",
    "category": "bodycare",
    "price": 1699,
    "originalPrice": 2345,
    "discount": 28,
    "rating": 4.5,
    "reviewCount": 1301,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p406_lumi_re_gold_shimmer_body_glow_polish_2.png"
    ],
    "description": "Premium gold shimmer body glow polish engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "gold shimmer",
      "body glow polish",
      "clean beauty"
    ]
  },
  {
    "id": 407,
    "name": "Lumière Shea & Mango Body Butter Whip 3",
    "brand": "Lumière Éclat",
    "category": "bodycare",
    "price": 3799,
    "originalPrice": 5053,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 2089,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p407_lumi_re_shea_mango_body_butter_whip_3.png"
    ],
    "description": "Premium shea & mango body butter whip engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "shea & mango",
      "body butter whip",
      "clean beauty"
    ]
  },
  {
    "id": 408,
    "name": "Lumière Arabica Firming Coffee Body Scrub 3",
    "brand": "Lumière Velvet",
    "category": "bodycare",
    "price": 3399,
    "originalPrice": 4045,
    "discount": 16,
    "rating": 4.7,
    "reviewCount": 821,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p408_lumi_re_arabica_firming_coffee_body_scrub_3.png"
    ],
    "description": "Premium arabica firming coffee body scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "arabica firming",
      "coffee body scrub",
      "clean beauty"
    ]
  },
  {
    "id": 409,
    "name": "Lumière Velvet Rose Rose Lotion 3",
    "brand": "Lumière Botanica",
    "category": "bodycare",
    "price": 3899,
    "originalPrice": 5147,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 1179,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p409_lumi_re_velvet_rose_rose_lotion_3.png"
    ],
    "description": "Premium velvet rose rose lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "bodycare",
      "velvet rose",
      "rose lotion",
      "clean beauty"
    ]
  },
  {
    "id": 410,
    "name": "Lumière Coconut Cream Firming Body Oil 3",
    "brand": "Lumière NovaDerm",
    "category": "bodycare",
    "price": 2999,
    "originalPrice": 4139,
    "discount": 28,
    "rating": 4.6,
    "reviewCount": 540,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p410_lumi_re_coconut_cream_firming_body_oil_3.png"
    ],
    "description": "Premium coconut cream firming body oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "coconut cream",
      "firming body oil",
      "clean beauty"
    ]
  },
  {
    "id": 411,
    "name": "Lumière Eucalyptus Mint Shower Gel 3",
    "brand": "Lumière Pure Bliss",
    "category": "bodycare",
    "price": 2499,
    "originalPrice": 3399,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 1722,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p411_lumi_re_eucalyptus_mint_shower_gel_3.png"
    ],
    "description": "Premium eucalyptus mint shower gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "eucalyptus mint",
      "shower gel",
      "clean beauty"
    ]
  },
  {
    "id": 412,
    "name": "Lumière Lavender Bliss Hydrating Hand Cream 3",
    "brand": "Lumière Paris",
    "category": "bodycare",
    "price": 1299,
    "originalPrice": 1611,
    "discount": 19,
    "rating": 4.7,
    "reviewCount": 475,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p412_lumi_re_lavender_bliss_hydrating_hand_cream_3.png"
    ],
    "description": "Premium lavender bliss hydrating hand cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "lavender bliss",
      "hydrating hand cream",
      "clean beauty"
    ]
  },
  {
    "id": 413,
    "name": "Lumière Almond Milk Smoothing Foot Scrub 3",
    "brand": "Lumière Lab",
    "category": "bodycare",
    "price": 799,
    "originalPrice": 927,
    "discount": 14,
    "rating": 4.5,
    "reviewCount": 456,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p413_lumi_re_almond_milk_smoothing_foot_scrub_3.png"
    ],
    "description": "Premium almond milk smoothing foot scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "almond milk",
      "smoothing foot scrub",
      "clean beauty"
    ]
  },
  {
    "id": 414,
    "name": "Lumière Gold Shimmer Body Glow Polish 3",
    "brand": "Lumière Éclat",
    "category": "bodycare",
    "price": 999,
    "originalPrice": 1249,
    "discount": 20,
    "rating": 4.7,
    "reviewCount": 461,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p414_lumi_re_gold_shimmer_body_glow_polish_3.png"
    ],
    "description": "Premium gold shimmer body glow polish engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "gold shimmer",
      "body glow polish",
      "clean beauty"
    ]
  },
  {
    "id": 415,
    "name": "Lumière Shea & Mango Body Butter Whip 4",
    "brand": "Lumière Velvet",
    "category": "bodycare",
    "price": 3899,
    "originalPrice": 4679,
    "discount": 17,
    "rating": 4.6,
    "reviewCount": 1749,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p415_lumi_re_shea_mango_body_butter_whip_4.png"
    ],
    "description": "Premium shea & mango body butter whip engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "bodycare",
      "shea & mango",
      "body butter whip",
      "clean beauty"
    ]
  },
  {
    "id": 416,
    "name": "Lumière Arabica Firming Coffee Body Scrub 4",
    "brand": "Lumière Botanica",
    "category": "bodycare",
    "price": 3099,
    "originalPrice": 3564,
    "discount": 13,
    "rating": 4.9,
    "reviewCount": 1385,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p416_lumi_re_arabica_firming_coffee_body_scrub_4.png"
    ],
    "description": "Premium arabica firming coffee body scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "arabica firming",
      "coffee body scrub",
      "clean beauty"
    ]
  },
  {
    "id": 417,
    "name": "Lumière Velvet Rose Rose Lotion 4",
    "brand": "Lumière NovaDerm",
    "category": "bodycare",
    "price": 1499,
    "originalPrice": 1859,
    "discount": 19,
    "rating": 5,
    "reviewCount": 2104,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p417_lumi_re_velvet_rose_rose_lotion_4.png"
    ],
    "description": "Premium velvet rose rose lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "velvet rose",
      "rose lotion",
      "clean beauty"
    ]
  },
  {
    "id": 418,
    "name": "Lumière Coconut Cream Firming Body Oil 4",
    "brand": "Lumière Pure Bliss",
    "category": "bodycare",
    "price": 3199,
    "originalPrice": 4223,
    "discount": 24,
    "rating": 4.6,
    "reviewCount": 1568,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p418_lumi_re_coconut_cream_firming_body_oil_4.png"
    ],
    "description": "Premium coconut cream firming body oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "coconut cream",
      "firming body oil",
      "clean beauty"
    ]
  },
  {
    "id": 419,
    "name": "Lumière Eucalyptus Mint Shower Gel 4",
    "brand": "Lumière Paris",
    "category": "bodycare",
    "price": 1299,
    "originalPrice": 1507,
    "discount": 14,
    "rating": 4.4,
    "reviewCount": 712,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p419_lumi_re_eucalyptus_mint_shower_gel_4.png"
    ],
    "description": "Premium eucalyptus mint shower gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "eucalyptus mint",
      "shower gel",
      "clean beauty"
    ]
  },
  {
    "id": 420,
    "name": "Lumière Lavender Bliss Hydrating Hand Cream 4",
    "brand": "Lumière Lab",
    "category": "bodycare",
    "price": 3899,
    "originalPrice": 4523,
    "discount": 14,
    "rating": 4.8,
    "reviewCount": 2076,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p420_lumi_re_lavender_bliss_hydrating_hand_cream_4.png"
    ],
    "description": "Premium lavender bliss hydrating hand cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "lavender bliss",
      "hydrating hand cream",
      "clean beauty"
    ]
  },
  {
    "id": 421,
    "name": "Lumière Almond Milk Smoothing Foot Scrub 4",
    "brand": "Lumière Éclat",
    "category": "bodycare",
    "price": 699,
    "originalPrice": 839,
    "discount": 17,
    "rating": 4.9,
    "reviewCount": 1938,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p421_lumi_re_almond_milk_smoothing_foot_scrub_4.png"
    ],
    "description": "Premium almond milk smoothing foot scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "bodycare",
      "almond milk",
      "smoothing foot scrub",
      "clean beauty"
    ]
  },
  {
    "id": 422,
    "name": "Lumière Gold Shimmer Body Glow Polish 4",
    "brand": "Lumière Velvet",
    "category": "bodycare",
    "price": 2499,
    "originalPrice": 3249,
    "discount": 23,
    "rating": 4.5,
    "reviewCount": 2121,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p422_lumi_re_gold_shimmer_body_glow_polish_4.png"
    ],
    "description": "Premium gold shimmer body glow polish engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "gold shimmer",
      "body glow polish",
      "clean beauty"
    ]
  },
  {
    "id": 423,
    "name": "Lumière Shea & Mango Body Butter Whip 5",
    "brand": "Lumière Botanica",
    "category": "bodycare",
    "price": 1399,
    "originalPrice": 1679,
    "discount": 17,
    "rating": 4.8,
    "reviewCount": 1905,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p423_lumi_re_shea_mango_body_butter_whip_5.png"
    ],
    "description": "Premium shea & mango body butter whip engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "shea & mango",
      "body butter whip",
      "clean beauty"
    ]
  },
  {
    "id": 424,
    "name": "Lumière Arabica Firming Coffee Body Scrub 5",
    "brand": "Lumière NovaDerm",
    "category": "bodycare",
    "price": 899,
    "originalPrice": 1115,
    "discount": 19,
    "rating": 4.5,
    "reviewCount": 1967,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p424_lumi_re_arabica_firming_coffee_body_scrub_5.png"
    ],
    "description": "Premium arabica firming coffee body scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "arabica firming",
      "coffee body scrub",
      "clean beauty"
    ]
  },
  {
    "id": 425,
    "name": "Lumière Velvet Rose Rose Lotion 5",
    "brand": "Lumière Pure Bliss",
    "category": "bodycare",
    "price": 2499,
    "originalPrice": 2974,
    "discount": 16,
    "rating": 4.9,
    "reviewCount": 531,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p425_lumi_re_velvet_rose_rose_lotion_5.png"
    ],
    "description": "Premium velvet rose rose lotion engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "velvet rose",
      "rose lotion",
      "clean beauty"
    ]
  },
  {
    "id": 426,
    "name": "Lumière Coconut Cream Firming Body Oil 5",
    "brand": "Lumière Paris",
    "category": "bodycare",
    "price": 3899,
    "originalPrice": 4601,
    "discount": 15,
    "rating": 4.8,
    "reviewCount": 2531,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p426_lumi_re_coconut_cream_firming_body_oil_5.png"
    ],
    "description": "Premium coconut cream firming body oil engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "coconut cream",
      "firming body oil",
      "clean beauty"
    ]
  },
  {
    "id": 427,
    "name": "Lumière Eucalyptus Mint Shower Gel 5",
    "brand": "Lumière Lab",
    "category": "bodycare",
    "price": 3699,
    "originalPrice": 4735,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 1357,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p427_lumi_re_eucalyptus_mint_shower_gel_5.png"
    ],
    "description": "Premium eucalyptus mint shower gel engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "bodycare",
      "eucalyptus mint",
      "shower gel",
      "clean beauty"
    ]
  },
  {
    "id": 428,
    "name": "Lumière Lavender Bliss Hydrating Hand Cream 5",
    "brand": "Lumière Éclat",
    "category": "bodycare",
    "price": 799,
    "originalPrice": 959,
    "discount": 17,
    "rating": 4.9,
    "reviewCount": 2403,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p428_lumi_re_lavender_bliss_hydrating_hand_cream_5.png"
    ],
    "description": "Premium lavender bliss hydrating hand cream engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "lavender bliss",
      "hydrating hand cream",
      "clean beauty"
    ]
  },
  {
    "id": 429,
    "name": "Lumière Almond Milk Smoothing Foot Scrub 5",
    "brand": "Lumière Velvet",
    "category": "bodycare",
    "price": 2699,
    "originalPrice": 3509,
    "discount": 23,
    "rating": 4.8,
    "reviewCount": 232,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p429_lumi_re_almond_milk_smoothing_foot_scrub_5.png"
    ],
    "description": "Premium almond milk smoothing foot scrub engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "almond milk",
      "smoothing foot scrub",
      "clean beauty"
    ]
  },
  {
    "id": 430,
    "name": "Lumière Gold Shimmer Body Glow Polish 5",
    "brand": "Lumière Botanica",
    "category": "bodycare",
    "price": 2899,
    "originalPrice": 3856,
    "discount": 25,
    "rating": 4.4,
    "reviewCount": 2385,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/bodycare/p430_lumi_re_gold_shimmer_body_glow_polish_5.png"
    ],
    "description": "Premium gold shimmer body glow polish engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "bodycare",
      "gold shimmer",
      "body glow polish",
      "clean beauty"
    ]
  },
  {
    "id": 431,
    "name": "Lumière Natural Green Jade Roller",
    "brand": "Lumière Paris",
    "category": "accessories",
    "price": 3499,
    "originalPrice": 4794,
    "discount": 27,
    "rating": 4.6,
    "reviewCount": 2007,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p431_lumi_re_natural_green_jade_roller.png"
    ],
    "description": "Premium natural green jade roller engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": true,
    "isNewArrival": true,
    "tags": [
      "accessories",
      "natural green",
      "jade roller",
      "clean beauty"
    ]
  },
  {
    "id": 432,
    "name": "Lumière 7-Color Pro LED Therapy Mask",
    "brand": "Lumière Lab",
    "category": "accessories",
    "price": 2399,
    "originalPrice": 2999,
    "discount": 20,
    "rating": 4.4,
    "reviewCount": 2213,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p432_lumi_re_7_color_pro_led_therapy_mask.png"
    ],
    "description": "Premium 7-color pro led therapy mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "7-color pro",
      "led therapy mask",
      "clean beauty"
    ]
  },
  {
    "id": 433,
    "name": "Lumière Rose Quartz Gua Sha Stone",
    "brand": "Lumière Éclat",
    "category": "accessories",
    "price": 2199,
    "originalPrice": 2771,
    "discount": 21,
    "rating": 4.6,
    "reviewCount": 1473,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p433_lumi_re_rose_quartz_gua_sha_stone.png"
    ],
    "description": "Premium rose quartz gua sha stone engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "rose quartz",
      "gua sha stone",
      "clean beauty"
    ]
  },
  {
    "id": 434,
    "name": "Lumière 100% Mulberry Silk Silk Pillowcase",
    "brand": "Lumière Velvet",
    "category": "accessories",
    "price": 2099,
    "originalPrice": 2771,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 834,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p434_lumi_re_100_mulberry_silk_silk_pillowcase.png"
    ],
    "description": "Premium 100% mulberry silk silk pillowcase engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "100% mulberry silk",
      "silk pillowcase",
      "clean beauty"
    ]
  },
  {
    "id": 435,
    "name": "Lumière Luxury Synthetic Makeup Brush Set",
    "brand": "Lumière Botanica",
    "category": "accessories",
    "price": 799,
    "originalPrice": 1039,
    "discount": 23,
    "rating": 4.5,
    "reviewCount": 1702,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p435_lumi_re_luxury_synthetic_makeup_brush_set.png"
    ],
    "description": "Premium luxury synthetic makeup brush set engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "luxury synthetic",
      "makeup brush set",
      "clean beauty"
    ]
  },
  {
    "id": 436,
    "name": "Lumière Nano Ionic Facial Steamer",
    "brand": "Lumière NovaDerm",
    "category": "accessories",
    "price": 699,
    "originalPrice": 881,
    "discount": 21,
    "rating": 4.8,
    "reviewCount": 1559,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/accessories/p436_lumi_re_nano_ionic_facial_steamer.png"
    ],
    "description": "Premium nano ionic facial steamer engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "nano ionic",
      "facial steamer",
      "clean beauty"
    ]
  },
  {
    "id": 437,
    "name": "Lumière 0.5mm Titanium Derma Roller",
    "brand": "Lumière Pure Bliss",
    "category": "accessories",
    "price": 799,
    "originalPrice": 1111,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 1464,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/accessories/p437_lumi_re_0_5mm_titanium_derma_roller.png"
    ],
    "description": "Premium 0.5mm titanium derma roller engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "accessories",
      "0.5mm titanium",
      "derma roller",
      "clean beauty"
    ]
  },
  {
    "id": 438,
    "name": "Lumière Soft Padded Satin Eye Mask",
    "brand": "Lumière Paris",
    "category": "accessories",
    "price": 1899,
    "originalPrice": 2298,
    "discount": 17,
    "rating": 4.5,
    "reviewCount": 965,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/accessories/p438_lumi_re_soft_padded_satin_eye_mask.png"
    ],
    "description": "Premium soft padded satin eye mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "soft padded",
      "satin eye mask",
      "clean beauty"
    ]
  },
  {
    "id": 439,
    "name": "Lumière Sonic Vibrating Cleansing Silicone Pad",
    "brand": "Lumière Lab",
    "category": "accessories",
    "price": 1999,
    "originalPrice": 2439,
    "discount": 18,
    "rating": 4.6,
    "reviewCount": 1293,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p439_lumi_re_sonic_vibrating_cleansing_silicone_pad.png"
    ],
    "description": "Premium sonic vibrating cleansing silicone pad engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "sonic vibrating",
      "cleansing silicone pad",
      "clean beauty"
    ]
  },
  {
    "id": 440,
    "name": "Lumière Natural Green Jade Roller 2",
    "brand": "Lumière Éclat",
    "category": "accessories",
    "price": 2399,
    "originalPrice": 3023,
    "discount": 21,
    "rating": 4.5,
    "reviewCount": 719,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p440_lumi_re_natural_green_jade_roller_2.png"
    ],
    "description": "Premium natural green jade roller engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "natural green",
      "jade roller",
      "clean beauty"
    ]
  },
  {
    "id": 441,
    "name": "Lumière 7-Color Pro LED Therapy Mask 2",
    "brand": "Lumière Velvet",
    "category": "accessories",
    "price": 2399,
    "originalPrice": 3335,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 1869,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p441_lumi_re_7_color_pro_led_therapy_mask_2.png"
    ],
    "description": "Premium 7-color pro led therapy mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "7-color pro",
      "led therapy mask",
      "clean beauty"
    ]
  },
  {
    "id": 442,
    "name": "Lumière Rose Quartz Gua Sha Stone 2",
    "brand": "Lumière Botanica",
    "category": "accessories",
    "price": 799,
    "originalPrice": 1071,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 1756,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p442_lumi_re_rose_quartz_gua_sha_stone_2.png"
    ],
    "description": "Premium rose quartz gua sha stone engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "rose quartz",
      "gua sha stone",
      "clean beauty"
    ]
  },
  {
    "id": 443,
    "name": "Lumière 100% Mulberry Silk Silk Pillowcase 2",
    "brand": "Lumière NovaDerm",
    "category": "accessories",
    "price": 599,
    "originalPrice": 809,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 2544,
    "badge": "limited",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p443_lumi_re_100_mulberry_silk_silk_pillowcase_2.png"
    ],
    "description": "Premium 100% mulberry silk silk pillowcase engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "accessories",
      "100% mulberry silk",
      "silk pillowcase",
      "clean beauty"
    ]
  },
  {
    "id": 444,
    "name": "Lumière Luxury Synthetic Makeup Brush Set 2",
    "brand": "Lumière Pure Bliss",
    "category": "accessories",
    "price": 2099,
    "originalPrice": 2624,
    "discount": 20,
    "rating": 4.6,
    "reviewCount": 761,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/accessories/p444_lumi_re_luxury_synthetic_makeup_brush_set_2.png"
    ],
    "description": "Premium luxury synthetic makeup brush set engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "luxury synthetic",
      "makeup brush set",
      "clean beauty"
    ]
  },
  {
    "id": 445,
    "name": "Lumière Nano Ionic Facial Steamer 2",
    "brand": "Lumière Paris",
    "category": "accessories",
    "price": 499,
    "originalPrice": 574,
    "discount": 13,
    "rating": 4.7,
    "reviewCount": 1812,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/accessories/p445_lumi_re_nano_ionic_facial_steamer_2.png"
    ],
    "description": "Premium nano ionic facial steamer engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": true,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "nano ionic",
      "facial steamer",
      "clean beauty"
    ]
  },
  {
    "id": 446,
    "name": "Lumière 0.5mm Titanium Derma Roller 2",
    "brand": "Lumière Lab",
    "category": "accessories",
    "price": 3399,
    "originalPrice": 4521,
    "discount": 25,
    "rating": 4.7,
    "reviewCount": 1189,
    "badge": null,
    "skinType": null,
    "images": [
      "/assets/images/accessories/p446_lumi_re_0_5mm_titanium_derma_roller_2.png"
    ],
    "description": "Premium 0.5mm titanium derma roller engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": true,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "0.5mm titanium",
      "derma roller",
      "clean beauty"
    ]
  },
  {
    "id": 447,
    "name": "Lumière Soft Padded Satin Eye Mask 2",
    "brand": "Lumière Éclat",
    "category": "accessories",
    "price": 3099,
    "originalPrice": 3719,
    "discount": 17,
    "rating": 5,
    "reviewCount": 1331,
    "badge": "bestseller",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p447_lumi_re_soft_padded_satin_eye_mask_2.png"
    ],
    "description": "Premium soft padded satin eye mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "soft padded",
      "satin eye mask",
      "clean beauty"
    ]
  },
  {
    "id": 448,
    "name": "Lumière Sonic Vibrating Cleansing Silicone Pad 2",
    "brand": "Lumière Velvet",
    "category": "accessories",
    "price": 1799,
    "originalPrice": 2375,
    "discount": 24,
    "rating": 4.9,
    "reviewCount": 1850,
    "badge": "new",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p448_lumi_re_sonic_vibrating_cleansing_silicone_pad_2.png"
    ],
    "description": "Premium sonic vibrating cleansing silicone pad engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "sonic vibrating",
      "cleansing silicone pad",
      "clean beauty"
    ]
  },
  {
    "id": 449,
    "name": "Lumière Natural Green Jade Roller 3",
    "brand": "Lumière Botanica",
    "category": "accessories",
    "price": 3399,
    "originalPrice": 4317,
    "discount": 21,
    "rating": 4.7,
    "reviewCount": 323,
    "badge": "trending",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p449_lumi_re_natural_green_jade_roller_3.png"
    ],
    "description": "Premium natural green jade roller engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": true,
    "tags": [
      "accessories",
      "natural green",
      "jade roller",
      "clean beauty"
    ]
  },
  {
    "id": 450,
    "name": "Lumière 7-Color Pro LED Therapy Mask 3",
    "brand": "Lumière NovaDerm",
    "category": "accessories",
    "price": 1299,
    "originalPrice": 1520,
    "discount": 15,
    "rating": 4.7,
    "reviewCount": 1413,
    "badge": "sale",
    "skinType": null,
    "images": [
      "/assets/images/accessories/p450_lumi_re_7_color_pro_led_therapy_mask_3.png"
    ],
    "description": "Premium 7-color pro led therapy mask engineered with clean Parisian botanical actives for long-lasting results.",
    "ingredients": "Active Botanical Extracts, Hyaluronic Acid, Niacinamide, Vitamin E",
    "size": "30ml",
    "shades": null,
    "isFeatured": false,
    "isTrending": false,
    "isNewArrival": false,
    "tags": [
      "accessories",
      "7-color pro",
      "led therapy mask",
      "clean beauty"
    ]
  }
];

export const reviews = [
  {
    "id": 1,
    "name": "Priya Sharma",
    "avatar": "/assets/images/reviews/avatar1.png",
    "rating": 5,
    "product": "Lumière Radiance Glow Serum",
    "comment": "This Lumière serum is absolutely life-changing! My skin has never looked so bright and healthy. I noticed results in just 2 weeks.",
    "date": "2 days ago",
    "verified": true
  },
  {
    "id": 2,
    "name": "Ananya Reddy",
    "avatar": "/assets/images/reviews/avatar2.png",
    "rating": 5,
    "product": "Lumière Velvet Matte Lipstick",
    "comment": "The pigmentation is incredible! Lasts all day without drying out my lips. The Berry Wine shade is *chef's kiss*",
    "date": "1 week ago",
    "verified": true
  },
  {
    "id": 3,
    "name": "Sneha Patel",
    "avatar": "/assets/images/reviews/avatar1.png",
    "rating": 5,
    "product": "Lumière Argan Oil Hair Serum",
    "comment": "My hair went from frizzy and damaged to silky smooth! Worth every penny. I've repurchased this Lumière serum 3 times already.",
    "date": "3 days ago",
    "verified": true
  },
  {
    "id": 4,
    "name": "Kavya Iyer",
    "avatar": "/assets/images/reviews/avatar2.png",
    "rating": 4,
    "product": "Lumière Rose Oud EDP",
    "comment": "The Lumière fragrance is heavenly and lasts the entire day! I get so many compliments wearing this. A true luxury scent.",
    "date": "5 days ago",
    "verified": true
  },
  {
    "id": 5,
    "name": "Meera Krishnan",
    "avatar": "/assets/images/reviews/avatar1.png",
    "rating": 5,
    "product": "Lumière Body Butter Whip",
    "comment": "Best body butter I've ever used! It melts right in and my skin feels amazing. The Lumière scent is divine.",
    "date": "1 day ago",
    "verified": true
  },
  {
    "id": 6,
    "name": "Divya Nair",
    "avatar": "/assets/images/reviews/avatar2.png",
    "rating": 5,
    "product": "Lumière Glitter Eyeshadow Palette",
    "comment": "The shades are so pigmented and blendable! This Lumière palette has everything from everyday neutrals to party glam looks.",
    "date": "4 days ago",
    "verified": true
  }
];

export const coupons = {
  BEAUTY20: { discount: 20, type: 'percent', minOrder: 999, description: '20% off on orders above ₹999' },
  WELCOME10: { discount: 10, type: 'percent', minOrder: 0, description: '10% off for new customers' },
  FLAT500: { discount: 500, type: 'flat', minOrder: 2999, description: '₹500 off on orders above ₹2999' },
  GLOW15: { discount: 15, type: 'percent', minOrder: 1499, description: '15% off on skincare orders' },
};

export const shippingOptions = [
  { id: 'standard', name: 'Standard Delivery', price: 99, days: '5-7 business days' },
  { id: 'express', name: 'Express Delivery', price: 199, days: '2-3 business days' },
  { id: 'overnight', name: 'Overnight Delivery', price: 399, days: '1 business day' },
  { id: 'free', name: 'Free Delivery', price: 0, days: '7-10 business days', minOrder: 999 },
];

export const quizQuestions = [
  {
    id: 1,
    question: "What is your skin type?",
    options: ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive'],
    icon: '✨',
  },
  {
    id: 2,
    question: "What is your primary skin concern?",
    options: ['Acne & Breakouts', 'Dark Spots', 'Dryness', 'Aging & Fine Lines', 'Uneven Tone', 'Pores'],
    icon: '🔍',
  },
  {
    id: 3,
    question: "How would you describe your beauty style?",
    options: ['Minimal & Natural', 'Bold & Glam', 'Everyday Chic', 'Experimental & Trendy'],
    icon: '💄',
  },
  {
    id: 4,
    question: "What's your budget per product?",
    options: ['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', '₹2000+'],
    icon: '💰',
  },
  {
    id: 5,
    question: "What matters most to you in beauty products?",
    options: ['Natural/Organic', 'Clinically Tested', 'Cruelty-Free', 'Long-Lasting'],
    icon: '🌱',
  },
];

export const getProductsByCategory = (categoryId) =>
  products.filter(p => p.category === categoryId);

export const getFeaturedProducts = () =>
  products.filter(p => p.isFeatured);

export const getTrendingProducts = () =>
  products.filter(p => p.isTrending);

export const getNewArrivals = () =>
  products.filter(p => p.isNewArrival);

export const getBestSellers = () =>
  products.filter(p => p.badge === 'bestseller');

export const getRelatedProducts = (productId, category) =>
  products.filter(p => p.category === category && p.id !== productId).slice(0, 4);

export const searchProducts = (query) => {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
  );
};
