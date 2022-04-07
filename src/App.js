import logo from './logo.svg';
import './App.scss';
import Example from './Example';
import Message from './Message';

function App(props) {
  return (
    <div 
      className={"App"}
      style={{top: props.topPosition || '0', position: 'relative'}}>
      <header 
      className={`App-header ${props.showRed ? 'header-blue' : 'header-red'}`}>
        Hello, {props.name}
      
      <Example />

      <Message messageText={'Message'} />
      </header>
    </div>
  );
}

export default App;
