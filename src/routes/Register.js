import React from 'react';
import { TextField, RaisedButton} from 'material-ui';

export default class Register extends React.Component {
    state = {
        fields:{
        username: '',
        email: '',
        password: '',
    }
};

    onChange = e => {
    this.setState({
        fields: {
            ...this.state.fields,
        [e.target.name]: e.target.value,
        },
    });
};

onSubmit = () => {
    console.log(this.state.fields);
};

    render(){
        return (
           <form>
            <TextField
                name="username"
                hintText="username"
                floatingLabelText="Username"
                onChange={e => this.onChange(e)}
                value={this.state.fields.username}
                floatingLabelFixed
            />
            <br />
            <TextField
                name="email"
                hintText="Email"
                floatingLabelText="Email"
                onChange={e => this.onChange(e)}
                value={this.state.fields.email}
                floatingLabelFixed
            />
            <br />
            <TextField
                name="password"
                hintText="password"
                floatingLabelText="Password"
                onChange={e => this.onChange(e)}
                type='password'
                floatingLabelFixed
            />
            <br />
            <RaisedButton label="Submit" onClick={() => this.onSubmit()} primary />
            </form>
        );
    }
}