import * as Vue from 'vue/dist/vue.esm-browser';

const config = {
    data() {
        return {
            message: 'Hello World',
            age: 18,
            firstName: "Viktor",
            url: 'https://google.com',
            isDisabled: true,
            user: {
                name: 'Viktor',
                email: 'test@test.com'
            }
        }
    },
    computed: {
        isAge() {
            console.log(2222)
            return !(this.age % 2) ? 'even' : 'odd';
        },
        buttonText() {
            return this.isDisabled ? '-' : '+';
        },
        buttonTextHtml() {
            return this.isDisabled ? '<strong>dfg</strong>' : '<strong>+</strong>';
        }
    },
    methods: {
        getUserInfo() {
            console.log(1111)
            return `${this.user.name} ${this.user.email}`;
        },
        setAge(e, newAge = 1) {
            console.log(newAge)
            this.age = this.age + newAge;
        },
        setLog() {
            console.log(this.age);
        },
        setGo(e) {
            e.preventDefault();
        },
        setColor() {
            this.$refs.title.style.color = 'red';
        }
    }
};

const app = Vue.createApp(config);
const vm = app.mount('#app');

// setTimeout(function () {
//     vm.message = 'dfsdfdf';
// }, 2000);

// setInterval(() => {
//     vm.isDisabled = !vm.isDisabled;
// }, 2000);
