import { NextResponse } from 'next/server'
const VoiceResponse = require('twilio').twiml.VoiceResponse;

export const POST = async(request) => {

  const digit = request.nextUrl.searchParams.get("digit")
  const optionActions = {
        '2': '+260967433734',
        '3': '+17262043675',
        '4': '+16513582243',
  };

  if (optionActions[digit]) {
        const twiml = new VoiceResponse();
        twiml.dial(optionActions[digit]);

        return new NextResponse(twiml.toString())
  }
    
  return redirectWelcome();
}


/**
 * Returns an xml with the redirect
 * @return {String}
 */
function redirectWelcome() {
    const twiml = new VoiceResponse();
  
    twiml.say('Returning to the main menu', {
      voice: 'Polly.Amy',
      language: 'en-GB',
    });
  
    twiml.redirect('/api/ivr/welcome');
  
    return new NextResponse(twiml.toString())
  }
  