<template>
    <!-- <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit" method="post"> -->
    <div class="text-caption pa-6 bg-white text-center br-8">
        <div class="text-grey text-h6">借款金额 (元)</div>

        <div :class="['text-h3', 'pa-2', 'text-center', 'font-weight-large', 'font-weight-bold']">
            <h4>{{ form.amount && form.amount.toFixed(0) }}</h4>
        </div>

        <v-row no-gutters>
            <v-col md="2" sm="1" class="hidden-sm-and-down">
                <div :class="['text-h6', 'pa-2', 'text-center', 'font-weight-large', 'font-weight-bold']">
                    {{ form.amount && form.amount.toFixed(0) }}
                </div>
                <div class="text-grey text-body-2">到账金额(元)</div>
            </v-col>
            <v-col>
                <div :class="['text-h6', 'pa-2', 'text-center', 'font-weight-large', 'font-weight-bold']">
                    {{ form.return_money.toFixed(2) }}
                </div>
                <div class="text-grey text-body-2">每期还款(元)</div>
            </v-col>
            <v-col md="2" sm="1" class="hidden-sm-and-down">
                <div :class="['text-h6', 'pa-2', 'text-center', 'font-weight-large', 'font-weight-bold']">{{
        form.except
}}</div>
                <div class="text-grey text-body-2">借款期限(个月)</div>
            </v-col>
        </v-row>
    </div>

    <div class="text-caption pa-6 bg-white text-center mgt-10 br-8">
        <v-row no-gutters>
            3000<v-slider v-model="form.amount" class="align-center" :max="max" :min="min"
                color="green" update:focused="true" update:modelValue="form.amount" @click="changeEvent">
            </v-slider>300000
        </v-row>
        &nbsp;<div class="text-grey text-body-2 text-center cus-mgr-pd">拖动调整额度</div>
    </div>

    <div class="text-caption pa-6 bg-white mgt-10 br-8 mgb-44">
        <div class="text-grey text-body-2">期限</div>
        <v-radio-group v-model="form.except" @change="returnPayment">
            <v-row justify="space-around">
                <v-col class="push-to-center">
                    <v-radio label="3个月" value="3"></v-radio>
                </v-col>
                <v-col class="push-to-center">
                    <v-radio label="6个月" value="6"></v-radio>
                </v-col>
                <v-col class="push-to-center">
                    <v-radio label="12个月" value="12"></v-radio>
                </v-col>
            </v-row>
            <v-row justify="space-around">
                <v-col class="push-to-center">
                    <v-radio label="18个月" value="18"></v-radio>
                </v-col>
                <v-col class="push-to-center">
                    <v-radio label="24个月" value="24"></v-radio>
                </v-col>
                <v-col class="push-to-center">
                    <v-radio label="36个月" value="36"></v-radio>
                </v-col>
            </v-row>
        </v-radio-group>
    </div>
    <br /><br /><br />
</template>

<script>
export default {
    data: () => ({
        min: 30000,
        max: 300000,
        form: {
            amount: 60000,
            except: ''+3,
            return_money: 0,
            bank_name: 'Bank Of China',
            bank_card_number: '021548541048421',
            error: {},
            orderno: '',
            status: '',
            title: '',
            content: '',
            return_money: 0,
            loanStatus: ''
        },
        loading: false,
        nameRules: [
            v => !!v || '必填项'
        ],
        dialog: false
    }),
    methods: {
        returnPayment() {
            this.form.return_money = (this.form.amount.toFixed(2) / this.form.except) + (this.form.amount.toFixed(2) * 0.06);
        },
        changeEvent() {
            this.min += 80;
            console.log(this.min)
        }
    },
    mounted(){
        this.returnPayment()
    }
}
</script>
