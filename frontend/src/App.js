import './App.css';
import UserRating from './components/Rating'
import Login_component from './components/login.component';
import CardList from './components/cardList.component';
import Researcher_Profile from './components/Researcher_Profile';
import BulletinBoard from  './components/BulletinBoard';
import Filter from './components/Filter';
function App() {
  return (
    <div className="App">
      <Login_component />
      
      
      <Filter />
      <h2>Recruitment platform frontend</h2>
    </div>
  );
}

export default App;
