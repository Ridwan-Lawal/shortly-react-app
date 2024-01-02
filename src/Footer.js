import { Logo } from "./components/Logo";

export function Footer() {
  return (
    <footer className="bg-veryDarkViolet">
      <div className=" flex max-w-6xl mx-auto px-8 flex-col items-center gap-11 py-16 md:flex-row md:justify-between md:items-start">
        <Logo fill="white" />

        <section className="flex flex-col md:flex-row lg:gap-24  gap-8">
          <FooterList
            listHeading="Features"
            listItem1="Link Shortening"
            listItem2="Branded Links"
            listItem3="Analytics"
          />

          <FooterList
            listHeading="Resources"
            listItem1="Blog"
            listItem2="Developers"
            listItem3="Support"
          />

          <FooterList
            listHeading="Company"
            listItem1="About"
            listItem2=" Our Team"
            listItem3="Careers"
            listItem4="Contact"
          />
        </section>

        <section className="flex gap-6">
          <FooterIcon icon="facebook" />
          <FooterIcon icon="twitter" />
          <FooterIcon icon="pinterest" />
          <FooterIcon icon="instagram" />
        </section>
      </div>
    </footer>
  );
}
function FooterList({
  listHeading = "Features",
  listItem1 = "Link Shortening",
  listItem2 = "Link Shortening",
  listItem3 = "Link Shortening",
  listItem4,
}) {
  return (
    <section className="text-center md:text-left">
      <p className="text-white font-medium text-lg">{listHeading}</p>

      <ul className="space-y-3 mt-6">
        <li className="footer__list">{listItem1}</li>
        <li className="footer__list">{listItem2}</li>
        <li className="footer__list">{listItem3}</li>
        <li className="footer__list">{listItem4}</li>
      </ul>
    </section>
  );
}
function FooterIcon({ icon = "facebook" }) {
  return <img src={`/icon-${icon}.svg`} alt="" />;
}
