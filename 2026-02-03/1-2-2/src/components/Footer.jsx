import React from "react";

function Footer() {
	return (
		<footer
			style={{
				textAlign: "center",
			}}
		>
			&copy;Park Sang Woo, {new Date().getFullYear()}
		</footer>
	);
}

export default Footer;
