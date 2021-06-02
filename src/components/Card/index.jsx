import { useState } from 'react'
import Textarea from '../Textarea'
import Footer from '../Footer'
import Button from '../Button'
import './style.css'

const green = '#09cf09'
const yellow = '#ebdc14'
const red = '#f81a1a'

export default function Card() {
    const [maxLength] = useState(50)
    const [remainingLength, setRemainingLength] = useState(maxLength)
    const [textareaValue, setTextareaValue] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [color, setColor] = useState(green)

    function setLength(text) {
        setTextareaValue(text)
        setRemainingLength(maxLength - text.length)
        checkValid(text.length)
    }

    function checkValid(length) {
        if (length === 0) {
            setIsValid(false)
            setColor(green)
        } else if (length > 0 && length < maxLength - maxLength/10) {
            setIsValid(true)
            setColor(green)
        } else if (length >= maxLength - maxLength/10 && length <= maxLength) {
            setIsValid(true)
            setColor(yellow)
        } else if (length > maxLength) {
            setColor(red)
            setIsValid(false)
        }
    }

    function showText() {
        alert(textareaValue)
    }

    return (
        <div className="card">
            <h1>Digite o texto aqui</h1>

            <Textarea onChange={setLength} />

            <Footer remainingLength={remainingLength} color={color}>
                <Button onClick={showText} isValid={isValid}>
                    Confirmar
                </Button>
            </Footer>
        </div>
    )
}