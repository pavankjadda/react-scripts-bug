import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useCookies} from "react-cookie";
import {CookieUtils} from "../../../util/CookieUtils";
import Logout from "../../core/logout/Logout";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function Header() {
    const [cookies] = useCookies(["token"]);
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>

                    {/*If user logged in show logout button*/}
                    {CookieUtils.isTokenPresent(cookies) ? <Logout/> : <Button color="inherit">Login</Button>}

                </Toolbar>
            </AppBar>
        </div>
    );
}
