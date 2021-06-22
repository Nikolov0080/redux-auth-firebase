import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container/index';

const useStyles = makeStyles({
    mainContainer: {
     marginTop:'20%'
    },
});

const PageLayout = (props) => {

    const classes = useStyles();

    return (
        <Container className={classes.mainContainer}>
            {props.children}
        </Container>
    )
}

export default PageLayout;