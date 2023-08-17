<template>
    <!-- <Store /> -->
    <h1>拷贝漫画轻量站</h1>
    <h2>搜索</h2>

    <el-row>
        <el-col :span="20">
            <el-input v-model="keywords" @keydown.enter="isChange" placeholder="请输入漫画作品名称" />
        </el-col>
        <el-col :span="2">
            <el-button type="primary" @click="isChange">搜索</el-button>
        </el-col>
        <!-- <el-col :span="2">
            <el-switch v-model="isR18" active-color="#13ce66" inactive-color="#ff4949" />
        </el-col> -->
    </el-row>

    <Date />

    <!-- <el-row>
        <el-col :span="6" v-for="(item, index) in comicList" :key="index">
            <router-link
                target="_blank"
                :to="{
                    name: 'chapter',
                    query: {
                        cover: item.cover,
                        path_word: item.path_word,
                    },
                    params: {
                        id: item.path_word,
                    },
                }"
            >
                <el-image :src="item.cover" lazy></el-image>
                <p>{{ item.name }}</p>
            </router-link>
        </el-col>
    </el-row> -->
    <div class="padding">
        <div style="display: flex; flex-wrap: wrap; box-sizing: border-box">
            <div class="col" v-for="(item, index) in comicList" :key="index" @click="to(item)">
                <el-image :src="item.cover"></el-image>
                <p>{{ item.name }}</p>
                <!-- <span>{{ v.title }}</span> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { search as searchComic } from '../request/relacomic'
import { search as copySearch } from '../request/copymanga'
import { getScrollTop, getScrollHeight, getWindowHeight } from '../Hooks'
import type { comicList as list } from '../types/relacomic'
import { ElMessage } from 'element-plus'
import Date from '../components/Date.vue'
import { useRouter } from 'vue-router'

let keywords = ref('')
let count = ref(0)
let comicList = ref<list | []>([])
let isR18 = ref(false)
const router = useRouter()

const to = (item: { cover: string; name: string; path_word: string }) => {
    const a = router.resolve({
        name: 'chapter',
        query: {
            cover: item.cover,
            name: item.name,
            path_word: item.path_word,
        },
        params: {
            id: item.path_word,
        },
    })
    window.open(a.href, '_blank')
}

const isChange = () => {
    comicList.value = []
    count.value = 0
    search()
}

const search = async () => {
    if (keywords.value == '') return

    const list = ref<list | []>([])

    //是否开启R18
    if (isR18.value) {
        //使用热辣漫画的搜索
        const data = await searchComic(count.value, keywords.value)
        list.value = data.results.comic.list
    } else {
        //使用拷贝漫画的搜索
        const copyData = await copySearch(count.value, keywords.value)
        list.value = copyData.results.list
    }
    count.value++

    if (list.value.length <= 0) {
        return ElMessage.error('到底了，没有新内容了')
    }

    comicList.value = [...comicList.value, ...list.value] as list
    // console.log(list)
}
let isComplete = false
window.onscroll = function () {
    var isBottom =
        getScrollTop() + getWindowHeight() == getScrollHeight() ||
        getScrollTop() + getWindowHeight() + 1 == getScrollHeight()
    if (isBottom && !isComplete) {
        search()
        isComplete = true
    }
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
@lg: 6;
@md: 4;
@sm: 3;
@media screen and (min-width: 850px) {
    .col {
        width: calc(calc(100vw - 17px) / @lg);
        height: calc(calc(calc(100vw - 17px) / @lg) * @scal);
    }
}
@media screen and (max-width: 850px) {
    .col {
        width: calc(calc(100vw - 17px) / @md);
        height: calc(calc(calc(100vw - 17px) / @md) * @scal);
    }
}
@media screen and (max-width: 540px) {
    .col {
        width: calc(100vw / @sm);
        height: calc(calc(100vw / @sm) * @scal);
    }
    .padding {
        padding: 0;
    }
}
</style>
