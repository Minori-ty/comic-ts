import { COPYMANGA_SEARCH_API, COPYMANGA_CHAPTER_API, COPYMANGA_IMAGES_API } from '../api'
import f from 'axios'
import type { resluts, chapterResults, comicResults, imagesResults } from '../types/copymanga'

const axios = f.create({
    headers: {
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'Sec-Ch-Ua-Platform': 'Windows',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    },
})

//搜索关键词
export const search = async (count: number, keywords: string) => {
    console.log(count, keywords)

    const { data } = await axios.get<resluts<comicResults>>(COPYMANGA_SEARCH_API, {
        params: {
            offset: count * 30,
            platform: 1,
            limit: 20,
            q: keywords,
            q_type: '',
            _update: true,
        },
    })
    // console.log(data)

    return data
}

//搜索漫画总章节
export const searchChapter = async (path_word: string) => {
    const { data } = await axios.get<resluts<chapterResults>>(
        `${COPYMANGA_CHAPTER_API}/${path_word}/group/default/chapters?limit=0&timeout=10000`,
        {
            timeout: 2000,
        }
    )
    console.log(data.results)

    return data
}

//搜索漫画图片
export const searchImages = async (comic_id: string, uuid: string) => {
    const { data } = await axios.get<resluts<imagesResults>>(
        `${COPYMANGA_IMAGES_API}/${comic_id}/chapter/${uuid}?timeout=10000`,
        {
            params: {
                platform: 1,
                _update: true,
            },
        }
    )
    // console.log(data.results)

    return data
}
