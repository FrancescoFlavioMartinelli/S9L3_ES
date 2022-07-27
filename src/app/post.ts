export interface Post {
    id: number,
    title: string,
    body: string,
    type: "news"|"politics"|"education",
    active: boolean
}
