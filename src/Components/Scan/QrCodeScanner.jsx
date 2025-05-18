import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import styles from './QrCodeScanner.module.css';
import { SCAN_DATA } from './../../constants';

const QrCodeScanner = () => {
  const [value, setValue] = useState('');

  const scanHandler = (data) => {
    setValue(data[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, data[0].rawValue]));
  };

  return (
    <div className={styles.container}>
      <Scanner
        sound={false}
        onScan={scanHandler}
        components={{ onOff: false, finder: false }}
        styles={{ container: { width: 350 } }}
      />
      <span>{value}</span>
    </div>
  );
};

export { QrCodeScanner };