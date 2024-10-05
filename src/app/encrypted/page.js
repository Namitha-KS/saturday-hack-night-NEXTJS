"use client";

import { useState, useEffect } from 'react';

export default function Encrypted() {
  const [encryptedText, setEncryptedText] = useState('');

  useEffect(() => {
    setEncryptedText(sessionStorage.getItem('encryptedText'));
  }, []);

  return (
    <div className="container">
      <h1>Encrypted Text</h1>
      <p>Encrypted Text: {encryptedText}</p>
    </div>
  );
}
