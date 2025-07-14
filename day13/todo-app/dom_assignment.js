// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

// 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();

  // 입력값 유효성 검사
  if (taskText === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  // <li> 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // <span> 할 일 텍스트
  const span = document.createElement("span");
  span.textContent = taskText;

  // 완료 상태 토글 (텍스트 클릭 시)
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.className = "delete-button";

  // 삭제 버튼 클릭 시 항목 삭제
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // 요소 조립
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // 입력창 초기화
  taskInput.value = "";
}

// 전체 삭제 함수
function clearAllTasks() {
  const list = document.getElementById("taskList");
  const children = list.querySelectorAll(".task-item");

  children.forEach((item) => {
    // 기본 항목은 제외하고 삭제
    if (item.id !== "defaultItem") {
      list.removeChild(item);
    }
  });
}

// 버튼 클릭 이벤트
addButton.addEventListener("click", addTask);

// 엔터 키 입력 이벤트
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// 전체 삭제 버튼 클릭 이벤트
clearButton.addEventListener("click", clearAllTasks);
