export const metadata = {
  title: '포트폴리오 사이트 만들기 😛 Next-Site',
  description: 'next.js로 만든 포트폴리오 사이트입니다.',
  keyword: ["포트폴리오", "리액트", "뷰", "넥스트", "portfolio", "react.js", "vue.js", "next,js"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="images/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
