import {  NextResponse } from "next/server";
import { User } from "../../../../model/User";

export async function GET (){
    const topic = await User.find();
    return NextResponse.json({topic})
}