import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function proxy(req : NextRequest) {

    const jwt = await getToken({req});

    if(jwt != null) {
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}`)
    }
    
  return NextResponse.next()
}

export const config = {
    matcher : ["/Login" , "/Signup" ]
}
