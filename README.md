# Action Plan

Action Plan is a lightweight React application for turning a list of goals into manageable actions. Add an action, edit it as your plan changes, or remove it when it is no longer needed.

## Features

- Add actions from a modal form
- Validate that an action is not empty before saving
- Edit existing actions
- Delete actions
- Display the current number of actions
- Responsive utility-based styling with Tailwind CSS

## Tech stack

- React 19
- Create React App
- Tailwind CSS
- React Testing Library

## Prerequisites

- Node.js 18 or later
- npm

## Getting started

1. Clone the repository and move into the project directory:

   ```bash
   git clone <repository-url>
   cd action-plan
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Select **Add Action**.
2. Enter a description for the action.
3. Select **Save** to add it to the plan.
4. Use **Edit** to update an existing action.
5. Use **Delete** to remove an action.

Actions are currently stored in React state, so they are cleared when the page is refreshed.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode with live reloading.

### `npm test`

Runs the test suite in interactive watch mode.

### `npm run build`

Creates an optimized production build in the `build` directory.

### `npm run eject`

Copies the Create React App configuration and dependencies into the project. This is a one-way operation and is not required for normal development.

## Project structure

```text
public/                 Static assets and the application shell
src/
  components/
    AddTask.jsx         Add and edit action modal
    Task.jsx            Individual action row
  App.js                Main application state and layout
  index.css             Global styles and Tailwind directives
  index.js              Application entry point
```

## Future improvements

- Persist actions between sessions
- Add completion status and filtering
- Add categories, priorities, or due dates
- Improve automated test coverage
