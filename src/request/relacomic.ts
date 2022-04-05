import { SEARCH_API, CHAPTER_API, IMAGES_API } from '../api'
import axios from 'axios'
import type { resluts, chapterResults, comicResults, imagesResults } from '../types/relacomic'

//搜索关键词
export const search = async (count: number, keywords: string) => {
    console.log(count, keywords)

    const { data } = await axios.get<resluts<comicResults>>(SEARCH_API, {
        params: {
            offset: count * 30,
            platform: 2,
            limit: 30,
            q: keywords,
        },
    })
    // console.log(data)

    return data
}

//搜索漫画总章节
export const searchChapter = async (path_word: string) => {
    const { data } = await axios.get<resluts<chapterResults>>(
        `${CHAPTER_API}/${path_word}/group/default/chapters?limit=0&timeout=10000`
    )
    // console.log(data.results)

    return data
}

//搜索漫画图片
export const searchImages = async (comic_id: string, uuid: string) => {
    const { data } = await axios.get<resluts<imagesResults>>(`${IMAGES_API}/${comic_id}/chapter/${uuid}?timeout=10000`)
    console.log(data.results)

    return data
}
