require 'rubygems'
require 'bundler/setup' #instructs this file to look for the files that it needs to run
require 'bcrypt'
require 'pry'
require 'sinatra'
require 'sqlite3'
require 'json'

require 'sinatra/activerecord'

configure :development do
  set :database, {adapter: "sqlite3", database: "database/slideshow.db"}
end

require_relative "database/db_setup"

DATABASE = SQLite3::Database.new("database/slideshow.db")
# DATABASE.results_as_hash = true

require_relative "models/slide.rb"
require_relative "models/user.rb"

configure do
  enable :sessions
end

before "/1" do
  if session[:user_id]
  else
    redirect "/login"
  end
end

get "/" do 
  erb :homepage
end

get "/login" do
  write unless 
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
      @error = "Invalid email/password combination"
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

get "/:id" do 
  id = params[:id].to_i
  get_slide = Slide.where({"id" => id})
  get_slide.to_json
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

