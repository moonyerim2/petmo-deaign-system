import React from "react";
import { StyledChip } from "../styled";

function Chip({ color, backgroundColor, children }: ChipProps) {
  return (
    <StyledChip color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledChip>
  );
}

export default Chip;
