import React from 'react'
import { useState } from 'react'
import "./Quotes.css"

// component start 

function Quotes() {

    // declare variables and their functions 

    const [id, setId] = useState()
    const [quote, setQuote] = useState([])
    const [err, setErr] = useState("")

    // perform the click 

    const handleSubmit = (event) => {
        event.preventDefault()

        // check for quote or set an error 

        fetch(`https://dummyjson.com/quotes/${id}`)
            .then(res => res.json())
            .then((data) => {
                setQuote(data);
                setErr("");
            })
            .catch((err) => {
                setErr(err);
                setQuote(null);
                console.log(err)
            }
            )

    }

    // update the quote id every time user enters something 

    const handleInputChange = (event) => {

        const value = event.target.value;

        // check if user entered a num  or any char

        if (!isNaN(value)) {
            setId(value);
            setErr('');
        } else {
            setErr('enter a NUMBER, please');
            console.log(err)
            return
        }
    }

    // return the html 

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
                        <blockquote>{quote.quote}</blockquote>
                        <span>{quote.author}</span>
                    </div>
                )}

                {/* return the error if any exists  */}

                {err && <div id="error">{err}</div>}
            </div>
        </div>
    )
}

export default Quotes;