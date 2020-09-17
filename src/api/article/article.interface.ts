interface Keyword {
    "name": string,
    "value": string,
    "rank": number,
    "major": string
}

interface Headline {
    "main": string,
    "kicker": string,
    "content_kicker": string,
    "print_headline": string,
    "name": string,
    "seo": string,
    "sub": string
}

interface Multimedia {
    "rank": number,
    "subtype": string,
    "caption": string,
    "credit": string,
    "type": string,
    "url": string,
    "height": number,
    "width": number,
    "legacy": {
        "xlarge": string,
        "xlargewidth": number,
        "xlargeheight": number
    },
    "subType": string,
    "crop_name": string
}

export interface ArticleInterface {
    "abstract": string,
    "web_url": string,
    "snippet": string,
    "lead_paragraph": string,
    "print_section": string,
    "print_page": string,
    "source": string,
    "multimedia": Multimedia[],
    "headline": Headline,
    "keywords": Keyword[],
    "pub_date": string,
    "document_type": string,
    "news_desk": string,
    "section_name": string,
    "subsection_name": string,
    "type_of_material": string,
    "_id": string,
    "word_count": number,
    "uri": string
}