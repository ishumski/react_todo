export function generateId(tasks) {
  const ids = tasks.map((task) => task.id);

  if (!ids.length) {
    return 1;
  }

  const maxId = Math.max(...ids);

  return maxId + 1;
}
