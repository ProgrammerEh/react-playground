import React from 'react';

export const AuthorNameLink = ({ authorId, name }) => (
    <a href={`/author/${authorId}`}>{name}</a>

)