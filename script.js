const testimonialContainer = document.querySelector(".testimonial-container")
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".img");
let username = document.querySelector(".username");
let twitterHandle = document.querySelector(".twitter-handle");

const obj = [
    {
      name: "Guillermo Rauch",
      position: "@rauchg",
      photo:
        "https://x.com/didiercatz/photo",
      text: "If I had to recommend a way of getting into programming today, it would be HTML + CSS with @tailwindcss The RoI is just incredible. This responsive demo is just ~21 custom CSS props. The whole thing is mostly built-in tailwind classes and vanilla HTML.",
    },
    {
      name: "Dacey Nolan",
      position: "@dacey_nolan",
      photo:
        "https://pbs.twimg.com/profile_images/1356685491127656449/db8jKmuZ_400x400.jpg",
      text: "I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.",
    },
    {
      name: "Sarah Dayan",
      position: "@frontstuff_io",
      photo:
        "https://x.com/rauchg/photo",
      text: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling.",
    },
    {
      name: "Igor Randjelovic",
      position: "@igor_randj",
      photo:
        "https://pbs.twimg.com/profile_images/970109919444824064/X0XU8ZD9_400x400.jpg",
      text: "Tailwind clicked for me almost immediately. I can't picture myself writing another BEM class ever again. Happy user since the first public release! Productivity is at an all time high, thanks to @tailwindcss",
    },
    {
      name: "Dan Malone",
      position: "@ohhdanm",
      photo:
        "https://x.com/kentcdodds/photo",
      text: "Skip to the end. Use @tailwindcss..",
    },
    {
      name: "Sergio Peris",
      position: "@sertxudev",
      photo:
        "https://pbs.twimg.com/profile_images/1526657447326371842/vtmVANH7_400x400.jpg",
      text: "I thought 'Why would I need Tailwind CSS? I already know CSS and use Bootstrap', but after giving it a try I decided to switch all my projects to Tailwind.",
    },
    {
      name: "Debbie O'Brien",
      position: "@debs_obrien",
      photo:
        "https://pbs.twimg.com/profile_images/1517414077534191616/fUc3KRh6_400x400.jpg",
      text: "hanks Steve will give it a read. Although I am a mega @tailwindcssfan. Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try!",
    },
  ];
  
function showInfo(){
   random = obj[Math.floor(Math.random() * obj.length )]
    username.innerHTML  = random.name;
    twitterHandle.innerHTML  = random.position
    testimonial.innerHTML = random.text
    userImage.src = random.photo
}

setInterval(function(){
showInfo()
},10000)