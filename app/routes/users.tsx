import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { createUser, getUsers } from "~/models/user";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const username = formData.get("username");
  const password = formData.get("password");

  await createUser({
    username: username as string,
    password: password as string,
    isAdmin: true,
  });

  return json({ message: "User created" });
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const users = await getUsers();

  return json({
    users,
  });
};

export default function Users() {
  const { users } = useLoaderData<typeof loader>();

  return (
    <div className="w-[780px] flex flex-col p-4 overflow-auto justify-center items-center">
      <Header />
      {users.map((user) => user.username)}
      <form className="flex flex-col gap-2" method="post" action="/users">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
}
