import './TabButton.css';

function TabButton({ label, onGoToTab, isActive }) {
    return (
        <li>
            <button className={isActive ? "active" : undefined} onClick={onGoToTab}>{label}</button>
        </li>
    );
}

export default TabButton;