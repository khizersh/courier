import React from 'react'
import "./service.css"

const QuestionSide = () => {
    return (
        <div class="question-section">
        <h6>Have any Question?</h6>
        <div>
            <input type="text" name="name" id="name" required="" placeholder="Full Name" />
            <input type="email" name="email" id="email" required="" placeholder="Your E-mail" />
            <textarea name="message" id="message" cols="15" rows="5" required="" placeholder="How can help you?"></textarea>
            <button class="btn btn-primary" type="submit">Your Question</button>
        </div>
    </div>
    )
}

export default QuestionSide
