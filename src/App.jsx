import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton'


function App() {
  const [selectedTipic, setSelectedTopic] = useState('please select the button');
  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick()} label='components' />
            <TabButton onSelect={() => handleClick(EXAMPLES.jsx)} label='JSX' />
            <TabButton onSelect={() => handleClick(EXAMPLES.props)} label='Props' />
            <TabButton onSelect={() => handleClick(EXAMPLES.state)} label='State' />
          </menu>
          <div id="tab-content">
            <h3></h3>
            <p></p>
            <pre>
              <code>
                
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}


export default App;
