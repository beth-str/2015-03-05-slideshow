require 'sqlite3'

DATABASE = SQLite3::Database.new("database/slideshow.db")


DATABASE.execute("CREATE TABLE IF NOT EXISTS slides
                (id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                body TEXT NOT NULL)")

DATABASE.results_as_hash = true