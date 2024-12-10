document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById("product-table-body");
  
    fetch('https://675283dfd1983b9597b66bc1.mockapi.io/api/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><input type="checkbox" id="product.Masanpham"/>${product.Masanpham}</td>
                    <td><img src="${product.image}" alt="${product.Tensanpham}" class="w-10 h-10"></td>
                    <td>${product.Tensanpham}</td>
                    <td>${product.giaban}</td>
                    <td>${product.khohang}</td>
                    <td>${product.thutuhienthi}</td>
                    <td class="px-5 py-3">
              <label class="switch">
                <input type="checkbox" checked/>
                <span class="slider"></span>
              </label>
            </td>
            <td class="px-2 py-3 space-y-2 leading-loose">
              <button
                class="bg-green-500 text-white px-2 py-0 rounded-lg hover:bg-green-600"
                onclick="toggleSaleStatus(this)"
              >
                Đang bán
              </button>
            </td>
            <td class="px-5 py-3 space-x-2">
              <button class="text-yellow-600">
                <img
                  src="../assets/images/exclamation-mark-circle-f-svgrepo-com.svg"
                  height="15px"
                  width="15px"
                  alt="Warning"
                />
              </button>
              <button class="text-blue-500">
                <img
                  src="../assets/images/pen-square-svgrepo-com.svg"
                  height="15px"
                  width="15px"
                  alt="Edit"
                />
              </button>
              <button class="text-red-600">
                <img
                  src="../assets/images/recycle-bin-svgrepo-com.svg"
                  height="15px"
                  width="15px"
                  alt="Delete"
                />
              </button>
            </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Lỗi khi tải dữ liệu:', error));
  });
