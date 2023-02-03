import {Table} from "phosphor-react";
import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-800"]};
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["gray-600"]};
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme["gray-800"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    color: ${(props) => props.theme["gray-100"]};
    padding: 1rem;
    text-align: left;
    background-color: ${(props) => props.theme["gray-600"]};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }
    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;
    background-color: ${(props) => props.theme["gray-700"]};
    border-top: 4px solid ${(props) => props.theme["gray-800"]};

    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }
    &:last-child {
      padding-right: 1.5rem;
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  red: "red-500",
  green: "green-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
    content: "";
  }
`;
