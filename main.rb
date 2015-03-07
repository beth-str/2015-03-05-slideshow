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


get "/1" do 
  get_slide = Slide.where_id_is(1)
  get_slide.to_json
end

get "/2" do 
  get_slide = Slide.where_id_is(2)
  get_slide.to_json
end


#all slides
get "/allslides" do
  all_slides = Slide.all
  all_slides_hash = all_slides.map {|s| s.to_hash}
  all_slides_hash.to_json
end
#
# get "/prev/id/:id" do
#   prev_slide = Slide.where_id_is(:id - 1)
#   prev_slide_hash = all_slides.map {|s| s.to_hash}
#   prev_slide_hash.to_json
# end

