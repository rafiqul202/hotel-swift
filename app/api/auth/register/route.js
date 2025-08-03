import { userModel } from "@/model/user-model";
import { dbConnect } from "@/service/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const { fname, lname, email, password } = await req.json();
  console.log(fname, lname, email, password);
  await dbConnect();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = {
    name: `${fname} ${lname}`,
    email,
    password: hashedPassword,
  };
  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
