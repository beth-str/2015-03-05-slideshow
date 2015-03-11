require 'rubygems'
require 'bundler/setup' #instructs this file to look for the files that it needs to run
require 'bcrypt'
require 'pry'
require 'sinatra'
require 'sqlite3'
require 'json'

require 'sinatra/activerecord'

set :database, {adapter: "sqlite3", database: "database/slideshow.db"}

enable :sessions

require_relative "database/db_setup"

DATABASE = SQLite3::Database.new("database/slideshow.db")
# DATABASE.results_as_hash = true

require_relative "models/slide.rb"
require_relative "models/user.rb"


get "/" do 
  erb :homepage
end

get "/login" do
  erb :login
end

post "/login_verify" do
  binding.pry
  if user = User.find_by({username => "username"})
    if BCrypt::Password.create(params[:password]) == params[:password]
      session[:user_id] = user.id
      redirect "/"
    else
      @error = "Password incorrect"
    end
  else
    params["password"] = BCrypt::Password.create(params[:password])
    User.create(username: params["username"], password: params["password"])
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
#   @current_user = User.find(session[:user_id])
#   else redirect "/login"
# end
# end
#
