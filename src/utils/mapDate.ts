import type { dateType, dayType } from '../data/date.d'
export function mapDate(dateList: dateType, dayList: dayType) {
    let newList = dateList
    const date = new Date()
    dayList.map((item) => {
        //如果是当天或未来6天内更新，则进入判断星期
        if (item.day >= date.getDate() - 6 && item.day <= date.getDate() + 6) {
            // if(){}
            dateList.map((dateitem) => {
                if (Number(dateitem.name) == getWeek(item.day)) {
                    dateitem.list.push(item)
                }
            })
        }
    })
    return dateList
}

function getWeek(day: number) {
    const date = new Date()
    // console.log(date.getFullYear(), date.getMonth())

    return new Date(date.getFullYear(), date.getMonth(), day).getDay()
}

console.log(getWeek(18))
