<script setup>
import Loader from "../components/Loader.vue";
</script>
<template>
    <v-row justify="center">
        <v-card style="margin-bottom: 200px">
            <v-card-title>
                <span class="text-h5">注册/登录</span>
            </v-card-title>

             <!-- https://www.codermen.com/how-to-display-a-loader-while-sent-request-is-in-progress-in-vue/ -->
             <div v-if="form.loading">
                <Loader/>
            </div>
            
            <v-card-text>
                <v-container>
                    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit" method="post">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="form.name" :counter="10" :rules="phoneRules" label="名字"
                                    required></v-text-field>
                                <!-- <div class="fill-height">
                                    <v-btn color="primary">
                                        发送验证码
                                    </v-btn>
                                </div> -->
                            </v-col>

                            <v-col cols="12">
                                <v-text-field v-model="form.email" :counter="10" :rules="emailRules" label="邮箱"
                                    required></v-text-field>
                                <!-- <div class="fill-height">
                                    <v-btn color="primary">
                                        发送验证码
                                    </v-btn>
                                </div> -->
                            </v-col>

                            <v-col cols="12">
                                <v-text-field v-model="form.phone" :counter="10" :rules="phoneRules" label="电话号码"
                                    required></v-text-field>
                                <!-- <div class="fill-height">
                                    <v-btn color="primary">
                                        发送验证码
                                    </v-btn>
                                </div> -->
                            </v-col>

                            <v-col cols="12">
                                <v-text-field v-model="form.password" label="密码" required type="password"
                                    :rules="passwordRules">
                                </v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field v-model="form.password_confirmation" label="确认密码" required
                                    type="password" :rules="passwordRules"></v-text-field>
                                <v-btn block color="#f6655a" size="large" type="submit" @click="validate">
                                    登录/注册
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
            </v-card-text>
        </v-card>
        <br />
    </v-row>
</template>

<script>
import axios from 'axios';
import {router} from "../routes"

export default {
    data: () => ({
        valid: true,
        form: {
            name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
            error: {},
            loading: false
        },
        nameRules: [
            v => !!v || 'This field is required'
        ],
        emailRules: [
            v => !!v || 'This field is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        phoneRules: [
            v => !!v || 'This field is required',
            v => (v && v.length <= 10) || 'Add valid phone number',
        ],
        passwordRules: [
            v => !!v || 'This field is required',
            v => (v && v.length >= 4) || 'length must be at least 4',
        ]
    }),
    methods: {
        async submit() {
            const { valid } = await this.$refs.form.validate()
            if (valid) {
                console.log(this.form);
                axios.post('http://127.0.0.1:8000/api/register', this.form)
                    .then(function (res) {
                        // Handle success
                        // console.log(res.data);
                        if (res.data.token !== '') {
                            console.log("authenticated user!!");
                            this.form.loading = true;
                            localStorage.setItem('loginToken', res.data.token);
                            router.push('/profile')
                        }
                    }.bind(this))
                    .catch(error => {
                        if (error.response) {
                            // Response has been received from the server
                            console.log(error.response.data);
                            this.form.error.message = error.response.data.message
                        }
                    });
            }
        }
    },
}
</script>