class Api::UsersController < ApplicationController
    def create
        debugger
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy
        @user = User.find_by(:email)
        if @user
            @user.destroy
        end
    end

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end
