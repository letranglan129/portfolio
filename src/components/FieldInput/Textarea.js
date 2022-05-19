import { useState } from 'react'

export default function Textarea({ children, onChange, ...props }) {
    const [text, setText] = useState()

    const handleChange = e => {
        const value = e.target.value

        setText(value)
        onChange(value)
    }

    return (
        <div className="field-input">
            <textarea
                {...props}
                onChange={handleChange}
                value={text}
            ></textarea>
            {children && <span className='field-icon'>{children}</span>}
        </div>
    )
}
