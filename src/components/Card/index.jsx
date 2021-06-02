import { useState } from 'react'
import Footer from '../Footer'
import Textarea from '../Textarea'
import './style.css'

const green = '#09cf09'
const yellow = '#ebdc14'
const red = '#f81a1a'

export default function Card() {
    const [textareaValue, setTextareaValue] = useState('')
    const [remainingLength, setRemainingLength] = useState(300)
    const [isValid, setIsValid] = useState(false)
    const [color, setColor] = useState(green)

    function getLength(text) {
        setTextareaValue(text)
        setRemainingLength(300 - text.length)
        checkValid(text.length)
    }

    function checkValid(length) {
        if (length > 0) {
            setIsValid(true)
            setColor(green)
        }
        
        if (length >= 280) {
            setColor(yellow)
        }
        
        if (length > 300) {
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

            <Textarea onChange={getLength} />

            <Footer onClick={showText} remainingLength={remainingLength} isValid={isValid} color={color} />
        </div>
    )
}