
export const fetchComments = () => {
    return $.ajax({
        url: `/api/comments`,
        method: "GET"
    });
};


export const createComment = (comment) => {
    return $.ajax({
        url: `/api/comments`,
        method: "POST",
        data: {comment}
    });
};



export const deleteComment = (commentId) => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: "DELETE"
    });
};



export const updateComment = (comment) => {
    return $.ajax({
        url: `/api/comments/${comment.id}`,
        method: "PATCH",
        data: {comment}
    });
};




