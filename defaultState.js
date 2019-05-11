export const defaultState = {
    authors: [{
        authorId: "user-1",
        name: "Jon Snow",
        articles: ["article-1"]
    }, {
        authorId: "user-2",
        name: "Brain Stark",
        articles: [""]
    }],
    articles: [{
        articleId: "article-1",
        authorId: "user-1",
        title: "Looking great in black",
        content: "Crow's feathers make a great and stylish accessory..."
    },
    {
        articleId: "article-2",
        authorId: "user-1",
        title: "a2 title",
        content: "a2 content"
    },
    {
        articleId: "article-3",
        authorId: "user-2",
        title: "a3 title",
        content: "a3 content"

    }]
};