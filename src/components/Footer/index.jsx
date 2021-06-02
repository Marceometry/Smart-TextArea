import './style.css'

export default function Footer({ remainingLength, color, children }) {
    return (
        <footer>
            <span style={{color: color}}>
                {remainingLength}
            </span>

            {children}
        </footer>
    )
}