var cnt=0;
$(document).ready(function() { 
    
    //move page
    console.log(window.location.pathname);
    var pathName=window.location.pathname;
    const Array_path=pathName.split("/");
    var mainpath=Array_path[Array_path.length-1];
    var subName=mainpath.substring(0,mainpath.length-5);
    console.log(subName);
    if(subName.includes("01"))
    {
        subName=subName.replace("01","\0");
    }
    if(subName.includes("_"))
    {
        subName=subName.replace("_"," ");
    }
    console.log("subName:",subName);
    $(".menu-item").each(function(){
        // console.log($(this).text());
        if($(this).find(">a").text().localeCompare(subName)==0)
        {
            $(this).toggleClass("load_menuItem");
        }
    });
        

    // console.log(window.location.origin);
    $(".nav-bar .menu-item").click(function(){

        let itemName=$(this).find(">a").text();
        if(itemName.includes(" "))
        {
            itemName=itemName.replace(" ","_");
        }
        let stringURL="./"+itemName+".html";
        window.location.href=stringURL;
        // window.open(stringURL, "_blank");
        console.log(stringURL);

    });
    //
    $('.bi-lightbulb-off-fill').toggle(
        function(){
            $("*").addClass("light_mode_title");           
        },
        function(){
            $("*").removeClass("light_mode_title");
        }
    );
    //click-menu_item event
    $('.bi-lightbulb-off-fill').click(
        function()
        {
            cnt++;
            $('nav .menu-item').hover(function(){
                $(this).toggleClass("changed");
                $(this).find('a').toggleClass("bolder");
            });   
        if(cnt%2!=0)
        {
            $( "nav .menu-item" ).each(function( index ) {
                if($(this).hasClass('active1')==true)
                {
                    console.log("checkin_2");
                    $(this).removeClass("active1");
                    $(this).find('a').removeClass("active1_1");
                    $(this).addClass("active2");
                    $(this).find('a').addClass("active2_1");
                }
            });
        }
        else
        {
            $( "nav .menu-item" ).each(function( index ) {
                if($(this).hasClass('active2')==true)
                {
                    console.log("checkin_1");
                    $(this).removeClass("active2");
                    $(this).find('a').removeClass("active2_1");
                    $(this).addClass("active1");
                    $(this).find('a').addClass("active1_1");
                }
            });
        }
            
        }
    );
      //click-menu_item event
    $("nav .menu-item").click(function(){
        if(cnt%2!=0)
        {
            console.log(cnt);
            $( "nav .menu-item" ).each(function( index ) {
                if($(this).hasClass('active1')==true)
                {
                    console.log("checkin_2");
                    $(this).addClass("active2");
                    $(this).find('a').addClass("active2_1");
                }
            });
            $("nav .menu-item").removeClass("active2");
            $("nav .menu-item").find('a').removeClass("active2_1");
            $("nav .menu-item").removeClass("active1");
            $("nav .menu-item").find('a').removeClass("active1_1");
            $(this).addClass("active2");
            $(this).find('a').addClass("active2_1");
        }
        else
        {
            console.log(cnt);
            $( "nav .menu-item" ).each(function( index ) {
                if($(this).hasClass('active2')==true)
                {
                    console.log("checkin_1");
                    $(this).addClass("active1");
                    $(this).find('a').addClass("active1_1");
                }
            });
            $("nav .menu-item").removeClass("active2");
            $("nav .menu-item").find('a').removeClass("active2_1");
            $("nav .menu-item").removeClass("active1");
            $("nav .menu-item").find('a').removeClass("active1_1");
            $(this).addClass("active1");
            $(this).find('a').addClass("active1_1");
        }
    });




}); 

//Turn dark mode or light mode 
const darkMode=document.querySelector('.bi-lightbulb-off-fill')
darkMode.onclick=function(){
    
    const $=document.querySelector.bind(document);
    const $$=document.querySelectorAll.bind(document);
    darkMode.classList.toggle('bi-lightbulb-fill');
    // darkMode.classList.toggle('light_mode_bar_item');
    darkMode.classList.toggle('bi-lightbulb-off-fill')
    darkMode.classList.toggle('light_mode_title');

    const logo=$('#logo');
    const url_defaultLogo="../images/logo3_gold.png";
    const url_lightLogo="../images/logo3_light.png";
    const brandName=$('.logo span');
    const nav_barTitle=$$('nav .menu-item a');

    
  
    //logo
    if(logo.src.indexOf('logo3_gold.png')!=-1)
    {
        logo.src=url_lightLogo;
        
    }
    else
    {
        logo.src=url_defaultLogo;
    }
    //boder
    $('header').classList.toggle('light_mode_border_bar');
    $('footer').classList.toggle('light_mode_border_bar');

    //menu-item
    brandName.classList.toggle('light_mode_bar_item');
    nav_barTitle.forEach((item,index)=>{
        item.classList.toggle('light_mode_bar_item');
      
    });

    

    //footer-item
    $$('footer span').forEach((item,index)=>{
        item.classList.toggle('light_mode_bar_item');
    })
    $$('footer .item i').forEach((item,index)=>{
        item.classList.toggle('light_mode_bar_item');
    })
    $('footer .email').classList.toggle('light_mode_border_bar');

    $('.logo span').classList.toggle('light_mode_title');
    $('body').classList.toggle('light_mode_body');



}

//Data
// #region data 
const booksData=[
    {
        author:'Mark Twain',
        ava:'../images/author_ava/Mark_Twain.png',
        Poem:[
            'Anna Karenina',
            'To Kill a Mockingbird',
            'Where the Sidewalk Ends',
            'Valley of the Dolls',
            'The Shining',
            'The Little Prince',
            'The Fellowship of the Ring',
            'The Handmaid’s Tale',
            'A Wrinkle in Time',
            'Pride and Prejudice',
            'All the President’s Men'
        ],
        rate: [
            '4.2',
            '4.6',
            '4.0',
            '3.7',
            '4.5',
            '3.8',
            '4.8',
            '3.0',
            '4.9',
            '5',
            '3'
        ],
        reviewer:[
            '122k',
            '144k',
            '133k',
            '112k',
            '378k',
            '100k',
            '55k',
            '77k',
            '22k',
            '10k',
            '78k'
        ]
    },
    {
        author:'Fyodor Tyutchev',
        ava:'../images/author_ava/Fyodor_Tyutchev.png',
        Poem:[
            'Man’s Search for Meaning',
            'Beloved',
            'In Cold Blood',
            'A Long Way Gone: Memoirs of a Boy Soldier',
            'Dune',
            'Great Expectations',
            'Daring Greatly',
            '1984',
            'Angela’s Ashes: A Memoir',
            'A Brief History of Time',
            'Fahrenheit 451'
        ],
        rate: [
            '4.2',
            '4.6',
            '4.0',
            '3.7',
            '4.5',
            '3.8',
            '4.8',
            '3.0',
            '4.9',
            '5',
            '3'
        ],
        reviewer:[
            '122k',
            '144k',
            '133k',
            '112k',
            '378k',
            '100k',
            '55k',
            '77k',
            '22k',
            '10k',
            '78k'
        ]
    },
    {
        author:'Alexander Puskin',
        ava:'../images/author_ava/Alexander_Puskin.png',
        Poem:[
            'A Heartbreaking Work of Staggering Genius',
            'Harry Potter and the Sorcerer’s Stone',
            'Selected Stories',
            'The Fault in Our Stars',
            'Alice’s Adventures in Wonderland',
            'Through the Looking-Glass',
            'Invisible Man',
            'Are You There, God? It’s Me, Margaret',
            'One Hundred Years of Solitude',
            'Catch-22',
            'Persepolis: The Story of a Childhood'
        ],
        rate: [
            '4.2',
            '4.6',
            '4.0',
            '3.7',
            '4.5',
            '3.8',
            '4.8',
            '3.0',
            '4.9',
            '5',
            '3'
        ],
        reviewer:[
            '122k',
            '144k',
            '133k',
            '112k',
            '378k',
            '100k',
            '55k',
            '77k',
            '22k',
            '10k',
            '78k'
        ]
    },
    {
        author:'Mikhail Lermontov',
        ava:'../images/author_ava/Mikhail_Lermontov.png',
        Poem:[
            'Charlotte’s Web',
            'Slaughterhouse-Five',
            'Cutting for Stone',
            'The Autobiography of Malcolm X',
            'Fear and Loathing in Las Vegas',
            'Interpreter of Maladies',
            'The Diary of a Young Girl',
            'Lolita',
            'Love Medicine',
            'Me Talk Pretty One Day',
            'Middlesex'
        ],
        rate: [
            '4.2',
            '4.6',
            '4.0',
            '3.7',
            '4.5',
            '3.8',
            '4.8',
            '3.0',
            '4.9',
            '5',
            '3'
        ],
        reviewer:[
            '122k',
            '144k',
            '133k',
            '112k',
            '378k',
            '100k',
            '55k',
            '77k',
            '22k',
            '10k',
            '78k'
        ]
    },
    {
        author:'Karolina Pavlova',
        ava:'../images/author_ava/Karolina_Pavlova.png',
        Poem:[
            'Midnight’s Children',
            'East of Eden',
            'Moneyball',
            'Of Human Bondage',
            'On the Road',
            'Out of Africa',
            'And Then There Were None',
            'Portnoy’s Complaint',
            'Silent Spring',
            'Team of Rivals',
            'Team of Rivals'
        ],
        rate: [
            '4.2',
            '4.6',
            '4.0',
            '3.7',
            '4.5',
            '3.8',
            '4.8',
            '3.0',
            '4.9',
            '5',
            '3'
        ],
        reviewer:[
            '122k',
            '144k',
            '133k',
            '112k',
            '378k',
            '100k',
            '55k',
            '77k',
            '22k',
            '10k',
            '78k'
        ]
    },
    {
        author:'Khomyakov Avtoportret',
        ava:'../images/author_ava/Khomyakov_Avtoportret.png',
        Poem:[
            'Homegoing',
            'The Age of Innocence',
            'The Amazing Adventures',
            'The Book Thief',
            'Rubyfruit Jungle',
            'The Brief Wondrous Life of Oscar Wao',
            'The Catcher in the Rye',
            'The Color of Water',
            'The Joy Luck Club',
            'The Corrections',
            'The Devil in the White City'
        ],
        rate: [
            '4.2',
            '4.6',
            '4.0',
            '3.7',
            '4.5',
            '3.8',
            '4.8',
            '3.0',
            '4.9',
            '5',
            '3'
        ],
        reviewer:[
            '122k',
            '144k',
            '133k',
            '112k',
            '378k',
            '100k',
            '55k',
            '77k',
            '22k',
            '10k',
            '78k'
        ]
    }
]
//#endregion
//Data accesse;
export {booksData};


