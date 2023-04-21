import { Images } from "@/constants/images";
import styled from "@emotion/styled";
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Spacer,
  Text,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  const StyledDropdown = styled(Dropdown)``;

  const StyledText = styled(Text)`
    font-weight: 400;
    font-size: 16px;
  `;

  return (
    <Grid.Container
      className="header"
      justify="center"
      alignItems="center"
      css={{ h: "89px", background: "#FFFFFF" }}
    >
      <Grid
        justify="flex-end"
        alignItems="flex-end"
        xs={2}
        css={{ padding: "$0 $10 $0 $0" }}
      >
        <Image src={Images.logo} alt="logo" />
      </Grid>
      <Grid
        justify="space-around"
        alignItems="center"
        xs={8}
        css={{ flexWrap: "nowrap" }}
      >
        <StyledText size={"childSize"}>Sales & Promotion</StyledText>
        <StyledText size={"childSize"}>News - Blogs</StyledText>
        <StyledText size={"childSize"}>For Supplier</StyledText>
        <StyledText size={"childSize"}>Info & Service</StyledText>
        <Container
          justify="space-around"
          css={{ d: "flex", flexWrap: "nowrap", margin: 0, width: "auto" }}
        >
          <Button auto color={"primary"} css={{ borderRadius: 100, h: 36 }}>
            Become TDF member
          </Button>
          <Spacer x={0.7} />
          <Button
            css={{
              background: "rgba(25, 176, 78, 0.1)",
              color: "$primary",
              h: 36,
              borderRadius: 100,
              minWidth: 0,
            }}
          >
            Find Stores
          </Button>
        </Container>
      </Grid>
      <Grid justify="flex-start" alignItems="center" xs={2}>
        <Image src={Images.search} alt="search" />
        <Spacer x={1} />
        <StyledDropdown>
          <Dropdown.Button css={{ background: "transparent" }}>
            <Grid className="trigger">
              <Image src={Images.vnFlag} alt="flag" />
              <Spacer x={0.3} />
              <Text>EN</Text>
            </Grid>
          </Dropdown.Button>
          <Dropdown.Menu
            disallowEmptySelection
            selectionMode="single"
            aria-label="action"
          >
            <Dropdown.Item key={"vn"}>vn</Dropdown.Item>
            <Dropdown.Item key={"en"}>en </Dropdown.Item>
          </Dropdown.Menu>
        </StyledDropdown>
      </Grid>
    </Grid.Container>
  );
};
