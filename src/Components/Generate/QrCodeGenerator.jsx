import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from './../../constants';

import styles from './QrCodeGenerator.module.css';

const QrCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue('');
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
      localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

      setResult(value);
      setValue('');
    }
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className={styles.container}>
      <input placeholder='Write text...' type='text' value={value} onChange={onChangeHandler} onKeyDown={handleKeyPress} />
      <button type='button' onClick={onClickHandler}>
        generate
      </button>
      {result !== '' && <QRCodeSVG value={result} size={200} />}
      {result !== '' && <span>{result}</span>}
    </div>
  );
};

export { QrCodeGenerator };
