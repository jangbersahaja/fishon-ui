export function toTitleCase(value) {
    return value
        .split(" ")
        .map((word) => word.length <= 2
        ? word.toUpperCase()
        : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
        .join(" ");
}
