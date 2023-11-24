import { query } from 'express';
import { NextResponse, NextRequest } from 'next/server'
const VoiceResponse = require('twilio').twiml.VoiceResponse;

export const POST = async(request) => {

  const digit = request.nextUrl.searchParams.get("digit")
  console.log(digit)

  const optionActions = {
        '1': giveExtractionPointInstructions,
        '2': listPlanets,
      };

    return (optionActions[digit]) ? optionActions[digit]() : redirectWelcome();
    // return new NextResponse('debugging')

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
  
    return new NextResponse(twiml.toString());
  }

  /**
 * Returns Twiml
 * @return {String}
 */
function giveExtractionPointInstructions() {
    const twiml = new VoiceResponse();
  
    twiml.say(
      'To get to your extraction point, get on your bike and go down ' +
      'the street. Then Left down an alley. Avoid the police cars. Turn left ' +
      'into an unfinished housing development. Fly over the roadblock. Go ' +
      'passed the moon. Soon after you will see your mother ship.',
      {voice: 'Polly.Amy', language: 'en-GB'}
    );
  
    twiml.say(
      'Thank you for calling the ET Phone Home Service - the ' +
      'adventurous alien\'s first choice in intergalactic travel'
    );
  
    twiml.hangup();
  
    return new NextResponse(twiml.toString());
  }
  
  /**
   * Returns a TwiML to interact with the client
   * @return {String}
   */
function listPlanets() {
    const twiml = new VoiceResponse();
  
    const gather = twiml.gather({
      action: '/api/ivr/planets',
      numDigits: '1',
      method: 'POST',
    });
  
    gather.say(
      'To call the planet Broh doe As O G, press 2. To call the planet DuhGo ' +
      'bah, press 3. To call an oober asteroid to your location, press 4. To ' +
      'go back to the main menu, press the star key ',
      {voice: 'Polly.Amy', language: 'en-GB', loop: 3}
    );
  
    return new NextResponse(twiml.toString());
}