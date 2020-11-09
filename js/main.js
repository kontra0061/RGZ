let upButton = document.querySelector('.up-button');
let characters = document.querySelector('.charecters');
let story = document.querySelector('.story');
let games = document.querySelector('.games');
let openings = document.querySelector('.openings');
let personas = document.querySelector('.personas');
let facts = document.querySelector('.facts');
let charactersSid = document.querySelector('#characters-sid');
let storySid = document.querySelector('#story-sid');
let gamesSid = document.querySelector('#games-sid');
let openingsSid = document.querySelector('#openings-sid');
let personasSid = document.querySelector('#personas-sid');
let factsSid = document.querySelector('#facts-sid');
let sidebarChar =document.querySelector( '.sidebar-char');
let sidebarStory =document.querySelector( '.sidebar-story');
let sidebarGames =document.querySelector( '.sidebar-games');
let sidebarOp =document.querySelector( '.sidebar-op');
let sidebarPers =document.querySelector( '.sidebar-pers');
let sidebarFacts = document.querySelector('.sidebar-facts');
let teddie = document.querySelector('#teddie');
let teddie1 = document.querySelector('.teddie-1');
let teddie2 = document.querySelector('.teddie-2');






window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};

function init() {
  
  teddie.addEventListener('click', function () {
    teddie1.classList.toggle("hide")
teddie2.classList.toggle("hide")
  }
    
  )

charactersSid.addEventListener('click',
  function () {sidebarChar.classList.add("active");
    sidebarStory.classList.remove("active");
    sidebarGames.classList.remove("active");
    sidebarOp.classList.remove("active");
    sidebarPers.classList.remove("active");
    sidebarFacts.classList.remove("active");
    characters.classList.remove("hide");
    story.classList.add("hide");
    games.classList.add("hide");
    openings.classList.add("hide");
    personas.classList.add("hide");
    facts.classList.add("hide");
    
  }
)
storySid.addEventListener('click',
  function () {
       sidebarChar.classList.remove("active");
    sidebarStory.classList.add("active");
    sidebarGames.classList.remove("active");
    sidebarOp.classList.remove("active");
    sidebarPers.classList.remove("active");
    sidebarFacts.classList.remove("active");
  characters.classList.add("hide");
story.classList.remove("hide");
games.classList.add("hide");
openings.classList.add("hide");
    personas.classList.add("hide");
    facts.classList.add("hide");
 
}
)
gamesSid.addEventListener('click',function () {
       sidebarChar.classList.remove("active");
    sidebarStory.classList.remove("active");
    sidebarGames.classList.add("active");
    sidebarOp.classList.remove("active");
    sidebarPers.classList.remove("active");
    sidebarFacts.classList.remove("active");
  characters.classList.add("hide");
story.classList.add("hide");
games.classList.remove("hide");
openings.classList.add("hide");
  personas.classList.add("hide");
  facts.classList.add("hide");
 
} )
openingsSid.addEventListener('click',function () {
       sidebarChar.classList.remove("active");
    sidebarStory.classList.remove("active");
    sidebarGames.classList.remove("active");
    sidebarOp.classList.add("active");
    sidebarPers.classList.remove("active");
    sidebarFacts.classList.remove("active");
  characters.classList.add("hide");
story.classList.add("hide");
games.classList.add("hide");
openings.classList.remove("hide");
  personas.classList.add("hide");
  facts.classList.add("hide");
 
} )
personasSid.addEventListener('click',function () {
       sidebarChar.classList.remove("active");
    sidebarStory.classList.remove("active");
    sidebarGames.classList.remove("active");
    sidebarOp.classList.remove("active");
    sidebarPers.classList.add("active");
    sidebarFacts.classList.remove("active");
  characters.classList.add("hide");
story.classList.add("hide");
games.classList.add("hide");
openings.classList.add("hide");
  personas.classList.remove("hide");
  facts.classList.add("hide");
 
} )
factsSid.addEventListener('click', function () {
    sidebarChar.classList.remove("active");
    sidebarStory.classList.remove("active");
    sidebarGames.classList.remove("active");
    sidebarOp.classList.remove("active");
    sidebarPers.classList.remove("active");
    sidebarFacts.classList.add("active");
  characters.classList.add("hide");
story.classList.add("hide");
games.classList.add("hide");
openings.classList.add("hide");
  personas.classList.add("hide");
  facts.classList.remove("hide");
 
})

}




new Swiper('.swiper-container', {
    sliderPerView: 1,
    loop: true,
    autoplay: true,
    effect: 'cube',
    cubeEffect: {
        shadow: false
    },
})


init();