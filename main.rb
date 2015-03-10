require 'rubygems'
require 'bundler/setup' #instructs this file to look for the files that it needs to run
require 'pry'
require 'sinatra'
require 'sqlite3'
require 'json'

require 'sinatra/activerecord'

set :database, {adapter: "sqlite3", database: "database/slideshow.db"}

require_relative "database/db_setup"

DATABASE = SQLite3::Database.new("database/slideshow.db")
# DATABASE.results_as_hash = true

require_relative "models/slide.rb"


get "/" do 
  erb :homepage
end

get "/1" do 
  get_slide = Slide.where({id: 1})
  get_slide.to_json
end

get "/2" do 
  get_slide = Slide.where({id: 2})
  get_slide.to_json
end

get "/3" do 
  get_slide = Slide.where({id: 3})
  get_slide.to_json
end

get "/4" do 
  get_slide = Slide.where({id: 4})
  get_slide.to_json
end

get "/5" do 
  get_slide = Slide.where({id: 5})
  get_slide.to_json
end

get "/6" do 
  get_slide = Slide.where({id: 6})
  get_slide.to_json
end

get "/7" do 
  get_slide = Slide.where({id: 7})
  get_slide.to_json
end

get "/8" do 
  get_slide = Slide.where({id: 8})
  get_slide.to_json
end


#all slides
get "/allslides" do
  all_slides = Slide.all
  all_slides_hash.to_json
end
#
# get "/prev/id/:id" do
#   prev_slide = Slide.where_id_is(:id - 1)
#   prev_slide_hash = all_slides.map {|s| s.to_hash}
#   prev_slide_hash.to_json
# end

