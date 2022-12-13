<template>
    <v-item-group mandatory>
        <v-container class="bg-white br-8">
            <v-row>
                <v-col>
                    <span class="text-h6">常用服务</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="item in items" :key="n" cols="12" md="3">
                    <v-item>
                        <v-card class="d-flex align-center" dark height="150">
                            <v-scroll-y-transition>
                                <div class="text-h6 flex-grow-1 text-center text-medium">
                                    <p>
                                        <v-icon size="large">{{''+item.icon}}</v-icon>
                                    </p>
                                    {{item.title}}
                                </div>
                            </v-scroll-y-transition>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                title: '钱包提现',
                icon: 'mdi-wallet',
                disabled: false,
                href: '/',
            },
            {
                title: '我的资料',
                icon: 'mdi-account',
                disabled: false,
                href: '/',
            },
            {
                title: '借款信息',
                icon: 'mdi-information-outline',
                disabled: true,
                href: '/',
            },
            {
                title: '查看还款',
                icon: 'mdi-image-search',
                disabled: false,
                href: '/',
            },
            {
                title: '账号设置',
                icon: 'mdi-account-cog',
                disabled: false,
                href: '/',
            },
            {
                title: '在线客服',
                icon: 'mdi-headset',
                disabled: true,
                href: '/',
            },
            {
                title: '常见问题',
                icon: 'mdi-account-key',
                disabled: false,
                href: '/',
            },
            {
                title: '关于我们',
                icon: 'mdi-account-group',
                disabled: true,
                href: '/',
            }
        ]
    })
}
</script>