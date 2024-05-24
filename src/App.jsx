import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Success!</title>
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
