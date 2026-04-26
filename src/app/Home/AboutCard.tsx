import { Link } from 'react-router-dom';
import { HOME_CONTENT } from '../../constants/content';
import Card from './Card';

export default function AboutCard() {
    const { icon, title, body, linkText, linkTo } = HOME_CONTENT.aboutCard;
    return (
        <Card icon={icon} title={title}>
            <p className="leading-relaxed text-base text-gray-700 dark:text-gray-300">{body}</p>
            <Link
                to={linkTo}
                className="mt-4 inline-block text-blue-600 dark:text-blue-400
                           font-medium hover:text-blue-700 dark:hover:text-blue-300
                           transition duration-150"
            >
                {linkText}
            </Link>
        </Card>
    );
}
