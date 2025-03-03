import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { module } = router.query;
    router.replace(`/${module || "sap-co"}`);
  }, [router.query]);

  return <div>Redirecting...</div>;
}
