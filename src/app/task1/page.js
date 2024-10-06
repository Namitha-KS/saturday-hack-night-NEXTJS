"use client";

import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';

const stories = [
  {
    original: [
      "The mountains towered majestically.",
      "Snow capped their peaks.",
      "The air was crisp and clear.",
      "Hikers trekked along the winding path.",
      "Nature's beauty surrounded them."
    ],
    anagrammed: [
      "Nature's beauty surrounded them.",
      "The mountains towered majestically.",
      "Snow capped their peaks.",
      "The air was crisp and clear.",
      "Hikers trekked along the winding path."
    ]
  }
];

export default function Task1() {
  const [sentences, setSentences] = useState([]);
  const [correctOrder, setCorrectOrder] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    setSentences(randomStory.anagrammed);
    setCorrectOrder(randomStory.original);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedSentences = Array.from(sentences);
    const [movedSentence] = reorderedSentences.splice(result.source.index, 1);
    reorderedSentences.splice(result.destination.index, 0, movedSentence);
    setSentences(reorderedSentences);
  };

  const handleUnlock = () => {
    if (JSON.stringify(sentences) === JSON.stringify(correctOrder)) {
      sessionStorage.setItem('task0', true);
      router.push('/task2');
    } else {
      alert('Try again!');
      navigator.vibrate(200);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Level 1</h1>
        <h3>Rearrange the following story lines in their correct order to unlock treasure 1</h3>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  maxWidth: '400px',
                }}
              >
                {sentences.map((sentence, index) => (
                  <Draggable key={sentence} draggableId={sentence} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          padding: '10px',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          background: 'lightgray',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {sentence}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button
          onClick={handleUnlock}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Unlock
        </button>
      </div>
    </div>
  );
}
