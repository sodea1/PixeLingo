class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if (@user)
            login(@user)
        else
            render json: ['Invalid credentials'], status: 401
        end
    end

    def destroy
        current_user.logout
    end
end
