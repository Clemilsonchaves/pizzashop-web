import { Link, LinkProps } from "react-router-dom";

export function NavLink(props: LinkProps) {
  return (
    <Link {...props} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
      {props.children}
    </Link>
  );
}