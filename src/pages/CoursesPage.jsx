import Wrapper from "../components/Wrapper";

const CoursesPage = () => {
    return (
        <Wrapper>
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                {/* Title */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">
                        Explore Courses
                    </p>
                </div>

                {/* Search Bar */}
                <div className="px-4 py-3">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-[#47649e] flex border-none bg-[#e6ebf4] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                                </svg>
                            </div>
                            <input
                                placeholder="Search for courses"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d121c] focus:outline-0 focus:ring-0 border-none bg-[#e6ebf4] focus:border-none h-full placeholder:text-[#47649e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            />
                        </div>
                    </label>
                </div>

                {/* Filters */}
                <div className="flex gap-3 p-3 flex-wrap pr-4">
                    {["Category", "Price", "Level"].map((label) => (
                        <button
                            key={label}
                            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e6ebf4] pl-4 pr-2"
                        >
                            <p className="text-[#0d121c] text-sm font-medium leading-normal">
                                {label}
                            </p>
                            <div className="text-[#0d121c]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Featured Courses */}
                <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    Featured Courses
                </h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    {[
                        {
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvGnWDlqG9dk7YqfnR5k7N626e8IY9qDysr_S2K-1ay_EOBQzyZ7sZguz21hmeFsK459FPPl6j2OPvaJfvf8JC9qhsbZ4K-mPnaxi_n0dniLYRzHoNOjMrODtCXQLYmM6Oi2ohSJDA7OV8vKqVmO-27qBR3pYZOu9AnXHKQUjqx9ggaokMFB67mgilggHoLHuo50-pNFQ38qVMgqs2661sabLSFaTrShcwJQVlMCg-8pTI4RElAZJFOWq7e8swYtF27HAhp7LgSGXB",
                            title: "Introduction to Data Science",
                            desc: "Learn the basics of data analysis and visualization.",
                        },
                        {
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe5UkznCiFlnW1gPeVOJSRK3JM2DZVGalnVWCz5YtNA7CElWw_W_71WZvgUBqJSsdMCce7AsIfjBrfm3L04GwDF9J2a22Utj4yypSQeOT-qW46W087wJBw150FqcJHHZCZkDBY4egihmuC-jNbi0a7sj2H5M6UJ4o_ewZrvoPDLI-SJYttggB01oNQXrS2_YjosO2BFPeyonQ7NCz6iiVQgLisCXlWrkz-EFjvdTgBXzLE6GSJcasCBzUkZC2gpktcPNQOlofNbdgW",
                            title: "Advanced Machine Learning",
                            desc: "Master advanced machine learning algorithms and techniques.",
                        },
                        {
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoJF5a6L9Da-L7MVTkzJezZCGgSuXvZ5LEGtl3ENY0at_DuJapFG6vy2sdpMxMuGDTisANDCMfNs09DftzStvPeCzcBFZmsA7EWrRxJMIZSQThtQ16ZWeXzIGoGW8motWvrOFpzpH3DPYYgUHH5qdq3ASPBG-Al7armVfXimTM6pKA4cLVqKGBaXQ4jdJrphfMQVgPH7gbL5Li1ecWFLnF-L0hsflGsftM-XJeDfRHBOuPUUEct4nN55US_wYSOXCDTGp0BL3szXzL",
                            title: "Web Development Bootcamp",
                            desc: "Build responsive websites with HTML, CSS, and JavaScript.",
                        },
                        {
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXzpQuJFOpl4Ul1YMlVM4RTLmziIuu78sF5P1Qsht1R8dX6HFjD4YFiIJ3B279xrH62uKvS6hStl_vhpLoCS1xEodi8cSZv4UzZKEllkru9a9umgc8iAcL4x4Y5OI8pxsLlEe_wyxWaMcKnzx-PP4AJqSRUmW2xSrZDRP1YggjXWM--Vzb-kyi5X46zpVfO56CVcidm927J5VxMZwafJO5g1gbTuhdc_Vjx4nyEnpRZRDIE30vE1lWfqouVzKMCu4vxSv8FWhG1bl_",
                            title: "Mobile App Development",
                            desc: "Create native mobile apps for iOS and Android.",
                        },
                        {
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpooOWPc0Yqjl0iOvNP7G_FlLLBP14v60nxFhtOZRmF5gJhId24oN5exT_PUbWklEDb9OYT-aEPebbz0noIM1p5B5Ksq1BUU11xj1ZUirCGFp2EEOSTw4UQ4-6S712u2yIPjhYiLkTL_tEhI3Vf6ulyGdb-Uc1yxlOdfr591FM-5PCsbhvM36eoLW9xBWCdcQk-0H2lw0V_F29ktJmsbRwlXeWIyFs9ZHV6AdRmsd0Zk8fcgrQ8cMkzg_lbv8p4io2dWMbd3bYIHDv",
                            title: "Cloud Computing Fundamentals",
                            desc: "Understand the fundamentals of cloud computing services.",
                        },
                        {
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsMTFMi1fBVJRDbu7z0lIL6j1ZKZzMNl95A7TrQbxPZKwQf4nOc2aF2cGvFx2rA6kMc39R1vVqfeLi-vK-BHUmWwqN7QnaFTuH8Vkr_1p2dXs7QrNiotJhEUrYKn-BupMkQ4FATZhHVPTZzd6YMgMKhqSe-cc0HBIv71LgadVdl3KharbYRE8zVgb-KhVVT9_0V-TLpCdsfoLx63mXuKFaethT4RQwmN_bcXottERpbk3V61ZuTdBaxIrF_7ixkzICzyk-M9_-ygh_",
                            title: "Cybersecurity Essentials",
                            desc: "Protect your systems and data from cyber threats.",
                        },
                    ].map((course) => (
                        <div
                            key={course.title}
                            className="flex flex-col gap-3 pb-3"
                        >
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                style={{
                                    backgroundImage: `url(${course.img})`,
                                }}
                            ></div>
                            <div>
                                <p className="text-[#0d121c] text-base font-medium leading-normal">
                                    {course.title}
                                </p>
                                <p className="text-[#47649e] text-sm font-normal leading-normal">
                                    {course.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center p-4">
                    <a
                        href="#"
                        className="flex size-10 items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                        </svg>
                    </a>
                    <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#0d121c] rounded-full bg-[#e6ebf4]">
                        1
                    </a>
                    <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d121c] rounded-full">
                        2
                    </a>
                    <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d121c] rounded-full">
                        3
                    </a>
                    <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d121c] rounded-full">
                        4
                    </a>
                    <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d121c] rounded-full">
                        5
                    </a>
                    <a
                        href="#"
                        className="flex size-10 items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </Wrapper>
    );
};

export default CoursesPage;