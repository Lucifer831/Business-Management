markdown# 🗂️ Employee Task Management System

A role-based task management web app built with React and Tailwind CSS.

## 🔥 Features

- 🔐 Role-based Authentication (Admin / Employee)
- 👨‍💼 Admin Dashboard
  - View all employees and their tasks
  - Create and assign new tasks
  - Track task counts per employee
- 👷 Employee Dashboard
  - View personal assigned tasks
  - Task status: Active, New, Completed, Failed
- 🔄 Logout functionality with route protection
- ⚡ Global state with Context API

## 🛠️ Tech Stack

- **React JS**
- **Tailwind CSS**
- **React Router DOM**
- **Context API**
- **LocalStorage** (for data persistence)

## 📁 Project Structure
src/

├── context/

│   └── Authcontext.jsx

├── Pages/

│   └── App1.jsx

├── component/

│   ├── Auth/

│   │   └── Login1.jsx

│   ├── Dashboard/

│   │   ├── AdminDashboard.jsx

│   │   └── EmployeeDashboard.jsx

│   └── Other/

│       ├── Header.jsx

│       ├── CreateTask.jsx

│       ├── AllTask.jsx

│       ├── TaskList.jsx

│       └── TaskListNumber.jsx

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/employee-task-manager

# Install dependencies
npm install

# Run the app
npm run dev
```

## 👤 Demo Credentials

| Role     | Email               | Password |
|----------|---------------------|----------|
| Admin    | admin@example.com   | 123      |
| Employee | a@a.com             | 123      |

## 📸 Screenshots

<!-- Add screenshots here -->

## 🙌 Author

Made with ❤️ by **[Aditya Raj]**
