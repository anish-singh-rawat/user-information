import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../database/mongo.config";
import { User } from "../../../../model/User";

export async function POST(request:NextRequest) {
    try {
        const {firstName, lastName, email, fatherName, motherName, address, pincode, country}  = await request.json();
        await connect();
        await User.create( {firstName, lastName, email, fatherName, motherName, address, pincode, country})
        return NextResponse.json({message : "OK"},{status : 201});
    }
    catch (error) {
        console.log(error);
    }
}