import React from "react";
import IconPaper from "./iconPaper";
import IconScissor from "./iconScissor";
import IconRock from "./iconRock";

const FormattedIcons = ({ name }) => {
  switch (name) {
    case "paper":
      return <IconPaper />;

    case "scissor":
      return <IconScissor />;

    case "rock":
      return <IconRock />;

    default:
      return;
  }
};

export default FormattedIcons;
