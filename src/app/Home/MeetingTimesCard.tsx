import { HOME_CONTENT } from '../../constants/content';
import Card from './Card';

export default function MeetingTimesCard() {
    const { icon, title, note, schedule } = HOME_CONTENT.meetingCard;
    return (
        <Card icon={icon} title={title}>
            <ul className="space-y-3 mt-4 text-base">
                {schedule.map(({ label, time }) => (
                    <li
                        key={label}
                        className="flex justify-between items-center text-gray-700 dark:text-gray-300"
                    >
                        <span className="font-semibold">{label}</span>
                        <span className="text-gray-600 dark:text-gray-400">{time}</span>
                    </li>
                ))}
                <li className="text-sm pt-2 text-gray-500 dark:text-gray-500 italic">{note}</li>
            </ul>
        </Card>
    );
}
