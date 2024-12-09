const apiURL = 'https://675283dfd1983b9597b66bc1.mockapi.io/api/products';

// Lấy bảng từ DOM
const tableBody = document.querySelector('#product-table tbody');

// Lấy dữ liệu từ MockAPI
fetch(apiURL)
  .then(response => response.json())  // Chuyển đổi dữ liệu JSON
  .then(data => {
    // Lặp qua mỗi mục dữ liệu và chèn vào bảng
    data.forEach(user => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td><input type="checkbox" class="checkbox" data-id="${user.Masanpham}"></td>
        <td>${user.Masanpham}</td>
        <td>${user.image}</td>
        <td>${user.Tensanpham}</td>
        <td>${user.giaban}</td>
        <td>${user.khohang}</td>
        <td>${user.thutuhienthi}</td>
        `;
      
      // Thêm hàng vào bảng
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.log('Lỗi khi lấy dữ liệu:', error));