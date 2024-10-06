"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

const stories = [
  {
    original: [
      "The baker kneaded dough early in the morning.",
      "The aroma of fresh bread filled the air.",
      "Customers lined up at the bakery door.",
      "He smiled as he served the first loaf.",
      "The day had only just begun."
    ],
    anagrammed: [
      "Customers lined up at the bakery door.",
      "The baker kneaded dough early in the morning.",
      "The day had only just begun.",
      "He smiled as he served the first loaf.",
      "The aroma of fresh bread filled the air."
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
        <h1>Level 3</h1>
        <h3>Select the story lines in the correct order to unlock treasure 3</h3>
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