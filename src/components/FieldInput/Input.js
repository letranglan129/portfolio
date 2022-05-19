export default function Input({
    children,
    name,
    placeholder,
    register,
    ...props
}) {
    return (
        <label htmlFor={name} className="field-input">
            <input
                type="text"
                placeholder={placeholder}
                name={name}
                {...register}
                {...props}
            />
            {children && <span className="field-icon">{children}</span>}
        </label>
    )
}
