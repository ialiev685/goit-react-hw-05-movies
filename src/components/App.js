import { Switch, Route } from "react-router-dom";

import { Container } from "./Container";
import { Navigation } from "./Navigation";

import { HomePage } from "./HomePage";
import { MovieDetailsPage } from "./MovieDetailsPage";
import { Cast } from "./Cast";

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
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
