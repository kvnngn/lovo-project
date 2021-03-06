import {ArticleInterface} from "../../../api/article/article.interface";

export interface State {
    articles: ArticleInterface[],
    query: string,
    loading: boolean,
    page: number
}

export interface Props {
}