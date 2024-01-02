import { Button } from "./Button";
import { BackgroundForFormAndBoost } from "./BackgroundForFormAndBoost";
import { useState, useEffect } from "react";

const apiKey = "09cdd776f3dc43dbba2a01d02a161ea2";
export function LinksBlock() {
  const [linkToShort, setLinkToShort] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);

  // function to handle link copying
  function handleLinkToCopy(id) {
    const linkToCopy = shortenedLinks.find((link) => link.id === id)?.shorted;

    async function copyToClipboard() {
      try {
        await navigator.clipboard.writeText(linkToCopy);

        // when copy button is clicked update the copied property of the component clicked to true. if true? button will be 'purple'
        setShortenedLinks((curLinks) =>
          curLinks.map((link) =>
            link.id === id ? { ...link, copied: true } : link
          )
        );
      } catch (err) {
        console.log(err.message);
      }
    }
    copyToClipboard();

    // after 3 seconds update the copied property of the component to false, when False? button will be back to 'Cyan'

    setTimeout(() => {
      setShortenedLinks((curLinks) =>
        curLinks.map((link) =>
          link.id === id ? { ...link, copied: false } : link
        )
      );
    }, 3000);
  }

  // function for making an api call for the links
  function handleGetShortLink(e) {
    e.preventDefault();
    setError("");
    if (!linkToShort) {
      setError("Please add a link!");
      return;
    }

    async function getShortLink() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch("https://api.rebrandly.com/v1/links", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: apiKey,
          },
          body: JSON.stringify({
            destination: linkToShort,
          }),
        });

        if (!res.ok) throw new Error("Could not shorten link");

        const data = await res.json();

        setShortenedLinks((curLinks) => [
          {
            shorted: data.shortUrl,
            original: linkToShort,
            id: crypto.randomUUID(),
            copied: false,
          },
          ...curLinks,
        ]);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getShortLink();
    setLinkToShort("");
  }

  return (
    <div className="mt-44 max-w-6xl mx-auto  px-8 ">
      <LinkForm
        value={linkToShort}
        error={error}
        onChange={(e) => setLinkToShort(e.target.value)}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <Button
            width="w-full"
            borderRadius="rounded-md md:mt-0"
            text="font-bold"
            content="Shorten it!"
            paddingY="py-3"
            onClick={handleGetShortLink}
          />
        )}
      </LinkForm>
      <LinkShortedBlock>
        {shortenedLinks.map((link) => (
          <LinkShortedCard
            link={link}
            key={link.id}
            onLinkToCopy={handleLinkToCopy}
            is
          />
        ))}
      </LinkShortedBlock>
    </div>
  );
}

function Loader() {
  return (
    <div className="flex justify-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

function LinkForm({ value, onChange, children, error }) {
  return (
    <div className="relative bottom-20">
      <BackgroundForFormAndBoost>
        <form
          action=""
          className="flex flex-col gap-6 md:gap-6 md:flex-row items-start md:px-2 md:py-3"
        >
          <div className="w-full md:w-[80%]">
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Shorten a link here..."
              className={`focus:outline-none  placeholder:font-medium py-3 rounded-md px-4 w-full ${
                error &&
                "border-2 transtion-all border-red placeholder:text-red"
              } `}
            />
            {error && <p className="text-xs text-red italic mt-2">{error}</p>}
          </div>

          <div className="w-full md:w-[20%]">{children}</div>
        </form>
      </BackgroundForFormAndBoost>
    </div>
  );
}
function LinkShortedBlock({ children }) {
  return <div className="relative bottom-12 space-y-8">{children}</div>;
}
function LinkShortedCard({ link, onLinkToCopy }) {
  return (
    <div className=" bg-white shadow-md flex md:items-center flex-col md:flex-row rounded-lg gap-3 pt-4 pb-5">
      <div className="flex flex-col md:w-[85%] md:flex-row justify-between gap-3.5">
        <p className="text-darkViolet font-medium px-4 text-lg">
          {link?.original}
        </p>
        <p className="border-b md:hidden"></p>
        <p className="text-cyan font-medium text-lg px-4">{link?.shorted}</p>
      </div>
      <section className="px-4 md:w-[15%]">
        <Button
          onClick={() => onLinkToCopy(link.id)}
          borderRadius="rounded-md"
          bgColor={link.copied ? "bg-darkViolet" : "bg-cyan"}
          width="w-full"
          content={link.copied ? "Copied!" : "Copy"}
        />
      </section>
    </div>
  );
}
