import './App.css';
import Header from './components/Header/Header.module';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/MyPosts/MyPosts';


const  App = () => {
  return (
    <div className="app-wrapper">
    <Header />
    <Navbar />
    <Profile />
 
    </div>
  );
}









export default App;
