class Question < ApplicationRecord
    belongs_to :game

    def choices_json
        JSON.parse(self.choices)
    end
end
