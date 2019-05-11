console.log("Hello classroom!");

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { defaultState } from './defaultState';

const appTitle = `Wordmaster's Forum`;

const Main = () => (

    <BrowserRouter>
        <h2>
            {appTitle}
        </h2>
        <Route exact path="/" component={Home} />
        <Route path="/author/:authorId" component={AuthorDetail} />
    </BrowserRouter>
)

const AuthorDetail = ({ match }) => {
    const { authorId } = match.params;
    console.log("The id passed from the route is", authorId);
    const author = defaultState.authors.find(author => author.authorId === authorId);
    console.log(author);
    if (!author) {
        return <div>No such author was found! Try again.</div>
    }
    return <div>{author.name}'s Articles</div>;
}

const AuthorNameLink = ({ authorId, name }) => (
    <a href={`/author/${authorId}`}>{name}</a>

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

ReactDOM.render(<Main></Main>, document.getElementById("Container"));
