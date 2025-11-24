import { ArrowUp } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex justify-between items-center gap-5">
			<div className="flex-1">
				<p className="text-sm text-muted-foreground pb-1">
					This website is built with Vite, React, and Tailwind CSS, and deployed on AWS S3 with global distribution through CloudFront. CI/CD is powered by GitHub Actions for seamless deployments.
				</p>
				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} GopinathMurugan. All rights reserved.
				</p>
			</div>
			<a
				href="#hero"
				className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
			>
				<ArrowUp size={20} />
			</a>
		</footer>
	);
};
