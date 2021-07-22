<template>
    <div>
        <div class="login-page text-center">
            <form class="form-signin" @submit.prevent="register">
                <div v-if="error != null" class="alert alert-danger" role="alert">
                    {{ this.error }}
                </div>
                
                <label for="email" class="sr-only">Email</label>
                <input type="text" id="email" v-model="email" class="form-control" placeholder="Email">
                <label for="username" class="sr-only">Username</label>
                <input type="text" id="username" v-model="username" class="form-control" placeholder="Username">
                <label for="password" class="sr-only">Password</label>
                <input type="password" id="password" v-model="password" class="form-control" placeholder="************">
                <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
                <p class="text-muted">Already have an account? Login <a href="/login">here</a>!</p>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        middleware: 'guest',
        data() {
            return {
                email: '',
                username: '',
                password: '',
                error: null
            }
        },
        methods: {
            async register() {
                try {
                    const regReq = await this.$axios.post('/user/register', {
                        email: this.email,
                        username: this.username,
                        password: this.password
                    });

                    console.log(regReq);
                } catch (e) {
                    this.error = 'Registration Failed';
                }
            }
        }
    }
</script>

<style>
    .login-page {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .text-center {
        text-align: center;
    }

    .form-signin {
        width: 50%;
        padding: 15px;
        margin: 0 auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>