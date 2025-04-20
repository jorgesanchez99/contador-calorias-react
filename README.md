# Calorie Tracker

This project is a **Calorie Tracker** application built with **React**, **TypeScript**, and **Vite**. It allows users to track their daily calorie intake and activities, providing a simple and interactive interface.

## Features

- **Add Activities**: Users can log activities with their respective calorie values.
- **Display Calories**: A summary of total calories consumed and burned is displayed.
- **Category Management**: Activities are categorized for better organization.
- **State Management**: Uses React's Context API and Reducers for state management.

## Project Structure

The project is organized as follows:

```
src/
  components/
    ActivityList.tsx       // Displays the list of activities
    CaloriesDisplay.tsx    // Shows the total calories
    CalorieTracker.tsx     // Main component for tracking
    Form.tsx               // Form to add new activities
  data/
    categories.ts          // Predefined activity categories
  reducers/
    activity-reducer.ts    // Reducer for managing activity state
  types/
    index.ts               // Type definitions
  utils/
    index.ts               // Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jorgesanchez99/contador-calorias-react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd contador-calorias-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
```

The build output will be in the `dist/` directory.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Vite**: For fast development and build tooling.

