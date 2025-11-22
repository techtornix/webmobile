const API_BASE = 'http://localhost:5000';

export async function fetchTodos() {
  const res = await fetch(`${API_BASE}/api/todos`);
  return res.json();
}

export async function createTodo(title) {
  const res = await fetch(`${API_BASE}/api/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  return res.json();
}

export async function updateTodo(id, data) {
  const res = await fetch(`${API_BASE}/api/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteTodo(id) {
  const res = await fetch(`${API_BASE}/api/todos/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}