"use client";

import { useState, useEffect } from 'react';
import Navbar from '../navbar/page';

export default function Encrypted() {
  const [encryptedText, setEncryptedText] = useState('');

  useEffect(() => {
    setEncryptedText(sessionStorage.getItem('encryptedText'));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Encrypted Text</h1>
        <p>{encryptedText}</p>
      </div>
    </div>
  );
}
