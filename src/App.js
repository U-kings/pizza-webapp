import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
        faCheckSquare,
        faCoffee,
        faPlus,
        faCheck,
        faTimes,
        faTrash,
        faPizzaSlice,
        faHamburger,
        faHammer,
        faFrog,
        faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import {Featured, Footer, Hero, Products} from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';

library.add(fab, faCheckSquare, faCoffee, faPlus, faCheck, faTimes, faTrash,faPizzaSlice, faHamburger, faHammer, faFrog, faCreditCard)

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero/>
      <Products heading='Choose your favorite' data={productData} />
      <Featured />
      <Products heading='Sweet Treats for You' data={ productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
