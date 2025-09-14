# Trackman Front-End Challenge

This is the **Trackman Front-End Challenge**, where I was tasked to build a small React application for managing a list of facilities (such as golf clubs or similar venues).
The app allows users to create, edit, and delete facilities while following both **design** and **feature requirements** provided in the challenge brief.

---

## 🚀 Getting Started

To run the application locally:

```bash
npm install
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

---

## ✨ Feature Requirements

* **Facilities List Page**

  * Display facilities in a card/grid format
  * Each card shows:

    * Facility name
    * Address
    * Description
    * Image
    * Working hours (open/close time)
  * A badge indicates if the facility is **Open/Closed** based on the current time
  * Edit and delete actions available per facility

* **Create/Edit Facility Page**

  * Form fields:

    * Name
    * Address
    * Description
    * Image URL
    * Default facility checkbox
    * Opening & closing hours
  * Rules for default facility:

    * First created facility automatically becomes default (checkbox disabled)
    * Only one facility can be default at a time
    * If default facility is deleted, another becomes the default automatically

* **Persistence**

  * Data is stored in **localStorage**, so it persists across reloads without a backend database.

---

## 🎨 Design Requirements

* Follows the provided **Figma design** closely
* Consistent typography, spacing, and colors
* Responsive and clean UI using **TailwindCSS**

---

## 🛠️ Technical Decisions

* **React 19**
  Chosen for building a modern and declarative UI with functional components and hooks.

* **Vite**
  Since Create React App is deprecated, Vite was selected for its speed and developer experience.

* **TypeScript**
  Ensures type safety and better developer tooling.

* **React Router DOM**
  Used for client-side routing between the Facilities List and Create/Edit Facility pages.

* **React Hook Form**
  Simplifies form handling, validation, and controlled components.

* **TailwindCSS**
  Utility-first CSS framework for fast, consistent styling.

* **ESLint + Prettier**
  Configured for linting and consistent code formatting.

* **Persistence via localStorage**
  Lightweight, avoids the need for backend or databases while still satisfying persistence requirements.

---

## 🏗️ Approach

1. **Project Setup** with Vite + TypeScript
2. **Code Quality**: Configured ESLint and Prettier
3. **UI Foundation**: TailwindCSS setup and implementation of reusable components (Input, Button, Card, etc.)
4. **Page Views**:

   * Built the Facilities List Page
   * Built the Create/Edit Facility Page
5. **Data Layer**: Implemented React Context with localStorage persistence
6. **Business Logic**: Added default facility rules and open/closed status calculation
7. **Testing**: Basic manual testing for workflows (create, edit, delete, default facility logic)
8. **Final Review**: Ensured UI matches Figma and is responsive
