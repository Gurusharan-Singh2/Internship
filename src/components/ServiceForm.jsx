import { useContext, useRef, useState } from 'react';
import { AppStore } from '../Store/AppStore';

export const ServiceForm=()=>{
  const {Edit,Add}=useContext(AppStore)
  const [data,setData]=useState()
const Sname=useRef("");
const Sdes=useRef("");
const Snumber=useRef("");
const btnHandle=(event)=>{
  event.preventDefault();

  const name=Sname.current.value;
 const des=Sdes.current.value;
 const price=Snumber.current.value;

Add(name,des,price);

 if(Add){
  alert("Service Added");
  Sname.current.value="";
  Sdes.current.value="";
  Snumber.current.value="";
  return;
 }
}
  return<>
  <form >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Service Name:</label>
    <input type="text" className="form-control" id="name" name='name'  ref={Sname}
    />
    <label htmlFor="description" className="form-label">Description:</label>
    <input type='textarea' className="form-control" id="description" name='description' ref={Sdes}/>
    <label htmlFor="price" className="form-label">Price:</label>
    <input type='number' className="form-control" id="price" name='price'  ref={Snumber}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={btnHandle}>Submit</button>
</form></>

}







// import { useContext } from 'react';
// import { useState, useEffect } from 'react';
// import { AppStore } from '../Store/AppStore';

// export const ServiceForm = ({ service, onSubmit, onCancel }) => {
//   const [formData, setFormData] = useState({
//     id:"",
//     name: '',
//     des: '',
//     price: ''
//   });
//   const{Edit}=useContext(AppStore)

//   // Use useEffect to populate the form when editing a service
//   useEffect(() => {
//     if (service) {
//       setFormData({
//         id:service.id,
//         name: service.name,
//         des: service.des,
//         price: service.price
//       });
//     }
//   }, [service]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ ...service, ...formData })
//     // Edit(formData)
    
//     ; // Preserve service's ID and update other fields
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input 
//           type="text" 
//           name="name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           required 
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <input 
//           type="text" 
//           name="des" 
//           value={formData.des} 
//           onChange={handleChange} 
//           required 
//         />
//       </div>
//       <div>
//         <label>Price:</label>
//         <input 
//           type="number" 
//           name="price" 
//           value={formData.price} 
//           onChange={handleChange} 
//           required 
//         />
//       </div>
//       <button type="submit">Save</button>
//       <button type="button" onClick={onCancel}>Cancel</button>
//     </form>
//   );
// };
