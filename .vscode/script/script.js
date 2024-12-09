document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById("product-table-body");

  fetch('https://675283dfd1983b9597b66bc1.mockapi.io/api/products')
      .then(response => response.json())
      .then(data => {
          data.forEach(product => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${product.Masanpham}</td>
                  <td><img src="${product.image}" alt="${product.Tensanpham}" class="w-10 h-10"></td>
                  <td>${product.Tensanpham}</td>
                  <td>${product.giaban}</td>
                  <td>${product.khohang}</td>
                  <td>${product.thutuhienthi}</td>
                  <td>...</td>
              `;
              tableBody.appendChild(row);
          });
      })
      .catch(error => console.error('Lỗi khi tải dữ liệu:', error));
});
