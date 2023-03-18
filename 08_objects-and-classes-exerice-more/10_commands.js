// // Write a function that stores information about users and their comments on a website.
// // You have to store the users, the comments as an object with title and content, and the
// // article that the comment is about. The user can only comment, when he is on the list of
// // users and the article is in the list of articles. The input comes as an array of strings.
// // The strings will be in the format: "user {username}" – add the user to the list of users
// // "article {article name}" – add the article to the article list "{username} posts on
// // {article name}: {comment title}, {comment content}" – save the info
// //
// // At the end sort the articles by a count of comments and print the users
// // with their comments ordered by usernames in ascending.
// //
// // Output
// //
// // Print the result in the following format:
// // "Comments on {article1 name} --- From user {username1}:
// // {comment title} - {comment content} --- From user {username2}:
// // … Comments on {article2 name} …"
//
function solve(input) {
    const app = {
        users: {},
        articles: {},

        addUser(username) {
            if (this.users[username]) {
                return;
            }

            this.users[username] = [];
        },

        addArticle(article) {
            if (this.articles[article]) {
                return;
            }

            this.articles[article] = {
                comments: [],

                get commentCount() {
                    return this.comments.length;
                },

                addComment(username, title, content) {
                    this.comments.push({
                        username,
                        title,
                        content,
                    });
                },

                toString() {
                    return [
                        `Comments on ${this.name}`,
                        this.comments
                            .sort((a, b) => a.username.localeCompare(b.username))
                            .map(({
                                      username,
                                      title,
                                      content
                                  }) => `--- From user ${username}: ${title} - ${content}`)
                            .join('\n')
                    ].join('\n')
                },
            };
        },

        comment(username, article, commentTitle, commentContent) {
            if(!this.users[username]) {
                return;
            }

            if (!this.articles[article]) {
                return;
            }

            if (!this.articles[article]) {
                return;
            }

            this.articles[article].addComment(username, commentTitle, commentContent);
        },

        toString() {
            return Object.keys(this.articles).map(k => ({
                ...this.articles[k],
                name: k
            }))
                .sort((b, a) => a.commentCount - b.commentCount)
                .map(a => a.toString())
                .join('\n');
        }
    };

    input.forEach(r => {
        if (r.includes('user')) {
            // console.log('addUser', r.split('user')[1].trim());
            app.addUser(r.split('user')[1].trim());

            return;
        }

        if (r.includes('article')) {
            // console.log('addArticle', r.split('article')[1].trim());
            app.addArticle(r.split('article')[1].trim());

            return;
        }

        if (r.includes(' posts on ')) {
            const [username, rest] = r.split(' posts on ');
            const [article, articleRest] = rest.split(': ');
            const [commentTitle, commentContent] = articleRest.split(', ');
            // console.log('comment', username, article, commentTitle, commentContent);

            app.comment(username, article, commentTitle, commentContent);

            return;
        }
    });

    return app.toString()
}

// console.log(solve([
//     'user aUser123',
//     'someUser posts on someArticle: NoTitle, stupidComment',
//     'article Books',
//     'article Movies',
//     'article Shopping',
//     'user someUser',
//     'user uSeR4',
//     'user lastUser',
//     'uSeR4 posts on Books: I like books, I do really like them',
//     'uSeR4 posts on Movies: I also like movies, I really do',
//     'someUser posts on Shopping: title, I go shopping every day',
//     'someUser posts on Movies: Like, I also like movies very much'
// ]));
