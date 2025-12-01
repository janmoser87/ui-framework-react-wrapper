/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

// Custom hook example usage
import { useFetch } from './useFetch';

export default function MyReactIntegration() {

    const { data: posts, loading, error, tryAgain } = useFetch(API_URL);

    if (loading) return <div>Loading data... (delay simulated) ⏳</div>;
    if (error) return <div>Error: {error} ❌ <button onClick={() => tryAgain()}> Try again</button></div>;

    return (
        <div>
            <h3>{API_URL} 👇</h3>
            {
                posts?.map(post => {
                    return (
                        <div key={post.id}>
                            {post.id}: {post.title}
                        </div>
                    )
                })
            }
        </div>
    )
}