// Imports
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>Hyperspace Test</h1>
			<div>
				<Link href="/page1"><button>Click to go to page 1</button></Link>
			</div>

			<div>
				<Link href="/page2"><button>Click to go to page 2</button></Link>
			</div>
		</main>
  	);
};
