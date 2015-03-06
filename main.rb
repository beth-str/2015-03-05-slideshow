require 'pry'
require 'sinatra'
require 'sqlite3'
require 'json'

require_relative "database/db_setup"

DATABASE = SQLite3::Database.new("database/slideshow.db")
DATABASE.results_as_hash = true


require_relative "models/slide.rb"


get "/" do 
  erb :homepage 
end

get "/nextslide" do
  
end

get "/lastslide" do
  
end

