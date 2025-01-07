"use client";
import styled from "styled-components";
import { WIDTHS } from "@/widths";
const Container = styled.div<{ $primary: "lg" | "md" | "sm" }>`
  width: ${(props) => WIDTHS[props.$primary]};
  border: 1.6px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-height: 120px;
  text-align: center;
`;
export default function Page() {
  return (
    <Container $primary="md">
      <p>Hello DevelopsToday!</p>
    </Container>
  );
}
