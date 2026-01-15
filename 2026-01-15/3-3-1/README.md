# 실습 과제: 공개 API 응답 분석하기

## 목표

-공개 API의 응답 데이터를 직접 확인하고,  
 JSON 구조를 분석하여 필요한 데이터를 이해할 수 있다.

---

## 1 - 브라우저에서 공개 API URL 직접 접속하기

본 과제에서는 연습용 공개 API인 JSONPlaceholder를 사용하였다.

접속 URL  
https://jsonplaceholder.typicode.com/posts

---

## 2 - 응답 데이터의 JSON 구조 분석

해당 응답 데이터는 Object 형태의 JSON이다.

{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}

userId = number -> 게시글을 작성한 사용자 id
id = number -> 게시글의 고유 식별자
title = string -> 게시글의 제목
body = string -> 게시글의 본문

---

## 3 - Request와 Response의 차이

### Request

- https://jsonplaceholder.typicode.com/posts/1  
  이 게시글 1번 데이터 주세요

### Response

- {  
  "userId": 1,  
  "id": 1,  
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",  
  "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"  
  }  
  여기요

이와 같이 클라이언트가 Request를 하여 서버에 요청하면 서버는 클라이언트의 요청을 처리한 후 Response로 반환한다

---

## 4 - API키가 필요한 이유와 보안상 주의점

### 필요한 이유

- 누가 사용하는지 신원을 확인할 수 있다
- 얼마나 사용했는지 기록이 가능하다
- 권한 관리를 통해 인증되지 않은 사용자가 사용하는것을 막을 수 있다

### 보안상 주의점

- API키는 비밀번호처럼 관리해야 한다
- GitHub에 절대 공개하면 안된다
- 환경변수로 안전하게 관리한다
- 혹시나 키가 유출되면 즉시 폐기 후 재발급을 해야 한다
