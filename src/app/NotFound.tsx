import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <p className="text-8xl mb-6">🔍</p>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">找不到頁面</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                您訪問的頁面不存在或已被移動。
            </p>
            <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700
                           text-white font-semibold
                           py-3 px-8 rounded-full transition duration-200 transform hover:scale-105
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
                回到首頁
            </Link>
        </div>
    );
}
