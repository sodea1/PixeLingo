class ApplicationController < ActionController::Base
    # CL(CUBED)R
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login

    end

    def logout

    end

    def logged_in?
        !!current_user
    end
end
