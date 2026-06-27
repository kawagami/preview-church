interface CardProps {
    icon: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Card({ icon, title, children, className = '' }: CardProps) {
    return (
        <div
            className={`rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8
                        bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 ${className}`}
        >
            <div className="text-4xl text-blue-600 dark:text-indigo-400 mb-4">{icon}</div>
            <h2
                className="text-2xl font-bold text-gray-900 dark:text-white
                           mb-3 pb-2 border-b border-gray-200 dark:border-gray-700"
            >
                {title}
            </h2>
            {children}
        </div>
    );
}
