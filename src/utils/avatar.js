// Returns a rich, dynamic gradient based on the starting alphabet of the user's name
export const getAvatarGradient = (name) => {
  if (!name || typeof name !== 'string') {
    return 'linear-gradient(135deg, #f43f5e, #be123c)';
  }

  const firstChar = name.trim().charAt(0).toUpperCase();
  const charCode = firstChar.charCodeAt(0);

  // Vibrant, luxury curated color gradients mapped to letters
  const gradients = [
    'linear-gradient(135deg, #f43f5e, #be123c)', // A - Crimson Rose
    'linear-gradient(135deg, #8b5cf6, #6d28d9)', // B - Royal Violet
    'linear-gradient(135deg, #06b6d4, #0e7490)', // C - Ocean Cyan
    'linear-gradient(135deg, #10b981, #047857)', // D - Lush Emerald
    'linear-gradient(135deg, #f59e0b, #b45309)', // E - Imperial Gold
    'linear-gradient(135deg, #ec4899, #be185d)', // F - Hot Pink
    'linear-gradient(135deg, #6366f1, #4338ca)', // G - Electric Indigo
    'linear-gradient(135deg, #14b8a6, #0f766e)', // H - Crystal Teal
    'linear-gradient(135deg, #f97316, #c2410c)', // I - Vibrant Amber
    'linear-gradient(135deg, #a855f7, #7e22ce)', // J - Amethyst Purple
    'linear-gradient(135deg, #3b82f6, #1d4ed8)', // K - Deep Sapphire
    'linear-gradient(135deg, #ef4444, #b91c1c)', // L - Ruby Red
    'linear-gradient(135deg, #84cc16, #4d7c0f)', // M - Fresh Lime
    'linear-gradient(135deg, #0284c7, #0369a1)', // N - Sky Cerulean
    'linear-gradient(135deg, #d946ef, #a21caf)', // O - Fuchsia Magenta
    'linear-gradient(135deg, #eab308, #a16207)', // P - Venetian Gold
    'linear-gradient(135deg, #f43f5e, #991b1b)', // Q - Velvet Coral
    'linear-gradient(135deg, #22c55e, #15803d)', // R - Mint Jade
    'linear-gradient(135deg, #fb7185, #e11d48)', // S - Peach Quartz
    'linear-gradient(135deg, #38bdf8, #0284c7)', // T - Celestial Azure
    'linear-gradient(135deg, #c084fc, #9333ea)', // U - Orchid Glow
    'linear-gradient(135deg, #fbbf24, #d97706)', // V - Sunset Bronze
    'linear-gradient(135deg, #4ade80, #16a34a)', // W - Spring Meadow
    'linear-gradient(135deg, #f472b6, #db2777)', // X - Strawberry Silk
    'linear-gradient(135deg, #2dd4bf, #0d9488)', // Y - Turquoise Mist
    'linear-gradient(135deg, #818cf8, #4f46e5)', // Z - Midnight Iris
  ];

  if (charCode >= 65 && charCode <= 90) {
    return gradients[charCode - 65];
  }

  // Fallback for non-latin or numbers
  const index = Math.abs(charCode) % gradients.length;
  return gradients[index];
};
