import React from 'react';

import './app-header.css'
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Oleksandr Malishevskyi</h1>
            <h2>{allPosts} posts, likes {liked}</h2>
        </div>
    )
}

export default AppHeader;