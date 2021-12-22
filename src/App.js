import MainState from './context/mainState';
import List from './core/List';
import From from './core/From';
import './styles/App.css';

function App() {
 return (
  <div className="main-div">
   <MainState>
    <From />
    <hr />
    <List />
   </MainState>
  </div>
 );
}

export default App;
