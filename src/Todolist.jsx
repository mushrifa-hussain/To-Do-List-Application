import React, { useState } from 'react'
import "./App.css";
const Todolist = ({
  id,
  data,
  onSelect,
  editItem
}) => {
  const [value, setValue] = useState(data);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    setIsEditing(false);
    editItem(value);
  }

  return (
    <div>
      <div className='box2'>
        <div style={{ flexGrow: 1 }}>
          <div>
            <p>{data}</p>
          </div>
          <div>
            {
              isEditing === true
                ? <input
                  type="text"
                  value={value}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    // To set local state
                    setValue(newValue);
                  }}
                />
                : undefined
            }
          </div>
        </div>
        <button onClick={() => { onSelect(id) }}>Delete</button>
        {
          isEditing === false
            ? <button onClick={handleEdit}>Edit</button>
            : undefined
        }
        {
          isEditing == true
            ? <button onClick={handleSave}>Save</button>
            : undefined
        }
        <div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Todolist