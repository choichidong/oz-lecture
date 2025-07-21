const showError = (message) => {
  const result = document.getElementById("result");
  result.classList.remove("d-none", "alert-info");
  result.classList.add("alert-danger");
  result.textContent = `에러: ${message}`;
};

const removeError = () => {
  const result = document.getElementById("result");
  result.classList.remove("alert-danger");
  result.textContent = "";
};

export { showError, removeError };
