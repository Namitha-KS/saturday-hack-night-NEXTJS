"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

export default function Task4() {
  const router = useRouter();

  const completeTask = () => {
    sessionStorage.setItem('task3', true);
    router.push('/password');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Level 4</h1>
        <button onClick={completeTask}>Complete Level 4</button>
      </div>
    </div>
  );
}
