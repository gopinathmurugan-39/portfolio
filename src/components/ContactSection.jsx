import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsSubmitting(true);

		setTimeout(() => {
		toast({
			title: "Message sent!",
			description: "Thank you for your message. I'll get back to you soon.",
		});
		setIsSubmitting(false);
		}, 1500);
	};
	return (
		<section id="contact" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get In <span className="text-primary"> Touch</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Have a project in mind or want to collaborate? Feel free to reach out.
					I'm always open to discussing new opportunities.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div className="space-y-6">
							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Mail className="h-6 w-6 text-primary" />
								</div>
								<div>
								<a
									href="mailto:gopinathmurugan.work@gmail.com"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									gopinathmurugan.work@gmail.com
								</a>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
								<MapPin className="h-6 w-6 text-primary" />
								</div>
								<div>
								<a className="text-muted-foreground hover:text-primary transition-colors">
									Chennai, TN, India
								</a>
								</div>
							</div>
						</div>
					</div>
					<div className="space-y-8">
						<div className="flex flex-col items-start p-3">
							<h4 className="font-medium mb-4">Connect With Me</h4>
							<div className="flex space-x-4 justify-center">
								<a href="https://www.linkedin.com/in/gopinathmep/" target="_blank">
								<Linkedin />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};