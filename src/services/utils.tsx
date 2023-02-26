export const getImgScr = (teamId: number) => {
    return `http://ls.betradar.com/ls/crest/big/${teamId}.png`
}

export const getClasses = (...clases: string[]) => {
    return clases.join(" ")
}

export const displayCarouselParams = (carouselParameters: any) => {
    let result = ``
    for (let key in carouselParameters) {
        result += `${key} - ${carouselParameters[key]}\n`
    }
    return result.toUpperCase()
}