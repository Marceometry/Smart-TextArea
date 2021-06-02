import './style.css'

export default function Footer({ onClick, remainingLength, color, isValid }) {
    return (
        <footer>
            <p>
                Caracteres restantes: <span style={{color: color}}> {remainingLength} </span>
            </p>

            <button onClick={onClick} disabled={!isValid}> Confirmar </button>
        </footer>
    )
}