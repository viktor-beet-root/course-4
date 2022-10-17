import * as Vue from 'vue/dist/vue.esm-browser';

const config = {
    data() {
        return {
            input: '121',
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isTypePass: false,
            type: ''
        }
    },
    watch: {
        firstName(newValue, oldValue) {
            console.log(newValue);
        },
    },
    computed: {
        isShow() {
            return (
                this.firstName ||
                this.lastName ||
                this.userName ||
                this.email ||
                this.password ||
                this.confirmPassword
            );
        },
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        viewEmail() {
            return `mailto:${this.email}`;
        },
        isConfirmed() {
            const confirmed = this.password === this.confirmPassword;

            if (!this.password || !this.confirmPassword) {
                return '';
            }

            return confirmed ? 'Confirmed' : 'Not Confirmed';
        },
        typePass() {
            return !this.isTypePass ? 'password' : 'text';
        }
    },
    methods: {
        setInput(e) {
            this.input = e.target.value;
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
