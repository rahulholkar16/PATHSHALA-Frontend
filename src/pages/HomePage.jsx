import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import PopularCourse from "../components/PopularCourse";
import Wrapper from "../components/Wrapper";

export default function HomePage() {
    return (
        <Wrapper>
            <div
                className="flex min-h-[480px] max-w-[1000px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 py-10 @[480px]:px-10 rounded-2xl"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5zVdV63_cy7I1JM-zgSukmWYWIaGtugpM-BZPlVxbvv9zngyfXPT43VC_jbIbxPJRshhvjrshnJf-ZaEvysN6OdwhHrwWuKiOD2dDaDJBtOQ4fEW0RKnvoNm3-2j5Wr95aqKl_lNlAtPBhuvAeb2k8TFud5W1guLwdHX9DWPCq73bVyZWxiUBdzUm90GINJESrAuo1Sr3LBrl9WxhWquj3FXHxjspfRGXs2seS8EGdqON_mbW1gygs-ywvD3jQCQwyaoF6Y4ospQA")`,
                }}
            >
                <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl flex flex-col">
                        Unlock Your Potential with <span>PATHSHALA</span>
                    </h1>
                    <h2 className="text-white text-wrap text-sm font-normal leading-normal @[480px]:text-base">
                        Explore a vast library of courses taught by industry
                        experts. Learn at your own pace and achieve your
                        personal and professional goals.
                    </h2>
                </div>
                <Button variant="primary">Get Started</Button>

            </div>

            <div className="flex flex-col gap-10 px-4 py-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#0d151b] tracking-light text-[32px] font-extrabold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                        Why Choose PATHSHALA?
                    </h1>
                    <p className="text-[#0d151b] text-base font-normal leading-normal max-w-[720px]">
                        PATHSHALA offers a comprehensive learning experience designed to help you succeed.
                    </p>
                </div>

            </div>

            <FeatureCard />
            <PopularCourse />
        </Wrapper>
    );
}
