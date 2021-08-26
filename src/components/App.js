import { Switch, Route } from "react-router-dom";

import { HomePage } from "./HomePage";
import { Container } from "./Container";
import { Navigation } from "./Navigation";

const App = () => {
  return (
    <Container>
      <Navigation />

      <Route path="/" exact>
        <HomePage />
      </Route>
    </Container>
  );
};

export default App;
