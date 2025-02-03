## Description
This project is a public API that returns basic information including a registered email address, the current datetime, and the GitHub URL of the project's codebase.

## Setup Instructions

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
3.Start the server
   npm start

##API Documentation

Endpoint

GET /

Response Format (200 OK)

{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}


BACKLINK
-https://hng.tech.hire/node.js-developers

Deployment

The API is deployed to a publicly accessible endpoint: hngapi-s1ka.onrender.com