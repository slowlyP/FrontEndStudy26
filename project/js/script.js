/* ======================================================
   ELEMENT SELECT
====================================================== */
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const mypageBtn = document.getElementById("mypageBtn");
const adminBtn = document.getElementById("adminBtn");

const mypage = document.getElementById("mypage");
const closeMypage = document.getElementById("closeMypage");


/* ======================================================
   LOGIN
====================================================== */
if(signinBtn){

  signinBtn.addEventListener("click", e=>{
    e.preventDefault();

    if(signinBtn.textContent === "sign out"){
      signinBtn.textContent = "sign in";
      if(signupBtn) signupBtn.style.display = "inline";
      if(mypageBtn) mypageBtn.style.display = "none";
      if(adminBtn) adminBtn.style.display = "none";
      return;
    }

    signinBtn.textContent = "sign out";
    if(signupBtn) signupBtn.style.display = "none";
    if(mypageBtn) mypageBtn.style.display = "inline";

    const isAdmin = confirm("관리자로 로그인?");

    if(isAdmin && adminBtn){
      adminBtn.style.display = "inline";
    }

  });

}


/* ======================================================
   MY PAGE
====================================================== */
if(mypageBtn){
  mypageBtn.addEventListener("click", e=>{
    e.preventDefault();
    if(mypage) mypage.classList.add("active");
  });
}

if(closeMypage){
  closeMypage.addEventListener("click", ()=>{
    if(mypage) mypage.classList.remove("active");
  });
}


/* ======================================================
   TAB
====================================================== */
const tabs = document.querySelectorAll(".mypage-menu li");
const contents = document.querySelectorAll(".tab");

if(tabs.length > 0){

  tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{

      tabs.forEach(t=>t.classList.remove("active"));
      contents.forEach(c=>c.classList.remove("active"));

      tab.classList.add("active");

      const target = document.getElementById(tab.dataset.tab);
      if(target) target.classList.add("active");

    });
  });

}


/* ======================================================
   PROFILE SAVE
====================================================== */
const saveProfile = document.getElementById("saveProfile");

if(saveProfile){
  saveProfile.addEventListener("click", ()=>{
    alert("프로필 수정 완료");
  });
}


/* ======================================================
   PASSWORD
====================================================== */
const savePw = document.getElementById("savePw");

if(savePw){

  savePw.addEventListener("click", ()=>{

    const pw1 = document.getElementById("pw1").value;
    const pw2 = document.getElementById("pw2").value;

    if(pw1 !== pw2){
      alert("비밀번호 불일치");
      return;
    }

    alert("비밀번호 변경 완료");

  });

}


/* ======================================================
   ADMIN CARD MOVE
====================================================== */
const adminCards = document.querySelectorAll(".admin-card");

if(adminCards.length > 0){

  adminCards.forEach(card => {

    card.addEventListener("click", () => {

      const target = card.dataset.target;
      if(!target) return;

      const section = document.getElementById(target);

      if(section){
        section.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });

}


/* ======================================================
   ADMIN NAV SHOW
====================================================== */
const adminNav = document.querySelector(".admin-nav");

if(adminNav){

  window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    if(scrollY > window.innerHeight * 0.7){
      adminNav.classList.add("show");
    }else{
      adminNav.classList.remove("show");
    }

  });

}
