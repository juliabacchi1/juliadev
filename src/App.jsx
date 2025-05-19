import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

import Portfolio from "./sections/Project";
import PostLivros from "./components/PostLivros";
import PostSeries from "./components/PostSeries";
import PostMulher from "./components/PostMulher";
import PostFrontEnd from "./components/PostFrontEnd";
import PostDesign from "./components/PostDesign";
import PostConsciente from "./components/PostConsciente";
import PostApps from "./components/PostApps";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog/livros" element={<PostLivros />} />
        <Route path="/blog/series" element={<PostSeries />} />
        <Route path="/blog/mulher" element={<PostMulher />} />
        <Route path="/blog/frontend" element={<PostFrontEnd />} />
        <Route path="/blog/design" element={<PostDesign />} />
        <Route path="/blog/consciente" element={<PostConsciente />} />
        <Route path="/blog/apps" element={<PostApps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
