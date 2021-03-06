class Api::UsersController < ApplicationController
    before_action :ensure_logged_in, except: [:create]

    def search
        query = params[:query].downcase
        @users = User
                    .all
                    .where("lower(CONCAT_WS(' ', fname, lname)) LIKE ?", "%#{query}%")
                    # .order("id ASC")
                    .limit(8)
        render :search
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def update
        @user = User.find_by(id: params[:id])
        if @user.id == current_user.id && @user.update(user_params)
            render :show
        else
            render json: @user.errors, status: 422
        end
    end


    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname, :city, :work, :profile_photo, :cover_photo, :bio, :education, :portfolio)
    end

end
