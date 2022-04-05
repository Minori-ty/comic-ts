import { defineStore } from 'pinia'
import axios from 'axios'
export default defineStore({
    id: 'main',
    state: () => ({
        count: 1,
        url: '',
    }),
    getters: {
        double(state) {
            return state.count * 2
        },
    },
    actions: {
        add() {
            this.count++
        },
        async get() {
            const { data } = await axios.get(
                'https://www.manga2020.com/api/v3/comic/hydxjxrwgb/chapter/cb321fca-c608-11e8-879b-024352452ce0?timeout=10000'
            )
            this.url = data.results.chapter.comic_id
            console.log(data)
        },
    },
})
