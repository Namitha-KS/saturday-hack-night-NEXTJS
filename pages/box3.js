// pages/box3.js
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const stories = [
        {
          "original": [
            "The sun set behind the hills.",
            "Birds flew across the sky.",
            "Children laughed as they played.",
            "The wind whispered through the trees.",
            "The day quietly came to an end."
          ],
          "anagrammed": [
            "Birds flew across the sky.",
            "The day quietly came to an end.",
            "The sun set behind the hills.",
            "Children laughed as they played.",
            "The wind whispered through the trees."
          ]
        },
        {
          "original": [
            "The baker kneaded dough early in the morning.",
            "The aroma of fresh bread filled the air.",
            "Customers lined up at the bakery door.",
            "He smiled as he served the first loaf.",
            "The day had only just begun."
          ],
          "anagrammed": [
            "Customers lined up at the bakery door.",
            "The baker kneaded dough early in the morning.",
            "The day had only just begun.",
            "He smiled as he served the first loaf.",
            "The aroma of fresh bread filled the air."
          ]
        },
        {
          "original": [
            "She packed her bags for the journey.",
            "The train arrived right on time.",
            "She waved goodbye to her family.",
            "The whistle blew, and the train departed.",
            "Her adventure had officially begun."
          ],
          "anagrammed": [
            "Her adventure had officially begun.",
            "The whistle blew, and the train departed.",
            "She waved goodbye to her family.",
            "The train arrived right on time.",
            "She packed her bags for the journey."
          ]
        },
        {
          "original": [
            "The dog barked at the passing car.",
            "The cat lounged lazily in the sun.",
            "A butterfly danced over the flowers.",
            "The garden was full of life.",
            "The summer afternoon felt peaceful."
          ],
          "anagrammed": [
            "The garden was full of life.",
            "The dog barked at the passing car.",
            "The cat lounged lazily in the sun.",
            "The summer afternoon felt peaceful.",
            "A butterfly danced over the flowers."
          ]
        },
        {
          "original": [
            "The artist dipped her brush in blue paint.",
            "She studied the canvas thoughtfully.",
            "Her hand moved swiftly over the surface.",
            "The colors blended beautifully together.",
            "A masterpiece slowly came to life."
          ],
          "anagrammed": [
            "A masterpiece slowly came to life.",
            "The artist dipped her brush in blue paint.",
            "Her hand moved swiftly over the surface.",
            "She studied the canvas thoughtfully.",
            "The colors blended beautifully together."
          ]
        },
        {
          "original": [
            "The rain poured down in sheets.",
            "The streets were empty, silent.",
            "He stood under the awning, waiting.",
            "The smell of wet pavement filled the air.",
            "Time seemed to slow down."
          ],
          "anagrammed": [
            "Time seemed to slow down.",
            "The rain poured down in sheets.",
            "The streets were empty, silent.",
            "He stood under the awning, waiting.",
            "The smell of wet pavement filled the air."
          ]
        },
        {
          "original": [
            "The detective studied the clue closely.",
            "The clock ticked in the background.",
            "He scribbled notes in his journal.",
            "A sudden realization dawned on him.",
            "The mystery was beginning to unravel."
          ],
          "anagrammed": [
            "The mystery was beginning to unravel.",
            "The detective studied the clue closely.",
            "He scribbled notes in his journal.",
            "A sudden realization dawned on him.",
            "The clock ticked in the background."
          ]
        },
        {
          "original": [
            "The campfire crackled under the stars.",
            "They told stories about their childhood.",
            "Laughter echoed in the night.",
            "The woods felt calm and quiet.",
            "They gazed at the glowing embers."
          ],
          "anagrammed": [
            "They gazed at the glowing embers.",
            "Laughter echoed in the night.",
            "The campfire crackled under the stars.",
            "The woods felt calm and quiet.",
            "They told stories about their childhood."
          ]
        },
        {
          "original": [
            "The librarian stacked books on the shelf.",
            "The smell of old paper filled the air.",
            "A student flipped through a dusty volume.",
            "The clock struck noon.",
            "The library remained quiet and still."
          ],
          "anagrammed": [
            "The smell of old paper filled the air.",
            "The clock struck noon.",
            "The librarian stacked books on the shelf.",
            "The library remained quiet and still.",
            "A student flipped through a dusty volume."
          ]
        },
        {
          "original": [
            "The chef chopped vegetables with precision.",
            "The sizzling pan filled the kitchen with aroma.",
            "He added a pinch of salt to the dish.",
            "The meal was nearly complete.",
            "His creation was a work of art."
          ],
          "anagrammed": [
            "His creation was a work of art.",
            "The meal was nearly complete.",
            "The chef chopped vegetables with precision.",
            "The sizzling pan filled the kitchen with aroma.",
            "He added a pinch of salt to the dish."
          ]
        },
        {
          "original": [
            "The moon shone brightly in the sky.",
            "The night air was cool and crisp.",
            "She wrapped her scarf tightly around her.",
            "The streets were quiet, with only the sound of footsteps.",
            "The city slept peacefully."
          ],
          "anagrammed": [
            "The streets were quiet, with only the sound of footsteps.",
            "The city slept peacefully.",
            "She wrapped her scarf tightly around her.",
            "The moon shone brightly in the sky.",
            "The night air was cool and crisp."
          ]
        },
        {
          "original": [
            "The explorer stepped into the cave.",
            "His flashlight illuminated the walls.",
            "He carefully walked deeper inside.",
            "Strange symbols appeared on the stone.",
            "A sense of wonder filled him."
          ],
          "anagrammed": [
            "A sense of wonder filled him.",
            "Strange symbols appeared on the stone.",
            "His flashlight illuminated the walls.",
            "The explorer stepped into the cave.",
            "He carefully walked deeper inside."
          ]
        },
        {
          "original": [
            "The flowers bloomed in the garden.",
            "Bees buzzed from petal to petal.",
            "The sun shone gently through the leaves.",
            "The air was filled with the scent of spring.",
            "Nature was alive with energy."
          ],
          "anagrammed": [
            "The sun shone gently through the leaves.",
            "The flowers bloomed in the garden.",
            "Nature was alive with energy.",
            "Bees buzzed from petal to petal.",
            "The air was filled with the scent of spring."
          ]
        },
        {
          "original": [
            "The bell rang loudly in the courtyard.",
            "Students hurried to their classrooms.",
            "The teacher waited at the front of the room.",
            "The lesson was about to begin.",
            "The school day was in full swing."
          ],
          "anagrammed": [
            "The teacher waited at the front of the room.",
            "The lesson was about to begin.",
            "Students hurried to their classrooms.",
            "The school day was in full swing.",
            "The bell rang loudly in the courtyard."
          ]
        },
        {
          "original": [
            "The pirate ship sailed across the horizon.",
            "The crew shouted orders to each other.",
            "The captain steered the ship with confidence.",
            "The wind filled the sails, pushing them forward.",
            "The treasure was close at hand."
          ],
          "anagrammed": [
            "The wind filled the sails, pushing them forward.",
            "The pirate ship sailed across the horizon.",
            "The crew shouted orders to each other.",
            "The treasure was close at hand.",
            "The captain steered the ship with confidence."
          ]
        },
        {
          "original": [
            "The astronaut floated inside the spaceship.",
            "Stars twinkled through the window.",
            "She gazed out at the vastness of space.",
            "The radio crackled with a message from Earth.",
            "The mission was progressing smoothly."
          ],
          "anagrammed": [
            "The radio crackled with a message from Earth.",
            "She gazed out at the vastness of space.",
            "The mission was progressing smoothly.",
            "Stars twinkled through the window.",
            "The astronaut floated inside the spaceship."
          ]
        },
        {
          "original": [
            "The fisherman cast his line into the lake.",
            "The water rippled gently.",
            "Birds chirped in the distance.",
            "He waited patiently for a bite.",
            "The afternoon passed peacefully."
          ],
          "anagrammed": [
            "Birds chirped in the distance.",
            "The water rippled gently.",
            "The fisherman cast his line into the lake.",
            "The afternoon passed peacefully.",
            "He waited patiently for a bite."
          ]
        },
        {
          "original": [
            "The knight drew his sword.",
            "The dragon roared fiercely.",
            "They circled each other in the arena.",
            "The crowd watched with bated breath.",
            "A battle was about to begin."
          ],
          "anagrammed": [
            "A battle was about to begin.",
            "The dragon roared fiercely.",
            "They circled each other in the arena.",
            "The crowd watched with bated breath.",
            "The knight drew his sword."
          ]
        },
        {
          "original": [
            "The dancer moved gracefully across the stage.",
            "The spotlight illuminated her every step.",
            "The audience held their breath.",
            "Her performance was mesmerizing.",
            "She was lost in the music."
          ],
          "anagrammed": [
            "Her performance was mesmerizing.",
            "The dancer moved gracefully across the stage.",
            "The audience held their breath.",
            "She was lost in the music.",
            "The spotlight illuminated her every step."
          ]
        },
        {
          "original": [
            "The thunder rumbled in the distance.",
            "Lightning illuminated the dark sky.",
            "Rain began to fall steadily.",
            "She rushed inside to find shelter.",
            "The storm was approaching quickly."
          ],
          "anagrammed": [
            "The storm was approaching quickly.",
            "Rain began to fall steadily.",
            "The thunder rumbled in the distance.",
            "Lightning illuminated the dark sky.",
            "She rushed inside to find shelter."
          ]
        },
        {
          "original": [
            "The writer typed furiously at her desk.",
            "Ideas flowed like a river.",
            "The clock ticked away the seconds.",
            "She was determined to finish the chapter.",
            "Her imagination ran wild."
          ],
          "anagrammed": [
            "Her imagination ran wild.",
            "The writer typed furiously at her desk.",
            "The clock ticked away the seconds.",
            "Ideas flowed like a river.",
            "She was determined to finish the chapter."
          ]
        },
        {
          "original": [
            "The mountains towered majestically.",
            "Snow capped their peaks.",
            "The air was crisp and clear.",
            "Hikers trekked along the winding path.",
            "Nature's beauty surrounded them."
          ],
          "anagrammed": [
            "Nature's beauty surrounded them.",
            "The mountains towered majestically.",
            "Snow capped their peaks.",
            "The air was crisp and clear.",
            "Hikers trekked along the winding path."
          ]
        }
      
      
];

const Box3 = () => {
  const [sentences, setSentences] = useState([]);
  const [correctOrder, setCorrectOrder] = useState([]);

  useEffect(() => {
    // Pick a random story
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
      window.location.href = 'https://www.google.com';
    } else {
      alert('Try again!');
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Treasure 3</h1>
      <h3>Rearrange the following story lines in their correct order to unlock Treasure 3</h3>

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
  );
};

export default Box3;
