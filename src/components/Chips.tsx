import React, { useRef } from "react";
import styled from "styled-components";
import Chip from "./Chip";

const StyledChipsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

function Chips({ mainTag, subTags }: ChipsProps) {
  const mainChipStyle = useRef<ChipStyle>({
    backgroundColor: "pink50",
    color: "main",
  });

  const subChipStyle = useRef<ChipStyle>({
    backgroundColor: "blue50",
    color: "sub",
  });

  return (
    <StyledChipsWrapper>
      <Chip key={mainTag} {...mainChipStyle.current}>
        {mainTag}
      </Chip>
      {subTags.map((subTag: string) => (
        <Chip key={subTag} {...subChipStyle.current}>
          {subTag}
        </Chip>
      ))}
    </StyledChipsWrapper>
  );
}

export default Chips;
