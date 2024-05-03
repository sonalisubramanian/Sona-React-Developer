import './App.css';
import About from './component/About';
import Center from './component/Center';
import Header from './component/Header';
import Project from './component/Project';
import Resume from './component/Resume';
import Contact1 from './component/Contact1';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
    <Header/> 
    <Center/> 
    <About/>
    <Project/>
    <Resume/>
    <Contact1/>
    <Footer/>
    </div>
  );
}

export default App;
