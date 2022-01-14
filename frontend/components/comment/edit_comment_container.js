import { connect } from "react-redux";
import { updateComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";



const mstp = (state, ownProps) => {
    return({
        comment: state.entities.comments[ownProps.commentId]
    });
};


const mdtp = (dispatch) => {
    return({
        action: (comment) => dispatch(updateComment(comment))
    });
};

export default connect(mstp, mdtp)(CommentForm);