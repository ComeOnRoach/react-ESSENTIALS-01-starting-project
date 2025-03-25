import { useState, Fragment } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton'


function App() {
  let [selectedTipic, setSelectedTopic] = useState();
  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  function isSelectedTab(tabName){
    const result = selectedTipic.title === tabName;
    return result;
  }



  return (
    <Fragment>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selectedTipic?.title === 'Components'} onGoToTab={() => handleClick(EXAMPLES.components)} label='components' />
            <TabButton isActive={selectedTipic?.title === 'JSX'} onGoToTab={() => handleClick(EXAMPLES.jsx)} label='JSX' />
            <TabButton isActive={selectedTipic?.title === 'Props'} onGoToTab={() => handleClick(EXAMPLES.props)} label='Props' />
            <TabButton isActive={selectedTipic?.title === 'State'} onGoToTab={() => handleClick(EXAMPLES.state)} label='State' />
          </menu>
          {!selectedTipic && (<p>Please select a topic</p>)}
          {selectedTipic && (<div id="tab-content">
            <h3>{selectedTipic.title}</h3>
            <p>{selectedTipic.description}</p>
            <pre>
              <code>
                {selectedTipic.code}
              </code>
            </pre>
          </div>)
          }
        </section>
      </main>
    </Fragment>
  );
}


export default App;
