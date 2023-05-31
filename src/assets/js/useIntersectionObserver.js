import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function useIntersectionObserver(CSSClasses) {
  const observer = ref(null)

  onMounted(() => {
    const targets = document.querySelectorAll(CSSClasses.join(', '))

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const handleIntersectCallback = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > options.threshold) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }

    observer.value = new IntersectionObserver(handleIntersectCallback, options)
    targets.forEach((target) => observer.value.observe(target))
  })

  onBeforeUnmount(() => {
    if (observer.value) {
      const targets = document.querySelectorAll(CSSClasses.join(', '))
      targets.forEach((target) => {
        observer.value.unobserve(target)
        target.classList.remove('reveal-visible')
      })
    }
  })
}
