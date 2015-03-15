require 'sqlite3'

# copy once for each table: (team_id is foreign key)

unless ActiveRecord::Base.connection.table_exists?(:slides)
   ActiveRecord::Base.connection.create_table :slides do |t|
     t.text :title
     t.text :body
   end
end

unless ActiveRecord::Base.connection.table_exists?(:users)
   ActiveRecord::Base.connection.create_table :users do |t|
     t.text :name
     t.text :email
     t.text :password
   end
end


# Slide.create([{title: "State Name", body: "'Minnesota' is the Dakota word for <br>'clear blue water'"},
#                {title: "Admission to Statehood", body: "Minnesota was admitted as the 32nd State in 1858"},
#                {title: "State Motto", body: "L'Étoile du Nord: <br>The Star of the North"},
#                {title: "State Nickname", body: "Land of 10,000 Lakes"},
#                {title: "Share borders with...", body: "North and South Dakota, Iowa, Wisconsin and Canada"},
#                {title: "State Bird", body: "The Loon"},
#                {title: "State Flower", body: "The Showy Lady's Slipper"},
#                {title: "State Capital", body: "Saint Paul"}])



# DATABASE = SQLite3::Database.new("database/slideshow.db")
#
#
# DATABASE.execute("CREATE TABLE IF NOT EXISTS slides
#                 (id INTEGER PRIMARY KEY,
#                 title TEXT NOT NULL,
#                 body TEXT NOT NULL)")
#
# DATABASE.execute("CREATE TABLE IF NOT EXISTS users
#                 (id INTEGER PRIMARY KEY,
#                 name TEXT NOT NULL,
#                 email TEXT NOT NULL,
#                 password TEXT NOT NULL)")
#
#
#
#
# DATABASE.results_as_hash = true