import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from './../constants';

import s from './ScanHistory.module.css';

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  return (
    <div className={s.container}>
      {data.map((text, index) => (
        <div key={index}>
          <QRCodeSVG value={text} size={100} />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export { ScanHistory };
