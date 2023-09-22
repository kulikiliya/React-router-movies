import Homepage from 'pages/Homepage/Homepage';
import NotFound from 'pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Search } from 'pages/Search/Search';
import { Suspense, lazy } from 'react';

const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/movies/" element={<Search />}></Route>
          <Route path="/movies/:id" element={<Movies />}>
            <Route path="/movies/:id/cast" element={<Cast />}></Route>
            <Route path="/movies/:id/reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
