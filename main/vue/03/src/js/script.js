import * as Vue from 'vue/dist/vue.esm-browser';

const data = {
    isShowActive: true,
    inputClass: '',
    classList: ['one', 'two'],
    list: ['1222', '23423', 'dsgfdsf', 'sdff', '1222', '23423', 'dsgfdsf', 'sdff', '1222', '23423', 'dsgfdsf', 'sdff'],
    user: {
        name: 'Viktor',
        age: 45,
        email: 'sdfdfs@sdfds.com',
    },
    userList: [
        {
            id: 1,
            firstName: 'Viktor',
            lastName: "Dehtiarov",
            userName: 'vik1234',
            email: 'test@email.com',
            pass: 'qwerty'
        },
        {
            id: 2,
            firstName: 'Jon',
            lastName: "Dou",
            userName: 'jon1234',
            email: 'testww@email.com',
            pass: 'qwerty11'
        },
        {
            id: 3,
            firstName: 'Jon',
            lastName: "Smit",
            userName: 'jon4321',
            email: 'test2ww@email.com',
            pass: 'qwerty211'
        }
    ],
    myStyle: {
        color: 'red'
    },
    colors: ['red', 'black', 'yellow', 'orange', '#eee'],
    textColor: 'yellow'
};

const config = {
    data() {
        return data;
    },
    watch: {

    },
    computed: {

    },
    methods: {
        addClass() {
            if (this.inputClass) {
                this.classList.push(this.inputClass);
                this.inputClass = '';
            }
        },
        getNumber(index) {
            index = index + 1;

            return index < 10 ? '0' + index : index;
        }
    }
};

const app = Vue.createApp(config);
const vm = app.mount('#app');
