import { Routes, Route } from "react-router-dom";
import Portfolio from "./sections/Project";
import PostLivros from "./components/PostLivros";
import PostSeries from "./components/PostSeries";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/blog/livros" element={<PostLivros />} />
      <Route path="/blog/series" element={<PostSeries />} />
    </Routes>
  );
}