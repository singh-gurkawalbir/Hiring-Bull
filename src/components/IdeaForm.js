import { useState } from 'react'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function IdeaForm() {
  const [newDoc, setNewDoc] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(newDoc)
    await addDoc( collection(db, 'ideas'), {
      title: newDoc
    })

    setNewDoc('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new Hackathon idea:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewDoc(e.target.value)}
          value={newDoc}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
