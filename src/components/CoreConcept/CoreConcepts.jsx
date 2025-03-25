import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../../data"
import Section from "../Sections/Section";


function CoreConcepts() {
    return (
        <Section id='core-concepts' title='Core Concepts!'>
        <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
        </ul>
    </Section>
    )
}

export default CoreConcepts;