import { NextResponse } from 'next/server'
export const GET = async(request, response) => {
    try {

        return new NextResponse(`<Resource> <Say> hello there </Say> </Resource>`, {
            headers: {
                "Content-Type": "text/xml"
            }
        })
        
    } catch (error) {
        return new NextResponse(`{title: "hellooo"}`, {
            headers: {
                "Content-Type": "text/json"
            }
        })   
    }
}