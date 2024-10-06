"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

const stories = [
  {
    original: [
      "The sun set behind the hills.",
      "Birds flew across the sky.",
      "Children laughed as they played.",
      "The wind whispered through the trees.",
      "The day quietly came to an end."
    ],
    anagrammed: [
      "Birds flew across the sky.",
      "The day quietly came to an end.",
      "The sun set behind the hills.",
      "Children laughed as they played.",
      "The wind whispered through the trees."
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
    const index = selectedOrder.indexOf(sentence);
    if (index === -1) {
      setSelectedOrder([...selectedOrder, sentence]);
    } else {
      const newSelectedOrder = [...selectedOrder];
      newSelectedOrder.splice(index, 1);
      setSelectedOrder(newSelectedOrder);
    }
  };

  const handleUnlock = () => {
    if (JSON.stringify(selectedOrder) === JSON.stringify(correctOrder)) {
      sessionStorage.setItem('task1', true);
      router.push('/task3');
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
        <h1>Level 2</h1>
        <h3>Select the story lines in the correct order to unlock treasure 2</h3>
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
