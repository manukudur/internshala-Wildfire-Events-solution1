1. Make sure that Mongodb is running.
2. Open Command_Prompt/Terminal and navigate to this folder.
3. run: "npm install".
4. After installation run: "npm run server" or "node server.js".
5. Use Postman to perform Read and Create operation. (http://localhost:3000/event)
6. Use Postman to perform Update and Delete operation. (http://localhost:3000/event/:id)


================================================================================
{
"place" : "MongoTree",
"type": "resort",
"cost" : { "actual_cost" : 1200, "discount_cost": 999},
"itinerary" : { 
	"welcome_drinks" : "yes",
	"breakfast" : ["egg", "bread",  "jam", "south breakfast", "coffee/tea"],
	"games": ["table tennis", "foot ball", "dart games"],
	"watergames": "yes",
	"Day_1": [ "sightseeing zoo", "mysore palace"],
	"Day_2": ["chamundeshwari hills", "KRS dam", "brundhavan gardens"]
}
}
================================================================================