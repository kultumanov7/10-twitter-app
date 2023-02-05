import './App.css';
import './components/sideBarComponent/styles.css';
import './components/homeComponent/styles.css';
import HomeComponent from './components/homeComponent';
import SideBarComponent from './components/sideBarComponent';

function App() {
  return (
    <div className="App">
      <SideBarComponent/>
      <div className="vertical-divider"></div>
      <HomeComponent/>
      <div className="vertical-divider"></div>
    </div>
  );
}

export default App;
