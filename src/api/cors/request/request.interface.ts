export type HttpType =
    | "get"
    | "post"
    | "put"
    | "delete"
    | "GET"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "POST"
    | "PUT"
    | "patch"
    | "PATCH"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined

export interface HttpError {
    status: number,
    msg: string
}


export interface HttpResponse {
    [key:string]: any
}