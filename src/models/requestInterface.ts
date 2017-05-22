
export interface IDesignData {
    id: string,
    url:string,
    added: Date,
    tags: string[],
    title: string,
    description: string,
    imageData: string,
    likes: number,
    submitterId: string,
    pending: boolean
}