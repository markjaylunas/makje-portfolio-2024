import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center gap-4 flex-col">
      <h1>Home</h1>
      <Button>Click</Button>

      <Button variant="bordered" radius="sm">
        Button
      </Button>
      <Button isDisabled color="primary" radius="md">
        Disabled
      </Button>

      <Image
        width={300}
        alt="NextUI hero Image"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />
    </main>
  );
}
