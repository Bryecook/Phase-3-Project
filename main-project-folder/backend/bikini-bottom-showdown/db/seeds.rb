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
Question.create(difficulty: "easy", game_id: Game.first.id, body: "Where did Spongebob work?", answer: "The Krusty Krab", choices: ["The Chum Bucket", "Weenie Hut","The Krusty Krab"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What is the name of Plankton's wife?", answer: "Karen", choices: ["Karen", "Linda", "Sharon"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What instrument did Squidward play?", answer: "The Clarinet", choices: ["The Piano", "The Clarinet", "The Trumpet" ])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was Squidward's last name?", answer:"Tentacles", choices: ["He didn't have one", "Tentacles", "Temples" ])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was Spongebob's favorite hobby?", answer:"Jellyfishing", choices: ["Jellyfishing","Flipping patties", "Annoying Squidward" ])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was Patrick's last name?", answer:"Star", choices: ["Starfish", "Star", "He didn't have a last name." ])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What sound does Gary the snail make?", answer:"Meow!", choices: ["Chirp!", "Woof!",  "Meow!"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What is Plankton's full name?", answer:"Sheldon James Plankton", choices: ["Sheldon James Plankton", "Planktonella", "Dr. Peter Lankton"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "Who was Spongebob's idol?", answer:"Mermaid Man", choices: ["Mr.Krabs","Mermaid Man","Mrs.Puff"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "Where does Patrick live?", answer:"Under a rock.", choices: ["In a reef", "With Spongebob", "Under a rock."])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was Sponebob's driving school teacher name?", answer: "Mrs.Puff", choices: ["King Neptune", "Larry the Lobster", "Mrs.Puff"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "In the theme song, Spongebob is described with three adjectives. What are they?", answer: "Absorbent, yellow and porous", choices: ["Absorbent, yellow and porous", "Adventorous, yellow and poisonous", "Adventorous, yellow and porous"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What US state did Sandy come from?", answer: "Texas", choices: [ "Hawaii", "Florida", "Texas"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What does Spongebob live in?", answer:"A pineapple", choices: [ "A coconut", "A pineapple", "A seashell"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "How many arms/legs does Squidward have?", answer:"6", choices: ["8", "4", "6"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What is the name of the town Spongebob lives in?", answer:"Bikini Bottom", choices: ["Bikini Bottom","Flipflop Falls","Snorkel City" ])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What was The Chum Bucket's most famous menu item?", answer:"The Chum Burger", choices: ["Chum Fries", "Chum Fries", "Chum Burger"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What color is Spongebobs tie", answer:"Red", choices: ["Black","Yellow", "Red"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "Who tries to get Mr.Krabs' recipe?", answer:"Plankton", choices: ["Spongebob", "Squidward", "Plankton"])
Question.create(difficulty: "easy", game_id: Game.first.id, body: "What kind of house does Squidward live in?", answer: "An Easter Island Head", choices: ["An Easter Island Head","A Bucket", "Under a rock"])



#create choice


#add column on migrate file-- need be an array 




#questions game2 hard

Question.create(difficulty: "hard", game_id: Game.second.id, body: "How did Spongebob get his Pineapple home?", answer: "It rolls off of a boat", choices:["Supermarket", "It rolls off of a boat", "Sandy brings it from Texas"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What Utensil doe Spongebob use the most at his job?", answer: "A spatula", choices:["A sponge", "A plunger", "A spatula"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "How much does Patrick weigh?", answer:"2 ounces", choices:["2 ounces", "14 lbs", "2kg"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "When is the official annoy Squidward day?", answer:"The 15th of every month", choices:["The 17th of every month", "The 15th of every month", "The 7th of every month"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What was the name of Squidward's arch enemy?", answer:"Squilliam Fancyson", choices:["Squilliam Fancyson", "Patrick Star", "Mr. Krabs"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What was one thing Patrick was a professional at?", answer:"Doing absolutely nothing.", choices:["Building sandcastles.", "Doing absolutely nothing.", "Playing the clarinet."])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "Who was the only character who wore shoes?", answer:"Spongebob", choices:["Sandy", "Squidward", "Spongebob"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "Who takes the guests coats?", answer:"Gary", choices:["Gary", "Patrick", "Sandy"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "In Sailor Mouth, how many bad words are there?", answer:"13", choices:["7", "13", "17"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What color is the flying dutchman?", answer:"Green", choices:["Green", "Red", "Blue"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What color are the flowers on Patrick's shorts?", answer: "Purple", choices: ["Yellow", "Purple", "Blue"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "In the episode Doing Time, who gets sent to jail?", answer: "Mrs.Puff", choices: ["Squidward", "Mrs.Puff", "Plankton"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "Mr. Krab loves two things the most... What are they?", answer:"Money and Pearl", choices: ["The Krusty Krab and Doodle", "Money and Pearl", "Spongebob and Squidward"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What is the name of the Snail food Gary ate?", answer:"Snail-po", choices: ["Snail-po", "Snail smoothies", "Snail fries"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "Which character is a lobster?", answer:"Larry", choices: ["Doodblebob", "Larry", "Jim"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "In Jellyfish Hunters, SpongeBob names every jellyfish he catches, but what did he name the very last one in Jellyfish Fields after catching it?", answer:"Friend", choices: ["Jellyfish 1", "Friend", "Bubbles"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What shape was Spongebob's mom", answer:"Circle", choices: ["Star", "Oval", "Circle"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What is Sandy the best at?", answer:"Karate", choices: ["Karate", "Jellyfishing", "Swimming" ])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What does Squidward paint pictures of the most?", answer:"Himself", choices: ["Squilliam", "Clarinets", "Himself"])
Question.create(difficulty: "hard", game_id: Game.second.id, body: "What's the name of the place Spongebob and Patrick go jellyfishing?", answer:"Jellyfish Fields", choices: ["Jellyfish Fields", "Mrs.Puufs Boating School", "The Krusty Krab" ])




#rounds
Round.create(game_id: Game.first.id, user_id: User.first.id, score: 10 )
Round.create(game_id: Game.second.id, user_id: User.second.id, score: 20 )

