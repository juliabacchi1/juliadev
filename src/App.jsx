import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import Portfolio from "./sections/Project";

// Lazy-loaded posts
const PostLivros = lazy(() => import("./components/PostLivros"));
const PostSeries = lazy(() => import("./components/PostSeries"));
const PostMulher = lazy(() => import("./components/PostMulher"));
const PostFrontEnd = lazy(() => import("./components/PostFrontEnd"));
const PostDesign = lazy(() => import("./components/PostDesign"));
const PostConsciente = lazy(() => import("./components/PostConsciente"));
const PostApps = lazy(() => import("./components/PostApps"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />

        {/* Posts */}
        <Route
          path="/blog/livros"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <PostLivros />
            </Suspense>
          }
        />
        <Route
          path="/blog/series"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <PostSeries />
            </Suspense>
          }
        />
        <Route
          path="/blog/mulher"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <PostMulher />
            </Suspense>
          }
        />
        <Route
          path="/blog/frontend"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <PostFrontEnd />
            </Suspense>
          }
        />
        <Route
          path="/blog/design"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <PostDesign />
            </Suspense>
          }
        />
        <Route
          path="/blog/consciente"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <PostConsciente />
            </Suspense>
          }
        />
        <Route
          path="/blog/apps"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <PostApps />
            </Suspense>
          }
        />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
