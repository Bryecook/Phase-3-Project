class Api::V1::RoundsController < ApplicationController

    def index
        rounds = Round.all
        render json: rounds
    end
    
    def create
        round = Round.create(user_id: params[:user_id], game_id: params[:game_id], score: params[:score]) 
        render json: round
    end

    def show
        round = Round.find(params[:id])
        render json: round
    end

    def update
        round = Round.update(score: params[:score])
        render json: round
    end

    def destroy
        round = Round.find(params[:id])
        round.destroy
        render json: round
    end
end
