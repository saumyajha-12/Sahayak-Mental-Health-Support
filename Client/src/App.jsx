import Signup from "./components/Signup";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';  // <-- NO BrowserRouter here
import Home from "./home/Home";
import VolunteerSignup from "./components/SignUpforVolunteers";
import Page2 from './components/Page2';
import ChatWithCounselor from "./components/chatcounselor";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/volunteer' element={<VolunteerSignup />} />
      <Route path='/logedIn' element={<Page2 />} />
      <Route path='/chat' element={<ChatWithCounselor />} />
      <Route path='/chatbot' element={<Chatbot />} />
    </Routes>
  );
}

export default App;

