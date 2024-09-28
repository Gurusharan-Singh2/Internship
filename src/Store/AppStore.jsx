import { createContext, useReducer } from "react";
import { useState } from "react";
export const AppStore = createContext({
  Service: [],
  Add: () => {},
  Delete: () => {},
  Edit:()=>{}
});

const ServiceDemo = [
  {
    name: "General Consulation",
    des: "Routine Checkups for comman health issue",
    price: "50",
    id: 1,
  },
  {
    name: "Vaccination",
    des: "Immunization for diseases like flu,measles, etc",
    price: "2.5",
    id: 2,
  },
  {
    name: "Health Screening",
    des: "Basic Health Screening like blood pressure cholestrol tests",
    price: "2.5",
    id: 3,
  },
];
const Reducer = (state, action) => {
  let item = state;
  if (action.type === "AddService") {
    item = [action.payload.data, ...item];
  } else if (action.type === "DeleteService") {
    item = state.filter((service) => service.id !== action.payload.id);
  }
  else if(action.type==="Edit"){
    return state.map((service) =>
      service.id === action.payload.Id.id
        ? { ...service, ...action.payload.Id } 
        : service
    );
  }
  
  


  return item;
};

const ServiceListProvider = ({ children }) => {
  const [Service, dispatch] = useReducer(Reducer, ServiceDemo);
  console.log(Service);


  const Add = (name, des, price) => {
    const data = { name, des, price,
      id:new Date().getTime().toString(),
    };
    dispatch({
      type: "AddService",
      payload: {
        data,
      },
    });
  };
  const Delete = (id) => {
    dispatch({
      type: "DeleteService",
      payload: {
        id,
      },
    });
  };

  const Edit =(Id)=>{
     dispatch({
      type:"Edit",
      payload:{
        Id
      }
     })
      
      }
    
  return (
    <AppStore.Provider value={{ Service, Add, Delete ,Edit}}>
      {children}
    </AppStore.Provider>
  );
};
export default ServiceListProvider;
