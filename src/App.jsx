import { Fragment } from 'react';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcept/CoreConcepts';
import Examples from './components/TabButton/Examples';


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
