"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut, signIn, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
	const { data: session } = useSession();
	const [providers, setProviders] = useState(null);
	const [toggleDropdown, setToggleDropdown] = useState(false);

	useEffect(() => {
		(async () => {
			const providers = await getProviders();
			setProviders(providers);
		})();
	});

	return (
		<nav className="mb-16 w-full flex-between pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image src="/assets/images/logo.svg" width={30} height={30} alt="logo" />
				<p className="logo_text">Promptopia</p>
			</Link>
			{/* Desktop Navigation */}
			<div className="hidden sm:flex">
				{session?.user ? (
					<div className="flex gap-3 md:gap-5">
						<Link href="/create-prompt" className="black_btn">
							Create Post
						</Link>
						<button className="outline_btn" type="button" onClick={signOut}>
							Sign Out
						</button>
						<Link href="/profile">
							<Image
								src={session?.user?.image}
								width={30}
								height={30}
								alt="profile-image"
								className="rounded-full"
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									className="black_btn"
									key={provider.id}
									type="button"
									onClick={() => signIn(provider.id)}
								>
									Sign In with {provider.name}
								</button>
							))}
					</>
				)}
			</div>

			{/* Mobile Navigation */}
			<div className="flex relative sm:hidden">
				{session?.user ? (
					<div className="flex">
						<Image
							src={session?.user?.image}
							width={30}
							height={30}
							className="rounded-full"
							alt="profile-image"
							onClick={() => setToggleDropdown((prevState) => !prevState)}
						/>
						{toggleDropdown && (
							<div className="dropdown">
								<Link
									href="/profile"
									className="dropdown_link"
									onClick={() => setToggleDropdown(false)}
								>
									My Profile
								</Link>
								<Link
									href="/create-prompt"
									className="dropdown_link"
									onClick={() => setToggleDropdown(false)}
								>
									Create Post
								</Link>
								<button
									className="mt-5 w-full black_btn"
									onClick={() => {
										setToggleDropdown(false);
										signOut();
									}}
								>
									Sign Out
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									className="black_btn"
									key={provider.id}
									type="button"
									onClick={() => signIn(provider.id)}
								>
									Sign In with {provider.name}
								</button>
							))}
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
