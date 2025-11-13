import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/Navbar";
import { ProjectsSectiom } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home  = () => {
	return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
		<ThemeToggle />

		{/* {Background Effects} */}
		<StarBackground />

		{/* {NavBar} */}
		<NavBar />

		{/* {Main content} */}
		<main>
			<HeroSection />
			<AboutSection />
			<ProjectsSectiom />
			<ContactSection />
		</main>

		{/* {Footer} */}
		<Footer />
	</div>;
}