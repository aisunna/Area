import './comments.css'
import './commentsAdaptive.css'

import { useContext, useState } from 'react'

import { CommentContext } from '../../../CommentContext.jsx'


const Comments = () => {

    const { comments, loading, error } = useContext(CommentContext)

    const mappedComments = comments?.map((el) => (

        <div class="comments__card">

            <h5 class="comments__card_title">From: {el.email}</h5>

            <p class="comments__card_text">{el.body}</p>

        </div>

    ))
    console.log(mappedComments);


    return (
        <>

            <section className="comments">

                <div className="comments__cards">

                    {mappedComments}

                </div>

            </section>

        </>
    )
}

export default Comments