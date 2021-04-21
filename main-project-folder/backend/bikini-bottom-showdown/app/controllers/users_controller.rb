class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users
    end

    def new
        user = User.new
        render json: users
    end

    def create
        user = User.find_by(user_params) || User.new(user_params)
        if user.save
          render json: users
        else
          render json: {errors: user.errors}
        end
      end

      def edit
        user = current_user
      end

      def update
        user = User.find(params[:id])
        render json: users
      end
    
    private
    def user_params
      params.require(:user).permit(:username)
    end
end
