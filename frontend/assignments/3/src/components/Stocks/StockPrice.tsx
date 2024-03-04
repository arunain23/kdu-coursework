import { useEffect, useState } from "react";

interface StockPriceProps {
  oldPrice: number | undefined;
  newPrice: number;
}

export function StockPrice({ oldPrice, newPrice }: StockPriceProps) {
  const initialPrice = { price: oldPrice ?? 0, color: "#b2f2bb" };
  const [old, setOld] = useState<{ price: number; color: string }>(
    initialPrice
  );
  const [percent, setPercent] = useState<number>(0);
  const [arrow, setArrow] = useState<string>("");

  useEffect(() => {
    if (oldPrice !== undefined && newPrice !== undefined) {
      const color = newPrice > old.price ? "#b2f2bb" : "#ffc9c9";
      const percentageChange = parseInt(
        (((old.price - newPrice) / old.price) * 100).toFixed(2)
      );
      const arrowDirection = percentageChange < 0 ? "↑" : "↓";

      setOld({ price: newPrice, color });
      if (percentageChange < 0) setPercent(-percentageChange);
      else setPercent(percentageChange);
      setArrow(arrowDirection);
    }
  }, [oldPrice, newPrice]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "300px",
        height: "35px",
        alignContent: "center",
        fontSize: "25px",
      }}
    >
      <div style={{ marginRight: "10px" }}>Price:</div>
      <div style={{ color: old.color }}>{old.price}</div>
      <div style={{ marginRight: "10px", color: old.color }}>{arrow}</div>
      <div>{percent} %</div>
    </div>
  );
}
