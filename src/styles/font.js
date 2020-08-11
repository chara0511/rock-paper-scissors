import { css } from "styled-components";

import BarlowSemiCondensedSemiBoldTTF from "../font/BarlowSemiCondensed/BarlowSemiCondensed-SemiBold.ttf";
import BarlowSemiCondensedSemiBoldWOFF from "../font/BarlowSemiCondensed/BarlowSemiCondensed-SemiBold.woff";
import BarlowSemiCondensedSemiBoldWOFF2 from "../font/BarlowSemiCondensed/BarlowSemiCondensed-SemiBold.woff2";

import BarlowSemiCondensedBoldTTF from "../font/BarlowSemiCondensed/BarlowSemiCondensed-Bold.ttf";
import BarlowSemiCondensedBoldWOFF from "../font/BarlowSemiCondensed/BarlowSemiCondensed-Bold.woff";
import BarlowSemiCondensedBoldWOFF2 from "../font/BarlowSemiCondensed/BarlowSemiCondensed-Bold.woff2";

const FontFaces = css`
  @font-face {
    font-family: "Barlow Semi Condensed";
    src: url(${BarlowSemiCondensedSemiBoldWOFF2}) format("woff2"),
      url(${BarlowSemiCondensedSemiBoldWOFF}) format("woff"),
      url(${BarlowSemiCondensedSemiBoldTTF}) format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Barlow Semi Condensed";
    src: url(${BarlowSemiCondensedBoldWOFF2}) format("woff2"),
      url(${BarlowSemiCondensedBoldWOFF}) format("woff"),
      url(${BarlowSemiCondensedBoldTTF}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }
`;

export default FontFaces;
