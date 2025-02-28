# Collab-Editor
A Real-time Collaborative Editor using Node.js, WebSockets, and React

## Overview

Collab-Editor is a real-time collaborative editor that allows multiple users to edit a document simultaneously. This project uses Node.js, WebSockets, and React to provide a seamless collaborative experience.

## Features

* Real-time collaborative editing
* Runs locally on your machine
* Supports multiple users

## Technologies Used

* Node.js
* WebSocket
* React

## Dependencies

* express
* ws
* cors

## Getting Started

To run the Collab-Editor, follow these steps:

1. Install dependencies: npm install express ws cors
2. Start the server: npm start server.js
3. Open multiple browser windows and navigate to http://localhost:3000 to start collaborating

## How it Works

The Collab-Editor uses WebSockets to establish a real-time connection between the client and server. When a user makes changes to the document, the changes are broadcasted to all connected clients using WebSockets. The React frontend updates the document in real-time, providing a seamless collaborative experience.
