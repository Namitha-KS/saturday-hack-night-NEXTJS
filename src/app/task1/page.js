"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

export default function Task1() {
  const router = useRouter();

  const completeTask = () => {
    sessionStorage.setItem('task0', true);
    router.push('/task2');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Level 1</h1>
        <button onClick={completeTask}>Complete Level 1</button>
      </div>
    </div>
  );
}
