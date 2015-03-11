class User < ActiveRecord::Base
  include BCrypt

  # def password
  #   @password ||= Password.new(password_hash)
  # end
  #
  # def password=(new_password)
  #   @password = Password.create(new_password)
  #   self.password_hash = @password
  # end
  #
  # def validate
  #   before_save { self.email = email.downcase }
  #   validates :name, presence: true, length: { maximum: 50 }
  #   VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  #   validates :email, presence: true, length: { maximum: 255 },
  #   format: { with: VALID_EMAIL_REGEX },
  #   uniqueness: { case_sensitive: false }
  #   has_secure_password
  # end

end


