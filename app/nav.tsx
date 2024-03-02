import Navbar from './navbar';
import { auth } from './ui/auth';

export default async function Nav() {
  const session = await auth();
  return <Navbar user={session?.user} />;
}
