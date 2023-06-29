import { headers } from "next/headers";
import Link from "next/link";

export default function RootLayout({ children }) {
	const headersInstance = headers();

	return (
		<html>
			<head />
			<body>
				<nav>
					<Link href="/">Home</Link>
					{" | "}
					<Link href="/param-page/500">Count 500</Link>
				</nav>
				{children}
				<pre style={{}}>
					{JSON.stringify(headersInstance, null, "\t")}
				</pre>
			</body>
		</html>
	);
}
