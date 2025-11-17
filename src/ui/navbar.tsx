import { Navbar as NextraNavbar, ThemeSwitch } from "nextra-theme-docs";

export default function Navbar() {
  return (
    <NextraNavbar
      logo={
        <>
          {/* <Image
            src={"/The Triskelion (Triple Horn of Odin) - Dark Variant.png"}
            width={48}
            height={48}
            alt={"Logo"}
            className="hidden"
          />
          <Image
            src={"/The Triskelion (Triple Horn of Odin).png"}
            width={48}
            height={48}
            alt={"Logo"}
          /> */}
          <span className="ms-2 text-2xl font-bold">Survey Findings</span>
        </>
      }
      projectLink={undefined}
      chatLink={undefined}
    >
      <ThemeSwitch />
    </NextraNavbar>
  );
}
