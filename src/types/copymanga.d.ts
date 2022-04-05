export interface resluts<T> {
    code: number
    message: string
    results: T
}
export interface comicResults {
    list: comicList
}

export type comicList = [
    {
        cover: string
        name: string
        path_word: string
    }
]

export interface chapterResults {
    list: chapterList
}

export type chapterList = [
    {
        name: string
        uuid: string
        datetime_created: string
    }
]

export interface imagesResults {
    chapter: imagesChapter
    comic: {
        path_word: string
        restrict: {
            display: string
            value: number
        }
    }
}

interface imagesChapter {
    contents: contentsList
    name: string
    prev: string
    next: string
}

export type contentsList = [
    {
        url: string
    }
]
