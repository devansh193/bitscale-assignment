import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-4xl font-bold mb-8 text-foreground">
        Welcome to Our Service
      </h1>
      <Link href="/pricing" passHref>
        <Button className="text-lg font-semibold">Go to the Assignment</Button>
      </Link>
    </div>
  );
}
