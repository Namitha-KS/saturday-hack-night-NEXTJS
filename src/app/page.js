"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { encrypt } from '../lib/cipher';

export default function Home() {
  const [text, setText] = useState('');
  const router = useRouter();

  const resetTasks = () => {
    for (let i = 0; i < 4; i++) {
      sessionStorage.removeItem(`task${i}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetTasks();
    const encryptedText = encrypt(text, 3); // Shift of 3 for Caesar Cipher
    const randomPassword = Math.random().toString(36).slice(-4); // Generate random 4 letter password
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
