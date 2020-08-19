import React, { Component } from 'react';
import projects from './projects.json'
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    CardHeader,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery
} from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import {
    Row
} from 'react-bootstrap';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    }
})

export default function Project() {
    const [open, setOpen] = React.useState(false);
    const [modalId, setModalId] = React.useState(-1);
    // const [scroll, setScroll] = React.useState('paper');

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = (id) => {
        setModalId(id);
        setOpen(true);
    };

    const handleClose = () => {
        console.log("hello");
        setModalId(-1);
        setOpen(false);
    };
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    const classes = useStyles();
    return (<div id="project_section" className="project-bg">
        <div className="" >
            <h1 className="tabs-heading" style={{ padding: "50px" }}><u>Projects</u></h1>

            <div className={classes.root + " mt-2 project-inner-bg"}>
                <Grid
                    container
                    spacing={5}
                    scroll="paper"
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ padding: "40px" }}
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
                                <Card
                                    className={"project_card_style_" + elem.id + " project_card_style"}
                                    onClick={() => { handleClickOpen(elem.id); }}>
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
                                        <div
                                            className="view-project-style"
                                            key={elem.id}>
                                            View
                                        </div>

                                    </CardContent>
                                </Card>
                                {modalId === elem.id ?
                                    (
                                        <Dialog
                                            fullScreen={fullScreen}
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="responsive-dialog-title"
                                        >
                                            <DialogTitle id="responsive-dialog-title">{elem.name}</DialogTitle>
                                            <DialogContent>
                                                <div style={{ borderStyle: "solid", borderColor: "black" }}>
                                                    <img width="500px" src={elem.modalImage}></img>
                                                </div>
                                                <DialogContentText>
                                                    <div
                                                        className="mt-2"
                                                        dangerouslySetInnerHTML={{ __html: elem.dialogData }}>
                                                    </div>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <a
                                                    target="_blank"
                                                    href={elem.github}
                                                    className="github_style_modal">
                                                    <img height="40px" src={elem.svg}></img>
                                                </a>
                                                <Button onClick={handleClose} color="primary" autoFocus>
                                                    Done
                                                </Button>
                                            </DialogActions>
                                        </Dialog>) : ""}
                            </Row>
                        </Grid>
                    ))}
                </Grid></div> </div>
    </div>);
}

// export default withStyles(useStyles)(Project);