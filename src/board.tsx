import * as React from "react";
import { Square } from "./square";

export const Board: React.FC = () => {
  const renderSquare = (i: string) => {
    return <Square value={i} />;
  };

  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare("0")}
        {renderSquare("1")}
        {renderSquare("2")}
      </div>
      <div className="board-row">
        {renderSquare("3")}
        {renderSquare("4")}
        {renderSquare("5")}
      </div>
      <div className="board-row">
        {renderSquare("6")}
        {renderSquare("7")}
        {renderSquare("8")}
      </div>
    </div>
  );
};