import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Dashboard/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import MyIdeas from "./components/Dashboard/MyIdeas";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='ideas' element={<MyIdeas />} />

        </Route>
      </Routes>
    </Router>
  )
}
export default App;