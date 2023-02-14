import React from "react";
import UserBadge from "./UserBadge";
import Chips from "./Chips";
import CardImages from "./CardImages";
import { StyledCardText } from "../styled";

function LargeCard({
  userBadgeData,
  mainTag,
  subTags,
  isSummary = false,
  lineClamp = 3,
  images,
  imageType,
  children,
}: LargeCardProps) {
  return (
    <>
      <UserBadge size="medium" {...userBadgeData} />
      <div style={{ margin: "12px 0" }}>
        <Chips {...{ mainTag, subTags }}></Chips>
      </div>
      <StyledCardText {...{ isSummary, lineClamp }}>{children}</StyledCardText>
      <CardImages {...{ images, imageType }}></CardImages>
    </>
  );
}

export default LargeCard;
