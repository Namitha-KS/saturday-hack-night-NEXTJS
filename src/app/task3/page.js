"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

export default function Task3() {
  const router = useRouter();

  const completeTask = () => {
    sessionStorage.setItem('task2', true);
    router.push('/task4');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Level 3</h1>
        <button onClick={completeTask}>Complete Level 3</button>
      </div>
    </div>
  );
}
