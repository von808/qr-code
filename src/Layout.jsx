import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Components/Navigation/Navigation';
import { QrCodeGenerator } from './Components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './Components/Scan/QrCodeScanner';
import { GenerateHistory } from './Components/GenerateHistory/GenerateHistory';
import { ScanHistory } from './Components/ScanHistory/ScanHistory';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <Routes>
        <Route path='/qr-code/generate' element={<QrCodeGenerator />} />
        <Route path='/qr-code/scan' element={<QrCodeScanner />} />
        <Route path='/qr-code/generateHistory' element={<GenerateHistory />} />
        <Route path='/qr-code/scanHistory' element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export { Layout };
