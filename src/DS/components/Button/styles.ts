import styled, { css } from "styled-components";
import { DS_Spacing } from "../../spacing";
import { DS_Colors } from "../../colors";
import type { DS_ButtonProps } from "./types";

export const Container = styled.button<DS_ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  height: 48px;

  gap: ${DS_Spacing.md};
  padding: ${DS_Spacing.sm};
  border-radius: ${DS_Spacing.sm};
  transition: background-color 0.2s ease;

  ${props => props.state === "default" && css`
    background-color: ${DS_Colors.text.primario};
    &:hover {
      background-color: ${DS_Colors.text.secundario};
    }
  `}

  ${props => props.state === "outline" && css`
    background-color: ${DS_Colors.text.primario};
    border: ${DS_Spacing.sm} solid ${DS_Colors.text.secundario};
    &:hover {
      background-color: ${DS_Colors.text.primario};
    }
  `}
`;

