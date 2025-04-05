import React from 'react'
import { useState } from 'react'
import "./Quotes.css"

// get the api
// create a variable for quote number
// fetch api with quote num
// show text of api

function Quotes() {

    const [quoteNum, setQuoteNum] = useState(1)


    return (
        <div className='container'>
            <form>
                <h1>fill</h1>
            </form>
        </div>
    )
}

export default Quotes;