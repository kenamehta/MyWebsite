import React, { Component } from 'react';
import skills from "./skills.json"
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


class Skill extends Component {
    state = {}
    render() {
        const classes = useStyles();
        return (
            <div id="skill_section" className="skill-bg">
                <div className="container" style={{ padding: "60px" }}>
                    <h1 className="tabs-heading"><u>Skills</u></h1>
                    <div className={classes.root + " mt-5"}>
                        <Grid
                            container
                            spacing={4}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            {skills.skills.map(elem => (
                                <Grid item xs={12} sm={6} md={3} key={elem.id}>
                                        <Card className={"card_style_" + elem.id + " card_style"}>
                                            <CardHeader
                                                className="card_title"
                                                title={elem.name}
                                            />
                                            <img alt="" height="40px" src={elem.img}></img>
                                            <CardContent>
                                                <ul align="left">
                                                    {elem.list.map(l => (<li>{l}</li>))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>);
    }
}

export default withStyles(useStyles)(Skill);