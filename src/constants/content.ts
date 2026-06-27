export const HOME_CONTENT = {
    hero: {
        title: '🌟 歡迎來到我們的教會 🌟',
        subtitle: '一個充滿愛與希望的家，邀請您一同尋求生命的平安與喜悅。',
    },
    aboutCard: {
        icon: '🙏',
        title: '關於我們',
        body: '我們是一個溫暖、友善且多元的社群，旨在為每一個人提供一個安全、接納的空間，一起成長，更加認識信仰的深度與美好。',
        linkText: '了解更多 →',
        linkTo: '/about',
    },
    meetingCard: {
        icon: '⏱️',
        title: '聚會時間',
        note: '(歡迎隨時加入我們)',
        schedule: [
            { label: '主日崇拜：', time: '每週日 上午 10:00' },
            { label: '查經班：', time: '每週四 晚上 7:30' },
        ],
    },
    locationCard: {
        icon: '📍',
        title: '我們的地點',
        body: '我們位於台中的一處寧靜角落，交通便利，歡迎親自來訪。',
        mapSrc:
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455.0155040709548!2d120.6464846!3d24.1673825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8bbabc96af%3A0x98727b56a0b5fac7!2z5Z-6552j5pWZ5oGp5oOg5aCC!5e0!3m2!1szh-TW!2stw!4v1763725369739!5m2!1szh-TW!2stw',
    },
    cta: {
        title: '期待與您相遇',
        subtitle: '無論您在哪裡，我們都熱切期待與您在愛中相交。',
        buttonText: '聯繫我們',
        linkTo: '/about',
    },
};

export const ABOUT_CONTENT = {
    hero: {
        title: '關於我們',
        subtitle: '認識我們的異象、信仰與這個溫暖的大家庭。',
    },
    sections: [
        {
            icon: '✨',
            title: '我們的異象',
            body: '我們渴望成為一間以愛為根基的教會，讓每個走進來的人都能經歷接納、醫治與盼望，並在信仰中找到生命的方向。',
        },
        {
            icon: '🤝',
            title: '我們的信仰',
            body: '我們相信信仰不只是儀式，而是與神、與人真實的關係。透過敬拜、查經與彼此相愛，一起在生命中成長。',
        },
        {
            icon: '🏡',
            title: '我們的群體',
            body: '無論您的年齡、背景或人生階段，這裡都有您的位置。我們是一個多元、友善且彼此扶持的家。',
        },
    ],
    contact: {
        title: '聯絡我們',
        email: 'hello@example-church.tw',
        phone: '04-1234-5678',
        address: '台中市',
    },
};
