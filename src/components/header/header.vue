<template>
    <div class="header-wrapper">
        <div class="header-content">
            <div class="middle">
                <div class="info">
                    <div class="item">
                        <span class="icon el-icon-date"></span>主页
                    </div>
                    <div class="item">画友</div>
                    <div class="item">游戏中心</div>
                    <div class="item">直播</div>
                    <div class="item">周边</div>
                    <div class="item">萌战</div>
                </div>
                <div class="user">
                    <div class="item">消息</div>
                    <div class="item">动态</div>
                    <div class="item">收藏夹</div>
                    <div class="item">历史</div>
                    <div class="item">投稿</div>
                </div>
            </div>
        </div>
        <div class="header-bg">
            <img class="bg-img" width="100%" src="http://oiq23viaf.bkt.clouddn.com/banner.png">
        </div>
        <div class="mask-bg">
            <img class="mask-img" width="100%" src="http://oiq23viaf.bkt.clouddn.com/banner.png">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../common/scss/mixin";

    .header-wrapper{
        position: relative;
        width: 100%;
        height: 170px;
        .header-content{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 56px;
            background-color: rgba(255,255,255,0.4);
            z-index:5;
            .middle{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 0 auto;
                width: 1160px;
                height: 100%;
                line-height: 56px;
                font-size: 13px;
                color: #222;
                .info{
                    .item{
                        display: inline-block;
                        cursor: pointer;
                        padding: 0 15px;
                        &:hover{
                            background-color: rgba(255,255,255,0.4);
                        }
                        .icon{
                            margin-right: 4px;
                            color: #20A0FF;
                        }
                    }
                }
                .user{
                    .item{
                        display: inline-block;
                        cursor: pointer;
                        padding: 0 15px;
                        &:hover{
                            background-color: rgba(255,255,255,0.4);
                        }
                        .icon{
                            margin-right: 4px;
                            color: #20A0FF;
                        }
                    }
                }
            }
        }
        .header-bg{
            width:100%;
            height: 170px;
            overflow: hidden;
            .bg-img{
                width:100%;
                height: 170px;
                min-width: 1160px;
            }
        }
        .mask-bg{
            position: absolute;
            overflow: hidden;
            top: 0;
            left: 0;
            width:100%;
            height: 56px;
            min-width: 1160px;
            z-index: 4;
            filter:blur(10px)
        }
    }
</style>
