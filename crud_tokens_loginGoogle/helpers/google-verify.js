
const {OAuth2Client} = require('google-auth-library');


//El cliente hay que cambiarlo por el del env
const client = new OAuth2Client( process.env.GOOGLE_CLIENT_ID );

async function googleVerify( token = '' ) {

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { name, picture, email } = ticket.getPayload();
  
    return {
        name, 
        img: picture, 
        email
    };
};

module.exports = {
    googleVerify,
}