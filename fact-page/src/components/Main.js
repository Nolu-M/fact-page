import React from 'react';
//import ReactDOM from 'react-dom/client';

export default function Main() {
    return (
        <main background-image="react-icon-large.png">
            <h1 className="main-facts">Fun facts about React</h1>
            <ul className="bullet-points">
                <li>Was first released in 2013</li>
                <li>Was originally created by Kordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprice apps, including <br/>mobile apps</li>
            </ul>
        </main>
    )
}