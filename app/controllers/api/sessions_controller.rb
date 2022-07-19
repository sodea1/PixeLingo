class Api::SessionsController < ApplicationController
    def create

    end

    def destroy
        current_user.logout
    end
end
