import React, { useState, useEffect } from 'react'
import { Typography, Grid, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { addSubscriber, subscriberCount } from '../../../lib/email.js';

const NewsletterSignUp = () => {

    const { register, handleSubmit } = useForm();
    const onError = (errors, e) => console.log(errors, e);

    const [ isRegistered, setIsRegistered ] = useState(false);

    const onSubmit = async (data, e) => {
        console.log(data);
        setIsRegistered(await addSubscriber(data));
    }

    // useEffect( async() => {
    //     let SUB_COUNT = await subscriberCount();
    //     setSubCount(SUB_COUNT);
    // }, [])

    return (
    <div style={{backgroundColor: 'darkgray', padding: '2rem', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{textAlign: 'center', width: '100%'}}>
            <Typography variant="h6" align="center">Newsletter</Typography>
            <Typography gutterBottom variant="body2" align="center">--</Typography>
            <Typography gutterBottom variant="body1" align="center" style={{fontSize: '0.75rem', paddingBottom: '2rem'}}>Join to get special offers, free giveaways, and once-in-a-lifetime deals.</Typography>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                {isRegistered ? <Typography variant='body1' align='center'><b>Thank you for subscribing! Check your email for details.</b></Typography> : null}
                <div style={{minWidth: '300px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', paddingTop: '1rem'}}>
                    <TextField label="Enter email" {...register('email')} InputProps={{style: {backgroundColor: 'white'}}} style={{width: '60%', paddingRight: '1rem', height: '50px'}}/>
                    <Button type='submit' variant='contained' color="primary" style={{ height: '54px'}}>Subscribe</Button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default NewsletterSignUp




