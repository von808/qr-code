import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Components/Navigation/Navigation';
import { QrCodeGenerator } from './Components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './Components/Scan/QrCodeScanner';
import { GenerateHistory } from './Components/GenerateHistory';
import { ScanHistory } from './Components/ScanHistory';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <Routes>
        <Route path='/generate' element={<QrCodeGenerator />} />
        <Route path='/scan' element={<QrCodeScanner />} />
        <Route path='/generateHistory' element={<GenerateHistory />} />
        <Route path='/scanHistory' element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export { Layout };
