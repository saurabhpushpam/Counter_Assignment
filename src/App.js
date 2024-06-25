import './App.css';
import CounterForm from './CounterForm';
import Header from './Header';


function App() {
  return (
    <>
      <div className='container'>
        <div className='main'>
          <Header></Header>
          <CounterForm></CounterForm>
        </div>
      </div>
    </>
  );
}

export default App;
