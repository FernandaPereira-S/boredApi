import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import TodoList from './pages/TodoList/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/todolist' exact element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;