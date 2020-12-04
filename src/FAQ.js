import React from "react"


export const FAQ = () => {

    const faqs = [
        {
            id: 1,
            question: "How do you make your doughnuts?",
            answer: "With lots of love, and a little bit of crazy"
        },
        {
            id: 2,
            question: "Can you share your recipes?",
            answer: "Yep...for a million dollars"
        }
    ]
    
    return (
        <>
        <h1>Frequently Asked Questions:</h1>
        <ul>
            {faqs.map(faq => <li key = {faq.id}>{faq.question}{faq.answer}</li>)}
        </ul>
        </>
    )
}