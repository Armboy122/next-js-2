import { useRouter } from "next/router";

export default function ListID() {
  const router = useRouter();
  console.log(router.query.id);

  return <div>ListID yaya{router.query.id} </div>;
}
