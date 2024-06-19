import { ComponentType } from "react";
import { auth } from "./ui/auth";

export default async function AuthHook(Component: ComponentType) {

    const session = await auth();

    if (!session) {
        return <p>You must be logged in</p>;
    }

    return (
        Component
    );
}