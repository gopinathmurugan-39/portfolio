import { ArrowUp } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
			<p className="text-sm text-muted-foreground">
				This website is built with Vite, React, and Tailwind CSS, and deployed on AWS S3 with global distribution through CloudFront. CI/CD is powered by GitHub Actions for seamless deployments.
			</p>
			<p className="text-sm text-muted-foreground">
				&copy; {new Date().getFullYear()} GopinathMurugan. All rights reserved.
			</p>
			<a
				href="#hero"
				className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
			>
				<ArrowUp size={20} />
			</a>
		</footer>
	);
};
