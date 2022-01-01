import React from "react";
import {List} from 'semantic-ui-react';

const ArticleList = ({ articles }) => {
    return (
        <List divided style = {{ maxWidth: 900, margin: '0 auto'}}>
            {articles.map((article, index) => {
                <List.Item key = {article.title + index}>
                    {article.title}
                </List.Item>
            })}
        </List>
    )
}

export default ArticleList