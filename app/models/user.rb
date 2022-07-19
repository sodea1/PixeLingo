class User < ApplicationRecord
    # FIG VAPER
    validates :email, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    attr_reader :password
    after_intitialize :ensure_session_token

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && user.is_password?(password)
            @user
        else
            nil
        end
    end

    def is_password?(password)
        pass_obj = BCrypt::Password.new(self.password_digest)
    end

    def generate_session_token

    end
end
