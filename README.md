# FastAPI + Inertia + Vue + Vite + Tailwind CSS + TypeScript Template

This is a template repository for creating web applications using **FastAPI** (as the backend), **Inertia.js** (for frontend/backend communication), **Vue.js** (as the frontend framework), **Vite** (for frontend tooling), **Tailwind CSS** (for styling), and **TypeScript** (for type safety).

- **Repository URL**: [GitHub - fastapi-inertia-vue](https://github.com/krunaldodiya/fastapi-inertia-vue)
- **Owner**: Krunal Dodiya
- **Contact**: [kunal.dodiya1@gmail.com](mailto:kunal.dodiya1@gmail.com)

## Features

- **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python 3.11+.
- **Inertia.js**: A framework for building single-page apps without building an API.
- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Vite**: A next-generation frontend tooling. It’s fast, and supports hot module replacement (HMR).
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A strict syntactical superset of JavaScript that adds optional static typing.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Python 3.11+**
- **Poetry** (for Python dependency management)
- **Node.js 14+**
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/krunaldodiya/fastapi-inertia-vue.git
   cd fastapi-inertia-vue
   ```

2. Install the Python dependencies using Poetry:

   ```bash
   poetry install
   ```

3. Install the JavaScript dependencies:

   ```bash
   npm --prefix "frontend" install
   # or
   yarn --cwd "frontend" install
   ```

4. Initialize the project:

   ```bash
   make init
   ```

### Running the Application

You can use the `Makefile` to run the application in development mode:

1. Start both the FastAPI server and the Vite development server:

   ```bash
   make dev
   ```

2. Open your browser and go to `http://localhost:5555`. You should see the application running.

### Building for Production

To build the frontend for production and start the FastAPI server, run:

```bash
make prod
```
