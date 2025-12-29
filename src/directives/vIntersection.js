const intersectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after visible if we only want it to animate once
                // intersectionObserver.unobserve(entry.target);
            } else {
                // Optional: remove class to animate out when scrolling away
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    }
);

export default {
    mounted(el) {
        intersectionObserver.observe(el);
    },
    unmounted(el) {
        intersectionObserver.unobserve(el);
    },
};
