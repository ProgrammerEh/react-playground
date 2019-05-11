console.log("Hello classroom!");

import React from 'react';
import ReactDOM from 'react-dom';

import { defaultState } from './defaultState';

const appTitle = `Wordmaster's Forum`;

const AuthorNameLink = ({ authorId, name }) => (
    <div>{name}</div>

)

const Home = () => {
    const { authors } = defaultState;
    return (
        < div >
            <h2>
                {appTitle}
            </h2>
            <h3>
                The place for experts, experts of words...
            </h3>
            <div>
                <ul>
                    {authors.map((author, index) => (
                        <li key={index}><AuthorNameLink {...author} /></li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

ReactDOM.render(<Home></Home>, document.getElementById("Container"));
