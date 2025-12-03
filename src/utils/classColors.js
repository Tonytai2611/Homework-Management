const CLASS_COLOR_PALETTE = [
  "bg-mint",
  "bg-sunshine",
  "bg-coral",
  "bg-lavender",
  "bg-rose-200",
  "bg-sky-200",
  "bg-blue-100",
  "bg-emerald-100",
  "bg-amber-100",
  "bg-violet-100"
];

export const DEFAULT_CLASS_COLOR = "bg-mint";

const hashString = (input = "") => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash + input.charCodeAt(i) * (i + 1)) % 2147483647;
  }
  return hash;
};

export const deriveClassColor = (id, existingColor, defaultColor = DEFAULT_CLASS_COLOR) => {
  if (existingColor && existingColor !== defaultColor) return existingColor;
  if (!id) return defaultColor;
  const paletteIndex = hashString(id) % CLASS_COLOR_PALETTE.length;
  return CLASS_COLOR_PALETTE[paletteIndex];
};

export { CLASS_COLOR_PALETTE };
