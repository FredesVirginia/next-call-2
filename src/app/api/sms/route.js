import {NextResponse} from "next/server" ;
import twilio from "twilio";

const accountSiid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phone = process.env.TWILIO_PHONE;
const user = process.env.TWILIO_PHONE_USER;
const client = twilio(accountSiid , authToken);

export async function POST(request){
    console.log("BACK");
   try {
    console.log("DATOS DESDE EL FRONT " , request.json);
    const data = await request.json();
    const message = await  client.messages.create({
        body: data.message, 
        from: phone,
        to : data.phone,
    }) ;

    console.log("EL mensaje enviado fue " , message.sid)
   }catch(error){
    console.log("EL error fue " , error);
   }

}