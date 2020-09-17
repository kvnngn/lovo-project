import React from 'react';
import {Props, State} from "./articlesList.interface";
import {getArticles} from "../../../api/article/article.requests";

export default class ArticlesList extends React.Component<Props, State> {
    constructor(props: Props) {
        // initialise state
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        this.setState({articles: await getArticles()});
    }

    componentDidUpdate() {
        //
    }

    changeArticles(query: string) {
        this.setState({articles: articles});
    }

    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                {this.state.articles.map(article => <Article article={article}></Article>)}
            </div>
        )
    }
}