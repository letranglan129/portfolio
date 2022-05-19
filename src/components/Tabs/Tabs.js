import { useCallback, useLayoutEffect, useState } from 'react'
import Tab from './Tab'

export default function Tabs({ children, ...props }) {
    const [activeTab, setActiveTab] = useState(children[0].props.label)
    const [lineStyle, setLineStyle] = useState({
        left: document.querySelector('.tab-item.active')?.offsetLeft,
        width: document.querySelector('.tab-item.active')?.offsetWidth,
    })

    const onClickTab = useCallback(tab => {
        setActiveTab(tab)
    }, [])

    useLayoutEffect(() => {
        setLineStyle({
            left: document.querySelector('.tab-item.active')?.offsetLeft,
            width: document.querySelector('.tab-item.active')?.offsetWidth,
        })
    }, [activeTab])

    return (
        <div className="tabs">
            <ul className="tab-list">
                {children.map((child, index) => {
                    const { label } = child.props

                    return (
                        <Tab
                            activeTab={activeTab}
                            label={label}
                            onClickTab={onClickTab}
                            key={index}
                        />
                    )
                })}

                <div
                    className="line"
                    style={{
                        left: `${lineStyle.left}px`,
                        width: `${lineStyle.width}px`,
                    }}
                ></div>
            </ul>
            <div className="tab-content">
                {children.map(child => {
                    if (child.props.label !== activeTab) return undefined
                    return child.props.children
                })}
            </div>
        </div>
    )
}
