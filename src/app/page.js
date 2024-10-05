"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { encrypt } from '../lib/cipher';

export default function Home() {
  const [text, setText] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const encryptedText = encrypt(text, 3);
    const randomPassword = Math.random().toString(36).slice(-4);
    sessionStorage.setItem('password', randomPassword);
    sessionStorage.setItem('text', text);
    sessionStorage.setItem('encryptedText', encryptedText);
    router.push(`/password`);
  };

  return (
    <div className="container">
      <h1>Caesar Cipher</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text"
        />
        <button type="submit">Encrypt</button>
      </form>
    </div>
  );
}
