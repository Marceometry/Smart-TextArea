import './style.css'

export default function Footer({ onClick, isValid, children }) {
    return (
        <button
            onClick={onClick}
            disabled={!isValid}
        >
            {children}
        </button>
    )
}