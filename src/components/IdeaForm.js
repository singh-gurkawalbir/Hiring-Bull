import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Import serverTimestamp

import './IdeaForm.css';
import { Typography } from '@mui/material';

const predefinedTags = ['tech', 'feature']; // Add more predefined tags as needed

export default function IdeaForm() {
  const [newIdea, setNewIdea] = useState({
    title: '',
    description: '',
    tags: [],
    upvotes: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add serverTimestamp to capture the current date and time
    const currentDateString = new Date().toLocaleString();

    await addDoc(collection(db, 'ideas'), {
      ...newIdea,
      currentDateString, 
    });

    setNewIdea({
      title: '',
      description: '',
      tags: [],
      upvotes: 0,
    });
  };

  const handleTagChange = (selectedTag) => {
    setNewIdea({ ...newIdea, tags: [...newIdea.tags, selectedTag] });
  };

  return (
    <form className='idea-form' onSubmit={handleSubmit}>
      <label>
        <Typography variant='caption' display='block' gutterBottom>
          Title:
        </Typography>
        <input
          className='input-field'
          required
          type='text'
          onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
          value={newIdea.title}
        />
      </label>
      <label>
        <Typography variant='caption' display='block' gutterBottom>
          Description
        </Typography>
        <textarea
          className='textarea-field'
          onChange={(e) =>
            setNewIdea({ ...newIdea, description: e.target.value })
          }
          value={newIdea.description}
        />
      </label>
      <label>
        <Typography variant='caption' display='block' gutterBottom>
          Tags:
        </Typography>
        <input
          className='input-field'
          type='text'
          onChange={(e) =>
            setNewIdea({ ...newIdea, tags: e.target.value.split(',') })
          }
          value={newIdea.tags.join(',')}
        />
      </label>
      <button className='submit-button'>Add</button>
    </form>
  );
}
