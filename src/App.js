
import './App.css';
import { useState } from 'react';

import Header from './Components/Header';
import Login from './Components/Login';
import Images from './Components/Images';
import FormPage from './Components/Formpage';






function App() {
  const [showpage, setShowPage] = useState(false);
  const handleClick = () => setShowPage(!showpage);
  
  if (showpage)
    return (
      <div>
          <h1>You are Loged-in </h1>
          <Header/>
         
          <Images handleClick={handleClick}/>
      </div>
    );
    
  return (
    
    <div className="App">
    
     <Login handleClick={handleClick}/>
  
     
  </div>

);
    
    

}


export default App;
