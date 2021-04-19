class RoundsController < ApplicationController
    def index
        rounds = Round.all 
        render json :rounds
    end
end
