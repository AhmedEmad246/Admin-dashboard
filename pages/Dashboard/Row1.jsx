import { Stack, useTheme } from "@mui/material";
import React from "react";
import { Card } from "./Card.jsx";
import EmailIcon from "@mui/icons-material/Email";
import { PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./data.js";

export function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      mt={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        scheme={"dark2"}
        data={data1}
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={"10,376"}
        subTitle={"Email Sents"}
        text={"+14%"}
      />
      <Card
        scheme={"nivo"}
        data={data2}
        icon={
          <PointOfSale
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={"431,225"}
        subTitle={"Sales obtained"}
        text={"+21%"}
      />
      <Card
        scheme={"category10"}
        data={data3}
        icon={
          <PersonAdd
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={"32,441"}
        subTitle={"New Clients"}
        text={"+5%"}
      />
      <Card
        scheme={"accent"}
        data={data4}
        icon={
          <Traffic
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={"1,325,134"}
        subTitle={"Traffic Received"}
        text={"+43%"}
      />
    </Stack>
  );
}
