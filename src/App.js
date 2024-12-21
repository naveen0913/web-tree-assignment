import './App.css';
import Header from './compoents/Header/Header';
import UserCard from './compoents/UserCard/userCard';

function App() {
  return (
    <div className="App">
     < Header/>
     <div style={{ padding: "16px" }}>
      <UserCard />
    </div>
    </div>
  );
}

export default App;
