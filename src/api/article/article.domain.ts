import {HttpResponse} from "../cors/request/request.interface";
import {ArticleInterface} from "./article.interface";

export function fromHttpResponseToArticleList(data: HttpResponse) {
    return data.response.docs.map((doc: any) => {
        return {
            abstract: doc.abstract,
            web_url: doc.web_url,
            snippet: doc.snippet,
            lead_paragraph: doc.lead_paragraph,
            print_section: doc.print_section,
            print_page: doc.print_page,
            source: doc.source,
            multimedia: doc.multimedia,
            headline: doc.headline,
            keywords: doc.keywords,
            pub_date: doc.pub_date,
            document_type: doc.document_type,
            news_desk: doc.news_desk,
            section_name: doc.section_name,
            subsection_name: doc.subsection_name,
            type_of_material: doc.type_of_material,
            _id: doc._id,
            word_count: doc.word_count,
            uri: doc.uri
        }
    }) as ArticleInterface[];
}