"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

const stories = [
  {
    original: [
      "She packed her bags for the journey.",
      "The train arrived right on time.",
      "She waved goodbye to her family.",
      "The whistle blew, and the train departed.",
      "Her adventure had officially begun."
    ],
    anagrammed: [
      "Her adventure had officially begun.",
      "The whistle blew, and the train departed.",
      "She waved goodbye to her family.",
      "The train arrived right on time.",
      "She packed her bags for the journey."
    ]
  }
];

export default function Task1() {
  const [sentences, setSentences] = useState([]);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    setSentences(randomStory.anagrammed);
    setCorrectOrder(randomStory.original);
  }, []);

  const handleSentenceClick = (sentence) => {
    if (!selectedOrder.includes(sentence)) {
      setSelectedOrder([...selectedOrder, sentence]);
    }
  };

  const handleUnlock = () => {
    if (JSON.stringify(selectedOrder) === JSON.stringify(correctOrder)) {
      sessionStorage.setItem('task0', true);
      router.push('/task2');
    } else {
      alert('Try again!');
      navigator.vibrate(200);
      setSelectedOrder([]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Level 4</h1>
        <h3>Select the story lines in the correct order to unlock treasure 4</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '400px',
          }}
        >
          {sentences.map((sentence, index) => (
            <div
              key={index}
              onClick={() => handleSentenceClick(sentence)}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                background: selectedOrder.includes(sentence) ? 'lightgreen' : 'lightgray',
                cursor: 'pointer',
              }}
            >
              {sentence} {selectedOrder.includes(sentence) && `(${selectedOrder.indexOf(sentence) + 1})`}
            </div>
          ))}
        </div>
        <button onClick={handleUnlock}>
          Unlock
        </button>
      </div>
    </div>
  );
}