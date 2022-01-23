export const addSubscriber = async ({firstName, lastName, email, comment}) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            api_key: process.env.REACT_APP_CK_API_KEY, 
            email: email
            })
    };
    const Response = await fetch('https://api.convertkit.com/v3/forms/2940137/subscribe', requestOptions);
    
    return Response.ok;
}

export const subscriberCount = async() => {

        const Response = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${process.env.REACT_APP_CK_SECRET}`)
            .then(response => response.json())
            .then(data => {return data.total_subscribers})
        return Response;
}