import React from 'react';
import { useForm } from 'react-hook-form';
import sendContactEmail from './contactEmail';

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => sendContactEmail(data);

    return (
        <p style={{padding: '100px'}}>This will be a contact page. </p>
        // <form onSubmit={handleSubmit(onSubmit)} style={{paddingTop: '100px'}}>
        //     <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
        //     <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        //     <input type="text" placeholder="Subject" {...register("Subject")} />
        //     <input type="text" placeholder="Message" {...register("Message")} />
        //     <input type="submit" />
        // </form>
    );
}