export const classNames = (...args: string[]): string => {
    return args.filter(Boolean).join(" ")
}

export const isEmpty = (value: any): boolean => {
    if (typeof value === "object") {
        return !Boolean(Object.entries(value)[0])
    }

    if (Array.isArray(value)) {
        return !Boolean(value[0])
    }

    return !Boolean(value)
}


