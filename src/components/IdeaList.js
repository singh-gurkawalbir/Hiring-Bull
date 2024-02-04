import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { green } from '@mui/material/colors';
import { Typography } from '@mui/material';
import './Idea.css';
import { db } from '../firebase/config';

export default function IdeaList({ ideas }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleUpvote = async (id, upvotes) => {
    const ref = doc(db, 'ideas', id);
    await updateDoc(ref, { upvotes: upvotes + 1 });
  };

  return (
    <div className='idea-list'>
      <ul className='unordered'>
        {ideas.map((idea, index) => (
          <li key={idea.id} className='idea-item'>
            <Typography variant='h5'>{idea.title}</Typography>
            <Typography
              variant='subtitle2'
              gutterBottom
              onClick={() => toggleExpand(index)}
              style={{ cursor: 'pointer' }}
            >
              {expandedIndex === index
                ? idea.description
                : `${idea.description.substring(0, 300)}${
                    idea.description.length > 300 ? '...' : ''
                  }`}
            </Typography>
            <div className='idea-details'>
              <Typography variant='caption' display='block' gutterBottom>
                Tags:
              </Typography>

              <Typography
                variant='caption'
                display='block'
                className='idea-upvotes'
              >
                Upvotes: {idea.upvotes}
              </Typography>
            </div>
            <ul className='flex'>
              {idea.tags.map((tag, tagIndex) => (
                <p
                  className='border-dotted rounded-md px-2 bg-slate-400 text-gray-700 text-[0.6rem]'
                  key={tagIndex}
                >
                  {tag}
                </p>
              ))}
            </ul>
            <Typography variant='caption' display='block'>
              Created At: {idea.currentDateString}
            </Typography>
            <ThumbUpIcon
              onClick={() => handleUpvote(idea.id, idea.upvotes)}
              fontSize='small'
              sx={{ color: green[500], '&:hover': { color: 'green' } }}
            ></ThumbUpIcon>
          </li>
        ))}
      </ul>
    </div>
  );
}
