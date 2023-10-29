import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Home = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div>
      <h2>My Amazing App</h2>

      {session && (
        <div>
          <p>Signed in as {session.user && session.user.name}</p>
          <a href="/api/auth/signout">Sign out by link</a>
        </div>
      )}

      {!session && <p>Not signed in</p>}
    </div>
  );
};

export default Home;
