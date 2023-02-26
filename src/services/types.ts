export interface ICardData {
    realcategory: {
        name: string
    }
    tournament: {
        name: string
        seasontypename: string
    }
    status: {
        id: number
        name: string
    }
    teams: {
        home: {
            id: number
            shortName: string
            displayName: string
            imgSrc: string
        }
        away: {
            id: number
            shortName: string
            displayName: string
            imgSrc: string
        }
    }
    result: {
        home: number | null
        away: number | null
        winner: string | null
    }
    dt: {
        time: string
        date: string
    }

}

export interface ICarouselParametrs {
    sportId?: number
    max?: number
}

