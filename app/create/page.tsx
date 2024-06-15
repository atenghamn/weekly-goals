import Form from "../ui/Goals/create-form";
import { auth } from "../ui/auth";

export default async function Page() {
    const session = await auth();

    if (!session) {
      return <p>You must be logged in</p>;
    }
    return (
        <main>
            <Form />
        </main>
    );
}