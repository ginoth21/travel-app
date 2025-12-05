import {getMessage} from "@/utils/api"

export default async function Home() {

  var data = await getMessage("");

  return (
    <main>
      {/* <h1 className="text-4xl text-blue-500"> {data.message} </h1> */}
      <h1 className="text-4xl text-blue-500"> ABOUT </h1>
      <p className="text-xl text-blue-500"> {data.message} </p>
    </main>
  );
}