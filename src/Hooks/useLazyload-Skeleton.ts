export function useLazyload() {
    // console.log(document.querySelectorAll('img'))
    var timer: any = null
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log(entry.target.getAttribute('data-src'))
                clearInterval(timer)
                // console.log(entry.target.previousElementSibling)
                timer = setInterval(() => {
                    // console.log(entry.target)
                    console.log(entry.target.nextElementSibling)

                    entry.target.nextElementSibling?.setAttribute(
                        'src',
                        entry.target.nextElementSibling.getAttribute('data-src') as string
                    )
                    console.log(entry.target.nextElementSibling)
                    entry.target.remove()
                    clearInterval(timer)
                }, 100)
                observer.unobserve(entry.target)
            }
        })
    })
    document.querySelectorAll('.skeleton').forEach((item) => {
        // console.log(img)
        observer.observe(item)
    })
}
