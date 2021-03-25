import StatefulLink from "@components/stateful-link/stateful-link";
import { FunctionComponent, ReactElement } from "react";

const Nav: FunctionComponent = (): ReactElement => (
  <nav className="flex justify-evenly pt-4">
    <StatefulLink href="/">
      <span>Home</span>
    </StatefulLink>

    <StatefulLink href="/work">
      <span>Work</span>
    </StatefulLink>

    <StatefulLink href="/contact">
      <span>Contact</span>
    </StatefulLink>
  </nav>
);

export default Nav;
