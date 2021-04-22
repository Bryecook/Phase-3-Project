class Api::V1::RoundsController < ApplicationController
    def index
        rounds = Round.all
        render json: rounds
    end
    
    def create
        round = Round.create(user_id: )
    end 
end
