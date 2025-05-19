import { Routes, Route } from "react-router-dom";
import Portfolio from "./sections/Project";
import PostLivros from "./components/PostLivros";
import PostSeries from "./components/PostSeries";
import PostMulher from "./components/PostMulher";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/blog/livros" element={<PostLivros />} />
      <Route path="/blog/series" element={<PostSeries />} />
      <Route path="/blog/mulher" element={<PostMulher />} />
    </Routes>
  );
}