
let rowData = document.getElementById('rowData');

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

async function search(term){
    let response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=1678a819276e7e59cbbc5082405f88bb&language=en-US&query=${term}&page=1&include_adult=false')
    let finalResult = await response.json()
    arr_movies = finalResult.results;
    displayMovie()


}

//  --------------- Api ----------------

function displayMovie(){
    let cartoona = '';
    
    for( let i=0; i<arr_movies.length ; i++ ){
        cartoona += `
        <div class="col-md-4">
                <div class="movie-item position-relative overflow-hidden">
                    <img src="https://image.tmdb.org/t/p/w500/${arr_movies[i].poster_path}}" class="w-100 animate">
                    <div class="movie-overlay position-absolute p-5">
                        <h1 class="movie-title"> Meg 2: The Trench </h1>
                        <p class="movie-desc"> An exploratory dive into the deepest depths of the ocean
                            of a daring research team spirals into chaos when a malevolent
                            mining operation threatens their mission and forces them into
                            a high-stakes battle for survival. </p>
                        <p class="movie-date"> <span> Release Date </span> <span>  : 2023-08-02 </span></p>
                        <h3 class="">
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>
                        </h3>
                        <h3 class="number"> 7.0</h3>    

                    </div>
                </div>
            </div>
        `
    }
    rowData.innerHTML = cartoona
}

search()






///////////////////// contact /////////////////////

// function validateContactForm() {
//     const nameInput = document.querySelector('input[placeholder="Enter Your Name"]');
//     const emailInput = document.querySelector('input[placeholder="Enter Your Email"]');
//     const phoneInput = document.querySelector('input[placeholder="Enter Your Phone"]');
//     const ageInput = document.querySelector('input[placeholder="Enter Your Age"]');
//     const passwordInput = document.querySelector('input[placeholder="Enter Your Password"]');
//     const rePasswordInput = document.querySelector('input[placeholder="Re-enter Password"]');
  
//     const userNameAlert = document.getElementById('userNameAlert');
//     const userEmailAlert = document.getElementById('userEmailAlert');
//     const userPhoneAlert = document.getElementById('userPhoneAlert');
//     const userAgeAlert = document.getElementById('userAgeAlert');
//     const userPasswordAlert = document.getElementById('userPasswordAlert');
//     const userRePasswordAlert = document.getElementById('userRePasswordAlert');
  
//     // Regular expressions for validation
//     const nameRegex = /^[A-Za-z]{3,}$/;
//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     const phoneRegex = /^\d{10}$/;
//     const ageRegex = /^(1[6-9]|[2-9]\d)$/;
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
//     // Validate name field

//     function userNameValidation(){
       
//         if(nameRegex.test(userNameInput.value) == true && userNameInput.value != '' ){
//             userNameInput.classList.add('is-valid');
//             userNameInput.classList.remove('is-invalid');
//             userNameAlert.classList.replace('d-block' , 'd-none');
//             return true;
//         }else{
//             userNameInput.classList.add('is-invalid');
//             userNameInput.classList.remove('is-valid');
//             userNameAlert.classList.replace('d-none' , 'd-block');
//             return false;
//         }
    
//     }
    
  
//     // Validate email field
//     if (!emailRegex.test(emailInput.value)) {
//       userEmailAlert.classList.remove('d-none');
//       return false;
//     } else {
//       userEmailAlert.classList.add('d-none');
//     }
  
//     // Validate phone field
//     if (!phoneRegex.test(phoneInput.value)) {
//       userPhoneAlert.classList.remove('d-none');
//       return false;
//     } else {
//       userPhoneAlert.classList.add('d-none');
//     }
  
//     // Validate age field
//     if (!ageRegex.test(ageInput.value)) {
//       userAgeAlert.classList.remove('d-none');
//       return false;
//     } else {
//       userAgeAlert.classList.add('d-none');
//     }
  
//     // Validate password field
//     if (!passwordRegex.test(passwordInput.value)) {
//       userPasswordAlert.classList.remove('dnone');
//       return false;
//     } else {
//       userPasswordAlert.classList.add('d-none');
//     }
  
//     // Validate re-enter password field
//     if (passwordInput.value !== rePasswordInput.value) {
//       userRePasswordAlert.classList.remove('d-none');
//       return false;
//     } else {
//       userRePasswordAlert.classList.add('d-none');
//     }
  
//     // All fields are valid
//     return true;
//   }





