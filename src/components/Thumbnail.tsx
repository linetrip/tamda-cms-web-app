import styled from "@emotion/styled";
import { Grid } from "@nextui-org/react";
import React from "react";

export const Thumbnail: React.FC = () => {
  const url =
    "https://res.cloudinary.com/buyngon-production/image/upload/v1681926637/geybkzyga0cgcbk2sqqn.png";
  const StyledThumbnail = styled(Grid)`
    height: 536px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${url});
  `;
  return <StyledThumbnail></StyledThumbnail>;
};
