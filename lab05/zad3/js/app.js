const products = [
    {id: 1, title: 'LenovoThinkpad x280', price: 1000.00, qty: 1, image: './img/ThinkPad_x280.png'},
    {id: 2, title: 'Apple Macbook Pro', price: 2500.00, qty: 1, image: './img/MacBook-Pro.png'},
    {id: 3, title: 'Amazon Kindle Ebook', price: 150.00, qty: 1, image: './img/Amazon_Kindle.png'},
    {id: 4, title: 'USB-C to HDMI cable', price: 10, qty: 1, image: './img/usbC_to_hdmi.jpg'},
];


// Your Code goes here

let shoppingCart = Vue.component("shopping-cart", {
    props: ["items"],
    methods: {
        removeItem: function (remIndex) {
            this.items.splice(remIndex, 1);
        }
    },
    computed: {
        Total: function () {
            return this.items.map(a => a.qty * a.price).reduce((acc, item) => acc + item, 0);
        }
    }
});
let cartItem = Vue.component("cart-item", {
    props: ["item"],
	methods: {
		removeItem(p) {
			this.$parent.removeItem(p);
		},
	},
    template: ` <tr><td>{{item.title}}</td>
                                    <td style="width:120px">QTY:
                                        <input v-model="item.qty" class="form-control input-qty" type="number">
                                    </td>
                                    <td class="text-right">{{item.price | formatCurrency}}</td>
                                    <td>
                                        <button @click="removeItem(index)"><span> Remove </span></button>
                                    </td></tr>`,

});
let listProductItem = Vue.component("list-product-item", {
    props: ["product"],
    methods: {
        addToCart(p) {
            this.$parent.addToCart(p);
        },
    },
    template: `
<div class="col-xs-3 text-center">
	<img class="img-responsive" alt="" v-bind:src="product.image">
	<h5>{{ product.title }}</h5>
<h6>{{product.price | formatCurrency}}</h6>
<p class="text-center"><input v-model="product.qty" type="number" class="form-control" placeholder="Qty" min="1"/></p>

\t<button class="btn btn-sm btn-primary" v-on:click="addToCart(product)">Add to Cart</button>
</p>
</div>
`,

});
Vue.filter('formatCurrency', function (value) {
    return value;
});
let app = new Vue({
    el: "#app",
    data: {
        items: products,
        cartItems: []
    },
    methods: {
        addToCart: function (item) {
            const existing = this.cartItems.find(a => a.id === item.id);
            if (existing) existing.qty += item.qty;
            else this.cartItems.push({...item});
            item.qty = 1;
        }
    },
    components: {
        shoppingCart,
        listProductItem
    }

});