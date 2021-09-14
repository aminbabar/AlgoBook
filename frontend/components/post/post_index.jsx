import React from "react"
import PostIndexItem from "./post_index_item";
import CreatePostContainer from "./create_post_container";
import CreatePost from "./create_post";

class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    };

    render() {

        let posts = this.props.posts.reverse();
        return (
            <div className="newsfeed-middle">
                <CreatePost />
                <ul>
                    {posts.map((post) => {
                        return (  <PostIndexItem
                                        post={post} 
                                        deletePost={this.props.deletePost}
                                        currentUserId={this.props.currentUserId}
                                        key={post.id}
                                    />
                            );
                    })}
                </ul>
            </div>
        );
    };
};

export default PostIndex;