import * as Vue from 'vue/dist/vue.esm-browser';

const config = {
    data() {
        return {
            addUserForm: {
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
                confirmPassword: '',
                isValidate: false
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
        }
    },
    computed: {
        confirmedPass() {
            return this.addUserForm.password === this.addUserForm.confirmPassword
        }
    },
    methods: {
        addUser() {
            if (this.isValidateForm()) {

                const form = this.addUserForm;

                const user = {
                    id: this.getUserId(),
                    firstName: form.firstName,
                    lastName: form.lastName,
                    userName: form.userName,
                    email: form.email,
                    pass: form.password
                };

                this.userList.push(user);

                this.clearForm();
            }
        },
        clearForm() {
            const form = this.addUserForm;

            form.firstName = '';
            form.lastName = '';
            form.userName = '';
            form.email = '';
            form.password = '';
            form.confirmPassword = '';
            form.isValidate = false;
        },
        getUserId() {
            if (this.userList.length) {
                return this.userList[this.userList.length - 1].id + 1;
            }

            return 1;
        },
        isValidateForm() {
            const form = this.addUserForm;
            form.isValidate = true;

            return !!(
                form.firstName &&
                form.lastName &&
                form.userName &&
                form.email &&
                form.password &&
                form.confirmPassword &&
                this.confirmedPass
            );
        },
        removeUser(index) {
            this.userList.splice(index, 1);
        }

    },
    mounted() {
        console.log(this)
    }
};

const userApp = Vue.createApp(config);
const userVm = userApp.mount('#userList');
