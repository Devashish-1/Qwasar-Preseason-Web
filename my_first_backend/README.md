# My_First_backend
***

## Task
Create a backend app with light web framework (javascript you will use express, ruby you will use sinatra, python you will use flask)

You don't need to create a database, just store the information hard coded inside your file.

In order to find all the information needed, you will have to search online. Wikipedia, Google and Fan's website will have all the information you need for this project! :)
## Description
The provided code sets up a basic web server using the Express.js framework in Node.js. Here's a comprehensive description:

The code begins by importing the necessary modules: express for building the web server and express-basic-auth for implementing basic authentication. It creates an instance of the Express application and sets up a server to listen on port 8080.

The server has several endpoints, each serving specific information related to Frank Sinatra:

Random Song Endpoint (/):

Responds with a randomly selected song from a predefined list of Frank Sinatra's songs. This creates a dynamic experience for users visiting the root endpoint.
Birth Date Endpoint (/birth_date):

Provides Frank Sinatra's birth date as "December 12, 1915."
Birth City Endpoint (/birth_city):

Offers information about Frank Sinatra's birthplace as "Hoboken, New Jersey."
Wives Endpoint (/wives):

Lists the names of Frank Sinatra's wives: Nancy Barbato, Ava Gardner, Mia Farrow, and Barbara Marx.
Picture Endpoint (/picture):

Redirects to a Wikipedia page containing an image of Frank Sinatra. This provides a visual representation of the artist.
Public Page Endpoint (/public):

Returns a message indicating that everybody can see this page. This is a straightforward public endpoint accessible to all users.
Protected Page Endpoint (/protected):

Utilizes basic authentication to restrict access. If the correct username and password (admin/admin) are provided in the request header, it responds with "Welcome, authenticated client." Otherwise, it returns a 401 Not Authorized status and prompts the user for authentication.
Overall, this code creates a server offering a mix of public and restricted endpoints, providing information about Frank Sinatra and showcasing basic authentication functionality. Users can access public information openly, while certain endpoints require proper authentication for access.

## Installation
TODO - by executing this command 
Install Node.js:
If you don't have Node.js installed, download and install it from https://nodejs.org/. Node.js comes with npm (Node Package Manager), which you'll use to install the required packages.

Create a Project Folder:
Create a new folder for your project and navigate to it using your terminal or command prompt.

Initialize a Node.js Project:
Run the following command to initialize a new Node.js project. This will create a package.json file.
npm init -y
Install Express and express-basic-auth:
Run the following command to install the required packages (express and express-basic-auth).
npm install express express-basic-auth
Create an index.js File:
Copy and paste your provided code into an index.js file within your project folder.

Run the Server:
Execute the following command to start your server.
node index.js
Test the Endpoints:
Open your browser or use a tool like curl or Postman to test the different endpoints.

http://localhost:8080/ (random song)
http://localhost:8080/birth_date
http://localhost:8080/birth_city
http://localhost:8080/wives
http://localhost:8080/picture
http://localhost:8080/public
http://localhost:8080/protected (requires basic authentication)
For the protected route, you can use the credentials "admin:admin" when prompted.


## Usage
Run the server: node index.js
Access various endpoints in a browser or using tools like curl or Postman.
Example:

Random Song: http://localhost:8080/
Birth Date: http://localhost:8080/birth_date
Protected Page (with basic auth): http://localhost:8080/protected

###The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>