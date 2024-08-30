document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMobile = document.getElementById('nav-mobile');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navMobile.classList.toggle('active');
    });
});

const products = [
    {
        "id": "1",
        "name": "Slim Fit Jeans",
        "category": "Pants",
        "price": 299.95,
        "size": ["S", "M", "L", "XL"],
        "color": ["Blue", "Black"],
        "material": "Denim",
        "brand": "DenimCo",
        "description": "Modern slim fit jeans made of quality denim. Comfortable and stylish."
    },
    {
        "id": "2",
        "name": "White T-shirt",
        "category": "T-shirts",
        "price": 99.95,
        "size": ["S", "M", "L", "XL"],
        "color": ["White"],
        "material": "Cotton",
        "brand": "BasicWear",
        "description": "A classic white T-shirt made of 100% cotton. Perfect for any occasion."
    },
    {
        "id": "3",
        "name": "Cashmere Sweater",
        "category": "Sweaters",
        "price": 799.95,
        "size": ["M", "L", "XL"],
        "color": ["Gray", "Blue"],
        "material": "Cashmere",
        "brand": "LuxWear",
        "description": "Luxurious cashmere sweater that keeps you warm and looks elegant."
    },
    {
        "id": "4",
        "name": "Sport Jacket",
        "category": "Jackets",
        "price": 499.95,
        "size": ["S", "M", "L"],
        "color": ["Black", "Blue"],
        "material": "Nylon",
        "brand": "ActiveGear",
        "description": "Functional sport jacket with water-repellent properties and breathable material."
    },
    {
        "id": "5",
        "name": "Wool Coat",
        "category": "Coats",
        "price": 1299.95,
        "size": ["M", "L", "XL"],
        "color": ["Camel", "Gray"],
        "material": "Wool",
        "brand": "Elegance",
        "description": "Stylish wool coat with a classic fit and warmth. Ideal for the winter months."
    },
    {
        "id": "6",
        "name": "Loose Chinos",
        "category": "Pants",
        "price": 349.95,
        "size": ["M", "L", "XL"],
        "color": ["Beige", "Olive"],
        "material": "Cotton",
        "brand": "CasualFit",
        "description": "Loose chinos made of soft cotton fabric. Comfortable and ideal for a casual style."
    },
    {
        "id": "7",
        "name": "Striped Shirt",
        "category": "Shirts",
        "price": 229.95,
        "size": ["S", "M", "L", "XL"],
        "color": ["White/Blue"],
        "material": "Cotton",
        "brand": "SmartWear",
        "description": "Elegant striped shirt, perfect for both the workplace and social events."
    },
    {
        "id": "8",
        "name": "Hoodie",
        "category": "Hoodies",
        "price": 399.95,
        "size": ["S", "M", "L", "XL"],
        "color": ["Black", "Gray", "Red"],
        "material": "Polyester/Cotton",
        "brand": "UrbanStyle",
        "description": "Comfortable hoodie with a relaxed fit and a large front pocket."
    },
    {
        "id": "9",
        "name": "Leather Boots",
        "category": "Shoes",
        "price": 899.95,
        "size": ["40", "41", "42", "43", "44"],
        "color": ["Black", "Brown"],
        "material": "Leather",
        "brand": "Footwear",
        "description": "Durable leather boots with good comfort and style. Ideal for both work and leisure."
    },
    {
        "id": "10",
        "name": "Bomber Jacket",
        "category": "Jackets",
        "price": 599.95,
        "size": ["S", "M", "L"],
        "color": ["Black", "Green"],
        "material": "Polyester",
        "brand": "TrendSetter",
        "description": "Modern bomber jacket with ribbed edges and a relaxed fit."
    }
];

const categories = [
    "Pants", "T-shirts", "Sweaters", "Jackets", "Coats", "Shirts", "Hoodies", "Shoes"
];

const categoryDropdown = document.getElementById('category');
categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryDropdown.appendChild(option);
});

const productDisplay = document.getElementById('product-display');

function displayProducts(filteredProducts) {
    productDisplay.innerHTML = '';
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="category">${product.category}</p>
            <p>${product.description}</p>
        `;
        productDisplay.appendChild(productItem);
    });
}

function filterProducts() {
    const selectedCategory = categoryDropdown.value;
    const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
    displayProducts(filteredProducts);
}

categoryDropdown.addEventListener('change', filterProducts);

filterProducts();
