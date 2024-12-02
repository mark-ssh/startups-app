import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("What am I doing here? -- SERVER");
  return (
    <div className="">
      <h1 className="text-3xl">Welcome to Nextjs</h1>
      <Hello />
    </div>
  );
}
