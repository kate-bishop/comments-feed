const url = "http://localhost:3001";
const headers = {
    "Content-Type": "application/json",
}

export const postComment = (name: string, message: string) => {
    const comment = { name, message }
    return fetch(`${url}/createComment`, { method: "POST", headers, body: JSON.stringify(comment) }).then((response) => {
        return response.json().then((data) => {
            return data;
        }).catch((error) => {
            console.error('Error posting comment', error);
            return null;
        })
    });
}

export const getCommentById = (id: number) => {
    return fetch(`${url}/getComment`, { method: "GET", headers }).then((response) => {
        return response.json().then((data) => {
            return data;
        }).catch((error) => {
            console.error(`Error getting comment ${id}`, error);
            return null;
        })
    });
}

export const getComments = () => {
    return fetch(`${url}/getComments`, { method: "GET", headers }).then((response) => {
        return response.json().then((data) => {
            return data;
        }).catch((error) => {
            console.error('Error getting comments: ', error);
            return [];
        })
    });
}

export const deleteComments = () => {
    return fetch(`${url}/deleteComments`, { method: "DELETE", headers }).catch((error) => {
        console.error('Error deleting comments: ', error);
    })
}
