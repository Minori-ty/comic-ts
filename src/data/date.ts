import { mapDate } from '../utils/mapDate'
const date = [
    {
        date: '星期一',
        name: '1',
        list: [
            {
                title: '石纪元',
                url: 'https://img2.doubanio.com/view/subject/l/public/s33469402.jpg',
                path: 'drstone',
            },
            {
                title: '咒术回战',
                url: 'https://img3.doubanio.com/view/subject/l/public/s29955210.jpg',
                path: 'zhoushuhuizhan',
            },
            {
                title: '海贼王',
                url: 'https://img9.doubanio.com/view/photo/l/public/p2197828404.webp',
                path: 'haizeiwang',
            },
        ],
    },
    {
        date: '星期二',
        name: '2',
        list: [],
    },
    {
        date: '星期三',
        name: '3',
        list: [
            {
                title: '女友成双',
                url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2641572583.webp',
                path: 'nvyouchengshuang',
            },
            {
                title: '租借女友',
                url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2578658472.webp',
                path: 'nvpengyoujiewoyixia',
            },
            {
                title: '化物语',
                url: 'https://i0.hdslb.com/bfs/manga-static/2d65f10f2d2f6e0f09ea8e20f23a6d397ef185d1.jpg@310w.jpg',
                path: 'huawuyu',
            },
            {
                title: '致不灭的你',
                url: 'https://i0.hdslb.com/bfs/manga-static/15a4fcbf38e05bada3d83e8cf946a7a2aa485ac5.jpg@310w.jpg',
                path: 'zhibumiedeni',
            },
        ],
    },
    {
        date: '星期四',
        name: '4',
        list: [
            {
                title: '辉夜大小姐想让我告白',
                url: 'https://mirror.mangafunc.fun/comic/hydxjxrwgb/cover/1ae72308-abaf-11e9-8ef6-024352452ce0.jpg!kb_m_item',
                path: 'hydxjxrwgb',
            },
            {
                title: '我推的孩子',
                url: 'https://i0.hdslb.com/bfs/manga-static/8cc4d8b73742d255c3e5d8843fdff9eaff4ead19.jpg@200w.jpg',
                path: 'wodantuidenvhai',
            },
            {
                title: '见面之后5秒开始战斗',
                url: 'https://img9.doubanio.com/view/photo/m/public/p2673595356.webp',
                path: 'jianmianzhihouwumiaokaishizhandou',
            },
        ],
    },
    {
        date: '星期五',
        name: '5',
        list: [],
    },
    {
        date: '星期六',
        name: '6',
        list: [
            {
                title: '魔都精兵的奴隶',
                url: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2735977685.webp',
                path: 'modujingbingdenuli',
            },
        ],
    },
    {
        date: '星期天',
        name: '0',
        list: [],
    },
]
const day = [
    {
        title: '转生成为了只有乙女游戏破灭Flag的邪恶大小姐',
        url: 'https://img2.doubanio.com/view/photo/m/public/p2590345102.webp',
        path: 'zhuanshengeyizhihaobachupomieqibiao',
        day: 28,
    },
    {
        title: '虚构推理',
        url: 'https://i0.hdslb.com/bfs/manga-static/32da7ecc336c4d524da5b784ce660e7cb2f6a3f3.jpg@310w.jpg',
        path: 'xugoutuile',
        day: 6,
    },
    {
        title: '格莱普尼尔',
        url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2595428641.webp',
        path: 'beishufudefennier',
        day: 20,
    },
    {
        title: '渡君的xx即将崩坏',
        url: 'https://i0.hdslb.com/bfs/manga-static/d115cb86206cc2431ab61ce50a8961a99bb522e5.jpg@310w.jpg',
        path: 'dujundexxjijiangbenghuai',
        day: 20,
    },
    {
        title: '达尔文游戏',
        url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2571212851.webp',
        path: 'daerwenyouxi',
        day: 12,
    },
]

export default mapDate(date, day)
