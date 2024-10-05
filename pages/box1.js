// pages/box1.js
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const words = [
  'IMAGINATION', 
  'PERCEPTION', 
  'UNDERSTANDING', 
  'EXPERIMENTAL', 
  'EXPRESSIONISM', 
  'DETERMINATION',
  'INNOVATION',
  'DEVELOPMENT',
  'TRANSFORMATION',
  'AUTHENTICITY'
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Box1 = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [currentOrder, setCurrentOrder] = useState([]);

  useEffect(() => {
    // Pick a random word and shuffle its letters
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const letters = randomWord.split('').map((letter, index) => ({
      id: `${index}`,
      letter
    }));
    setCurrentWord(randomWord);
    setCurrentOrder(shuffleArray(letters));
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedOrder = Array.from(currentOrder);
    const [movedLetter] = updatedOrder.splice(result.source.index, 1);
    updatedOrder.splice(result.destination.index, 0, movedLetter);
    setCurrentOrder(updatedOrder);
  };

  const handleUnlock = () => {
    const lettersInOrder = currentOrder.map(item => item.letter).join('');
    if (lettersInOrder === currentWord) {
      window.location.href = 'https://www.google.com';
    } else {
      alert('Try again!');
      navigator.vibrate(200); 
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Treasure 1</h1>
      <h3>Rearrange the letters to unlock Treasure 1</h3>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                display: 'flex', 
                gap: '10px', 
                justifyContent: 'center',
                flexWrap: 'wrap', // In case of very long words
              }}
            >
              {currentOrder.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
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
                        textAlign: 'center',
                        width: '30px',
                        ...provided.draggableProps.style,
                      }}
                    >
                      {item.letter}
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
  );
};

export default Box1;
