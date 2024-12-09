document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://675283dfd1983b9597b66bc1.mockapi.io/api/products';
    const tableBody = document.querySelector('#product-table tbody');

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


        products.forEach(product => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-red-50 space-y-4';
            tableBody.appendChild(row);
        });
    }
    fetchProducts();
});
