import { EXAMPLES } from "../../data"
import TabButton from "./TabButton"
import { useState } from "react";

function Examples() {
    const [selectedTipic, setSelectedTopic] = useState();

    function handleClick(selectedBtn) {
        setSelectedTopic(selectedBtn);
    }

    return (
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
    </section>);
}

export default Examples;