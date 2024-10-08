"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

export default function Password() {
  const [inputPassword, setInputPassword] = useState('');
  const router = useRouter();

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

  const handleGetPassword = () => {
    router.push(`/task1`);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Enter Password</h1>
        <form onSubmit={handlePasswordCheck}>
          <input 
            type="text" 
            value={inputPassword} 
            onChange={(e) => setInputPassword(e.target.value)} 
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
        </form>
        <button className="get-password-button" onClick={handleGetPassword}>
          Get Password
        </button>
      </div>
    </div>
  );
}
