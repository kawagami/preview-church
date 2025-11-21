export default function Home() {
    return (
        <div className="w-full p-8 flex flex-col items-center">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-2">首頁</h1>
                <p className="text-lg text-gray-600">
                    歡迎來到我們的教會
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                <div className="rounded-2xl shadow p-6 bg-white">
                    <h2 className="text-2xl font-semibold mb-3">關於我們</h2>
                    <p className="text-gray-700 leading-relaxed">
                        我們是一個溫暖、友善的社群，歡迎每一位想要更加認識信仰與尋找平安的人。
                    </p>
                </div>

                <div className="rounded-2xl shadow p-6 bg-white md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-3">地點</h2>
                    <p className="text-gray-700 mb-4">我們位於台中的一處寧靜角落，歡迎親自來訪。</p>

                    {/* <div className="w-full h-80 rounded-2xl overflow-hidden shadow">
                        <iframe
                            className="w-full h-full"
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455.0155040709548!2d120.6464846!3d24.1673825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8bbabc96af%3A0x98727b56a0b5fac7!2z5Z-6552j5pWZ5oGp5oOg5aCC!5e0!3m2!1szh-TW!2stw!4v1763725369739!5m2!1szh-TW!2stw"
                        ></iframe>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
