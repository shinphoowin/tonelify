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
                                    type="number"
                                    v-model="phone" 
                                    :counter="10" 
                                    :rules="phoneRules" 
                                    label="请输入手机号"
                                    required></v-text-field>
                                <!-- <div class="fill-height">
                                    <v-btn color="primary">
                                        发送验证码
                                    </v-btn>
                                </div> -->
                            </v-col>

                            <v-col cols="12">
                                <v-text-field v-model="password" label="Enter Password" required type="password"
                                    :rules="passwordRules"></v-text-field>
                                <v-btn block color="#f6655a" size="large" type="submit" @click.prevent="validate">
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
        phone: '',
        phoneRules: [
            v => !!v || 'This field is required',
            v => (v && v.length <= 10) || 'Add valid phone number',
        ],
        email: '',
        emailRules: [
            v => !!v || 'This field is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'This field is required',
            v => yup.string().required().min(8),
        ]
    }),

    methods: {
        async validate() {
            console.log("validate hit");
            const { valid } = await this.$refs.form.validate();
            console.log(this.phone)           
        }
    },
}
</script>