class CreateRounds < ActiveRecord::Migration[6.1]
  def change
    create_table :rounds do |t|
      t.integer :game_id
      t.integer :user_id
      t.integer :score

      t.timestamps
    end
  end
end
