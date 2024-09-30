import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexContainer from '../post/post_index_container';
import ProfileAndCoverPhoto from './profile_and_cover_photo';
import Intro from './intro';
import PhotosPreview from './photosPreview';
import Friends from './friends';
import PhotosTab from './photosTab';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.renderTabs = this.renderTabs.bind(this);
        this.state = {
            navigation: "posts"
        }
        this.switchTab = this.switchTab.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.userId);
    }
    

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.props.fetchPosts(this.props.userId);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };
    }

    switchTab(tabName) {
        this.setState({navigation: tabName})
    }

    renderTabs() {
        switch (this.state.navigation) {
            case "posts":
                return (
                    <>
                        <div className='profile-left'>
                            <Intro
                                user={this.props.user}
                                updateUser={this.props.updateUser}
                                openModal={this.props.openModal}
                            />
                            <PhotosPreview photos={this.props.photos} switchTab={this.switchTab}/>
                        </div>

                        <div className='profile-right'>
                            <PostIndexContainer />
                        </div>
                    </>
                )
            case "friends":
                return <div> friends </div>
            case "photos":
                return (
                    <>
                        <PhotosTab photos={this.props.photos} />
                    </>
                )
            default:
                return null;
        }
    }



    render() {
        const {updateUser, userId, fetchUser, user, openModal, currentUserId, photos, friends} = this.props;

        return(
            <>
                <NavBarContainer />

                <div className='profile-and-cover-photo'>
                    <ProfileAndCoverPhoto 
                        updateUser={updateUser} 
                        userId={userId}
                        fetchUser={fetchUser}
                        user={user}
                        openModal={openModal}
                        currentUserId={currentUserId}
                    />

                    <div className='hr'></div>
                    <div className='profile-navigation'>
                        <div
                            onClick={() => this.setState({navigation:"posts"})}
                            className={this.state.navigation === "posts" ? "active" : ""}
                        >
                            Posts
                        </div>
                        <div
                            onClick={() => this.setState({navigation:"friends"})}
                            className={this.state.navigation === "friends" ? "active" : ""}
                        >
                            Friends
                        </div>
                        <div
                            onClick={() => this.setState({navigation:"photos"})}
                            className={this.state.navigation === "photos" ? "active" : ""}
                        >
                            Photos
                        </div>
                    </div>
                </div>



                <div className='profile-body'>
                    {this.renderTabs()}
                    {/* <div className='profile-left'>

                        
                        <Intro 
                            user={user} 
                            updateUser={updateUser}
                            openModal={openModal}
                        />
                        


                        {/* <Friends friends={friends} /> */}

                        



                    {/* </div> */}

                    {/* <div className='profile-right'> */}
                        {/* <PostIndexContainer /> */}
                    {/* </div>  */}
                </div>
            </>
        );
    }
};

export default Profile;