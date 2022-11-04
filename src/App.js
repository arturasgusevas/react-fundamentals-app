import './App.css';
import ChildrenWithTitle from './ChildrenWithTitle';
import {FirstReactComponent} from './FirstReactComponent';
import ConditionalRenderingComponent from './ConditionalRenderingComponent';

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
      <ConditionalRenderingComponent isBlue={true} />
      <br/>
      <ConditionalRenderingComponent isBlue={false} />
    </>    
  );
}

export default App;
