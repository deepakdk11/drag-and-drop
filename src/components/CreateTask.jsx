import React from 'react'

const CreateTask = ({handleClick, setNewSubject, setNewContent, newSubject, newContent}) => {
  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" name="subject" id="subject" className='border-2' onChange={(e)=>setNewSubject(e.target.value)} value={newSubject} />
        <textarea name="content" id="content" className='border-2' onChange={(e) => setNewContent(e.target.value)} value={newContent}></textarea>
        <button className='border-2' type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default CreateTask
