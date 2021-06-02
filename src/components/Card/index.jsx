import { useEffect, useState } from 'react'
import Textarea from '../Textarea'
import Button from '../Button'
import './style.css'

const green = '#09cf09'
const yellow = '#ebdc14'
const red = '#f81a1a'

export default function Card() {
    const [maxLength] = useState(50)
    const [remainingLength, setRemainingLength] = useState(maxLength)
    const [textareaLength, setTextareaLength] = useState(0)
    const [textareaValue, setTextareaValue] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [color, setColor] = useState(green)

    useEffect(() => {
        if (textareaLength === 0) {
            setIsValid(false)
            setColor(green)
        } else if (textareaLength > 0 && textareaLength < maxLength - maxLength/10) {
            setIsValid(true)
            setColor(green)
        } else if (textareaLength >= maxLength - maxLength/10 && textareaLength <= maxLength) {
            setIsValid(true)
            setColor(yellow)
        } else if (textareaLength > maxLength) {
            setColor(red)
            setIsValid(false)
        }
    }, [textareaLength, maxLength])

    function setLength(text) {
        setTextareaValue(text)
        setTextareaLength(text.length)
        setRemainingLength(maxLength - text.length)
        text[0].style.color = '#f81a1a'
    }

    function showText() {
        alert(textareaValue)
    }

    return (
        <div className="card">
            <h1>Digite o texto aqui</h1>

            <Textarea onChange={setLength} maxLength={maxLength} />

            <footer>
                <span style={{color: color}}>
                    {remainingLength}
                </span>

                <Button onClick={showText} isValid={isValid} />
            </footer>
        </div>
    )
}