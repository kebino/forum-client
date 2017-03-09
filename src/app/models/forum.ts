export interface Forum {
    _id: any,
    topic: string,
    category: string,
    originalPost: any, //can be ref id or comment obj
    replies: any[], //can be array of ref or comment obj
    views: number,
    date: Date
}