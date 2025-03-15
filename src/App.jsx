import { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

function App() {
  const [item, setitem] = useState("")
  const [itemlist, setitemlist] = useState([])

  const createItem = (e) => {
    setitem(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      additem();
    }
  }

    const additem = () => {
      setitemlist([...itemlist, item])
    }

    const deleteItem = (id) => {
      setitemlist((itemlist) => {
        return itemlist.filter((arrelement, index) => {
          return index !== id
        }
        )
      })
    }
    return (
      <>
        <div className="down">
          <div className="container">
            <div className="innerbox">
              <h4>Todo List</h4>
              <div className="list">
                <div className="box2">
                  <div className="new-item-field">
                    <input type="text" placeholder="Add new Items" onChange={createItem} onKeyDown={handleKeyPress} />
                  </div>
                  <div>
                    <button onClick={additem}>Add</button>
                  </div>
                </div>
                <br />
                <div>
                  {itemlist.map((item, index) => {
                    return (
                      <div key={index}>
                        <Todolist
                          data={item}
                          id={index}
                          onSelect={deleteItem}
                          editItem={(newValue) => {
                            console.log("<<< newValue: ", newValue)
                            const newItemsList = [...itemlist];
                            newItemsList[index] = newValue;
                            setitemlist(newItemsList)
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }

export default App;