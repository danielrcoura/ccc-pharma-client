<template>
    <div id="login">
        <h1>Login</h1>
        <div>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div>
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <div>
            <button type="button" v-on:click="login()">Login</button>
        </div>
    </div>
</template>

<script scoped>
/* eslint-disable */
export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            if (this.input.username != '' && this.input.password != '') {
                if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit('authenticated', true)
                    this.$router.replace({ name: 'secure' })
                } else {
                    console.log('The username or password or both is incorrect')
                }
            } else {
                console.log('The username end password is a necessary')
            }
        }
    }
}
</script>