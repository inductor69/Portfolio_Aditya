import { Heading } from "@/components/Heading";
import Link from "next/link";

interface LinkItemProps {
  href: string;
  label: string;
}

const LinkItem = ({ href, label }: LinkItemProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block text-sm text-base-content transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-300 hover:after:w-0"
  >
    {label}
  </Link>
);

export const Connect = () => {
  return (
    <section className="space-y-2">
      <Heading text="connect" />
      <div className="flex gap-4">
        <LinkItem href="https://github.com/inductor69" label="github" />
        {/* <LinkItem href="https://linkedin.com/in/aditya" label="linkedin" /> */}
        <LinkItem href="https://x.com/aditya__50" label="x/twtr" />
        <LinkItem href="mailto:adityakiitdelhi@gmail.com" label="email" />
      </div>
    </section>
  );
};
