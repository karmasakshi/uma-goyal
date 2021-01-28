import StatefulLink from '@components/stateful-link/stateful-link';

const Nav: () => JSX.Element = (): JSX.Element => (

  <nav className="flex justify-evenly pt-4">
    <StatefulLink href="/"><span>Home</span></StatefulLink>
    <StatefulLink href="/work"><span>Work</span></StatefulLink>
    <StatefulLink href="/contact"><span>Contact</span></StatefulLink>
  </nav>

);

export default Nav;
