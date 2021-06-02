import './style.css'

export default function Textarea({ onChange, maxLength }) {
    return (
        <div
            contentEditable
            className="textarea"
            placeholder={`Máx. de caracteres: ${maxLength}`}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}