import './App.css';
import Header from './compoents/Header/Header';
import UserCard from './compoents/UserCard/userCard';

function App() {
  return (
    <div className="App">
     < Header/>
     <div className='card-container'>
      <UserCard />
    </div>
    </div>
  );
}

export default App;
