import { ActionFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

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

export const loader = async () => {
  const users = await getUsers();

  return json({
    users,
  });
};

export default function Users() {
  const { users } = useLoaderData<typeof loader>();

  return (
    <>
      {users.map((user) => user.username)}
      <form className="flex flex-col gap-2" method="post" action="/users">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </>
  );
}
