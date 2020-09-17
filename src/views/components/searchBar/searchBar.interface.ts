import {ArticleInterface} from "../../../api/article/article.interface";

export interface State {
    inputValue: string,
}

export interface Props {
    inputValue: string
    onSearch: (name: string) => void;
}