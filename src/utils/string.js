export function slugToString(slug) {
    console.log("slug", slug)
    return slug.replace(/-+/g, ' ');
}

export function StringToSlug(str) {
    return str.replace(/\s+/g, '-');
}

export function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function toCourseName(slug) {
    const asString = slugToString(slug)
    return toSentenceCase(asString)
}