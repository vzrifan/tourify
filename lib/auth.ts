"use server";

import axios from "axios";
import { SignupFormSchema, FormState } from "./definitions";
import { createSession, deleteSession } from "@/lib";
import { redirect } from "next/navigation";

export async function signup(name: string, email: string, password: string) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: name,
    email: email,
    password: password,
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Previous steps:
  // 1. Validate form fields

  try {
    // Call the provider or db to create a user...
    // 2. Prepare data for insertion into database
    const { name, email, password } = validatedFields.data;
    // 3. Insert the user into the database or call an Library API
    const user = await register(name, email, password);
    console.log(user);
    // Current steps:
    // 4. Create user session
    await createSession(user.id);
    // 5. Redirect user
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function register(name: string, email: string, password: string) {
  const response = await axios.post(process.env.API_URL + "/auth/register", {
    name: name,
    email: email,
    password: password,
    password_confirmation: password,
  });

  const user = { data: response.data, id: response.data.data.user.id };

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  return user.data;
}

export async function signin(email: string, password: string) {
    // Previous steps:
    // 1. Validate form fields
    // 2. Prepare data for insertion into database
    // 3. Insert the user into the database or call an Library API
  
    // Current steps:
    // 4. Create user session
    try {
      const user = await getUser(email, password);
      await createSession(user.id);
      // 5. Redirect user
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  async function getUser(email: string, password: string) {
    // Get user from database
    const response = await axios.post(process.env.API_URL + "/auth/login", {
      email: email,
      password: password,
    });
    const user = { data: response.data, id: response.data.data.user.id };
    return user;
  }

export async function signout(token: string) {
  await axios.post(
    process.env.API_URL + "/auth/logout",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  deleteSession();
  redirect("/");
}
