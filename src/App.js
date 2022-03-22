import './App.css';
import Navbar from './components/Navbar';
import ItemCount from './components/types/ItemCount';

const stock=10;
const initial=1;
const onAdd=(contador)=>{
  console.log('click',contador);
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className='titulo-principal'>
          <h3>
            items
          </h3>
          <ItemCount 
          stock={stock}
          initial={initial}
          onAdd={onAdd} />
        </div>
        
      </header>
    </div>
  );
}

export default App;
