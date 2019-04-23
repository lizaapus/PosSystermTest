<template>
    <div class='nav-left'>
        <ul>
            <li>
                <router-link to='/' class='linkStyle'>
                    <i class="icon iconfont icon-dianpu"></i>
                    <div>店铺</div>
                </router-link>
                
            </li>
            <li>
                <router-link to='/'>
                    <i class="icon iconfont icon-goumai1"></i>
                    <div>挂单</div>
                </router-link>
            </li>
            <li>
                <router-link to='/check'>
                    <i class="icon iconfont icon-goumai"></i>
                    <div>收银</div>
                </router-link>
            </li>
            <li>
                <router-link  to='/Vip'>
                    <i class="icon iconfont icon-kefuyouxian"></i>
                    <div>会员</div>
                </router-link>
            </li>
            <li>
                <router-link  to='/config'>
                    <i class="icon iconfont icon-31shezhi"></i>
                    <div>系统设置</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'navleft',
    data(){
        return{
            msg:'hello'
        }
    }
}
</script>

<style scoped>
.nav-left{
    height: 100%;
    width: 5%;
    float: left;
    background-color: rgb(191, 216, 218);
    color: white;
}

.nav-left ul{
    padding: 0px;
    margin: 0px;
}

.nav-left li{
    list-style: none;
    text-align: center;
    border-bottom-color: bisque;
    padding: 10px;
}

.iconfont{
    font-size: 24px;
}


</style>
