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
     t.text :username
     t.text :password
   end
end


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
#                 username TEXT NOT NULL,
#                 password TEXT NOT NULL)")
#
#
#
#
# DATABASE.results_as_hash = true