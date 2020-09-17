import React from 'react';
import {Props, State} from "./articlesList.interface";
import {getArticles} from "../../../api/article/article.requests";
import Container from "react-bootstrap/cjs/Container";
import Spinner from "react-bootstrap/cjs/Spinner";
import Row from "react-bootstrap/cjs/Row";
import ArticleCard from "../../components/articleCard/articleCard";
import {Button, Col} from "react-bootstrap";
import SearchBar from "../../components/searchBar/searchBar";
import {Waypoint} from "react-waypoint";

export default class ArticlesList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            articles: [],
            query: '',
            page: 0,
            loading: false
        };
    }

    async componentDidMount() {
        this.setState({loading: true});
        this.setState({articles: await getArticles('', this.state.page)});
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.state.articles !== prevState.articles && this.state.loading) {
            this.setState({loading: false})
        }
    }

    changeArticles = async () => {
        const new_articles = await getArticles(this.state.query, this.state.page);
        this.setState({loading: true});
        this.setState({articles: this.state.articles.concat(new_articles)});
    };

    divideArticleByRow(nbArticlesByRow = 3) {
        const newArr = [];
        const tmpArr = [...this.state.articles];
        while (tmpArr.length)
            newArr.push(tmpArr.splice(0, nbArticlesByRow));
        const res = newArr.map((rowOfArticles, index) => {
            const cols = rowOfArticles.map(article => {
                return (
                    <Col className='col-md-4 col-sm-12' key={article._id}>
                        <ArticleCard article={article}></ArticleCard>
                    </Col>
                )
            });
            return (<Row className='mb-3' key={index}>{cols}</Row>)
        });
        return res;
    }

    changeQuery = (newQuery: string) => {
        this.setState({query: newQuery}, () => {
            this.changeArticles()
        });
    };

    nextPage = () => {
        this.setState({page: this.state.page + 1}, () => {
            this.changeArticles();
        });
    };

    render() {
        if (this.state.loading) {
            return (
                <Container>
                    <SearchBar onSearch={this.changeQuery} inputValue=''/>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading articles...</span>
                    </Spinner>
                </Container>
            )
        } else {
            return (
                <Container>
                    <SearchBar onSearch={this.changeQuery} inputValue=''/>
                    {this.divideArticleByRow(3)}
                    <div>
                        <Button onClick={this.nextPage}>Next page</Button>
                    </div>
                </Container>
            )
        }
    }
}