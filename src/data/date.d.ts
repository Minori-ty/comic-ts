export type dateType = {
    /** 星期几 */
    date: string
    /** 星期id */
    name: string
    /** 漫画列表 */
    list: {
        /** 漫画名字 */
        title: string
        /** 漫画封面地址 */
        url: string
        /** 漫画拼音 */
        path: string
    }[]
}[]
export type dayType = {
    /** 漫画名字 */
    title: string
    /** 漫画封面地址 */
    url: string
    /** 漫画拼音 */
    path: string
    /** 更新时间(天) */
    day: number
}[]
