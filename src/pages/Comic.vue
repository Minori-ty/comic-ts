<template>
    <router-link to="/"><el-button type="success">回到搜索页面</el-button></router-link>
    <el-button type="primary" @click="back">返回目录</el-button>

    <el-row style="display: flex; justify-content: space-between">
        <el-button type="primary" v-if="prev" @click="changeChapter(prev)">上一话</el-button>
        <el-button type="primary" v-if="next" @click="changeChapter(next)">下一话</el-button>
    </el-row>

    <h1 class="fixed">{{ title }}</h1>
    <div class="wrap" ref="wrapRef">
        <div v-for="item in list">
            <div class="skeleton"></div>
            <img :data-src="item.url" src="#" />
        </div>
        <h1 v-if="v == 3">这是限制级漫画，请去其他地方观看</h1>
    </div>

    <el-row style="display: flex; justify-content: space-between">
        <el-button type="primary" v-if="prev" @click="changeChapter(prev)">上一话</el-button>
        <el-button type="primary" v-if="next" @click="changeChapter(next)">下一话</el-button>
    </el-row>
</template>

<script setup lang="ts">
import { ref, onUpdated, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { searchImages } from '../request/copymanga'
import type { contentsList } from '../types/copymanga'
import { useLazyload } from '../Hooks'

const reg1 = /(?<=comic\/)([A-Za-z-]+)(?=(\/)?)/g
const reg2 = /(?<=\/)([A-Za-z0-9-]+)(?=(\/)?)/g

let list = ref<contentsList | []>([])
// let prev = ref('')
// let next = ref('')
// let title = ref('')
// let str = ref('')
// let comic_id = ref('')
// let uuid = ref('')
// let comic_path_word = ref('')

let comicInfo = reactive({
    prev: '',
    next: '',
    title: '',
    str: '',
    comic_id: '',
    uuid: '',
    comic_path_word: '',
})

let { prev, next, title, str, comic_id, uuid, comic_path_word } = toRefs(comicInfo)

// console.log(comic_id, uuid)

const getComicInfo = () => {
    str.value = window.location.href
    //获取漫画的路径
    comic_id.value = str.value.match(reg1)![0]
    //获取章节的uuid
    uuid.value = str.value.match(reg2)![3]
}

getComicInfo()
let v = ref()
const search = async () => {
    const { results } = await searchImages(comic_id.value, uuid.value)
    console.log(results.chapter.contents)

    const chapter = results.chapter
    const { path_word, restrict } = results.comic
    // console.log(chapter.contents[0].url)
    list.value = chapter?.contents
    prev.value = chapter?.prev
    next.value = chapter?.next
    title.value = chapter?.name
    comic_path_word.value = path_word
    v.value = restrict.value
}
search()

const router = useRouter()
const back = () => {
    router.push(`/chapter/${comic_path_word.value}`)
}

const changeChapter = async (to: string) => {
    //等待完全进入下一个页面后再清空数据
    await router.push(`/comic/${comic_id.value}/${to}`)
    list.value = []
    title.value = ''
    await getComicInfo()
    search()
}
const wrapRef = ref()

onUpdated(() => {
    useLazyload()
})
</script>

<style lang="less" scoped>
.fixed {
    position: sticky;
    top: 0;
    background-color: #fff;
    padding: 10px 0;
}
.el-row {
    // padding: 0 385px;
    .el-image {
        margin: 0 auto;
    }
}
h1 {
    text-align: center;
}

.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

img {
    --loading: #ededed;
    --width: 900px;
    --height: 1270px;
    width: var(--width);
    height: var(--height);
    /* background-color: red; */
}

.skeleton {
    --loading: #ededed;
    --width: 900px;
    --height: 1270px;
    position: absolute;
    width: var(--width);
    height: var(--height);
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
    animation: 1s loading ease-in-out infgetComicInfoe;
}

@keyframes loading {
    to {
        background-position-x: -20%;
    }
}
@media screen and (max-width: 850px) {
    img,
    .skeleton {
        width: 375px !important;
        height: 667px !important;
    }
}
</style>
