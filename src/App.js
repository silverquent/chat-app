import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="">
      <Contact
        name="Broly Saiyan"
        avatar="https://avatars.githubusercontent.com/u/46708558?s=60&amp;v=4"
        status='true'
        text="online"
      />
      <Contact
        name="Joshua Horton"
        avatar="https://randomuser.me/api/portraits/men/21.jpg"
        status='false'
        text="offline"
      />
      <Contact
        name="Maurice Bishop"
        avatar="https://randomuser.me/api/portraits/men/12.jpg"
        status='true'
        text="online"
        tt ="mouche"
      />
    </div>
  );
}

export default App;
