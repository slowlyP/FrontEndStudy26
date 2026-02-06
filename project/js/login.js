/* ===============================
   로그인 함수
   → 버튼 클릭 시 실행
=============================== */
function login(){

    /* ===============================
       입력값 가져오기
       document.getElementById
       → HTML id 선택
    =============================== */
    const email =
      document.getElementById("email").value;
  
    const password =
      document.getElementById("password").value;
  
  
    /* ===============================
       입력값 검사
       → 빈칸 방지
    =============================== */
    if(email === "" || password === ""){
  
      alert("이메일과 비밀번호를 입력하세요.");
      return;
    }
  
  
    /* ===============================
       로그인 성공 처리 (임시)
       → dashboard 이동
    =============================== */
    location.href = "dashboard.html";
  }
  