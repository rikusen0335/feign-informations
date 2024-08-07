export const Link = ({ title, href }: { title: string, href: string }) => {
  return (
    <a href={href} className="hover:underline">
      {title}
    </a>
  );
}