// src\app\Home\index.tsx

import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full pb-16 pt-8 flex flex-col items-center">

            <header className="text-center mb-16 px-6 py-12 bg-white rounded-xl shadow-lg max-w-4xl w-full border-t-4 border-blue-600">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    🌟 歡迎來到我們的教會 🌟
                </h1>
                <p className="text-xl text-gray-600 font-light">
                    一個充滿愛與希望的家，邀請您一同尋求生命的平安與喜悅。
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">

                <div className="rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 bg-white border border-gray-100">
                    <div className="text-4xl text-blue-600 mb-4">🙏</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b pb-2 border-blue-50">
                        關於我們
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base">
                        我們是一個溫暖、友善且多元的社群，旨在為每一個人提供一個安全、接納的空間，一起成長，更加認識信仰的深度與美好。
                    </p>
                    <Link to="/about" className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-700 transition duration-150">
                        了解更多 &rarr;
                    </Link>
                </div>

                <div className="rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 bg-white border border-gray-100">
                    <div className="text-4xl text-blue-600 mb-4">⏱️</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b pb-2 border-blue-50">
                        聚會時間
                    </h2>
                    <ul className="text-gray-700 space-y-3 mt-4 text-base">
                        <li className="flex justify-between items-center">
                            <span className="font-semibold">主日崇拜：</span>
                            <span className="text-gray-600">每週日 上午 10:00</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="font-semibold">查經班：</span>
                            <span className="text-gray-600">每週四 晚上 7:30</span>
                        </li>
                        <li className="text-sm pt-2 text-gray-500 italic">
                            (歡迎隨時加入我們)
                        </li>
                    </ul>
                </div>

                <div className="rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 bg-white border border-gray-100 lg:col-span-1">
                    <div className="text-4xl text-blue-600 mb-4">📍</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b pb-2 border-blue-50">
                        我們的地點
                    </h2>
                    <p className="text-gray-700 mb-4 text-base">
                        我們位於台中的一處寧靜角落，交通便利，歡迎親自來訪。
                    </p>
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            className="w-full h-full"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455.0155040709548!2d120.6464846!3d24.1673825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8bbabc96af%3A0x98727b56a0b5fac7!2z5Z-6552j5pWZ5oGp5oOg5aCC!5e0!3m2!1szh-TW!2stw!4v1763725369739!5m2!1szh-TW!2stw"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </div>

            <section className="mt-20 max-w-5xl w-full text-center bg-blue-600 text-white p-10 rounded-2xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-3">期待與您相遇</h3>
                <p className="text-lg mb-6 opacity-90">
                    無論您在哪裡，我們都熱切期待與您在愛中相交。
                </p>
                <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-200 transform hover:scale-105">
                    聯繫我們
                </button>
            </section>

        </div>
    );
}