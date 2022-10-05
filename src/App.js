import './App.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
