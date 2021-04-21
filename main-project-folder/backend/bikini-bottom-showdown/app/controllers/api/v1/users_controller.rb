class Api::V1::UsersController < ApplicationController
    def index
<<<<<<< HEAD
        users = User.all
        render json: users
    end
=======
        user = User.all
        render json: user
    end

    def create
        user = User.create(username: user[:username]) 
          render json: user
      end


>>>>>>> corisbranch2
end
