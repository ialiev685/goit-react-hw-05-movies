import { Switch, Route } from "react-router-dom";

import { Container } from "./Container";
import { Navigation } from "./Navigation";

import { HomePage } from "./HomePage";
import { MovieDetailsPage } from "./MovieDetailsPage";
// import { Cast } from "./Cast";

// import { Reviews } from "./Reviews";

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
        {/* <Route path="/movies/:movieId/cast">
          <Cast />
        </Route> */}
        {/* <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route> */}
      </Switch>
    </Container>
  );
};

export default App;
