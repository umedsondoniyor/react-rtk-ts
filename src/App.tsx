import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Results from './features/results/Results';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Results />
      </Container>
    </Provider>
  );
};

export default App;
