import {  NextResponse } from "next/server";
import { User } from "../../../../model/User";
import { connect } from "../../../../database/mongo.config";

export async function GET (){
    connect()
    const topic = await User.find();
    return NextResponse.json({topic})
}