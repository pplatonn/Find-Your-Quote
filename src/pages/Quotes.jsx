import React from 'react'
import { useState } from 'react'
import "./Quotes.css"

function Quotes() {

    const [id, setId] = useState()
    const [quote, setQuote] = useState([])
    const [err, setErr] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`https://dummyjson.com/quotes/${id}`)
            .then(res => res.json())
            .then((data) => {
                setQuote(data);
                setErr("");
                console.log(data);
            })
            .catch((err) => {
                setErr(err);
                setQuote(null);
                console.log(err)
            }
            )

    }

    const handleInputChange = (event) => {

        const value = event.target.value;

        if (!isNaN(value)) {
            setId(value);
            setErr('');
        } else {
            setErr('enter a NUMBER, please');
            console.log(err)
            return
        }
    }

    return (
        <div className='container'>
            <form method='post' onSubmit={handleSubmit}>
                <h1>fill the quote number:</h1>
                <input onChange={handleInputChange} placeholder='enter the quote number' />
                <button type='button' onClick={handleSubmit}>find</button>
            </form>
            <div className='quoteContainer'>
                {quote && (
                    <div>
                        <blockquote>"{quote.quote}"</blockquote>
                        <span>- {quote.author}</span>
                    </div>
                )}
                {err && <div id="error">{err}</div>}
            </div>
        </div>
    )
}

export default Quotes;