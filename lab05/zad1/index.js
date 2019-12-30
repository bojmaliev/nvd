
// Your Vue code here....

let app = new Vue({
    el: "#app",
    data:{
        message:"",
        has_uppercase:false,
        has_lowercase:false,
        has_number:false,
        has_special:false
    },
    methods:{
        input: function(){
            this.has_uppercase = this.message.match(/[A-Z]/) !== null;
            this.has_lowercase = this.message.match(/[a-z]/) !== null;
            this.has_number = this.message.match(/[0-9]/) !== null;
            this.has_special = this.message.match(/[!@#$%^&*()/~{}]/) !== null;
        },

    }
});