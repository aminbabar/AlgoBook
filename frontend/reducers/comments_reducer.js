import { RECEIVE_ALL_COMMENTS, REMOVE_COMMENT, RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";

const CommentsReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments.comments;
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.commentId]
            return newState;
        case RECEIVE_ALL_POSTS:
            Object.assign(newState, action.posts.comments);
            return newState;
        default:
            return oldState;
    };
};


export default CommentsReducer;