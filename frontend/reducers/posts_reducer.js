import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";

const PostsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts.posts;
        case RECEIVE_POST:
            newState[action.post.post.id] = action.post.post;
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_COMMENT:
            debugger;
            newState[action.comment.post_id].comments.push(action.comment.id);
            return newState;
        default:
            return oldState;
    };
};

export default PostsReducer;
