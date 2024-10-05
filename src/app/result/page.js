"use client";

import { useState, useEffect } from 'react';
import Navbar from '../navbar/page';

export default function Result() {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [storedPassword, setStoredPassword] = useState('');

  useEffect(() => {
    setText(sessionStorage.getItem('text'));
    setEncryptedText(sessionStorage.getItem('encryptedText'));
    setStoredPassword(sessionStorage.getItem('password'));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Result</h1>
        <p>Original Text: {text}</p>
      </div>
    </div>
  );
}
