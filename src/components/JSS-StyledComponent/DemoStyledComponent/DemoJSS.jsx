import React from "react";
import { Button, SmallButton } from "../components/Button";
import { StyledLink } from "../components/Link";
import { TextField } from "../components/TextField";

export default function DemoJSS() {
  return (
    <div>
      <Button primary>Hello Khải</Button>
      <SmallButton>Hello Hello</SmallButton>
      <StyledLink>AHIHI</StyledLink>
      <TextField inputColor="green"></TextField>
    </div>
  );
}
