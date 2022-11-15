import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

export default function DemoThemes(props) {
  // Dark Theme
  const configDarkTheme = {
    darkTheme: "black",
    color: "#FFF",
    fontSize: "12px",
  };

  // Light Theme
  const configLightTheme = {
    lightTheme: "white",
    color: "black",
    fontSize: "12px",
  };

  const [theme, setTheme] = useState(configLightTheme);
  const DivStyle = styled.div`
    color: ${(props) => props.theme.color};
    padding: 5%;
    background-color: ${(props) => props.theme.darkTheme};
  `;
  return (
    <ThemeProvider theme={theme}>
      <DivStyle>DemoThemes</DivStyle>
      <select
        onChange={(e) =>
          e.target.value === "true"
            ? setTheme(configLightTheme)
            : setTheme(configDarkTheme)
        }
      >
        <option value="true">Light Theme</option>
        <option value="false">Dark Theme</option>
      </select>
    </ThemeProvider>
  );
}
