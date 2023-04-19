import Head from "next/head";
import Navbar from "@/components/Navbar";
import List from "@/components/List";
import { useCallback, useState, FormEvent } from "react";
function Main() {
  const [data, setData] = useState("");
  const func = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(data);
    },
    [data]
  );

  return (
    <>
      <Head>
        <title>BoxBox</title>
      </Head>
      <div className="flex flex-col items-center pb-10 px-4">
        <Navbar />
        <form onSubmit={func}>
          <input type="text" onChange={(e) => setData(e.target.value)} />
        </form>
        <div className="container max-w-4xl mx-auto flex flex-col gap-10 mt-10">
          <List
            tag={["DEV"]}
            title="My NextJS Jorney"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quas aut totam delectus, odio vel molestias, earum vero voluptatum obcaecati fuga saepe aperiam mollitia unde commodi quasi tenetur accusantium sequi!"
            date="21 FEB"
            time="2"
          />

          <List
            tag={["DEV"]}
            title="The Beginning of BOXBOX"
            description="asjdajkdskajdsjkasjdjasdjlasdjasdaklsd"
            date="21 FEB"
            time="3"
          />
          <List
            tag={["DEV"]}
            title="Pai doo nung dee kaw"
            description="djfasfjkadfcasicfjoeicjma;ioewjcfajecnacnewchnawhufhcalwe"
            date="21 FEB"
            time="10"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
