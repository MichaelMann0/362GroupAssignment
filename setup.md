# Quick Setup Guide

## 🚀 One-Command Setup

Run these commands in order:

### 1. Install Backend Dependencies
```bash
cd 362GroupAssignment
npm install
```

### 2. Install React Dependencies
```bash
cd charleston-compass
npm install
```

### 3. Build React App
```bash
npm run build
```

### 4. Start the Server
```bash
cd ..
npm run dev
```

## 🌐 Access the Application

- **Production**: http://localhost:3000 (React app served by Express)
- **Development**: http://localhost:3001 (React dev server - run `npm start` in charleston-compass folder)

## 🔧 Development Commands

### Backend Development
```bash
cd 362GroupAssignment
npm run dev          # Start Express server with nodemon
```

### React Development  
```bash
cd charleston-compass
npm start           # Start React dev server
npm run build       # Build for production
```

## 📁 Project Structure

```
362GroupAssignment/
├── charleston-compass/     # React Frontend
│   ├── src/               # React source code
│   ├── build/             # Production build (after npm run build)
│   └── package.json       # React dependencies
├── server.js              # Express backend
├── package.json           # Backend dependencies
└── README.md              # Full documentation
```

## ✅ Verification

1. **Backend running**: Check console for "Server running on http://localhost:3000"
2. **React build exists**: Verify `charleston-compass/build/` folder exists
3. **App loads**: Visit http://localhost:3000 and see the Charleston Spring Explorer

## 🆘 Troubleshooting

- **Port conflicts**: React dev uses 3001, Express uses 3000
- **Build missing**: Run `npm run build` in charleston-compass folder
- **Dependencies**: Run `npm install` in both directories
