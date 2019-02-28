import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../Store/Actions/authActions'
import { googleSignIn } from '../../Store/Actions/authActions'
import { Redirect } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class SignIn2 extends Component {
    state = {
        email: '',
        password: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    handleGoogleButton = (e) => {
        e.preventDefault();
        this.props.googleSignIn()
    }
    render() {

        const { authErr, auth, classes } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container ">
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>

                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
        </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange} />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign in
          </Button>
                    </form>
                </Paper>
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        authErr: state.auth.authErr,
        auth: state.firebase.auth,
        classes: PropTypes.object.isRequired,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        googleSignIn: () => dispatch(googleSignIn())

    }
}
export default connect(mapStateToProp, mapDispatchToProps)(SignIn2)

