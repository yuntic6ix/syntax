import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import Movies from "./components/Movies"
import Count from "./components/Count"
import News from "./components/News"
import Todos from "./components/Todos"

export default function App() {
  return (
    <div className="App">
      <ul>
        <span>
          <Link to="/">Home</Link>/
        </span>
        <span>
          <Link to="/movies">Movies</Link>/
        </span>
        <span>
          <Link to="/count">Count</Link>/
        </span>
        <span>
          <Link to="/news">News</Link>/
        </span>
        <span>
          <Link to="/todos">Todos</Link>
        </span>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/count" element={<Count />} />
        <Route path="/news" element={<News />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  )
}
