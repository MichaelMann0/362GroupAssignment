# Charleston Compass - Full Stack Application

A modern web application for exploring Charleston attractions, restaurants, and events with a beautiful React frontend and Node.js/Express backend.

## 🏗️ Project Structure

```
362GroupAssignment/
├── charleston-compass/          # React Frontend Application
│   ├── public/                  # Static assets
│   ├── src/                     # React source code
│   │   ├── components/         # React components
│   │   ├── App.js              # Main React app
│   │   └── App.css             # Main styles
│   └── package.json            # React dependencies
├── public/                      # Backend static files
├── views/                       # EJS templates (legacy)
├── server.js                    # Express server
└── package.json                 # Backend dependencies
```

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### 1. Install Dependencies

**Backend Dependencies:**
```bash
cd 362GroupAssignment
npm install
```

**React Frontend Dependencies:**
```bash
cd charleston-compass
npm install
```

### 2. Build the React Application

```bash
cd charleston-compass
npm run build
```

This creates a production build in the `build/` directory that the Express server will serve.

### 3. Start the Backend Server

```bash
cd 362GroupAssignment
npm run dev
```

The server will start on `http://localhost:3000`

## 🔧 Development Workflow

### For React Development (Frontend)

1. **Start React development server:**
   ```bash
   cd charleston-compass
   npm start
   ```
   This runs the React app on `http://localhost:3001` with hot reloading.

2. **Make changes to React components:**
   - Edit files in `src/components/`
   - Changes will automatically reload in the browser

3. **Build for production:**
   ```bash
   npm run build
   ```

### For Backend Development

1. **Start the Express server:**
   ```bash
   cd 362GroupAssignment
   npm run dev
   ```

2. **The server serves:**
   - React app at the root path (`/`)
   - API endpoints at `/api/*`
   - Static files from `public/`

## 🌐 How Frontend and Backend Work Together

### Architecture Overview

```
┌─────────────────┐    HTTP Requests    ┌─────────────────┐
│   React App     │ ──────────────────► │  Express Server │
│   (Frontend)    │                     │   (Backend)     │
└─────────────────┘                     └─────────────────┘
         │                                       │
         │                                     │
         │              API Calls              │
         │ ──────────────────────────────────► │
         │                                     │
         │              JSON Data               │
         │ ◄────────────────────────────────── │
```

### Backend Server (`server.js`)

The Express server handles:

1. **Static File Serving:**
   - Serves the built React app from `charleston-compass/build/`
   - Serves static assets from `public/`

2. **API Routes:**
   - `/api/attractions` - Get attraction data
   - `/api/restaurants` - Get restaurant data  
   - `/api/events` - Get event data

3. **React App Routing:**
   - All non-API routes serve the React app
   - React Router handles client-side routing

### React Frontend

The React app includes:

- **Components:**
  - `App.js` - Main application component
  - `SearchBox.js` - Search functionality
  - `CategoryPills.js` - Category filtering
  - `ResultsArea.js` - Display search results
  - `Sidebar.js` - Weather, itinerary, tips, stats
  - `FloatingShapes.js` - Background animations

- **Features:**
  - Search and filter attractions, restaurants, events
  - Build custom itineraries
  - Responsive design matching the original compass.html
  - Interactive animations and hover effects

## 📁 Key Files Explained

### Backend Files

- **`server.js`** - Main Express server configuration
- **`package.json`** - Backend dependencies (Express, Nodemon)
- **`public/`** - Static files served by Express
- **`views/`** - EJS templates (legacy, not used by React app)

### React Files

- **`charleston-compass/src/App.js`** - Main React application
- **`charleston-compass/src/App.css`** - Global styles (copied from compass.html)
- **`charleston-compass/src/components/`** - Individual React components
- **`charleston-compass/package.json`** - React dependencies

## 🛠️ Development Commands

### Backend Commands
```bash
# Install dependencies
npm install

# Start development server with auto-restart
npm run dev

# Start production server
node server.js
```

### React Commands
```bash
# Navigate to React directory
cd charleston-compass

# Install dependencies
npm install

# Start development server (with hot reload)
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🔄 Full Development Setup

1. **Terminal 1 - Backend:**
   ```bash
   cd 362GroupAssignment
   npm run dev
   ```

2. **Terminal 2 - React Development:**
   ```bash
   cd 362GroupAssignment/charleston-compass
   npm start
   ```

3. **Access the application:**
   - React dev server: `http://localhost:3001`
   - Production build: `http://localhost:3000`

## 🎨 Design Implementation

The React app replicates the exact design from `compass.html`:

- **Responsive grid layout** with main content and sidebar
- **Floating background shapes** with CSS animations
- **Glassmorphism effects** with backdrop blur
- **Interactive cards** with hover animations
- **Category filtering** with pill-style buttons
- **Itinerary management** with add/remove functionality
- **Weather widget** and **quick tips**
- **Statistics tracking** for user engagement

## 🚀 Deployment

### Production Build Process

1. **Build React app:**
   ```bash
   cd charleston-compass
   npm run build
   ```

2. **Start production server:**
   ```bash
   cd 362GroupAssignment
   node server.js
   ```

The built React app will be served from the Express server at `http://localhost:3000`.

## 🔧 Troubleshooting

### Common Issues

1. **Port conflicts:**
   - React dev server uses port 3001
   - Express server uses port 3000
   - Make sure ports are available

2. **Build issues:**
   - Ensure you've run `npm run build` in the React directory
   - Check that the `build/` folder exists in `charleston-compass/`

3. **Dependencies:**
   - Run `npm install` in both directories
   - Clear `node_modules` and reinstall if needed

### Getting Help

- Check the console for error messages
- Ensure all dependencies are installed
- Verify that both servers are running on different ports
- Make sure the React build exists before starting the Express server

## 📝 Notes

- The React app is a complete recreation of the `compass.html` functionality
- All styling and animations are preserved from the original design
- The backend provides API endpoints for future database integration
- The application is fully responsive and works on mobile devices