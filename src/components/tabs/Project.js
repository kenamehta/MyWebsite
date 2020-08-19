import React, { Component } from 'react';
import projects from './projects.json'
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    CardHeader
} from '@material-ui/core/';
import {
    Row
} from 'react-bootstrap';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    }
})

class Project extends Component {
    state = {}
    render() {
        const classes = useStyles();
        return (<div id="project_section" className="project-bg">
            <div className="" >
                <h1 className="tabs-heading" style={{ padding: "50px" }}><u>Projects</u></h1>
           
            <div className={classes.root + " mt-2 project-inner-bg"}>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{padding:"40px"}}
                >
                    {projects.data.map(elem => (
                        <Grid item xs={12} sm={6} md={3} key={elem.id}>
                            <Row>
                                <a
                                    target="_blank"
                                    href={elem.github}
                                    className="github_style">
                                    <img height="40px" src={elem.svg}></img>
                                </a>
                            </Row>
                            <Row>
                                <Card className={"project_card_style_" + elem.id + " project_card_style"}>
                                    <CardHeader
                                        className="card_title"
                                        title={elem.name}
                                    />
                                    <div >
                                        <img 
                                        className="coverpic_style" 
                                        height="150px" 
                                        src={elem.image} />
                                    </div>
                                    <CardContent>
                                        {elem.description}
                                        <div className="view-project-style" key={elem.id}>
                                            View
                                            </div>
                                    </CardContent>
                                </Card>
                            </Row>
                        </Grid>
                    ))}
                </Grid></div> </div>
        </div>);
    }
}

export default withStyles(useStyles)(Project);