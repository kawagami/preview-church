import { HOME_CONTENT } from '../../constants/content';
import Card from '../../components/Card';

export default function LocationCard() {
    const { icon, title, body, mapSrc } = HOME_CONTENT.locationCard;
    return (
        <Card icon={icon} title={title}>
            <p className="mb-4 text-base text-gray-700 dark:text-gray-300">{body}</p>
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <iframe
                    className="w-full h-full"
                    title={`${title}地圖`}
                    loading="lazy"
                    src={mapSrc}
                    allowFullScreen
                />
            </div>
        </Card>
    );
}
