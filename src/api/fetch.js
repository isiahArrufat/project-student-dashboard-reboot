const URL = import.meta.env.VITE_BASE_API_URL

// Index/Get all
export function getAllStudents() {
    return fetch(`${URL}/students`).then((response) => response.json());
  }

