import React, { Fragment } from 'react';

import Header from './components/Layout/header';
import Meals from './components/Meals/meals';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <Fragment>

      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
