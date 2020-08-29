import React from "react";
import IconPaper from "./iconPaper";
import IconScissors from "./iconScissors";
import IconRock from "./iconRock";

const FormattedIcons = ({ name }) => {
  switch (name) {
    case "paper":
      return <IconPaper />;

    case "scissor":
      return <IconScissors />;

    case "rock":
      return <IconRock />;

    default:
      return;
  }
};

export default FormattedIcons;
