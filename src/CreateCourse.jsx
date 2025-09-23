import React from "react";

export default function CreateCourse() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <aside className="w-64 flex-shrink-0 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex flex-col">
                    <div className="h-16 flex items-center justify-center border-b border-border-light dark:border-border-dark px-4">
                        <a
                            href="#"
                            className="flex items-center gap-2 text-xl font-bold text-foreground-light dark:text-foreground-dark"
                        >
                            <svg
                                className="h-6 w-6 text-primary"
                                fill="none"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span>SkillUp</span>
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-grow p-4 space-y-2">
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-foreground-light dark:text-foreground-dark bg-primary/10 dark:bg-primary/20 font-semibold">
                            <span className="material-symbols-outlined text-primary">
                                dashboard
                            </span>
                            <span>Dashboard</span>
                        </a>

                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-light dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">school</span>
                            <span>Courses</span>
                        </a>

                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-light dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">group</span>
                            <span>Students</span>
                        </a>

                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-light dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">chat</span>
                            <span>Messages</span>
                        </a>

                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-light dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">monitoring</span>
                            <span>Earnings</span>
                        </a>

                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-light dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">bar_chart</span>
                            <span>Analytics</span>
                        </a>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-border-light dark:border-border-dark">
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-light dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">settings</span>
                            <span>Settings</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-light dark:text-muted-dark hover:bg-red-500/10 hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined">logout</span>
                            <span>Logout</span>
                        </a>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-grow flex flex-col">
                    {/* Header */}
                    <header className="h-16 flex items-center justify-between px-6 bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark">
                        <div className="flex items-center gap-4">
                            <button className="md:hidden p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-muted-light dark:text-muted-dark">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                            <h1 className="text-xl font-bold">Create New Course</h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
                            </button>

                            <div className="flex items-center gap-3">
                                <button
                                    className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwcnGUj5DjHXHwXdLwcNTqXNue_AtM7UgxSCsgCBOFRatJk1CFfhGjXm3O0P5cOgsPft9fS3NIasfJVPplLLCHWOKdqKqLn73leG4ixLTFzVXQj1U7Lqys4ws6hNCgNPw2Frqsw9OwaPpvB6M77_tUE5OENveVijR_-Qwq5-eQJpO_dIFqwaRjLN1vnjm9dMZ0BqRZ5bw5C4B5d4vfQW_ylDiyuPUjQXWb7JeU4WQ-79S-vvRgCLR24NvMKEfTrFo5CX8MzzFIQtTY')",
                                    }}
                                ></button>
                                <div>
                                    <p className="text-sm font-semibold">Jane Doe</p>
                                    <p className="text-xs text-muted-light dark:text-muted-dark">
                                        Instructor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main */}
                    <main className="flex-grow p-6 overflow-y-auto no-scrollbar">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                                <div className="mb-8">
                                    {/* Steps */}
                                    <ol className="flex items-center w-full">
                                        <li className="flex w-full items-center text-primary after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-2 after:inline-block">
                                            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full lg:h-12 lg:w-12">
                                                <span className="material-symbols-outlined text-white">
                                                    description
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-border-light after:border-1 after:inline-block">
                                            <div className="flex items-center justify-center w-10 h-10 bg-background-light dark:bg-background-dark rounded-full lg:h-12 lg:w-12">
                                                <span className="material-symbols-outlined text-muted-light dark:text-muted-dark">
                                                    video_library
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-border-light after:border-1 after:inline-block">
                                            <div className="flex items-center justify-center w-10 h-10 bg-background-light dark:bg-background-dark rounded-full lg:h-12 lg:w-12">
                                                <span className="material-symbols-outlined text-muted-light dark:text-muted-dark">
                                                    sell
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex items-center justify-center w-10 h-10 bg-background-light dark:bg-background-dark rounded-full lg:h-12 lg:w-12">
                                                <span className="material-symbols-outlined text-muted-light dark:text-muted-dark">
                                                    publish
                                                </span>
                                            </div>
                                        </li>
                                    </ol>

                                    <div className="grid grid-cols-4 mt-2 text-center text-sm font-medium">
                                        <div className="text-primary">Details</div>
                                        <div className="text-muted-light dark:text-muted-dark">
                                            Curriculum
                                        </div>
                                        <div className="text-muted-light dark:text-muted-dark">
                                            Pricing
                                        </div>
                                        <div className="text-muted-light dark:text-muted-dark">
                                            Publish
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-xl font-bold mb-1">Course Details</h2>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">
                                            Start with the basics. What's your course about?
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="course-title"
                                                className="block text-sm font-medium mb-1"
                                            >
                                                Course Title
                                            </label>
                                            <input
                                                id="course-title"
                                                type="text"
                                                placeholder="e.g., Introduction to Python Programming"
                                                className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label
                                                htmlFor="course-description"
                                                className="block text-sm font-medium mb-1"
                                            >
                                                Course Description
                                            </label>
                                            <textarea
                                                id="course-description"
                                                rows="4"
                                                placeholder="A brief summary of what students will learn in this course."
                                                className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary"
                                            ></textarea>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="course-category"
                                                className="block text-sm font-medium mb-1"
                                            >
                                                Category
                                            </label>
                                            <select
                                                id="course-category"
                                                className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary"
                                            >
                                                <option>Select a category</option>
                                                <option>Development</option>
                                                <option>Business</option>
                                                <option>Design</option>
                                                <option>Marketing</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="course-level"
                                                className="block text-sm font-medium mb-1"
                                            >
                                                Level
                                            </label>
                                            <select
                                                id="course-level"
                                                className="w-full bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary"
                                            >
                                                <option>Select a level</option>
                                                <option>Beginner</option>
                                                <option>Intermediate</option>
                                                <option>Advanced</option>
                                                <option>All Levels</option>
                                            </select>
                                        </div>

                                        {/* Thumbnail */}
                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium mb-1">
                                                Course Thumbnail
                                            </label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border-light dark:border-border-dark border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-muted-light dark:text-muted-dark"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 48 48"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-muted-light dark:text-muted-dark">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-card-light dark:bg-card-dark rounded-md font-medium text-primary hover:text-primary/80"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input
                                                                id="file-upload"
                                                                type="file"
                                                                className="sr-only"
                                                            />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-muted-light dark:text-muted-dark">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-end gap-3 mt-8">
                                        <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-background-light dark:bg-background-dark hover:bg-primary/10">
                                            Save Draft
                                        </button>
                                        <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90">
                                            Next: Curriculum
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}