class Api::V1::UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    end

    def create
        user = User.create(username: params[:username]) 
        render json: user
    end

<<<<<<< HEAD
    def show
        user = User.find(params[:id])
        render json: user
    end

      def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end
=======
    
>>>>>>> corisbranch5
end
