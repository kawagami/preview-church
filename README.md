# React + TypeScript + Vite

## 討論串
* https://chatgpt.com/c/691d6499-f428-8332-b39f-c0f2bd60938c

## 架構
```
src/
├── app/                     # 頁面與路由 (若未用 router，可省略)
│   ├── routes.tsx
│   ├── Home/
│   │   └── index.tsx
│   └── About/
│       └── index.tsx
│
├── components/              # 可重用的 UI 元件
│   ├── Button/
│   │   ├── index.tsx
│   │   └── style.css
│   └── Navbar/
│       ├── index.tsx
│       └── style.css
│
├── features/                # 功能模組 (若做中大型專案非常重要)
│   ├── auth/
│   │   ├── api.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   └── users/
│       ├── api.ts
│       ├── hooks.ts
│       └── store.ts
│
├── hooks/                   # 全域自定義 hooks
│   ├── useDarkMode.ts
│   ├── useFetch.ts
│   └── ...
│
├── services/                # API 服務層 (axios、fetch 請放這裡)
│   ├── http.ts              # axios instance
│   └── userService.ts
│
├── store/                   # 全域狀態管理
│   ├── index.ts
│   └── userStore.ts
│
├── utils/                   # 工具函式、格式轉換
│   ├── date.ts
│   ├── math.ts
│   └── string.ts
│
├── assets/                  # 靜態資源
│   ├── images/
│   └── fonts/
│
├── styles/                  # 全域樣式 (Tailwind, CSS variables)
│   └── globals.css
│
├── types/                   # TS 型別定義
│   ├── user.ts
│   └── api.ts
│
└── main.tsx                 # App 入口

```