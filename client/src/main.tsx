import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Board from './pages/Board';
import CreateTicket from './pages/CreateTicket';
import EditTicket from './pages/EditTicket';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import './index.css'; 


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Board />} />
        <Route path="create" element={<CreateTicket />} />
        <Route path="edit/:id" element={<EditTicket />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
