"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-200 ${
				isScrolled ? "bg-white" : ""
			}`}>
			<div className="mx-auto max-w-screen-xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				<nav className="hidden  md:flex items-center gap-4 lg:gap-6">
					<Link
						href="/"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/") &&
								"text-[#d3803c] hover:text-[#be6b27] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Home
					</Link>

					
					<Link
						href="/about"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/about") &&
								"text-[#d3803c] hover:text-[#be6b27] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
					About
					</Link>
					<Link
						href="/journey"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/journey") &&
								"text-[#d3803c] hover:text-[#be6b27] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						My Journey
					</Link>
					<Link
						href="/pricing"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/pricing") &&
								"text-[#d3803c] hover:text-[#be6b27] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Pricing
					</Link>
				</nav>

				<div className="hidden md:flex items-center gap-2">
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<Button
							asChild
							className="rounded-lg bg-[#d3803c] hover:bg-[#be6b27]/90  text-white">
							<Link href="/sign-in">Get Started</Link>
						</Button>
					</SignedOut>

				</div>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden flex items-center">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[250px] sm:w-[300px]">
							<nav className="flex flex-col gap-4 mt-8 items-center">
								<Link
									href="/"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/") &&
											"text-[#d3803c] hover:text-[#be6b27] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Home
								</Link>
								<Link
									href="/learning-ai"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/learning-ai") &&
											"text-[#d3803c] hover:text-[#be6b27] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Learning
								</Link>
								<Link
									href="/journey"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/journey") &&
											"text-[#d3803c] hover:text-[#be6b27] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									My Journey
								</Link>
								<Link
									href="/pricing"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/pricing") &&
											"text-[#d3803c] hover:text-[#be6b27] transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Pricing
								</Link>
								<SignedIn>
									<UserButton />
								</SignedIn>
								<SignedOut>
									<Button
										asChild
										className="rounded-lg bg-[#be6b27] hover:bg-[#be6b27]/90  text-white">
										<Link href="/sign-in">Get Started</Link>
									</Button>
								</SignedOut>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
