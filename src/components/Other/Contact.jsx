import React, {useState} from 'react'
import { Typography, TextField, Grid, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { addSubscriber } from '../../lib/email.js';

const Contact = () => {

    const { register, handleSubmit } = useForm();
    const [ isRegistered, setIsRegistered ] = useState(false);

    const onSubmit = async (data, e) => {
        setIsRegistered(await addSubscriber(data));
    }

    const onError = (errors, e) => console.log(errors, e);

    return (
        <div style={{maxWidth: '700px', margin: 'auto', marginTop: '4rem', padding: '1rem', minHeight: '70vh'}}>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography gutterBottom align='center' variant='h4'>What's on your mind?</Typography>
                        <Typography gutterBottom align='center' variant='body2'>If you made it here, you probably wanted to reach out. Shoot me a message and let's chat!</Typography>
                        {isRegistered ? <Typography variant='body1' align='center'><b>Thanks for reaching out. I'll be in touch :)</b></Typography> : null}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField required {...register('firstName')} fullWidth label="First Name" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField {...register('lastName')} fullWidth label="Last Name" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <TextField {...register('organization')} fullWidth label="Organization (if any)" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required {...register('email')} fullWidth label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register('comment')} fullWidth label="Comments (optional, but heartily encouraged!)" />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox {...register('subscribe')} defaultChecked />} label="Check the box to get subscribed to my contact list. Stay informed on any future posts, events, releases or opportunities to donate to good causes!" />
                        </FormGroup>
                    </Grid> */}
                    <Grid item xs={12}>
                        <Button fullWidth type="submit" variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Contact
