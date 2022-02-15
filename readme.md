## Vanila JS SPA
프레임워크 없이 순수 바닐라JS로 SPA(Single Page Application)을 개발해보자.

### Features
- location.pathname을 이용하여 Route Matching
- data-* Attribute를 활용하여 A 태그 이벤트 중단 후 Custom Route로 보내기
- pushState, popstate를 이용한 페이지 이동 및 유지 (뒤로가기,앞으로가기,새로고침)
- Abstract Class를 활용한 페이지 생성
- 정적리소스를 접근 처리 (Express)


### Project Run
```
npm i or yarn
npm start or yarn start
```

### Dependencies
- Express: 4.17.2
- Nodemon: 2.0.15

### Directory Structure
    /src
        /js
            index.js ( -> Router )
        /pages
            Page.js ( -> Page Abstract Class)
            Dashboard.js
            About.js
            Posts.js
            Contact.js
        index.html
    server.js ( -> NodeJS & Express )

### More..
- URL Parameters 처리
- JS Module Bundle (Webpack or Rollup)