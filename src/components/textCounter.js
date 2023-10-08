import { useState } from 'react';

function TextCounter() { 
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
        rows={10}
        cols={72}
      />
      <br /><br />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default TextCounter; 
