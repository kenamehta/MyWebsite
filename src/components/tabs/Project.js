import React, { Component } from 'react';
import projects from './projects.json'
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    CardHeader
} from '@material-ui/core/';

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
            <div className="" style={{ padding: "50px" }}>
                <h1 className="tabs-heading"><u>Projects</u></h1>
            </div>
            <div>
                <div className={classes.root + " mt-5 project-inner-bg"}>
                    <Grid
                        container
                        spacing={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {projects.data.map(elem => (
                            <Grid item xs={12} sm={6} md={3} key={elem.id}>
                                <Card className={"project_card_style_" + elem.id + " project_card_style"}>
                                    <CardHeader
                                        className="card_title"
                                        title={elem.name}
                                    />
                                    <CardContent>
                                        {elem.description}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid></div>
            </div> </div>);
    }
}

export default withStyles(useStyles)(Project);