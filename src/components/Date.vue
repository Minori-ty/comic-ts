<template>
    <h1>时间表</h1>
    <div class="padding">
        <el-tabs v-model="activeName">
            <el-tab-pane :label="item.date" :name="item.name" v-for="(item, index) in date" :key="index">
                <span v-if="item.list.length > 0" style="display: flex; flex-wrap: wrap">
                    <!-- <router-link target="_blank" :to="`/chapter/${v.path}`" v-for="(v, index) in item.list" :key="index">
                    <el-image :src="v.url"></el-image>
                    <p>{{ v.title }}</p>
                </router-link> -->
                    <div style="display: flex; flex-wrap: wrap; box-sizing: border-box">
                        <div class="col" v-for="(v, index) in item.list" :key="index" @click="to(v)">
                            <el-image :src="v.url"></el-image>
                            <p>{{ v.title }}</p>
                            <!-- <span>{{ v.title }}</span> -->
                        </div>
                    </div>
                </span>
                <p v-else>暂无漫画更新</p>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import date from '../data/date'
import { useRouter } from 'vue-router'
let activeName = new Date().getDay() + ''
const router = useRouter()
const to = (item: { title: string; url: string; path: string }) => {
    const a = router.resolve({
        path: `/chapter/${item.path}`,
        query: {
            cover: item.url,
            name: item.title,
        },
    })
    window.open(a.href, '_blank')
}
</script>

<style lang="less" scoped>
.padding {
    padding: 0 30px;
}
.el-image {
    width: 100%;
    height: 100%;
}
.col {
    margin-bottom: 50px;
    padding: 0 10px;
    text-align: center;
    p,
    .el-image {
        cursor: pointer;
    }
}
p {
    margin: 0;
    padding: 0;
}
@scal: 1.3;

@media screen and (min-width: 850px) {
    .col {
        width: calc(calc(100vw - 17px) / 6);
        height: calc(calc(calc(100vw - 17px) / 6) * @scal);
    }
}
@media screen and (max-width: 850px) {
    .col {
        width: calc(calc(100vw - 17px) / 5);
        height: calc(calc(calc(100vw - 17px) / 5) * @scal);
    }
}
@media screen and (max-width: 540px) {
    .col {
        width: calc(100vw / 3);
        height: calc(calc(100vw / 3) * @scal);
    }
    .padding {
        padding: 0;
    }
}
</style>
