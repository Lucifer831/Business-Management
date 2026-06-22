const employees = [
  {
    id: 1,
    name: "Aditya",
    email: "a@a.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Build login page using React and Tailwind CSS",
        taskDate: "2026-06-25",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Navbar",
        taskDescription: "Create responsive navigation bar",
        taskDate: "2026-06-20",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy project on Vercel",
        taskDate: "2026-06-18",
        category: "Deployment"
      }
    ]
  },

  {
    id: 2,
    name: "Aashi",
    email: "b@b.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Connect MongoDB",
        taskDescription: "Integrate MongoDB database",
        taskDate: "2026-06-26",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create User Schema",
        taskDescription: "Build mongoose user schema",
        taskDate: "2026-06-21",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement login authentication",
        taskDate: "2026-06-28",
        category: "Security"
      }
    ]
  },

  {
    id: 3,
    name: "Gauri",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create employee dashboard UI",
        taskDate: "2026-06-24",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Cards",
        taskDescription: "Build task cards component",
        taskDate: "2026-06-19",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dark Theme",
        taskDescription: "Implement dark theme",
        taskDate: "2026-06-17",
        category: "Design"
      }
    ]
  },

  {
    id: 4,
    name: "Pari",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription: "Build CRUD APIs",
        taskDate: "2026-06-27",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Install Express",
        taskDescription: "Setup express server",
        taskDate: "2026-06-20",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Error Handling",
        taskDescription: "Implement middleware",
        taskDate: "2026-06-29",
        category: "Backend"
      }
    ]
  },

  {
    id: 5,
    name: "Nidhi",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Application",
        taskDescription: "Perform end-to-end testing",
        taskDate: "2026-06-30",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Fix UI issues",
        taskDate: "2026-06-22",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Check",
        taskDescription: "Optimize loading speed",
        taskDate: "2026-06-18",
        category: "Optimization"
      }
    ]
  }
]

const admin = [
  {
    id: 100,
    name:"Aditya",
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalstorage = () => {
  localStorage.setItem('employee', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const syncAdminLocalstorage = () => {
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getlocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employee'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}
