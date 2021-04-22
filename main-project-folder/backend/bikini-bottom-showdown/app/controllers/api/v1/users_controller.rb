class Api::V1::UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    end

    def create
        user = User.create(username: user[:username]) 
          render json: user
      end


end
