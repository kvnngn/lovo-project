import request from '../cors/request/request'
import {fromHttpResponseToArticleList} from "./article.domain";

export async function getArticles(query: string, page: number) {
    try {
        const data = await request(`/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu`, "get");

        return fromHttpResponseToArticleList(data);
    } catch (e) {
        return [];
    }
}