// const newComment = {
//     hikeId: hikeId,
//     date: new Date(),
//     content: content
// };

export default class Comment {

    constructor() {
        if (localStorage.getItem("commentsList") === null) {
            this.list = [];
        } else {
            this.list = JSON.parse(localStorage.getItem("commentsList"));
        }
    }

    addComment(hikeId, content) {
        const newComment = {
            hikeId: hikeId,
            date: new Date(),
            content: content
        };

        console.log(this.list);
        console.log(newComment);

        this.list.push(newComment);

        updateLocal(this.list);
    }

    getAllComments() {

    }

    renderCommentList(hikeId) {
        let filteredList = this.filterCommentsById(hikeId);
        console.log(filteredList);
        let output = `<ul>`;

        filteredList.forEach(element => {
            output += `
            <li>
            <p>${element.content}</p>
            </li>
            `;
        });

        output += `</ul>`;
        console.log(output);

        return output;
    }

    filterCommentsById(id) {
        return this.list.filter(item => item.hikeId == id);
    }
}

function updateLocal(list) {
    localStorage.setItem("commentsList", JSON.stringify(list))
}