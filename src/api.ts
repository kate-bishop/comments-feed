const url = "http://localhost:3001";
const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    }
}

export const postComment = (name: string, message: string) => {
    const comment = { name, message }
    fetch(`${url}/createComment`, { ...postOptions, body: JSON.stringify(comment) }).then((data) => {
        return data;
    }).catch((error) => {
        console.error('Error posting comment', error);
    })
}

export const getCommentById = (id: number) => {
    fetch(`${url}/getComment`, { body: JSON.stringify({ id: id }) }).then((data) => {
        return data;
    }).catch((error) => {
        console.error(`Error getting comment ${id}`, error);
    })
}

export const getComments = () => {
    fetch(`${url}/getComments`).then((data) => {
        return data;
    }).catch((error) => {
        console.error('Error getting comments', error);
    })
}

export const deleteComments = () => {
    fetch(`${url}/deleteComments`).then((data) => {
        return data;
    }).catch((error) => {
        console.error('Error deleting comments', error);
    })
}
