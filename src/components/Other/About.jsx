import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import QandA from './QandA';
import QuestionCard from './QACollapse';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
        <div style={{width: '80%', margin: 'auto', marginTop: '4rem', minHeight: '75vh'}}>
            <Typography variant="h2">Frequently Asked Questions</Typography>
            <Typography variant="h4" className={classes.faqHead}>General Q&A</Typography>
                <QuestionCard 
                    question={'What is Postcart?'}
                    answer={'This is an e-commerce store where you can buy collections of postcards! Hang them up on your wall, send them to friends, put them out to display; however you decide to celebrate your favorite artists\' prints is up to you!'}
                />
                <QuestionCard 
                    question={'How did you come up with this idea?'}
                    answer={'While decorating my bare apartment, I found James Jean\'s Memu collections online. Wanting more of the same, I was shocked to find that no other artists did anything similar! This seemed to be a perfect nitch to fill in and help everyone else figure a way around this dastardly problem.'}
                />
                <QuestionCard 
                    question={'I want to get listed on Postcart. How do I do that?'}
                    answer={'Wow, we are flattered! At the moment, all card packs are hand-printed and shipped by myself. While we\'d love to stock everyone in our shop, it is a little time consuming for me to get new products up. *Please* reach out via email and we can get this process started!'}
                />
            <Typography variant="h4" className={classes.faqHead}>Shipping Details</Typography>
            <QuestionCard
                question={'Do you ship to my country?'}
                answer={'We are currently only operating out of continental North America (USA, CA, MX)'}
            />
            <QuestionCard 
                question={'How long will it take me to receive my order?'}
                answer={'At the moment, I am just a one-man operation. While I will do my best to get your order to you as soon as possible, any number of small business issues could cause a delay. Please estimate that any order will take 5-7 business days to recieve unless otherwise nominated.'}
            />
            <QuestionCard
                question={'Where are the postcards made?'}
                answer={'I print them in-house in Denver, Colorado and manually inscribe every address and wax stamp by hand. Each product is made with individual attention and love!'}
            />
        </div>
        // <QuestionCard question={'Question???'} answer={'This is the answer.'}/>
    )
}

export default About;

