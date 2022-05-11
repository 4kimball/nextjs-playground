# Next.js

### Next.js가 해결하려는 문제

기존 React로 만든 웹은 Client Side Rendering으로 초기에 렌더링에 필요한 모든 자원을 다운받아, Client에서 렌더링을 책임진다.
따라서 페이지를 이동할 때 새롭게 렌더링에 필요한 자원을 다시 다운받지 않아 빠르다. 하지만 초기 렌더링은 느릴 수 있으며, 비어있는 HTML 문서를 갖고있기 때문에 SEO에 적합하지 않다.

- Next.js는 Pre-Rendering을 통해서 미리 HTML 문서를 생성하기 때문에 SEO에 적합함.
-
