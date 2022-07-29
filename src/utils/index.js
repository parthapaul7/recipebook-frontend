let timeout;
export function debounce(cb, delay = 1000) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        cb();
    }, delay);
    return
}