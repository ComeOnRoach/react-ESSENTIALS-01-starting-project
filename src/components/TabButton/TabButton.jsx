import './TabButton.css';

export default function TabButton(props) {
    return (
        <li>
            <button onClick={props.onSelect}>{props.title}</button>
            <p>{props.description}</p>
            <p>{props.code}</p>
        </li>
    );
}