import { NextResponse } from 'next/server'
const VoiceResponse = require('twilio').twiml.VoiceResponse;

export const GET = async(request, response) => {

    const voiceResponse = new VoiceResponse()

    const gather = voiceResponse.gather({
        action: '/ivr/menu',
        numDigits: 1,
        method: 'POST'
    })

    gather.say(
        'Thanks for calling the E T Phone Home Service. ' +
        'Please press 1 for directions. ' +
        'Press 2 for a list of planets to call.',
        {loop: 3}
      );
    
      return new NextResponse(voiceResponse.toString())
}