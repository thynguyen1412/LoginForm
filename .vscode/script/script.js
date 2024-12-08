document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://675283dfd1983b9597b66bc1.mockapi.io/api/products';
    const tableBody = document.querySelector('#product-table tbody');

    // Hàm lấy dữ liệu từ API
    async function fetchProducts() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Không thể kết nối API');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu từ API:', error);
            tableBody.innerHTML = `<tr><td colspan="9" class="text-center text-red-500">Không thể tải dữ liệu sản phẩm.</td></tr>`;
        }
    }

    // Hàm hiển thị dữ liệu
    function displayProducts(products) {
        tableBody.innerHTML = ''; // Xóa dữ liệu cũ (nếu có)

        products.forEach(product => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-red-50 space-y-4';
            row.innerHTML = `
                <td class="px-2 py-0"><input type="checkbox"> ${product.id}</td>
                <td class="px-2 py-0"><img src="${product.image}" alt="${product.name}" class="w-10 h-10"></td>
                <td class="px-2 py-0">${product.name}</td>
                <td class="px-2 py-0">${product.price}đ</td>
                <td class="px-2 py-0">${product.stock || 0}</td>
                <td class="flex items-center justify-center">${product.order || '-'}</td>
                <td class="px-2 py-0">
                    <label class="switch">
                        <input type="checkbox" ${product.isVisible ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </td>
                <td class="px-2 py-0 space-y-4 leading-loose">
                    <button class="bg-green-500 text-white px-2 py-0 rounded-lg hover:bg-green-600" onclick="toggleSaleStatus(this)">
                        ${product.status ? 'Đang bán' : 'Ngưng bán'}
                    </button>
                </td>
                <td class="px-5 py-3 space-x-2 space-y-4">
                    <button class="text-yellow-600">
                        <img src="../assets/images/exclamation-mark-circle-f-svgrepo-com.svg" height="15px" width="15px" alt="Warning">
                    </button>
                    <button class="text-blue-500">
                        <img src="../assets/images/pen-square-svgrepo-com.svg" height="15px" width="15px" alt="Edit">
                    </button>
                    <button class="text-red-600">
                        <img src="../assets/images/recycle-bin-svgrepo-com.svg" height="15px" width="15px" alt="Delete">
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Gọi API khi trang load
    fetchProducts();
});
