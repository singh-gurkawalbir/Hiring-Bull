import { db } from "../firebase/config"

import {doc, deleteDoc} from "firebase/firestore"
export default function IdeaList({ ideas }) {

  const handleClick = async (id) =>{
    const ref = doc(db, 'ideas',id)
      await deleteDoc(ref)
    }

  return (
    <div className="book-list">
      <ul>
        {ideas.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}