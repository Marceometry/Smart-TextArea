import './style.css'

export default function Textarea({ onChange }) {
    return (
        <textarea
            rows="7"
            cols="50"
            autoFocus
            onChange={(e) => onChange(e.target.value)}
        />
    )
}