import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CommentContext = createContext()

export const CommentProvider = ({ children }) => {

    const [comments, setComments] = useState()

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState()

    useEffect(() => {

        const getComments = async () => {

            try {
                setLoading(true)

                const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
                
                setComments(res.data)

                // console.log(res.data);
                
            }
            catch (err) {
                setError(err.message)                                                                                                                                         
                console.log("loading error", err);
                
            } finally{
                setLoading(false)
            }

        }

        getComments()

    }, [])

    useEffect(() => {
        console.log(comments);
    }, [comments])

    return(
        <CommentContext.Provider value={{ comments, loading, error }}>

            {children}

        </CommentContext.Provider>
    )

};