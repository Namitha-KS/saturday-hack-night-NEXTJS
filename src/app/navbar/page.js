"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [password, setPassword] = useState(['?', '?', '?', '?']);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const storedPassword = sessionStorage.getItem('password');
    if (storedPassword) {
      setPassword(storedPassword.split(''));
      checkUnlockStatus(storedPassword);
    }
  }, []);

  const checkUnlockStatus = (storedPassword) => {
    if (storedPassword.split('').every(char => char.match(/[a-z]/i))) {
      setIsUnlocked(true);
    }
  };

  return (
    <nav className="navbar">
      {password.map((char, index) => (
        <span key={index} className="treasure-box">{char}</span>
      ))}
      <button className="unlock-button" disabled={!isUnlocked}>Unlock Password</button>
    </nav>
  );
};

export default Navbar;
