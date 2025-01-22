import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './Pages/ContactUsPage/ContactUsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import "./Styles/style.css"
import TodoList from "./component/TodoList/TodoList";


function App() {
  return (
      <BrowserRouter>
      <nav>
        <Link to="/home">Todos</Link>
        <br />
        <Link to="/contactus">Contact</Link>
      </nav>
      <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path='/home' element={<TodoList/>} />
          <Route path='/contactus' element={<ContactUsPage/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
