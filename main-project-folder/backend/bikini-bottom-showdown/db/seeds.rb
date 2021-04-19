# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Game.destroy_all
Round.destroy_all
Question.destroy_all

#games
Game.create(difficulty: "easy")
Game.create(difficulty: "hard")


#users
User.create(username: "Cori")
User.create(username: "Bryan")

#questions #game1 easy
Question.create(difficulty: "easy", game_id: Game.first.id, body: "Where did Spongebob work?", answer: "The Krusty Krab")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What is the name of Plankton's wife?", answer: "Karen")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What instrument did Squidward play?", answer: "The Clarinet")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was Squidward's last name?", answer:"Tentacles")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was Spongebob's favorite hobby?", answer:"Jellyfishing")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was Patrick's last name?", answer:"Star")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What sound does Gary the snail make?", answer:"Meow!")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What is Plankton's full name?", answer:"Sheldon James Plankton")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "Who was Spongebob's idol?", answer:"Mermaid Man")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "Where does Patrick live?", answer:"Under a rock.")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was Sponebob's driving school teacher name?", answer: "Mrs.Puff")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "In the theme song, Spongebob is described with three adjectives. What are they?", answer: "Absorbent, yellow and porous")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What US state did Sandy come from?", answer: "Texas")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What does Spongebob live in?", answer:"A pineapple")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "How many arms/legs does Squidward have?", answer:"6")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What is the name of the town Spongebob lives in?", answer:"Bikini Bottom")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was The Chum Bucket's most famous menu item?", answer:"The Chum Burger")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What color is Spongebobs tie", answer:"Red")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "Who tries to get Mr.Krabs' recipe?", answer:"Plankton")
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What kind of house does Squidward live in?", answer: "An Easter Island Head")







#questions game2 hard

Question.create(difficulty: "hard", game_id: Game.second.id, body: "What color are the flowers on Patrick's shorts?", answer: "Purple")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "In the episode Doing Time, who gets sent to jail?", answer: "Mrs.Puff")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "Mr. Krab loves two things the most... What are they?", answer:"Money and Pearl")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What is the name of the Snail food Gary ate?", answer:"Snail-po")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "Which character is a lobster?", answer:"Larry")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "In Jellyfish Hunters, SpongeBob names every jellyfish he catches, but what did he name the very last one in Jellyfish Fields after catching it?", answer:"Friend")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What shape was Spongebob's mom", answer:"Circle")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What is Sandy the best at?", answer:"Karate")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What does Squidward paint pictures of the most?", answer:"Himself")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What's the name of the place Spongebob and Patrick go jellyfishing?", answer:"Jellyfish Fields")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "How did Spongebob get his Pineapple home?", answer: "It rolls off of a boat")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What Utensil doe Spongebob use the most at his job?", answer: "A spatula")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "How much does Patrick weigh?", answer:"2 ounces")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "When is the official annoy Squidward day?", answer:"The 15th of every month")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What was the name of Squidward's arch enemy?", answer:"Squilliam Fancyson")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What was one thing Patrick was a professional at?", answer:"Doing absolutely nothing.")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "Who was the obly character who wore shoes?", answer:"Spongebob")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "Who takes the guests coats?", answer:"Gary")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "In Sailor Mouth, how many bad words are there?", answer:"13")
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What color is the flying dutchman?", answer:"Green")



#rounds
Round.create(game_id: Game.first.id, user_id: User.first.id, score: 10 )
Round.create(game_id: Game.second.id, user_id: User.second.id, score: 20 )

