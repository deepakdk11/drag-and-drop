import React from 'react'

const ListTask = ({tasks}) => {
  return (
    <div>
        {
            tasks.map((task, index) => 
                <div key={index}>
                    <p>{task.id}</p>
                    <p>{task.subject}</p>
                    <p>{task.content}</p>
                </div>
            )
        }
    </div>
  )
}

export default ListTask
