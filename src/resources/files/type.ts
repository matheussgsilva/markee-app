export type Status = 'editing' | 'saving' | 'saved'

export type MarkeeItem = {
    id: string
    name: string
    content: string
    active: boolean
    status: Status
}
