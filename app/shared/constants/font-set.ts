import { Poppins } from "next/font/google";

const thinFont = Poppins({ weight: "100", subsets: ["latin"] });
const extraLightFont = Poppins({ weight: "200", subsets: ["latin"] });
const lightFont = Poppins({ weight: "300", subsets: ["latin"] });
const regularFont = Poppins({ weight: "400", subsets: ["latin"] });
const mediumFont = Poppins({ weight: "500", subsets: ["latin"] });
const semiBoldFont = Poppins({ weight: "600", subsets: ["latin"] });
const boldFont = Poppins({ weight: "700", subsets: ["latin"] });
const extraBoldFont = Poppins({ weight: "800", subsets: ["latin"] });
const blackFont = Poppins({ weight: "900", subsets: ["latin"] });

export const FontSet = {
  thin: thinFont,
  extraLight: extraLightFont,
  light: lightFont,
  regular: regularFont,
  medium: mediumFont,
  semiBold: semiBoldFont,
  bold: boldFont,
  extraBold: extraBoldFont,
  black: blackFont,
};

export type FontSetKey = keyof typeof FontSet;
