"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

export default function Task2() {
  const router = useRouter();

  const completeTask = () => {
    sessionStorage.setItem('task1', true);
    router.push('/task3');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Level 2</h1>
        <button onClick={completeTask}>Complete Level 2</button>
      </div>
    </div>
  );
}
