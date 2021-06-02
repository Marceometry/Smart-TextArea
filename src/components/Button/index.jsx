import './style.css'

export default function Footer({ onClick, isValid }) {
    return (
        <button
            onClick={onClick}
            disabled={!isValid}
        >
            Confirmar
        </button>
    )
}