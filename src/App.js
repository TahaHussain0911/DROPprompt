import './App.css';
import Form from './components/components/Form/Form';
import Navbar from './components/components/Navbar/Navbar';
import PromptState from './components/context/PromptState';


function App()  {
  return (
    <div className="App">
    <PromptState>
      <Navbar/>
      <Form/>
      
    </PromptState>
      </div>
  );
}




export default App;
