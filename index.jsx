console.log("Hello classroom!");

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthorNameLink } from './AuthorNameLink';

import { defaultState } from './defaultState';

const appTitle = `Wordmaster's Forum`;

const Main = () => (

    <BrowserRouter>
        <h2>
            <a href={`/`}>{appTitle}</a>
        </h2>
        <Route exact path="/" component={Home} />
        <Route path="/author/:authorId" component={AuthorDetail} />
        <Route path="/article/:articleId" component={ArticleDetail} />
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
    const articles = defaultState.articles.filter(article => article.authorId === authorId);
    console.log(articles);

    return (
        <div>
            <h4>
                {author.name}'s Articles
            </h4>
            <ul>
                {articles.map((article) => (
                    <li key={article.articleId}>
                        <a href={`/article/${article.articleId}`}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Home = () => {
    const { authors } = defaultState;
    return (
        < div >
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

const ArticleDetail = ({ match }) => {
    const { articleId } = match.params;

    const article = defaultState.articles.find(article => article.articleId === articleId);
    console.log("article?", article, articleId);

    if (!article) {
        return <div>No article found!</div>
    }

    const author = defaultState.authors.find(author => author.authorId === article.authorId);


    return <div>
        <h3>
            {article.title}
        </h3>
        <h4>
            By <AuthorNameLink {...author} />
        </h4>
        <p>
            {article.content}
        </p>
    </div>;
}


ReactDOM.render(<Main></Main>, document.getElementById("Container"));
