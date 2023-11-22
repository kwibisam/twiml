import { NextResponse } from 'next/server'
export const GET = async(request, response) => {
    try {

        return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
        <Response>
                <Say>Hello, Hi there world!</Say>
        </Response>`, {
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