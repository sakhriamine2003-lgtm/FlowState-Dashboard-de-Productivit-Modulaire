export function creeLocal(table) {
  localStorage.setItem("array", JSON.stringify(table));
}

export function afficherLocal() {
  const data = JSON.parse(localStorage.getItem("array"));
  return data || [];
}
