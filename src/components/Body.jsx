

import { useContext, useState } from "react";
import { AppStore } from "../Store/AppStore";
import { ServiceForm } from "./ServiceForm";
import { EditForm } from "./EditForm";

export const Body = () => {
  const { Service, Delete, Edit } = useContext(AppStore);

  const[editStart,SeteditStart]=useState(false)
  const [editingService, setEditingService] = useState(null); 

  // Handle the edit button click
  const editHandle = (id) => {
    let Id = Service.find((elem) => {
      return elem.id === id;
    });
    setEditingService(Id);
    Edit(Id);
    SeteditStart(true)
    // setEditingService(item); // Set the selected service for editing
  };

  // Handle the delete button click
  const deleteHandle = (id) => {
    Delete(id);
  };



  return (
    <>
    {editStart?<EditForm editingService={editingService} SeteditStart={SeteditStart} />: <div className="div">
        <h2>Available Services</h2>
         {
          Service.map((item) => (
            <ul key={item.id}>
              <li>{item.name}</li>
              <ul className="a">
                <li>{item.des}</li>
                <li>Price: $ {item.price}</li>
                <li>
                  <button onClick={() => editHandle(item.id)}>Edit</button>
                  <button onClick={() => deleteHandle(item.id)}>Delete</button>
                </li>
              </ul>
            </ul>
          ))
        }
      </div>}
     
    </>
  );
};
