import { useState } from 'react';
import './Hour.css';

function Hour() {
  const [hour, setHour] = useState(new Date());
  setInterval(() => {
    setHour((prev) => {
      return new Date();
    });
  }, 999)
  return (
    <div className="hour-container">
      <div className="hour">
        {hour.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default Hour;