export function *range(n:number) {
    let idx = 0;
    while(true) {
        if(idx === n) {
            return idx;
        }
        yield idx;
        idx += 1;
    }
}

export const createRandomColorCode = () => {
    return `#${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}`
}