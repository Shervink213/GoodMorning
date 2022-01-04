import react from "react";
import { Grid, GridColumn, List, Header, Image } from 'semantic-ui-react';
import 'fomantic-ui-css/semantic.css';
import './styles.css';

const ArticleItem = ({article}) => {
    
    return (
        <div className="articles">
            <List.Item style = {{ padding: 30 }}>
                <Grid>
                    <GridColumn
                        width={12}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",

                        }}
                    >
                        <Header as="h3"><a href={article.link}>{article.title}</a></Header>
                        <List.Description className = {"description"} style={{ 
                            margin: "0 auto",
                            width:"auto",
                            padding:"auto",
                            
                            }}>
                            {article.description}
                        </List.Description>
                        <List bulleted horizontal>
                            <List.Item>{article.source_id}</List.Item>
                        </List>
                    </GridColumn>
                    <Grid.Column width={4}>
                        <Image src={article.image_url} />
                    </Grid.Column>
                </Grid>
            </List.Item>
        </div>
        
    )
    
}

export default ArticleItem;