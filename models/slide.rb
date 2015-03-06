#---------------------------------------------------------
# Class: Slide
# Facilitates interaction with slide database
#
# Attributes:
# @id              - Integer (Primary Key - automatically assigned)
# @title           - String: first name of guest
# @body            - String: last name of guest
#
# Public Methods:
# .all  
#---------------------------------------------------------

class Slide
  
  attr_reader :id
  attr_accessor :title, :body
  
  def initialize(options)
    @id      = options["id"]
    @title   = options["title"]
    @body    = options["body"]
  end
  

  #---------------------------------------------------------
  # Public: .where_id_is
  # Searches the Slide class for a single id
  #
  # Parameter: Integer: id
  #
  # Returns: Single Slide object with matching id (passed as argument)
  #---------------------------------------------------------
  def self.where_id_is(id)
    sql_query = "SELECT * FROM slides WHERE id = '#{id}'"

    x = DATABASE.execute(sql_query)
    results = Guest.new(x[0])
    return results
  end


  #---------------------------------------------------------
  # Public: .all
  # Fetches all slides
  #
  # Returns: An Array of Slide objects 
  #---------------------------------------------------------
  def self.all
    sql_query = "SELECT * FROM slides"

    results = DATABASE.execute(sql_query)
    @results_as_objects = []
      results.each do |r|
        @results_as_objects << Slide.new(r)
      end
      results_as_objects = @results_as_objects
      return results_as_objects
  end

end
