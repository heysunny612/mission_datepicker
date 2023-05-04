let currDate = new Date();
let currMonth = currDate.getMonth();
let currYear = currDate.getFullYear();
let clicked = false;
const monthNames = [
  'January 1월',
  'February 2월',
  'March 3월',
  'April 4월',
  'May 5월',
  'June 6월',
  'July 7월',
  'August 8월',
  'September 9월',
  'October 10월',
  'November 11월',
  'December 12월',
];
const $calendar = document.querySelector('.calendar');
const $calendarNav = document.querySelector('.calendar-nav');
const $dateInput = document.querySelector('.select-date');
const $calendarBox = document.querySelector('.calendar-box');

const displayCalendar = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay(); //1일 시작요일
  const lastDate = new Date(year, month + 1, 0).getDate(); // 이번달 마지막 날짜
  const lastDay = new Date(year, month, lastDate).getDay(); //이번달 마지막 요일
  const lastDayOfLastMonth = new Date(year, month, 0).getDate(); //지난달 마지막 날짜
  const $navMonth = document.querySelector('.nav-month');
  const $navYear = document.querySelector('.nav-year');

  $navMonth.innerText = monthNames[month];
  $navYear.innerText = year;

  const $calendarBody = document.querySelector('.calendar-body');
  $calendarBody.innerHTML = '';
  //현재달에 이전달 불러오기
  for (let i = firstDay; i > 0; i--) {
    const $day = document.createElement('li');
    $day.classList.add('notCurrDay');
    $day.innerText = lastDayOfLastMonth - i + 1;
    $calendarBody.append($day);
  }
  //현재달 만들기
  for (let i = 1; i <= lastDate; i++) {
    const $day = document.createElement('li');
    $day.innerText = i;
    $calendarBody.append($day);
    //오늘 표시
    if (
      i - firstDay + 1 === currDate.getDate() &&
      month === currDate.getMonth()
    ) {
      $day.classList.add('today');
    }
  }
  //현재달에 다음달 불러오기
  for (let i = lastDay; i < 6; i++) {
    const $day = document.createElement('li');
    $day.classList.add('notCurrDay');
    $day.innerText = i - lastDay + 1;
    $calendarBody.append($day);
  }

  onSelectDate(year, month, $calendarBody);
};

//버튼 클릭시 날짜.년도 업데이트
const onUpdateDate = (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  e.target.id === 'prev' ? currMonth-- : currMonth++;

  if (currMonth < 0 || currMonth > 11) {
    currDate = new Date(currYear, currMonth);
    currYear = currDate.getFullYear();
    currMonth = currDate.getMonth();
  } else {
    currDate = new Date();
  }
  displayCalendar(currYear, currMonth);
};

//선택된 날 인풋에 업로드
const onSelectDate = (year, month, $calendarBody) => {
  $calendarBody.addEventListener('click', (e) => {
    if (e.target.matches('.notCurrDay') || e.target === $calendarBody) return;

    const days = [...$calendarBody.children];
    days.forEach((day) => day.classList?.remove('select'));
    e.target.classList.add('select');

    const day = e.target.innerText;
    $dateInput.value = `${year}년 ${month + 1}월 ${day}일`;
  });
};

//인풋 클릭시 달력 보여주기
const onShowCalendar = () => {
  if (clicked) {
    $calendarBox.classList.add('hide');
  } else {
    $calendarBox.classList.remove('hide');
  }
  clicked = !clicked;
};

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

const dataPicker = () => {
  displayCalendar(currYear, currMonth);
  $calendarNav.addEventListener('click', onUpdateDate);
  $dateInput.addEventListener('click', onShowCalendar);
  document.addEventListener('click', onHideCalendar);
};

dataPicker();
