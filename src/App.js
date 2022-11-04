import logo from './logo.svg';
import './App.css';
import ChildrenWithTitle from './ChildrenWithTitle';
import {FirstReactComponent} from './FirstReactComponent';

function App() {
  return (
    <>
      <h1>
        Hello world!
      </h1>
      <p>
        you look beautiful
      </p>
      <FirstReactComponent />
      <ChildrenWithTitle title={'I am title'} children={'I am children'} />
    </>    
  );
}

export default App;
