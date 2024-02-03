import { db } from '../firebase/config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { green } from '@mui/material/colors';
import { Typography } from '@mui/material';
import './Idea.css';
export default function IdeaList({ ideas }) {
  const handleUpvote = async (id, upvotes) => {
    const ref = doc(db, 'ideas', id);
    await updateDoc(ref, { upvotes: upvotes + 1 });
  };
  
  

  return (
    <div className='idea-list'>
      <ul className='unordered'>
        {ideas.map((idea) => (
          <li
            key={idea.id}
            className='idea-item'
            // onClick={() => handleClick(idea.id)}
          >
            <Typography variant='h5'>{idea.title}</Typography>
            <Typography variant='subtitle2' gutterBottom>
              {idea.description}
            </Typography>
            <div className='idea-details'>
              <Typography variant='caption' display='block' gutterBottom>
                Tags: {idea.tags}
              </Typography>
              <Typography
                variant='caption'
                display='block'
                className='idea-upvotes'
              >
                Upvotes: {idea.upvotes}
              </Typography>
            </div>
            <Typography variant='caption' display='block'>
              Created At: {idea.currentDateString}
            </Typography>
            <ThumbUpIcon
              onClick={() => handleUpvote(idea.id, idea.upvotes)}
              fontSize='small'
              className='.upvote-button'
              sx={{ color: green[500], '&:hover': { color: 'green' } }}
            ></ThumbUpIcon>
          </li>
        ))}
      </ul>
    </div>
  );
}
