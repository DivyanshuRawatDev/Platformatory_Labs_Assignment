import fetch from "node-fetch";
import { BASE_URL } from "../../configs/common";

export async function updateCrudCrud(user: any) {
  try {
    const url = `${BASE_URL}/users/${user._id}`;

    const { _id, ...userWithoutId } = user;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userWithoutId),
    });

    console.log("CrudCrud PUT Response Status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to update user in CrudCrud");
    }

    return { status: response.status };
  } catch (error) {
    console.error("Error in updateCrudCrud activity:", error);
    throw error;
  }
}
