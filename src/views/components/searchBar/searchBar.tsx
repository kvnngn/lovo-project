import React from 'react';
import {Props, State} from "./searchBar.interface";
import {getArticles} from "../../../api/article/article.requests";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import './searchBar.css';

export default class SearchBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    onValueChange = (event: any) => {
        this.setState({inputValue: event.target.value});
    };

    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        value={this.state.inputValue}
                        onChange={this.onValueChange}
                        placeholder="Type a keyword"
                        aria-label="Type a keyword"
                        aria-describedby="searchbar input"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => {this.props.onSearch(this.state.inputValue)}}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}