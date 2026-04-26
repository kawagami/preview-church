import { HOME_CONTENT } from '../../constants/content';

export default function HeroSection() {
    const { title, subtitle } = HOME_CONTENT.hero;
    return (
        <header
            className="text-center mb-16 px-6 py-12
                       bg-white dark:bg-gray-800
                       rounded-xl shadow-lg dark:shadow-2xl
                       max-w-4xl w-full border-t-4 border-blue-600
                       transition-colors duration-300"
        >
            <h1
                className="text-5xl font-extrabold text-gray-900 dark:text-white
                           mb-4 tracking-tight transition-colors duration-300"
            >
                {title}
            </h1>
            <p className="text-xl font-light text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {subtitle}
            </p>
        </header>
    );
}
