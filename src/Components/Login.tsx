import { Button } from "@suid/material";
import TextField from "@suid/material/TextField";

export default function Login() {
    return <>
        <TextField
            required
            id="username"
            label="Username"
            variant="outlined" 
            margin="normal"
        />
        <br/>
        <TextField
            required
            id="password"
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            autoComplete="current-password"
        />
        <br />
        <Button variant="contained">Login</Button>
    </>

}