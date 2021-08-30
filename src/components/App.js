import { Switch, Route, Redirect } from "react-router-dom";

import { Container } from "./Container";
import { Navigation } from "./Navigation";

import { HomePage } from "./HomePage";
import { MovieDetailsPage } from "./MovieDetailsPage";
import { MoviesPage } from "./MoviesPage";

const App = () => {
  return (
    <Container>
      <Navigation />
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
          {/* <HomePage /> */}
          <Redirect to="/" />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
