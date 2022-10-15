var change = 0;
var switchLight=0;
var myChart;
$(document).ready(function () {
    $('.slide-bar .img-item').hover(function () {
        // $(this).find('#author img').toggleClass('zoom-out');
        $(this).find('#author').toggleClass('bigger');
        $(this).find('.icon-img').toggleClass('bigger-icon');
    });
    $('.slide-bar .item').click(function () {
        
        $(".slide-bar  .item:not(:hover)").css({ "visibility": "hidden", "width": "0%","padding":"0" });
        $(".slide-bar  .item:not(:hover) span").css("display", "none");
        $(this).addClass('change-size');
        //add background
        $(this).addClass('bg-img');

        //add chart
        let ID=$(this).find('.chart').attr('id');
        if(myChart!=null)
        {
            myChart.destroy();
        }
        createChart(ID);
        $(this).find(".chart").addClass('visibility-visible');

        //add message-box
        $(this).find(".comment-box").css('display','block');
        $(this).find(".my_comment").addClass('visibility-visible');

        //btn-back
        $(this).find('.btn-back').addClass('visibility-visible');


        // $(this).find('.main-title').css("font-size","3rem");
        $(this).find('.img-item').addClass('bg-transparent-no-line');

        $(this).find('.common_book').addClass('bg-transparent-dark');
        
        $(this).find('#author img').css('display','none');

       

        $(this).find(".common_book .imb1").css('display','none');
        $(this).find(".common_book .info-book").css('display','none');
        $(this).find(".common_book .list-recommand_book").css('display','flex');

        
    });
    $(document).on("click" , '.btn-back' , function(){
        $(".slide-bar .item:not(:hover)").css({ "visibility": "visible", "width": "27%","padding":"2rem" });
        $(".slide-bar .item:not(:hover) span").css("display", "block");
        $(this).parent('.item').removeClass("change-size");
        //remove background
        $(this).parent('.item').removeClass('bg-img');

        //remove chart
        myChart.destroy();
        $(this).find('.chart').removeClass('visibility-visible');

        //remove message-box
        $(".comment-box").css('display','none');
        $(".my_comment").removeClass('visibility-visible');
        $('.reply-cmt').remove();
        $('.my_cmt').remove();

        //btn-back
        $('.btn-back').removeClass('visibility-visible');


        // $(this).parent('.item').find('.main-title').css("font-size","1.2rem");
        $(this).parent('.item').find('.img-item').removeClass('bg-transparent-no-line');

        $(this).parent('.item').find('.common_book').removeClass('bg-transparent-dark');
        
        $(this).parent('.item').find('#author img').css('display','block');

       

        $(this).parent('.item').find(".common_book .imb1").css('display','block');
        $(this).parent('.item').find(".common_book .info-book").css('display','block');
        $(this).parent('.item').find(".common_book .list-recommand_book").css('display','none');
        
        
    });
   

    $('.bi').click(function () {
        $('.slide-bar .item').toggleClass('bg-change-white');
        $('.slide-bar .item').toggleClass('box-shadow-light');
        $('.slide-bar .img-item').toggleClass('bg-transparent');
        $('.item .common_book').toggleClass('bg-transparent');
        $('.search-box').toggleClass('bg-transparent-solid');
        $('.recommend-zone').toggleClass('bg-transparent-solid');
        $('.hot-books .main-title').toggleClass('txt-shadow');
        $('.list-friends li:last-child').toggleClass('bg-white');
        $('.some-readers li:last-child').toggleClass('bg-white');
        $('.comment-box .cmt-content').toggleClass('bg-transparent-dark');
        // $('.my_comment').toggleClass('bg-transparent-solid');
        // $('.slide-bar').toggleClass('box-shadow-light');
 
        switchLight++;
        if(switchLight%2!=0)
        {
            $('.comment-box .add-content').addClass('bg-transparent-dark');
            $('.add-time span').css('color','#000');
          
        }
        else{
            $('.comment-box .add-content').removeClass('bg-transparent-dark');
            $('.add-time span').css('color','#fff');
            
        }
    
    });

    $('.btn-send').click(function () {
        let myCMT = $(this).parent().find('#myCMT').val();
        change++;
        var currentdate = new Date();
        var time = currentdate.getHours() + ":"
            + currentdate.getMinutes();
        console.log(myCMT);
        $('.comment-box .swiper-wrapper').append(
            `
            <div class="cmt-item swiper-slide my_cmt">
            <div class="ms-box">
                <div class="cmt-content">
                    <p>`
            + myCMT.toString() +
            `</p>   
                </div>
                <div class="time add-time"><span>`+ time + `</span></div>
                </div>  
                <div class="cmt-user"><img src="../images/ava.png" alt=""></div>
            </div>
            <div class="cmt-item swiper-slide reply-cmt">
                <div class="cmt-user"><img src="../images/community/elon-musk.png" alt=""></div>
                <div class="ms-box">
                    <div class="cmt-content add-content">
                        <p>His books are so great, I love the book Mysterious</p>
                    </div>
                    <div class="time add-time"><span>`+ time + `</span></div>
                </div>
            </div>
            `
        );
        $(this).parent().find('#myCMT').val('');
        MessageShow();

        if(switchLight%2!=0)
        {
            $('.comment-box .add-content').addClass('bg-transparent-dark');
            $('.add-time span').css('color','#000');
        }
        else{
            $('.comment-box .add-content').removeClass('bg-transparent-dark');
            $('.add-time span').css('color','#fff');
           
        }
       
      
    });

    $('.common_book').hover(
        function () {
            $(this).find('.btn-read').css('display', 'block');
            $(this).find('.info-book .desc').css('display', 'none');
        },
        function () {
            $(this).find('.btn-read').css('display', 'none');
            $(this).find('.info-book .desc').css('display', 'block');
        },

    );
    $('.common_book').click(
        function () {
            alert("clicked");
        }

    );


});


//slide-show
function MessageShow() {
    var swiper = new Swiper(".comment-box", {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          stopOnLastSlide:true,
        },
        slidesPerView: "4",
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar"
        },
        mousewheel: true
    });
}
if (change == 0) {
    MessageShow();
  
}

var swiper = new Swiper(".hot-books", {
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

//pie-chart

var xValues = ["The Adventures of Tom Sawyer", "The Adventures of Huckleberry Finn", "Roughing It", "Autobiography of Mark Twain", "The Gilded Age: A Tale of Today"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
    "#1e71456b",
    "#2b56976e",
    "#00aba879",
    "#b91d476e",
    "#e8c3b991",
];
Chart.defaults.color="yellow";


function createChart(id)
{
    myChart=new Chart(id, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            borderColor: "transparent",
            
            
        }]
        
    },
    
    options: {
        plugins: {
            title: {
                display: true,
                text: 'HOTTEST BOOKS IN THIS MONTH',
                font:{weight:'bold',size:'18'},
                color:'yellow'
            }
        }
    }
});

}


