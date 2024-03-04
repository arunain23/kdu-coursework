import React, { useEffect, useState } from 'react';

interface StockGraphProps {
  oldPrice: number | undefined;
  newPrice: number | undefined;
}

export const StockGraph: React.FC<StockGraphProps> = ({ oldPrice, newPrice }) => {
  const initialPrice = { price: oldPrice ?? 0, color: '#b2f2bb' };
  const [data, setData] = useState<{ price: number; color: string }[]>([initialPrice]);

  useEffect(() => {
    if (newPrice) {
      const color = newPrice > data[data.length - 1].price ? '#b2f2bb' : '#ffc9c9';
      setData(prevData => [...prevData, { price: newPrice, color }]);
    }
  }, [newPrice]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const moveDiv = document.querySelector('.move');
      if (moveDiv) {
        moveDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
      }
    }, 1);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row', overflowX: 'scroll' }}>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              width: '20px',
              minWidth: '18px',
              maxWidth: '22px',
              height: item.price + 'px',
              backgroundColor: item.color,
              marginRight: '1px',
            }}
          >
        
</div>
        </div>
      ))}
      <div className="move" />
    </div>
  );
};
