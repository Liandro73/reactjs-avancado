import React, { useEffect, useState, memo } from 'react';

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}

function Twitter(props) {

    const { loading } = props
    const [tweet, setweet] = useState('title')

    // componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log('componentDidMount', posts)
        console.log('componentDidMount:loading', loading)
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('componentDidMount:loading', loading)
    }, [loading])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount: fui removido :(')
        }
    }, [])

    const handleTtweet = () => {
        setweet('Tweet atualizado')
    }

    console.log('Tweet atualizado', tweet)
    return (
        <div>
            <button onClick={handleTtweet}>Re-render</button>
            tests
        </div>
    )
}

export default memo(Twitter, areEqual);