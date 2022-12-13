<template>
    <v-row justify="center">
        <v-card style="margin-bottom: 200px">
            <v-card-title>
                <span class="text-h5">注册/登录</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field 
                                    v-model="name" 
                                    :counter="10" 
                                    :rules="phoneRules" 
                                    label="Name"
                                    required></v-text-field>
                                <!-- <div class="fill-height">
                                    <v-btn color="primary">
                                        发送验证码
                                    </v-btn>
                                </div> -->
                            </v-col>

                            <v-col cols="12">
                                <v-text-field 
                                    v-model="email" 
                                    :counter="10" 
                                    :rules="phoneRules" 
                                    label="Email"
                                    required></v-text-field>
                                <!-- <div class="fill-height">
                                    <v-btn color="primary">
                                        发送验证码
                                    </v-btn>
                                </div> -->
                            </v-col>

                            <v-col cols="12">
                                <v-text-field 
                                    v-model="phone" 
                                    :counter="10" 
                                    :rules="phoneRules" 
                                    label="Phone Number"
                                    required></v-text-field>
                                <!-- <div class="fill-height">
                                    <v-btn color="primary">
                                        发送验证码
                                    </v-btn>
                                </div> -->
                            </v-col>

                            <v-col cols="12">
                                <v-text-field 
                                    v-model="password" 
                                    label="Password" 
                                    required type="password"
                                    :rules="passwordRules">
                                </v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field v-model="password_confirmation" label="Confirm Password" required type="password"
                                    :rules="passwordRules"></v-text-field>
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
import * as yup from 'yup';
export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'This field is required'
        ],
        email: '',
        emailRules: [
            v => !!v || 'This field is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        phone: '',
        phoneRules: [
            v => !!v || 'This field is required',
            v => (v && v.length <= 10) || 'Add valid phone number',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'This field is required',
            v => yup.string().required().min(8),
        ]
    }),

    methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()
          
        }
    },
}
</script>