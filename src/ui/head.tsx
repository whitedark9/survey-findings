import { Head as NextraHead } from "nextra/components";

export default function Head() {
  return (
    <NextraHead
      color={{
        hue: {
          dark: 204,
          light: 212,
        },
        saturation: 100,
        lightness: {
          dark: 55,
          light: 45,
        },
      }}
      backgroundColor={{ light: "#fff", dark: "#171717" }}
      // faviconGlyph=""
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </NextraHead>
  );
}
