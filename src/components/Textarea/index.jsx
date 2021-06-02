import './style.css'

export default function Textarea({ onChange, maxLength, borderRed }) {
    return (
        <textarea
            rows="7"
            cols="50"
            autoFocus
            className={borderRed ? "border-red" : ''}
            placeholder={`Máx. de caracteres: ${maxLength}`}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}