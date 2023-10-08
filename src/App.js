import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TextCounter from './components/textCounter';

function App() {
  return (
    <div className="App">
      <br /><br />
      <h1 className='text-center'>Responsive Paragraph Word<br />Counter</h1>
      <br />
      <TextCounter />
    </div>
  );
}

export default App;
