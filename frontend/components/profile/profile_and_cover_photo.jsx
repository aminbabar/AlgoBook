import React from 'react';


class ProfileAndCoverPhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null
            // profilePhotoFile: null
        }


        // this.handleCoverPhotoSubmit = this.handleCoverPhotoSubmit.bind(this);
        // this.handleProfilePhotoSubmit = this.handleProfilePhotoSubmit.bind(this);
        this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
    }

    handlePhotoSubmit(fileType) {
        return (e) => {
            const formData = new FormData();
            this.setState({ photoFile: e.currentTarget.files[0] }, () => {
    

                // fileType = fileType == 'profilePhotoFile' ? 'profile_photo' : 'cover_photo';

                // only send along the photo if the user uploads it. 
                if (this.state.photoFile) {
                    formData.append(`user[${fileType}]`, this.state.photoFile)
                }
                formData.id = this.props.userId;
                this.props.updateUser(formData);
            })
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }


    render() {
        const profilePhoto = this.props.user?.profilePhoto;
        const coverPhoto = this.props.user?.coverPhoto;
        console.log(coverPhoto);
        return (
            <>
                <div className='cover-photo'>
                    <img src={coverPhoto} />
                    <input type="file" onChange={this.handlePhotoSubmit('cover_photo')}/>

                </div>

                <div className='profile-photo'>
                    <img src={profilePhoto} />
                    <input type="file" onChange={this.handlePhotoSubmit('profile_photo')}/>
                </div>
            </>
        );
    }
}


export default ProfileAndCoverPhoto;



