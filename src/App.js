import 'bulma/css/bulma.min.css';

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App ">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Joe's Autopartes!"}/>
    </div>
  );
}

export default App;
