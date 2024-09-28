
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import Header from './components/Header';
import { Body } from './components/Body';


import { AppStore } from './Store/AppStore';
import ServiceListProvider from './Store/AppStore';
import { ServiceForm } from './components/ServiceForm';


function App() {


  return(
   <ServiceListProvider>



<div className="container">
 <h1>Basic Health Care Service</h1>
 <ServiceForm></ServiceForm>
 
 <Body></Body>

</div>



</ServiceListProvider>

  )

}

export default App
      
