import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/sap-co"); // Redirect to the SAP CO page
  }, []);

  return <div>Redirecting...</div>;
}
