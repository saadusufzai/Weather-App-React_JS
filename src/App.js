import './App.css';
import Services from './services/Services'
import {useState} from 'react'


function App() {
  let [city, setCity] = useState("Bhakkar");
  let [search, setSearch] = useState(false);
 
  return (
    <div className="App">
      <h1> Enter City</h1>
      <input type="text" placeholder={city} onChange={(e)=>setCity(e.target.value)} />
      <button onClick={()=>setSearch(!search)} >Search</button>
      <Services city={city} search={search} />
     
    </div>
  );
}

export default App;
