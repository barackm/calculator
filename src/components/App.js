import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

calculate({ total: null, next: '17.6', operation: null }, 'X');

function App() {
  return (
    <>
      <Display result="10" />
      <ButtonPanel />
    </>
  );
}

export default App;
