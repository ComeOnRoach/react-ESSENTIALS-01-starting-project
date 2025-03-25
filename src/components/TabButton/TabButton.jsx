import './TabButton.css';

function TabButton({ isActive, label, ...props }) {
    return (
        <li>
            <button className={isActive ? "active" : undefined} {...props}>{label}</button>
        </li>
    );
}

export default TabButton;