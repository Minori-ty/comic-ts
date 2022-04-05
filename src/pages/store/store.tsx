import { defineComponent, ref } from 'vue'
import usePinia from '../../store'
import { storeToRefs } from 'pinia'

export default defineComponent({
    setup() {
        const { count, url, double } = storeToRefs(usePinia())
        const { add, get } = usePinia()
        const fn = () => {
            add()
        }
        return () => (
            <>
                <h1>pinia</h1>
                <h2>
                    count:{count.value}---计算属性:{double.value}
                </h2>
                <h2>{url.value}</h2>
                <button onClick={fn}>add</button>
                <button onClick={get}>async</button>
            </>
        )
    },
})
