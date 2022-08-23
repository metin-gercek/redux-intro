import {Counter} from './components/Counter';
import {IncreaseCounter} from './components/IncreaseCounter';
import {DecreaseCounter} from './components/DecreaseCounter';
import {IncreaseByTwoCounter} from './components/IncreaseByTwoCounter'

function App() {
  return (
    <div >
      <Counter />
      <div>
        <IncreaseCounter />
        <DecreaseCounter />
        <IncreaseByTwoCounter />
      </div>
     
    </div>
  );
}

export default App;
