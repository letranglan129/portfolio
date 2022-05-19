export default function Tab({ children, ...props }) {
    const { label, onClickTab, activeTab } = props
    return (
        <li
            onClick={() => onClickTab(label)}
            className={`${
                activeTab === label ? 'tab-item active' : 'tab-item'
            }`}
        >
            {label}
        </li>
    )
}
