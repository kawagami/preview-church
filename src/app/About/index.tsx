import { ABOUT_CONTENT } from '../../constants/content';
import Card from '../../components/Card';

export default function About() {
    const { hero, sections, contact } = ABOUT_CONTENT;
    return (
        <div className="w-full pb-16 pt-8 flex flex-col items-center">
            <header
                className="text-center mb-16 px-6 py-12
                           bg-white dark:bg-gray-800
                           rounded-2xl shadow-lg dark:shadow-2xl
                           w-full border-t-4 border-blue-600 dark:border-indigo-500
                           transition-colors duration-300"
            >
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                    {hero.title}
                </h1>
                <p className="text-xl font-light text-gray-600 dark:text-gray-300">{hero.subtitle}</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                {sections.map(({ icon, title, body }) => (
                    <Card key={title} icon={icon} title={title}>
                        <p className="leading-relaxed text-base text-gray-700 dark:text-gray-300">
                            {body}
                        </p>
                    </Card>
                ))}
            </div>

            <section
                className="mt-20 w-full text-center
                           bg-blue-600 dark:bg-indigo-700
                           text-white p-10 rounded-2xl shadow-2xl transition-colors duration-300"
            >
                <h3 className="text-3xl font-bold mb-6">{contact.title}</h3>
                <ul className="space-y-2 text-lg">
                    <li>
                        📧{' '}
                        <a
                            href={`mailto:${contact.email}`}
                            className="underline underline-offset-4 hover:opacity-80
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                        >
                            {contact.email}
                        </a>
                    </li>
                    <li>
                        📞{' '}
                        <a
                            href={`tel:${contact.phone}`}
                            className="underline underline-offset-4 hover:opacity-80
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                        >
                            {contact.phone}
                        </a>
                    </li>
                    <li>📍 {contact.address}</li>
                </ul>
            </section>
        </div>
    );
}
