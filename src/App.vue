<template>
    <div id="app">
        <v-header></v-header>

        <div class="tab">
            <div class="tab-item">
                <span class="el-icon-delete home-icon"></span>
                <router-link to="/home">主页</router-link>
            </div>
            <div class="tab-item">
                <span class="num">5z</span>
                <router-link to="/book">本子</router-link>
            </div>
            <div class="tab-item">
                <span class="num">55</span>
                <router-link to="/video">视频</router-link>
            </div>
        </div>



        <div class="main-wrapper">
            <router-view></router-view>
        </div>


    </div>
</template>

<script type="text/ecmascript-6">
    import header from 'components/header/header.vue';

    export default{
        components: {
            'v-header': header
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "./common/scss/index.Scss";

    .tab{
        width: 1160px;
        height: 50px;
        margin: 0 auto;
        .tab-item{
            display: inline-block;
            padding-left: 0;
            padding-right: 20px;
            padding-top: 10px;
            text-align: center;
            &:hover{
                a{
                    color: #1D8CE0;
                }
            }
            &:last-child{
                padding-right: 0;
            }
            a{
                line-height: 25px;
                font-size: 14px;
                color: #222;
            }
            .num{
                display: block;
                font-size: 12px;
                line-height: 18px;
                background: rgb(255, 175, 201);
                border-radius: 4px;
                color: #fff;
            }
            .home-icon{
                display: block;
                line-height: 18px;
                color: rgb(255, 175, 201);

            }
        }
    }
    .main-wrapper{
        margin: 0 auto;
        width: 1160px;
        padding: 5px 0;
    }
</style>
