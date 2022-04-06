import logo from './logo.svg';
import './App.scss';
import Example from './Example';

function App(props) {
  return (
    <div 
      className={"App"}
      style={{top: props.topPosition || '20px', position: 'relative'}}>
      <header 
      className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}>
        Hello, {props.name}
      
      <Example />
      </header>
    </div>
  );
}

export default App;
