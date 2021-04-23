class Api::V1::RoundsController < ApplicationController

    def index
        rounds = Round.all
        render json: rounds
    end
    
    def create
        round = Round.create(user_id: params[:user_id], game_id: params[:game_id], score: params[:score]) 
        render json: round
    end

<<<<<<< HEAD
    def show
        round = Round.find(params[:id])
        render json: round
    end

    def update
        round = Round.find(params[:id])
        round.update(score: params[:score])
        render json: round
    end

    def destroy
        round = Round.find(params[:id])
        round.destroy
=======
    def update
        round = Round.find(params[:id])
>>>>>>> corisbranch5
        render json: round
    end
end
