import { EXAMPLES } from "../../data"
import TabButton from "./TabButton"
import { useState } from "react";
import Section from "../Sections/Section";

function Examples() {
    const [selectedTipic, setSelectedTopic] = useState();

    function handleClick(selectedBtn) {
        setSelectedTopic(selectedBtn);
    }

    return (
        <Section id='examples' title='EXPAMPLES'>
            <menu>
                <TabButton isActive={selectedTipic?.title === 'Components'} onClick={() => handleClick(EXAMPLES.components)} label='components' />
                <TabButton isActive={selectedTipic?.title === 'JSX'} onClick={() => handleClick(EXAMPLES.jsx)} label='JSX' />
                <TabButton isActive={selectedTipic?.title === 'Props'} onClick={() => handleClick(EXAMPLES.props)} label='Props' />
                <TabButton isActive={selectedTipic?.title === 'State'} onClick={() => handleClick(EXAMPLES.state)} label='State' />
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
        </Section>);
}

export default Examples;