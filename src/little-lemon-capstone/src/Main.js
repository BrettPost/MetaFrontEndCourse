import TitleAreaSection from "./TitleSection";
import WeeklySpecials from "./WeeklySpecials";
import TestimonialSection from "./TestimonialSection";

function Main() {
    return (
        <main className="">
            <TitleAreaSection />
            <WeeklySpecials />
            <TestimonialSection />
            <article>
                About Us
            </article>
        </main>
    );
}

export default Main;