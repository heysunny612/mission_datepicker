# [제로베이스 자바스크립트 미션과제] 3. 별점  

![123](https://user-images.githubusercontent.com/127499117/236481627-bfc16429-556e-4f46-8d7d-91f2684e0012.gif)


> 유독 자바스크립트 과제를 통해, 날짜 다루는 것을 많이 해본 느낌이다. 그래봐야 두 번이지만... 과제 하나하나 많은 고민과 시간을 쏟아야 했던 나에겐 많은 경험이라고 느껴진다.(웃음)  이번 미션은 클래스를 사용하여, 도전해 보고 싶었는데... 아직 내게는 익숙하지 않은 클래스란 녀석.. 이번 과제는 구현하는 것에 만족하고, 제출하였지만..! 클래스로 더 많은 코드를 만드는 것을 연습해 보고 확신이 들 때  클래스를 사용해서 리팩토링을 해봐야겠다...!!!  그리고 캘린더 외에 다른 영역이 클릭되면 캘린더를 숨기는 것도 정말 많은 고민 끝에, 나는 closest()이라는 메서드를 사용했는데.. 과제 통과되면 모범답안에는 어떻게 구현되었는지 유심히 살펴보아야겠다. 

<br/>
<br/>

## 새로 배운 것들

 <br/>

```js
//캘린더외에 다른영역이 클릭되면 숨기기
const onHideCalendar = (e) => {
  if (e.target.id !== 'datePicker') {
    const targetBox = e.target.closest('.calendar-box');
    if (!targetBox) {
      $calendarBox.classList.add('hide');
    }
  }
  clicked = false;
};

```

## 1.closest()
- Element.closet() 메서드는 인수로 주어진 CSS 선택자와 일치하는 요소를 찾을 때까지, 자기 자신을 포함해 위쪽(부모)까지 전부 순회하면서 찾는다.  반환 값은 selectors에 일치 하는 가장 가까운 부모 엘리먼트를, 일치하는 요소가 없으면 null 값을 반환한다. 

- 이벤트 위임을 이용해서 document의 이벤트 타깃 중, 선택된 날짜를 나타내어주는 input을 먼저 제외하고 달력을 눌렀을 때, 부모 태그에 달력을 감싸고 있는 태그인. calendar-box가 없다면 hide라는 클래스를 사용하여, 달력이 숨겨지게 하였다. 


 
