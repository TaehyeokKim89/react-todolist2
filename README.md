# Personal Project : TodoList 2

---

> React 숙련 주차 개인 과제 TodoList 만들기

## 📋목차

---

[1. 프로젝트 소개](#프로젝트-소개)

[2. 개발 환경](#개발-환경)

[3. 기능 소개](#기능-소개)

[4. 개발 과정](#개발-과정)

## 프로젝트 소개

---

-   TodoList는 할 일을 추가하고, 완료시 완료리스트에 취소시 다시 , 할일 리스트로 돌아오게 할 수 있는
    기능을 구현하고, 상세페이지를 통해 상세내용을 확이할 수 있는 페이지를 구현했다.. 그리고 다시 홈
    으로 돌아오는 기능을 구현했다.

## 개발 환경

---

> <img src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=#61DAFB">
> <img src="https://img.shields.io/badge/javascript-black?style=for-the-badge&logo=javascript&logoColor=#F7DF1E">

## 기능 소개

---

1. 추가 기능 : IputBox를 통해 value값을 받고 추가하기 버튼을 누르면 새로운 리스트(리스트에는 ID , 제
   목, 내용, 완료여부가 들어간다.)를 추가해 주는 기능이다.

-   ID를 부여하는 과정에서 length의 사용을 자제하기 위해 id를부여해주는 라이브러리를 검색했다. uuid,
    shortid, react-id-generator 를 찾았고, uuid와 shortid는 id값이 너무 길고 문자가 섞여
    react-id-generator를 사용했다.

2. 삭제 기능 : 삭제 버튼을 누르면 리스트에서 ID값을 매칭(filter() 활용)해 해당 ID를 제외하고 나머지
   리스트를 보여준다.

3. 변경 기능 (완료 & 취소) : 완료 or 취소 버튼을 누를시 해당ID와 일치하는 리스트에서 완료버튼 누를시
   isDone을 true로 취소버튼 누를시 isDone을 false로 변경해 보여지는 위치를 달리하는 기능이다.

4. 상세 페이지는 Link와 useParams를 이용했고, 상세페이지마다 id 파라미터를 가져와 해당 todo의 id를
   매칭해 찾아 상세페이지에 출력하도록 했다.

## 개발 과정

---

1. redux를 익힐 수 있는 시간이었다. 리덕스를 통해 전역으로 state를 관리를 하여 안정적으로 컴포넌트간
   의 정보전달이 가능함을 실제 코드를 쳐보면서 느낄 수 있었다.

2. 커스텀 훅을 만드는 과정에서 애를 먹었다. 커스텀 훅을 만드는 과정이 이해가 가지 않아 어떤 데이터값
   이 오가는지를 파악하는데 시간을 많이 허비했다. 하지만 이 시간을 통해 커스텀 훅에 대해 완벽하진 않
   지만 흐름을 파악할 수 있었던 소중한 시간이었다.
