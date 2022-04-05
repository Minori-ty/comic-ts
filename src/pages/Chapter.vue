<template>
    <div class="padding">
        <router-link to="/"><el-button type="success">回到搜索页面</el-button></router-link>

        <div class="grid">
            <img :src="cover" alt="" />
            <h1 class="title">{{ name }}</h1>
            <h2 class="datetime">上一次更新时间: {{ list[list.length - 1]?.datetime_created }}</h2>
        </div>
        <div class="container">
            <span class="col" v-for="item in list">
                <!-- <el-button @click="to(item)">{{ item.name }}</el-button> -->
                <button @click="to(item)">{{ item.name }}</button>
            </span>
        </div>
        <div class="loading" v-if="flag">
            <!-- <div class="img"></div> -->
            <el-button v-for="v in 50" class="button">&emsp;&emsp;&emsp;</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { searchChapter } from '../request/relacomic'
import { chapterList } from '../types/relacomic'
import { useRoute, useRouter } from 'vue-router'
defineProps({
    cover: {
        type: String,
    },
    name: {
        type: String,
    },
})
const router = useRouter()
const to = (item: { name: string; uuid: string; datetime_created: string }) => {
    router.push({
        name: 'comic',
        params: {
            comic_id: path_word,
            uuid: item.uuid,
        },
    })
}
var flag = ref(true)
var reg = /(?<=chapter\/)([A-Za-z-]+)(?=(\?)?)/g

var str = window.location.href
var path_word = str.match(reg)![0]
const list = ref<chapterList | []>([])
const cover = useRoute().query.cover
const name = useRoute().query.name
const search = async () => {
    const data = await searchChapter(path_word)
    list.value = data.results.list
    flag.value = false
}
search()
</script>

<style lang="less" scoped>
.padding {
    padding: 0 100px;
}
@scal: 1.3;
@lg: 12;
@md: 6;
@sm: 3;
.el-button {
    width: 120px;
    // margin: 0 10px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    // justify-content: center;
    .col {
        box-sizing: border-box;
        padding: 5px 10px;
        // width: 100%;
        button {
            background-color: #fff;
            outline: 0;
            border-radius: 5px;
            padding: 5px 5px;
            font-size: 16px;
            color: #606266;
            border: 1px solid #dcdfe6;
            width: 100%;
            height: 100%;
            &:hover {
                color: #409eff;
                background-color: #ecf5ff;
                border-color: #c6e2ff;
            }
        }
    }
}
.grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'img title' 'img datetime';
    margin-bottom: 20px;
    img {
        grid-area: img;
    }

    h1,
    h2 {
        box-sizing: border-box;
        text-align: start;
        // padding: 10px 50px;
    }
}
.img,
.button {
    --loading: #ededed;

    background-color: var(--loading);
    background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 60%
        )
        var(--loading);
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
}
.img,
img {
    --width: 270px;
    --height: 360px;
    // position: absolute;
    width: var(--width);
    height: var(--height);
}
@keyframes loading {
    to {
        background-position-x: -20%;
    }
}

@media screen and (min-width: 850px) {
    .col {
        width: calc(calc(100vw - 17px) / @lg);
    }
}
@media screen and (max-width: 850px) {
    .col {
        width: calc(calc(100vw - 17px) / @md);
    }
    .padding {
        padding: 0 50px;
    }
}
@media screen and (max-width: 540px) {
    .col {
        width: calc(100vw / @sm);
    }
    .padding {
        padding: 0 0px;
    }
    .grid {
        grid-template-columns: auto;
        grid-template-rows: repeat(3, auto);
        grid-template-areas: 'img' 'title' 'datetime';
        margin-bottom: 20px;
    }
    img {
        width: 100%;
        height: calc(100vw * 1.4);
    }
}
</style>
