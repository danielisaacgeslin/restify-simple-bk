#Instalation
* npm install

#Run the App
* npm start

#Develop
* terminal 1 : tsc -w
* terminal 2: npm start

#MongoDB Endpoints
* `http://localhost:3000`/api/article `(GET - filter with query string)`
* `http://localhost:3000`/api/article `(POST - send data on body)`
* `http://localhost:3000`/api/article `(PUT - send data on body, filter with query string)`
* `http://localhost:3000`/api/article `(DELETE - filter with query string)`

#DynamoDB Endpoint

#AWS SDK
* `http://localhost:3000`/api/music `(GET all items)`
* `http://localhost:3000`/api/music `(POST - send data on body <Artist=string&SongTitle=string> )`
* `http://localhost:3000`/api/music/create-table `(POST - creates music table)`

#Dynamoose
* `http://localhost:3000`/api/dynamoose `(GET all items)`
* `http://localhost:3000`/api/dynamoose?artist=string&songTitle=string `(POST - send data on body <Artist=string&SongTitle=string>)`