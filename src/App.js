import logo from './logo.svg';
import './App.css';
import {Home} from "./Home"
import { FAQ } from './FAQ';

function App() {

  const user = {id: 1, name: "Travis"}

  return (
    <div>
      <Home user={user}/>
      <FAQ />
      
    </div>
  );
}

export default App;
