import AboutCard from './AboutCard';
import CtaSection from './CtaSection';
import HeroSection from './HeroSection';
import LocationCard from './LocationCard';
import MeetingTimesCard from './MeetingTimesCard';

export default function Home() {
    return (
        <div className="w-full pb-16 pt-8 flex flex-col items-center">
            <HeroSection />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                <AboutCard />
                <MeetingTimesCard />
                <LocationCard />
            </div>
            <CtaSection />
        </div>
    );
}
