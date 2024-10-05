"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Password() {
  const [inputPassword, setInputPassword] = useState('');
  const router = useRouter();
  const [text, setText] = useState('');
  const [storedPassword, setStoredPassword] = useState('');

  useEffect(() => {
    setText(sessionStorage.getItem('text'));
    setStoredPassword(sessionStorage.getItem('password'));
  }, []);

  const handlePasswordCheck = (e) => {
    e.preventDefault();
    const storedPassword = sessionStorage.getItem('password');
    if (inputPassword === storedPassword) {
      router.push(`/result`);
    } else if (inputPassword.split('').sort().join('') === storedPassword.split('').sort().join('')) {
      router.push(`/encrypted`);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Enter Password</h1>
      <p>Password: {storedPassword}</p>
      <form onSubmit={handlePasswordCheck}>
        <input 
          type="text" 
          value={inputPassword} 
          onChange={(e) => setInputPassword(e.target.value)} 
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
