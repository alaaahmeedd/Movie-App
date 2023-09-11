
let rowData = document.getElementById('rowData');
let arr_movies = [];

$(document).ready(function(){
  getApi().then(()=>{
    $('.loading-screen').fadeOut(2000);
    $('body').css('overflow','visible')

  })
})

function openSideNav(){
    $('.side-nav-menu').animate({ left:0 },500);
    $('.open-close-icon').removeClass('fa-align-justify');
    $('.open-close-icon').addClass('fa-x'); 
    
        
    for (let i = 0; i < 6; i++) {
        $(".nav-links li").eq(i).animate({
            top: 0
        }, (i + 6) * 100)
    }
}

function closeSideNav(){
    let boxWidth= $('.side-nav-menu .nav-tap').outerWidth();

    $('.side-nav-menu').animate({ left:-boxWidth },500)
    $('.open-close-icon').addClass('fa-align-justify');
    $('.open-close-icon').removeClass('fa-x');
    
}

closeSideNav()

$('.side-nav-menu i.open-close-icon').click(()=>{
    if($('.side-nav-menu').css('left')== '0px'){
        closeSideNav()
        $(".nav-links li").animate({top:300})

    }else{
        openSideNav()   
    }
})



//  --------------- Api ----------------

function displayMovies(){
    let cartoona = '';
    
    for( let i=0; i<arr_movies.length ; i++ ){
        cartoona += `
        <div class="col-md-4">
                <div class="movie-item position-relative overflow-hidden">
                    <img src="https://image.tmdb.org/t/p/w500/${arr_movies[i].poster_path}" class="w-100 animate">
                    <div class="movie-overlay position-absolute p-5 d-flex flex-column justify-content-center">
                        <h1 class="movie-title"> ${arr_movies[i].title} </h1>
                        <p class="movie-desc"> ${arr_movies[i].overview} </p>
                        <p class="movie-date">  <span> Release Date </span> <span>  : ${arr_movies[i].release_date} </span></p>
                        <h3 class="">
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>
                        </h3>
                        <h3 class="number"> ${arr_movies[i].vote_average} </h3>    

                    </div>
                </div>
            </div>
        `
    }
    rowData.innerHTML = cartoona
}

async function getApi(type = "popular") {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`
    );

    let finalResult = await response.json();
    arr_movies = finalResult.results;
    displayMovies();
  }
  
  async function getTrending() {
    let response = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=1678a819276e7e59cbbc5082405f88bb"
    );
    let finalResult = await response.json();
    arr_movies = finalResult.results;
    displayMovies();
    closeSideNav();
  }
  getApi();
  



  $("#nowPlaying").click(() => {
    getApi("now_playing");
    closeSideNav();
  });
  
  $("#popular").click(() => {
    getApi("popular");
    closeSideNav();
  });
  
  $("#topRated").click(() => {
    getApi("top_rated");
    closeSideNav();
  });
  
  $("#trending").click(() => {
    getTrending();
    closeSideNav();

  });
  
  $("#upcoming").click(() => {
    getApi("upcoming");
    closeSideNav();
  });

  $("#popur").click(() => {
    closeSideNav();
});




// ---------------------- search ---------------------


let searchMovies = document.querySelector("#inputSearch");
let searchCurrentList = document.querySelector("#currentSearch");

async function searchAllMovies(term) {
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=1678a819276e7e59cbbc5082405f88bb&language=en-US&query=${term}&page=1&include_adult=false`
  );

  let finalResult = await response.json();
  arr_movies = finalResult.results;
  displayMovies();

}

$("#inputSearch").keyup(() => {
  searchAllMovies(searchMovies.value);
});

/* ------------------ search current ----------------- */






// ---------------------- contact ----------------------

function validateContactForm() {
    const userNameInput = document.getElementById('userNameInput');
    const userEmailInput = document.getElementById('userEmailInput');
    const userPhoneInput = document.getElementById('userPhoneInput');
    const userAgeInput = document.getElementById('userAgeInput');
    const userPasswordInput = document.getElementById('userPasswordInput');
    const userRePasswordInput = document.getElementById('userRePasswordInput');
  
    const userNameAlert = document.getElementById('userNameAlert');
    const userEmailAlert = document.getElementById('userEmailAlert');
    const userPhoneAlert = document.getElementById('userPhoneAlert');
    const userAgeAlert = document.getElementById('userAgeAlert');
    const userPasswordAlert = document.getElementById('userPasswordAlert');
    const userRePasswordAlert = document.getElementById('userRePasswordAlert');
  
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]{3,}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
    const ageRegex = /^(1[6-9]|[2-9]\d)$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    // Validate name field
    if (!nameRegex.test(userNameInput.value.trim())) {
      userNameInput.classList.add('is-invalid');
      userNameInput.classList.remove('is-valid');
      userNameAlert.classList.remove('d-none');
    } else {
      userNameInput.classList.add('is-valid');
      userNameInput.classList.remove('is-invalid');
      userNameAlert.classList.add('d-none');
    }
  
    // Validate email field
    if (!emailRegex.test(userEmailInput.value.trim())) {
      userEmailInput.classList.add('is-invalid');
      userEmailInput.classList.remove('is-valid');
      userEmailAlert.classList.remove('d-none');
    } else {
      userEmailInput.classList.add('is-valid');
      userEmailInput.classList.remove('is-invalid');
      userEmailAlert.classList.add('d-none');
    }
  
    // Validate phone field
    if (!phoneRegex.test(userPhoneInput.value.trim())) {
      userPhoneInput.classList.add('is-invalid');
      userPhoneInput.classList.remove('is-valid');
      userPhoneAlert.classList.remove('d-none');
    } else {
      userPhoneInput.classList.add('is-valid');
      userPhoneInput.classList.remove('is-invalid');
      userPhoneAlert.classList.add('d-none');
    }
  
    // Validate age field
    if (!ageRegex.test(userAgeInput.value.trim())) {
      userAgeInput.classList.add('is-invalid');
      userAgeInput.classList.remove('is-valid');
      userAgeAlert.classList.remove('d-none');
    } else {
      userAgeInput.classList.add('is-valid');
      userAgeInput.classList.remove('is-invalid');
      userAgeAlert.classList.add('d-none');
    }
  
    // Validate password field
    if (!passwordRegex.test(userPasswordInput.value.trim())) {
      userPasswordInput.classList.add('is-invalid');
      userPasswordInput.classList.remove('is-valid');
      userPasswordAlert.classList.remove('d-none');
    } else {
      userPasswordInput.classList.add('is-valid');
      userPasswordInput.classList.remove('is-invalid');
      userPasswordAlert.classList.add('d-none');
    }
  
    // Validate re-enter password field
    if (userPasswordInput.value !== userRePasswordInput.value) {
      userRePasswordInput.classList.add('invalid');
      userRePasswordInput.classList.remove('is-invalid');
      userRePasswordAlert.classList.remove('d-none');
    } else {
      userRePasswordInput.classList.add('is-invalid');
      userRePasswordInput.classList.remove('is-valid');
      userRePasswordAlert.classList.add('d-none');
    }
  }


  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopBtn").style.display = "block";
    } else {
      document.getElementById("backToTopBtn").style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }








