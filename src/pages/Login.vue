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
                                <v-text-field type="number" v-model="form.phone" :rules="phoneRules" label="电话号码">
                                </v-text-field>
                                <!-- <div class="fill-height">
                                    <v-btn color="primary">
                                        发送验证码
                                    </v-btn>
                                </div> -->
                            </v-col>

                            <v-col cols="12">
                                <v-text-field type="password" v-model="form.password" :rules="passwordRules"
                                    label="密码">
                                </v-text-field>
                                <span style="color: red">{{ form.error.message ? form.error.message : '' }}</span>
                                <v-btn block color="#f6655a" size="large" type="submit">
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
            phone: '',
            email: '',
            password: '',
            error: {},
            loading: false
        },
        phoneRules: [
            v => !!v || 'This field is required',
            v => (v && v.length <= 11) || 'Add valid phone number',
        ],
        emailRules: [
            v => !!v || 'This field is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
            v => !!v || 'This field is required',
            v => (v && v.length >= 4) || 'length must be at least 4',
        ]
    }),
    methods: {
        async submit() {
            // console.log(this.valid);
            const { valid } = await this.$refs.form.validate();
            if (valid) {
                axios.post('http://127.0.0.1:8000/api/login', this.form)
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
        },

    }
}
</script>