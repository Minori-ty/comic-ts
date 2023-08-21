import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs'

interface ICover {
    /** 漫画地址 */
    [key: string]: {
        /** 提示 */
        alt: string
        /** 封面地址 */
        url: string
    }
}
const cover: ICover = {
    怪兽8号: {
        alt: '怪獸8號',
        url: 'https://movie.douban.com/subject/36052975/',
    },
    咒术回战: {
        alt: '呪術廻戦 2',
        url: 'https://movie.douban.com/subject/35765350/',
    },
    达尔文游戏: {
        alt: 'ダーウィンズゲーム',
        url: 'https://movie.douban.com/subject/30372352/',
    },
    石纪元: {
        alt: 'Dr.STONE 龍水',
        url: 'https://movie.douban.com/subject/35705828/',
    },
}

/** 查找最新的封面 */
async function findImage() {
    return new Promise(async (resolve) => {
        /** 创造异步队列数组 */
        const queue: Promise<unknown>[] = []

        /** 把每个异步任务添加到数组中 */
        for (const key in cover) {
            queue.push(
                new Promise(async (resolved, rejected) => {
                    const url = cover[key].url
                    const html = await axios.get(url)
                    const $ = cheerio.load(html.data)
                    const image = $(`[alt="${cover[key].alt}"]`).attr('src')
                    console.log(image)

                    fs.readFile(process.cwd() + '/src/data/date.ts', 'utf8', function (err, data) {
                        // 去除空格和换行符
                        const str = data.replaceAll(/(\n|\s)/g, '')
                        // 构造正则表达式
                        const reg = new RegExp(`(?<='${key}',url:').+?(?=',path)`, 'g')
                        // console.log(str)

                        // 获取封面链接
                        const myurl = str.match(reg)

                        // 如果链接不存在，则退出
                        if (!myurl) {
                            console.log('找不到封面链接')
                            return rejected(0)
                        }

                        const newContont = data.replace(`url: '${myurl[0]}'`, `url: '${image}'`)
                        fs.writeFile(process.cwd() + '/src/data/date.ts', newContont, 'utf8', function (err) {
                            if (err) return console.log('失败')
                            console.log('成功')
                            resolved(0)
                        })
                    })
                })
            )
        }
        /** 所有任务成功时，再进行下一步 */
        Promise.all(queue).then((value) => {
            return resolve(0)
        })
    })
}

export default findImage
