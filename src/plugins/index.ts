import { Plugin } from 'vite'
import findImage from '../utils/findImage'

export default function myplugin(): Plugin {
    return {
        name: 'myplugin',

        options(oprions) {
            console.log('2')
            return oprions
        },
        config(config) {
            // console.log(config)
            // return {}
        },
        configResolved(resolveConfig) {
            console.log('4')
        },
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                next()
            })
        },
        transformIndexHtml(html) {
            // console.log(html)
            return html
        },
        resolveId(source) {
            if (source === 'ss') {
                return source
            }
            // console.log(source)
            return null
        },
        load(id) {
            if (id === 'ss') {
                console.log('7')
                return 'export '
            }
        },
        transform(code, id) {
            if (id === 'ss') {
                console.log(8)
            }
            // console.log(code)

            return code
        },
        async generateBundle() {
            return new Promise(async (resolve) => {
                console.log('\nbuild\n')
                await findImage()
                return resolve()
            })
        },
    }
}
