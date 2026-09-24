import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Portal & Sign In",
  description:
    "Sign in to your Home Sweet Home Ghana Network account or register as a local or diaspora member.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
