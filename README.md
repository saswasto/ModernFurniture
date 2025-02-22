# Furniture Website

This is a MERN (MongoDB, Express, React, Node.js) application for managing a furniture store. It allows users to view, add, update, and delete furniture items.

## Project Structure

```
furniture-website
├── backend
│   ├── controllers
│   │   └── furnitureController.js
│   ├── models
│   │   └── furnitureModel.js
│   ├── routes
│   │   └── furnitureRoutes.js
│   ├── app.js
│   └── package.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── FurnitureItem.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd furniture-website
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node app.js
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

### Usage

- The application allows users to view a list of furniture items.
- Users can add new furniture items, update existing ones, and delete items as needed.

### Future Additions

- Implement user authentication.
- Add a shopping cart feature.
- Enhance the UI with more styling and components.

## License

This project is licensed under the MIT License.