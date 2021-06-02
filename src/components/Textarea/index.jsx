import './style.css'

export default function Textarea({ onChange, maxLength }) {
    return (
        <textarea
            rows="7"
            cols="50"
            autoFocus
            placeholder={`Máx. de caracteres: ${maxLength}`}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}