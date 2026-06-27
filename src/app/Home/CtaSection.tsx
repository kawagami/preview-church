import { Link } from 'react-router-dom';
import { HOME_CONTENT } from '../../constants/content';

export default function CtaSection() {
    const { title, subtitle, buttonText, linkTo } = HOME_CONTENT.cta;
    return (
        <section
            className="mt-20 w-full text-center
                       bg-blue-600 dark:bg-indigo-700
                       text-white p-10 rounded-2xl shadow-2xl transition-colors duration-300"
        >
            <h3 className="text-3xl font-bold mb-3">{title}</h3>
            <p className="text-lg mb-6 opacity-90">{subtitle}</p>
            <Link
                to={linkTo}
                className="inline-block bg-white dark:bg-gray-100
                           text-blue-600 dark:text-indigo-700
                           font-semibold py-3 px-8 rounded-full shadow-lg
                           hover:bg-gray-100 dark:hover:bg-gray-200
                           transition duration-200 transform hover:scale-105
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
                {buttonText}
            </Link>
        </section>
    );
}
