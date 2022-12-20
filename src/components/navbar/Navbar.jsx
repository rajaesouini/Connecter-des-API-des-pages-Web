import Link from "../link/Link";
import "./Navbar.css";

const Navbar = () => {
	const listLinks = [
		{ href: "www.google.fr", label: "Google", color: "blue" },
		{ href: "www.wikipedia.org", label: "Wikipedia", color: "red" },
		{ href: "www.youtube.com", label: "Youtube", color: "black" },
	];

	return (
		<nav className="menu">
			{listLinks.map((value, index) => (
				<Link 
                key={index}
                label={value.label} 
                href={value.href}
                color={value.color}
                />
			))}
		</nav>
	);
};

export default Navbar;
