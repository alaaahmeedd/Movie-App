
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
    let response = await fetch('https://api.themoviedb.org/3/search/movie?query=${term}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false')
    response = await response.json()
    console.log(response.results);
    displayMovie()


}

function displayMovie(arr){
    let cartoona = '';
    
    for( let i=0; i<arr.length ; i++ ){
        cartoona += `
        <div class="col-md-4">
                <div class="movie-item position-relative overflow-hidden">
                    <img src="https://image.tmdb.org/t/p/w500/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg" class="w-100 animate">
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
displayMovie()





// contact





