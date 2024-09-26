import React from "react";

import { useTheme } from "@mui/material";
import Pie from "./Pie.jsx";
import Header from "../../src/Header.jsx";

export function Chart() {
  const theme = useTheme();
  return (
    <>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Pie />
    </>
  );
}
