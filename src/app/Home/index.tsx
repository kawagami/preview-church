// src\app\Home\index.tsx

import { Link } from "react-router-dom";

export default function Home() {
    return (
        // 外部容器不需要額外樣式，因為底層 App.tsx 已經處理了主要背景色
        <div className="w-full pb-16 pt-8 flex flex-col items-center">

            {/* 標頭區塊 (Header) */}
            <header
                // 淺色模式：bg-white, text-gray-900, text-gray-600
                // 黑暗模式：dark:bg-gray-800, dark:text-white, dark:text-gray-300
                className="text-center mb-16 px-6 py-12 
                           bg-white dark:bg-gray-800 
                           rounded-xl shadow-lg dark:shadow-2xl 
                           max-w-4xl w-full border-t-4 border-blue-600 
                           transition-colors duration-300"
            >
                <h1 className="text-5xl font-extrabold 
                               text-gray-900 dark:text-white 
                               mb-4 tracking-tight transition-colors duration-300">
                    🌟 歡迎來到我們的教會 🌟
                </h1>
                <p className="text-xl font-light 
                              text-gray-600 dark:text-gray-300 
                              transition-colors duration-300">
                    一個充滿愛與希望的家，邀請您一同尋求生命的平安與喜悅。
                </p>
            </header>

            {/* 內容卡片網格 (Grid Cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">

                {/* 卡片 1: 關於我們 */}
                <div
                    // 淺色模式：bg-white, text-gray-900, text-gray-700
                    // 黑暗模式：dark:bg-gray-800, dark:text-white, dark:text-gray-400
                    // 邊框：dark:border-gray-700
                    className="rounded-3xl shadow-xl hover:shadow-2xl 
                               transition-shadow duration-300 p-8 
                               bg-white dark:bg-gray-800 
                               border border-gray-100 dark:border-gray-700"
                >
                    <div className="text-4xl text-blue-600 mb-4">🙏</div>
                    <h2 className="text-2xl font-bold 
                                   text-gray-900 dark:text-white 
                                   mb-3 pb-2 border-b border-blue-50 dark:border-gray-700">
                        關於我們
                    </h2>
                    <p className="leading-relaxed text-base 
                                  text-gray-700 dark:text-gray-300">
                        我們是一個溫暖、友善且多元的社群，旨在為每一個人提供一個安全、接納的空間，一起成長，更加認識信仰的深度與美好。
                    </p>
                    <Link to="/about"
                        // 連結顏色：dark:text-blue-400
                        className="mt-4 inline-block 
                                     text-blue-600 dark:text-blue-400 
                                     font-medium hover:text-blue-700 dark:hover:text-blue-300 
                                     transition duration-150">
                        了解更多 →
                    </Link>
                </div>

                {/* 卡片 2: 聚會時間 */}
                <div
                    className="rounded-3xl shadow-xl hover:shadow-2xl 
                               transition-shadow duration-300 p-8 
                               bg-white dark:bg-gray-800 
                               border border-gray-100 dark:border-gray-700"
                >
                    <div className="text-4xl text-blue-600 mb-4">⏱️</div>
                    <h2 className="text-2xl font-bold 
                                   text-gray-900 dark:text-white 
                                   mb-3 pb-2 border-b border-blue-50 dark:border-gray-700">
                        聚會時間
                    </h2>
                    <ul className="space-y-3 mt-4 text-base">
                        <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">主日崇拜：</span>
                            <span className="text-gray-600 dark:text-gray-400">每週日 上午 10:00</span>
                        </li>
                        <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">查經班：</span>
                            <span className="text-gray-600 dark:text-gray-400">每週四 晚上 7:30</span>
                        </li>
                        <li className="text-sm pt-2 text-gray-500 dark:text-gray-500 italic">
                            (歡迎隨時加入我們)
                        </li>
                    </ul>
                </div>

                {/* 卡片 3: 我們的地點 (地圖) */}
                <div
                    className="rounded-3xl shadow-xl hover:shadow-2xl 
                               transition-shadow duration-300 p-8 
                               bg-white dark:bg-gray-800 
                               border border-gray-100 dark:border-gray-700 lg:col-span-1"
                >
                    <div className="text-4xl text-blue-600 mb-4">📍</div>
                    <h2 className="text-2xl font-bold 
                                   text-gray-900 dark:text-white 
                                   mb-3 pb-2 border-b border-blue-50 dark:border-gray-700">
                        我們的地點
                    </h2>
                    <p className="mb-4 text-base 
                                  text-gray-700 dark:text-gray-300">
                        我們位於台中的一處寧靜角落，交通便利，歡迎親自來訪。
                    </p>
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                        <iframe
                            className="w-full h-full"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455.0155040709548!2d120.6464846!3d24.1673825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8bbabc96af%3A0x98727b56a0b5fac7!2z5Z-6552j5pWZ5oGp5oOg5aCC!5e0!3m2!1szh-TW!2stw!4v1763725369739!5m2!1szh-TW!2stw"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </div>

            {/* 呼籲行動區塊 (CTA Section) */}
            <section
                // 淺色模式：bg-blue-600, text-white
                // 黑暗模式：dark:bg-indigo-700, text-white (保持白色以獲得高對比度)
                className="mt-20 max-w-5xl w-full text-center 
                           bg-blue-600 dark:bg-indigo-700 
                           text-white p-10 rounded-2xl shadow-2xl transition-colors duration-300"
            >
                <h3 className="text-3xl font-bold mb-3">期待與您相遇</h3>
                <p className="text-lg mb-6 opacity-90">
                    無論您在哪裡，我們都熱切期待與您在愛中相交。
                </p>
                <button
                    // 按鈕顏色：淺色模式 bg-white/text-blue-600，黑暗模式 dark:bg-gray-100/dark:text-indigo-700
                    className="bg-white dark:bg-gray-100 
                               text-blue-600 dark:text-indigo-700 
                               font-semibold py-3 px-8 rounded-full shadow-lg 
                               hover:bg-gray-100 dark:hover:bg-gray-200 
                               transition duration-200 transform hover:scale-105"
                >
                    聯繫我們
                </button>
            </section>

        </div>
    );
}
