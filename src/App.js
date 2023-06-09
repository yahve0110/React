import './App.css';
import Header from './components/Header/Header.module';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const  App = (props) => {
  return (
    <BrowserRouter>
   
    <div className="app-wrapper">
    <Header />
    <Navbar />
   
      <div className='app-wrapper-content'>
        <Routes>
          <Route path = "/profile" element = {<Profile posts={props.state.profilePage.posts} />}/>
          <Route path = "/dialogs" element = {<Dialogs dialogs = {props.state.messagesPage.dialogs}  messagesData ={props.state.messagesPage.messagesData}/>}/>
          <Route path = "/news" element = {<News />}/>
          <Route path = "/music" element = {<Music />}/>
          <Route path = "/settings" element = {<Settings />}/>
         </Routes>
      </div>
      {/* dialogs={dialogs} messages = {messages} */}
    </div>
    </BrowserRouter>
  );
}









export default App;
