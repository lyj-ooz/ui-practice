# User List Filter UI 👩‍👩‍👧‍👧

randomuser API와 fetch를 이용하여 익명의 유저들의 정보를 가져온다. 맨 처음 화면에서는 Loading 이라는 텍스트가 디폴트로 보이고 데이터를 다 가져오면 innerHTML을 빈 스트링으로 초기화하여 loading 텍스트가 없어지고 데이터가 대신 보이도록 한다.

검색은 input에 input 이벤트가 일어날 때마다 contains 메소드로 input에 입력된 문자열이 포함된 li 요소 외의 나머지 li 요소에는 .hide 클래스를 주어 해당하지 않는 li 요소는 보이지 않도록 css 스타일링을 준다. 이렇게 계속 가려나가며 검색어와 일치하는 것만 보이도록 한다.

![user list filter ui gif](https://github.com/lyj-ooz/user-list-filter-UI/blob/master/background-boxes/0608.gif)
