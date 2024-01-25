import {  NextResponse } from "next/server";
import { connect } from "../../../../database/mongo.config";
import { User } from "../../../../model/User";

export async function GET (){
    await connect();
    const topic = await User.find();
    return NextResponse.json({topic})
}