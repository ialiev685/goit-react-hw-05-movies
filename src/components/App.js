import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Container } from "./Container";
import { Navigation } from "./Navigation";

const HomePage = lazy(() => import("./HomePage"));
const MovieDetailsPage = lazy(() => import("./MovieDetailsPage"));
const MoviesPage = lazy(() => import("./MoviesPage"));

const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<p>Загружаю...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
