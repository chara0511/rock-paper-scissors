import React from "react";
import IconPaper from "./iconPaper";
import IconScissors from "./iconScissors";
import IconRock from "./iconRock";

const FormattedIcons = ({ name }) => {
  switch (name) {
    case "Paper":
      return <IconPaper />;

    case "Scissor":
      return <IconScissors />;

    case "Rock":
      return <IconRock />;

    default:
      return;
  }
};

export default FormattedIcons;
