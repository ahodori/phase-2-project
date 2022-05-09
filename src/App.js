import './App.css';
import Calendar from './Calendar';
import Profile from './Profile';
import Feed from './Feed';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar/>
      <Profile />
      <Feed />
    </div>
  );
}

export default App;
