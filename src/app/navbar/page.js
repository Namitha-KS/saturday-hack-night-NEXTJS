"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [password, setPassword] = useState(['?', '?', '?', '?']);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedPassword = sessionStorage.getItem('password');
    if (storedPassword) {
      const revealedChars = storedPassword.split('').map((char, index) => {
        const taskCompleted = sessionStorage.getItem(`task${index}`);
        return taskCompleted ? char : '?';
      });
      setPassword(revealedChars);
      checkUnlockStatus(revealedChars);
    }
  }, []);

  const checkUnlockStatus = (revealedChars) => {
    if (revealedChars.every(char => char !== '?')) {
      setIsUnlocked(true);
    }
  };

  const handleUnlock = () => {
    if (isUnlocked) {
      router.push('/password');
    }
  };

  return (
    <nav className="navbar">
      {password.map((char, index) => (
        <span key={index} className="treasure-box">{char}</span>
      ))}
      <button className="unlock-button" disabled={!isUnlocked} onClick={handleUnlock}>
        Unlock Password
      </button>
    </nav>
  );
};

export default Navbar;
