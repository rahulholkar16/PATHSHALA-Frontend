const FeatureCard = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
            <div className="flex flex-1 gap-3 cursor-pointer rounded-lg border border-[#cfdce7] bg-slate-50 p-4 flex-col">
                <div
                    className="text-[#0d151b]"
                    data-icon="Presentation"
                    data-size="24px"
                    data-weight="regular"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151b] text-base font-bold leading-tight">
                        Expert Instructors
                    </h2>
                    <p className="text-[#4c759a] text-sm font-normal leading-normal">
                        Learn from experienced professionals who are passionate about teaching.
                    </p>
                </div>
            </div>

            <div className="flex flex-1 gap-3 cursor-pointer rounded-lg border border-[#cfdce7] bg-slate-50 p-4 flex-col">
                <div
                    className="text-[#0d151b]"
                    data-icon="UsersThree"
                    data-size="24px"
                    data-weight="regular"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151b] text-base font-bold leading-tight">
                        Collaborative Learning
                    </h2>
                    <p className="text-[#4c759a] text-sm font-normal leading-normal">
                        Engage with a vibrant community of learners and collaborate on projects.
                    </p>
                </div>
            </div>

            <div className="flex flex-1 gap-3 cursor-pointer rounded-lg border border-[#cfdce7] bg-slate-50 p-4 flex-col">
                <div
                    className="text-[#0d151b]"
                    data-icon="Certificate"
                    data-size="24px"
                    data-weight="regular"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M248,128a56,56,0,1,0-96,39.14V224a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14A55.81,55.81,0,0,0,248,128ZM192,88a40,40,0,1,1-40,40A40,40,0,0,1,192,88Zm3.58,112.84a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0v32.47ZM136,192a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16,8,8,0,0,1-16,0H40V184h88A8,8,0,0,1,136,192Zm-16-56a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,136Zm0-32a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,104Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151b] text-base font-bold leading-tight">
                        Verified Certificates
                    </h2>
                    <p className="text-[#4c759a] text-sm font-normal leading-normal">
                        Earn certificates upon course completion to showcase your skills.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default FeatureCard;