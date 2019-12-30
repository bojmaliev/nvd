const products = [
	{id: 1,title: 'LenovoThinkpad x280', price: 1000.00, qty: 1, image: './img/ThinkPad_x280.png'},  
	{id: 2,title: 'Apple Macbook Pro',price: 2500.00, qty: 1,image: './img/MacBook-Pro.png'},  
	{id: 3,title: 'Amazon Kindle Ebook',price: 150.00,qty: 1,image: './img/Amazon_Kindle.png'},  
	{id: 4,title: 'USB-C to HDMI cable',price: 10, qty: 1, image: './img/usbC_to_hdmi.jpg'},  
];


// Your Code goes here

let app = new Vue({
	el: "#app",
	data:{
		items: products,
		cartItems: []
	},
	methods:{
		addToCart: function (item) {
			const existing = this.cartItems.find(a=> a.id === item.id);
			if(existing)existing.qty += item.qty;
			else this.cartItems.push({...item});
			item.qty = 1;
		}
	}

});

Vue.component("shopping-cart", {
	props:["items"],
	methods:{
		removeItem: function (remIndex) {
			this.items.splice(remIndex, 1);
		}
	},
	computed:{
		Total: function () {
			return this.items.map(a=> a.qty*a.price).reduce((acc, item) => acc+item, 0);
		}
	}
});