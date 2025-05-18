import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from './../constants';
import s from './GenerateHistory.module.css';

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
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
export { GenerateHistory };
