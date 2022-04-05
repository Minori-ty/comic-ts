import { Plugin } from 'vite'
export default function myplugin(): Plugin {
    return {
        name: 'myplugin',
        options(): any {
            console.log('1')
        },
        buildStart() {
            console.log('2')
        },
        config(config) {
            // console.log(config)
            return {}
        },
        configResolved(resolveConfig) {
            console.log('4')
        },
        configureServer(server) {
            console.log('5')
            server.middlewares.use((req, res, next) => {
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
            console.log(source)
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
    }
}
