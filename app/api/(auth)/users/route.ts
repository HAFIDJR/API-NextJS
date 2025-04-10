import { NextResponse } from "next/server";
import connect from "@/lib/db";
import User from "@/lib/models/user";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err: any) {
    return new NextResponse("Error in fetching users" + err.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { userId, newUserName } = body;
    await connect();

    if (!userId || !newUserName) {
      return new NextResponse(
        JSON.stringify({
          message: "Invalid User Id",
        }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid User Id" }), {
        status: 400,
      });
    }

    const updateUser = await User.findOneAndUpdate(
      {
        _id: new ObjectId(userId),
      },
      {
        username: newUserName,
      },
      {
        new: true,
      }
    );

    if (!updateUser) {
      return new NextResponse(
        JSON.stringify({
          message: "User not found in the database",
        }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "User is updated",
        user: updateUser,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return new NextResponse(
        JSON.stringify({
          message: "ID or new username not found",
        }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({
          message: "Invalid User ID",
        })
      );
    }

    await connect();
    const deleteUser = await User.findByIdAndDelete(new Types.ObjectId(userId));

    if (!deleteUser) {
      return new NextResponse(
        JSON.stringify({
          message: "User not found in the database",
        }),
        {
          status: 400,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "User is deleted",
        user: deleteUser,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};
