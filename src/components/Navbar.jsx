import Button from "./Button";

function Navbar() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef3] px-10 py-3">
            <div className="flex items-center gap-4 text-[#0d151b]">
                <div className="size-4">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-[#0d151b] text-lg font-bold leading-tight tracking-[-0.015em]">
                    PATHSHALA
                </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    {["Home", "Courses", "Instructors", "Pricing"].map((link) => (
                        <a key={link} className="text-[#0d151b] text-sm font-medium leading-normal" href="#">
                            {link}
                        </a>
                    ))}
                </div>
                <div className="flex gap-2">
                    <Button variant="primary">Sign up</Button>
                    <Button variant="secondary">Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
