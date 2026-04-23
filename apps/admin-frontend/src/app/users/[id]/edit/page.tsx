import { redirect } from "next/navigation";

export default function UserEditPage() {
  // Redirect to users list since edit is now handled via modal
  redirect("/users");
}
