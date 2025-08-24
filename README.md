# Team Managerrr - Cyberpunk Team Management Application

A full-stack web application for managing team members with a cyberpunk-inspired UI theme. Created as part of the Full Stack Development (21CSS301T) course at SRM Institute of Science and Technology.

## Project Description

Team Managerrr is a web application that allows users to:

- Create and manage team member profiles
- Upload profile images for team members
- View all team members in a responsive grid layout
- View detailed information for individual team members

The application features a distinctive cyberpunk aesthetic with custom cursors, glowing elements, and animated backgrounds.

## Technologies Used

### Frontend
- React.js
- React Router for navigation
- Axios for API requests
- Custom CSS for styling

### Backend
- Node.js with Express
- MongoDB with Mongoose for data modeling
- Multer for file uploads

## Installation Steps

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas connection)
- Git

### Clone the Repository
```bash
git clone https://github.com/your-username/team-glue.git
cd team-glue
```

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create an 'uploads' directory for profile images:
```bash
mkdir uploads
```

4. Start the server:
```bash
npm run dev
```
The backend server will run on http://localhost:5000

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```
The application will open in your browser at http://localhost:3000

## API Endpoints

### GET /api/members
- Returns a list of all team members
- Example: `GET http://localhost:5000/api/members`

### GET /api/members/:id
- Returns details for a specific member by ID
- Example: `GET http://localhost:5000/api/members/60d21b4667d0d8992e610c85`

### POST /api/members
- Creates a new team member
- Requires form data with member details and profile image
- Example: `POST http://localhost:5000/api/members`
- Body: FormData containing:
  - name
  - rollNumber
  - year
  - degree
  - aboutProject (optional)
  - hobbies (optional)
  - certificate (optional)
  - internship (optional)
  - aboutAim (optional)
  - profileImage (file)

### PATCH /api/members/:id
- Updates an existing team member by ID
- Example: `PATCH http://localhost:5000/api/members/60d21b4667d0d8992e610c85`
- Body: FormData with fields to update

### DELETE /api/members/:id
- Deletes a team member by ID
- Example: `DELETE http://localhost:5000/api/members/60d21b4667d0d8992e610c85`

## How to Run the App

### Development Mode
1. Start MongoDB:
```bash
mongod --dbpath=/path/to/data/db
```

2. In one terminal, start the backend:
```bash
cd backend
npm run dev
```

3. In another terminal, start the frontend:
```bash
cd frontend
npm start
```

4. Open your browser and navigate to: http://localhost:3000

### Production Mode
1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Serve the built files (you can use a static server like serve):
```bash
npm install -g serve
serve -s build
```

## Team Members
- MALIKHA ARJUNAN (RA2211027010254)
- KANAK SRIVASTA (RA2211027010230)

## Course Information
- Course Code & Title: 21CSS301T – FULL STACK DEVELOPMENT
- Academic Year: 2024-25 (Even)
- Test: CLAT-2 (Online Assessment)

## Credits
The visual designs of this application were created by ＡＮＧＵＳ ＥＤＡＮＤＲＡＫＥ ＮＩＣＮＥＶＥＮ, the creator of Terminal 00 and author of Stars Bleed. The artwork used in this project was borrowed, without explicit consent, for educational purposes.

## License
This project is created for educational purposes only. Not for commercial use.