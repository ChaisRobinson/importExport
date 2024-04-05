

// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

export async function getComments() {
    const container = document.querySelector('.commentContainer');

    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    console.log(comments);

    for (let i = 0; i < 50; i++) {
        const comment = document.createElement('p');
        comment.innerHTML = comments[i].body;
        container.appendChild(comment);
    }
}