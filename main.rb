require 'rubygems'
require 'bundler/setup' #instructs this file to look for the files that it needs to run
require 'bcrypt'
require 'pry'
require 'sinatra'
configure :development do
  require 'sqlite3'
end
require 'json'

require 'sinatra/activerecord'

configure :production do
 db = URI.parse(ENV['DATABASE_URL'])
   ActiveRecord::Base.establish_connection(
     :adapter => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
     :host => db.host,
     :username => db.user,
     :password => db.password,
     :database => db.path[1..-1],
     :encoding => 'utf8'
 )
end


configure :development do
  set :database, {adapter: "sqlite3", database: "database/slideshow.db"}
end

require_relative "models/slide.rb"
require_relative "models/user.rb"
require_relative "database/db_setup"

configure :development do
  DATABASE = SQLite3::Database.new("database/slideshow.db")
end
# DATABASE.results_as_hash = true


configure do
  enable :sessions
end

# before "/" do
#   # if session[:user_id]
#   # else
#   #   redirect "/login"
#   # end
# end

get "/" do
  erb :homepage
end

get "/slides" do 
  erb :slideshow
end

get "/slides/:id" do 
  id = params[:id].to_i
  get_slide = Slide.where({"id" => id})
  get_slide.to_json
end

get "/login" do
  erb :login
end

get "/logout" do
  session.clear
  redirect "/"
end

post "/login_verify" do
  if User.find_by_username(params["username"]) != nil
    user = User.find_by_username(params["username"])
    # if BCrypt::Password.create(params[:password]) == user.password #based on a string
    if BCrypt::Password.new(user.password) == params[:password] #based on a hash or a string
      session[:user_id] = user.id
      redirect "/"
    else
      @error = "Invalid email/password combination <br>Please try again"
      session[:error] = @error
      redirect "/login"
    end
  else
    params["password"] = BCrypt::Password.create(params[:password])
    user = User.create(username: params["username"], password: params["password"])
    session[:user_id] = user.id
  end
  redirect "/"
end

get "/quiz" do
  erb :game
end

#all slides
get "/allslides" do
  all_slides = Slide.all
  all_slides_hash.to_json
end

# def current_user
#   if session[:user_id]
#     @current_user = User.find(session[:user_id])
#   else redirect "/login"
#   end
# end
