

import { useContext, useState } from "react";
import { AppStore } from "../Store/AppStore";
import { ServiceForm } from "./ServiceForm";
import { EditForm } from "./EditForm";

export const Body = ({setList}) => {
  const { Service, Delete, Edit } = useContext(AppStore);

  const[editStart,SeteditStart]=useState(false)
  const [editingService, setEditingService] = useState(null); 

 
  const editHandle = (id) => {
    let Id = Service.find((elem) => {
      return elem.id === id;
    });
    setEditingService(Id);
    Edit(Id);
    SeteditStart(true)
    
  };

  const deleteHandle = (id) => {
    Delete(id);
  };



  return (
    <>
    {editStart?<EditForm editingService={editingService} SeteditStart={SeteditStart} />: 
   (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="h3 a">Available Services</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {Service.map((item) => (
          <div className="col" key={item.id}>
            
            
              <div className=" servicebox">
                <h3 className="h3">
                  {item.name}
                </h3>
                <ul className="ul">
                <li> Info: {item.des}</li>
                <li>Price: <span className="s">$ {item.price} </span> </li>
                 
                </ul>
                <div className="btnsec">
                  <button
                    className="btn btn-warning "
                    onClick={() => editHandle(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandle(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary d-inline-flex align-items-center"
        type="button"
        onClick={() => setList(false)}
      >
        Back
      </button>
    </div>
  )
    
    
    
//   {/* //   <div className="div"> */}
//   //       <h2>Available Services</h2>
//   //        {
//   //         Service.map((item) => (
//   //           <ul key={item.id}>
//   //             <li>{item.name}</li>
//   //             <ul className="a">
//   //               <li>{item.des}</li>
//   //               <li>Price: $ {item.price}</li>
//   //               <li>
//   //                 <button onClick={() => editHandle(item.id)}>Edit</button>
//   //                 <button onClick={() => deleteHandle(item.id)}>Delete</button>
//   //               </li>
//   //             </ul>
//   //           </ul>
//   //         ))
//   //       }
//   //       <button class="btn btn-primary d-inline-flex align-items-center" type="button" onClick={()=>setList(false)}>
//   //   back
    
//   // </button>
//   //     </div>}
// }
}
    </>
  );
};
