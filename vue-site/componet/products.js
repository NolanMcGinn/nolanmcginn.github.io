const app = Vue.createApp({
    data(){
        return{
            cart:0,
            product:"Bread",
            image:'./images/bread.jpg',
            inStock: true,
            product2: "T-Shirt",
            image2: "./images/t-shirts.webp",
            inStock2: true,
            product3: "Gummy Vitamins",
            image3:'./images/gunny-vits.png',
            inStock3: false,
            product4:"Dog Chow",
            image4:'./images/dog-food.png',
            inStock4: true,
            stock4: 'Almost out buy now',
        }
    }
})