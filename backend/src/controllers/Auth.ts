import { admin } from "../configs/firebase";
import { Request, Response } from "express";
import fetch from "node-fetch";
import { UserData } from "../types/types";
import { BASE_URL } from "../configs/common";

const handleGoogleAuth = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { tokenId } = req.body;

    const decoded = await admin.auth().verifyIdToken(tokenId);

    const userData = {
      email: decoded.email,
      first_name: decoded.name.split(" ")[0] || "",
      last_name: decoded.name.split(" ")[1] || "",
      phone_number: "",
      city: "",
      pincode: null,
      name: decoded.name,
      picture: decoded.picture,
    };

    const existingUsers = await fetch(`${BASE_URL}/users`);
    const users: UserData[] = (await existingUsers.json()) as UserData[];

    const isUserExists = users.find((user: UserData) => {
      return user.email === userData.email;
    });

    if (!isUserExists) {
      await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    }
    console.log(userData);
    return res.json({ message: "User loggedIn", data: userData });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal error" });
  }
};

export { handleGoogleAuth };
