document.addEventListener("DOMContentLoaded", () => {
  // Lấy các phần tử <ul> từ HTML để chèn dữ liệu vào
  const englishTasksList = document.getElementById("english-tasks");
  const codingTasksList = document.getElementById("coding-tasks");

  // Fetch dữ liệu từ MockAPI
  fetch("https://675283dfd1983b9597b66bc1.mockapi.io/api/Bai4")
    .then((response) => response.json())
    .then((data) => {
      // Chia dữ liệu thành hai loại: công việc học tiếng Anh và học lập trình
      data.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.classList.add("flex", "items-center");

        // Tạo checkbox cho mỗi công việc
        listItem.innerHTML = `
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-500"
              id="task-${task.id}"
              ${task.completed ? "checked" : ""}
            />
            <label for="task-${task.id}" class="ml-3">${task.title}</label>
          `;

        // Kiểm tra loại công việc và thêm vào danh sách tương ứng
        if (task.category === "English") {
          englishTasksList.appendChild(listItem);
        } else if (task.category === "Coding") {
          codingTasksList.appendChild(listItem);
        }
      });
    })
    .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
});
