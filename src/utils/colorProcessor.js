import chroma from "chroma-js";

export default function processColors(primary, secondary) {
  const primaryColor = chroma(primary)
    .set("hsl.s", 0.8)
    .set("hsl.l", 0.6)
    .alpha(0.9)
    .css(); // returns rgba() string if opacity < 1

  const secondaryColor = chroma(secondary)
    .set("hsl.s", 0.7)
    .set("hsl.l", 0.6)
    .alpha(0.6)
    .css(); // returns rgba() string if opacity < 1

  return {
    primaryColor,
    secondaryColor,
  };
}
