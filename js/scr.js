var persons =[
    {"name":"shiraz",
     "message":"hello shiraz",
     "src":"a2.jpg",
     "time":"12:02 Am",
     "dataClass":"one",
     "last1":"Last Appearance 2017/05/06",
     "self-replay":[],
     "persons-message":["hello "]
     

    },
    {"name":"hala",
     "message":" Vero tempora error perferendis delectus Ad aut aliquam, natus quas dicta modi voluptate dolor quaerat.",
     "src":"pic1.png",
     "number":"3",
     "time":"1:00 Pm",
     "dataClass":"two",
     "last1":"Last Appearance yestarday at 12:00 am",
     "self-replay":[],
     "persons-message":["hello1 "]
    },
    {"name":"ola",
     "message":"Lorem ipsum dolor sit amet consectetur adipisicing elit.natus quas dicta modi voluptate dolor quaerat.",
     "src":"pic1.png",
     "time":"yesterday",
     "dataClass":"three",
     "last1":"Last Appearance at 7:00 pm",
     "self-replay":[],
     "persons-message":["hello2 "]
    },
    {"name":"ali",
     "message":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora error perferendis delectus iusto! Placeat odio voluptatem aliquid accusantium libero. Ad aut aliquam, natus quas dicta modi voluptate dolor quaerat.",
     "src":"a2.jpg",
     "number":"6",
     "time":"9:00 Am",
     "dataClass":"four",
     "last1":"Last Appearance 2020/10/5",
     "self-replay":[],
     "persons-message":["hell3 "]
    },
    {"name":"omar",
     "message":"hllo omar you can speak arabic !!",
     "src":"pic1.png",
     "time":"yesterday",
     "dataClass":"five",
     "last1":"Last Appearance today at 6:00 am",
     "self-replay":[],
     "persons-message":["hello4 "]
    }
    
];

////////////////////////////////////////////////////* date  */
var timemessage=new Date();
var getHourMessage=timemessage.getHours();
var getMeniuteMessage=timemessage.getMinutes();
////////////////////////////////////////////////////* pages  */
var parient_single_page=document.querySelector(".single-page");
var whatsup2 = document.querySelector(".whatsup");
var whatsup_toolbar =document.querySelector(".whatsup-toolbar");
var whatsup_content =document.querySelector(".whatsup-content");
var whatsup_status =document.querySelector(".status-content");
var whatsup_calls =document.querySelector(".calls-content");

////////////////////////////////////////////////////* chat whatsup  */
var parient_content=document.querySelector(".content");

for(i=0;i<persons.length;i++){

            
        var create_content_col =document.createElement("div");
        create_content_col.className="col-12 content-col content-click";
        create_content_col.setAttribute("data-class",persons[i].dataClass)
        parient_content.appendChild(create_content_col);

        var create_img =document.createElement("img");
        create_img.className="contact-img text-end";
        create_img.src=persons[i].src;
        create_content_col.appendChild(create_img);

        var create_content_name =document.createElement("div");
        create_content_name.className="content-name";
        var creat_text_name =document.createTextNode(persons[i].name);
        create_content_col.appendChild(create_content_name);
        create_content_name.appendChild(creat_text_name);

        var creat_last_person =document.createElement("input");
        creat_last_person.setAttribute("type","hidden")
        creat_last_person.setAttribute("value",persons[i].last1);
        create_content_col.appendChild(creat_last_person);

        var creat_person_message =document.createElement("input");
        creat_person_message.setAttribute("type","hidden");
        creat_person_message.setAttribute("value",persons[i]["persons-message"][0]);
        create_content_col.appendChild(creat_person_message);

       

        var creat_self_replay =document.createElement("input");
        creat_self_replay.setAttribute("type","hidden")
        creat_self_replay.setAttribute("value",persons[i].message);
        create_content_col.appendChild(creat_self_replay);

        

        var create_content_span =document.createElement("span");
        create_content_span.className="content-time";
        var creat_text_name_span =document.createTextNode(persons[i].time);
        create_content_col.appendChild(create_content_span);
        create_content_span.appendChild(creat_text_name_span);

        var create_content_message =document.createElement("div");
        create_content_message.className="content-message";
        create_content_col.appendChild(create_content_message);

        var create_content_i =document.createElement("i");
        
        create_content_message.appendChild(create_content_i);

        var create_content_p =document.createElement("p");
        create_content_p.className="message";
        create_content_message.appendChild(create_content_p);
        var text_message=document.createTextNode(persons[i].message);

        if(text_message.length >35){
            var text1=document.createTextNode(persons[i].message.slice(0,34) +" "+ "....");
            create_content_p.appendChild(text1);
            create_content_i.className="fa fa-check";


        }else{
            create_content_p.appendChild(text_message);
            create_content_i.className="fa fa-check";


        }
        
        


        if(persons[i].number){
                            
            var create_number_message =document.createElement("div");
            create_number_message.className="number-message text-center";
            create_content_message.appendChild(create_number_message);

            var create_number =document.createElement("p");
            create_number.className="number";
            var text_number=document.createTextNode(persons[i].number);
            create_number_message.appendChild(create_number);
            create_number.appendChild(text_number);
                
        }else{
            create_content_i.className="fa fa-check";
        }
            


}
 /////////////////////////////////////////////////* status */

var parient_status = document.querySelector(".st-content");

var statuss =[
    {"name":"shiraz",
    "src":"a2.jpg",
     "time":"before 10 minutes"
    },
    {"name":"ola",
    "src":"pic1.png",
    "src2":"pic1.png",
    "time":"before 1 hour"
   },
   {"name":"ali",
   "src":"a2.jpg",
   "time":"before 2 hour"
  },
  {"name":"hala",
  "src":"pic1.png",
  "src2":"pic1.png",
  "time":"before 20 minutes"
 },


];

for(i=0; i<statuss.length;i++){

            
    var create_content_col =document.createElement("div");
    create_content_col.className="col-12 content-col showStory";
    parient_status.appendChild(create_content_col);


    var create_img =document.createElement("img");
    if (statuss[i].src2){

        create_img.className="contact-img img-status2 text-end";

    }else{
        create_img.className="contact-img img-status text-end";
    }
    
    create_img.src=statuss[i].src;
    create_content_col.appendChild(create_img);

    var create_content_name =document.createElement("div");
    create_content_name.className="content-name";
    var creat_text_name =document.createTextNode(statuss[i].name);
    create_content_col.appendChild(create_content_name);
    create_content_name.appendChild(creat_text_name);

    var create_content_message =document.createElement("div");
    create_content_message.className="content-message";
    create_content_col.appendChild(create_content_message);

    var create_content_p =document.createElement("p");
    create_content_p.className="message time-status";
    create_content_message.appendChild(create_content_p);
    var text_message=document.createTextNode(statuss[i].time);
    create_content_p.appendChild(text_message);
}

/////////////////////////////////////////////////////*  storyy */
var showStory =document.querySelectorAll(".showStory");
var single_story =document.querySelector(".single-story");
var img_str=document.querySelector(".single-story .story-img");
var name_str=document.querySelector(".single-story .story-name");
var time_str=document.querySelector(".single-story .story-time");
var back_str=document.querySelector(".single-story .bac-img");
var rangee=document.querySelector(".rangee");

for (var i = 0; i<showStory.length; i++) {
        showStory[i].onclick=function(){

        console.log(this.children[1].textContent);
        whatsup2.style.display="none";
        whatsup_toolbar.style.display="none";
        whatsup_content.style.display="none";
        whatsup_status.style.display="none";
        single_story.style.display="block";

        img_str.src=this.children[0].src;
        name_str.textContent=this.children[1].textContent;
        time_str.textContent=this.children[2].children[0].textContent;
        back_str.src=this.children[0].src;

        setTimeout(function(){
            
            rangee.style.width = "99%";
            rangee.style.transition="8s";

        },100);

    }
    
}

/////////////////////////////////////////////////* calls */
var parient_calls =document.querySelector(".cal-content");

var callss = [
    {   "name":"hala",
        "src":"pic1.png",
        "iconVideo":"fa fa-video-camera",
        "time":"before 20 minutes",
        "iconblue":"fa fa-long-arrow-up",
    },
    {   "name":"ola",
        "src":"pic1.png",
        "iconPhone":"fa fa-phone",
        "time":"before 1 houre",
        "iconred":"fa fa-long-arrow-down",
    },
    {   "name":"ali",
        "src":"a2.jpg",
        "iconVideo":"fa fa-video-camera",
        "time":"yesterday 5:30 pm",
        "iconblue":"fa fa-long-arrow-up",
    },
    {   "name":"shiraz",
        "src":"a2.jpg",
        "iconPhone":"fa fa-phone",
        "time":"yesterday 5:30 am",
        "iconred":"fa fa-long-arrow-down",
    },
    
];

for(i=0 ; i<callss.length;i++){

    var create_content_col =document.createElement("div");
    create_content_col.className="col-12 content-col showcalls ";
    parient_calls.appendChild(create_content_col);


    var create_img =document.createElement("img");
    create_img.className="contact-img ";
    create_img.src=callss[i].src;
    create_content_col.appendChild(create_img);



    var create_content_name =document.createElement("div");
    create_content_name.className="content-name";
    var creat_text_name =document.createTextNode(callss[i].name);
    create_content_col.appendChild(create_content_name);
    create_content_name.appendChild(creat_text_name);


    var creat_i_video = document.createElement("i");

    if(callss[i].iconVideo){
        creat_i_video.className=callss[i].iconVideo + " "+ "icon-call text-end";
        console.log(callss[i].iconVideo + " "+ "icon-call text-end");

    }else if(callss[i].iconPhone){
        creat_i_video.className=callss[i].iconPhone +" "+ "icon-call text-end";
        console.log(callss[i].iconPhone +" "+ "icon-call text-end");

    }
    create_content_col.appendChild(creat_i_video);


    var create_content_message =document.createElement("div");
    create_content_message.className="content-message";
    create_content_col.appendChild(create_content_message);


    var create_content_i =document.createElement("i");

    if(callss[i].iconblue){
        create_content_i.className=callss[i].iconblue;

    }else if(callss[i].iconred){
        create_content_i.className=callss[i].iconred;

    }

    create_content_message.appendChild(create_content_i);


    var create_content_p =document.createElement("p");
    create_content_p.className="message ";
    create_content_message.appendChild(create_content_p);
    var text_message=document.createTextNode(callss[i].time);
    create_content_p.appendChild(text_message);

}

/////////////////////////////////////////////////////*  display pages */
var click_Calls=document.querySelector(".Calls");
var click_status=document.querySelector(".Status");
var click_chats=document.querySelector(".chats");


click_chats.onclick=function(){
    whatsup_content.style.display="block";
    whatsup_status.style.display="none";
    whatsup_calls.style.display="none";
    this.classList.add("active");
    click_status.classList.remove("active");
    click_Calls.classList.remove("active");
   
};

click_status.onclick=function(){
    whatsup_content.style.display="none";
    whatsup_status.style.display="block";
    whatsup_calls.style.display="none";
    this.classList.add("active");
    click_Calls.classList.remove("active");
    click_chats.classList.remove("active");
   
};

click_Calls.onclick=function(){
    whatsup_content.style.display="none";
    whatsup_status.style.display="none";
    whatsup_calls.style.display="block";
    this.classList.add("active");
    click_status.classList.remove("active");
    click_chats.classList.remove("active");
   
};

/////////////////////////////////////////////////////*  single pages */

var person_img_single = document.querySelector(".person-img");
var person_name_single = document.querySelector(".person-name");
var single_time =document.querySelector(".single-time");

var person_message =document.querySelector(".persons-message .repla");
var self_message = document.querySelector(".self-message .self-replay");
var number_message =document.querySelector(".number-message");

var content_click =document.querySelectorAll(".content-click");

for(i=0;i<content_click.length;i++){
    
    content_click[i].onclick =function(){
        whatsup2.style.display="none";
        whatsup_toolbar.style.display="none";
        whatsup_content.style.display="none";
        parient_single_page.style.display="block";
    

        
       
        person_img_single.src=this.children[0].src;
        person_name_single.textContent=this.children[1].textContent;
        single_time.textContent=this.children[2].value;
        person_message.innerHTML =this.children[3].value +" <p class='time-message text-end'>" +getHourMessage + ":" + getMeniuteMessage+"</p>";
        self_message.innerHTML = "<i class='fa fa-check'></i>" + " " +this.children[4].value + "<p class='time-message text-end'>"+ getHourMessage + ":" + getMeniuteMessage +"</p>" ;
        number_message.style.display="none";

     /////////////////////////////////////////////////////*  start input single page */

        input_send.onclick=function(){

            if(input_message.value){

                var creat_self_message = document.createElement("div");
                creat_self_message.className="self-message w-100";
                self_message_parient.appendChild(creat_self_message);
 
                var creat_self_p=document.createElement("p");
                creat_self_p.className="self-replay";
                var creat_check_p_i=document.createElement("i");
                creat_check_p_i.className="fa fa-check";

                var creat_time_p=document.createElement("p");
                creat_time_p.className="time-message text-end";
                creat_time_p_text = document.createTextNode(getHourMessage + ":" + getMeniuteMessage);


                creat_self_message.appendChild(creat_self_p);
                creat_self_p_text = document.createTextNode(input_message.value);
                
                setTimeout(function()
                {
                    creat_self_p.prepend(creat_check_p_i);
                },1500);
                creat_self_p.appendChild(creat_self_p_text);
                creat_self_p.appendChild(creat_time_p);
                creat_time_p.appendChild(creat_time_p_text);

                
                
 

            }

           
             if(input_message.value == "how are you"){

                    setTimeout(function(){
                        var creat_automatic_reply = document.createElement("div");
                        creat_automatic_reply.className="persons-message w-100";
                        
                        var creat_automatic_reply_p=document.createElement("p");
                        creat_automatic_reply_p.className="repla";

                        var creat_time_p=document.createElement("p");
                        creat_time_p.className="time-message text-end";
                        creat_time_p_text = document.createTextNode(getHourMessage + ":" + getMeniuteMessage);

             
                        
                        
                        self_message_parient.appendChild(creat_automatic_reply);
                        creat_automatic_reply.appendChild(creat_automatic_reply_p);

                        

                        creat_automatic_reply_p_text = document.createTextNode("fine and you");
                        creat_automatic_reply_p.appendChild(creat_automatic_reply_p_text);
                        creat_automatic_reply_p.appendChild(creat_time_p);
                        creat_time_p.appendChild(creat_time_p_text);


                        
    

                    },2000);

                    

                    
                }

                else if(input_message.value == "hi"){

                    setTimeout(function(){
                        var creat_automatic_reply = document.createElement("div");
                        creat_automatic_reply.className="persons-message w-100";
                        
                        var creat_automatic_reply_p=document.createElement("p");
                        creat_automatic_reply_p.className="repla";

                        var creat_time_p=document.createElement("p");
                        creat_time_p.className="time-message text-end";
                        creat_time_p_text = document.createTextNode(getHourMessage + ":" + getMeniuteMessage);

             

                        
                        self_message_parient.appendChild(creat_automatic_reply);
                        creat_automatic_reply.appendChild(creat_automatic_reply_p);

                        creat_automatic_reply_p_text = document.createTextNode("hello");
                        creat_automatic_reply_p.appendChild(creat_automatic_reply_p_text);
    

                    },2000);

                }
                else if(input_message.value == "hello"){

                    setTimeout(function(){
                        var creat_automatic_reply = document.createElement("div");
                        creat_automatic_reply.className="persons-message w-100";
                        
                        var creat_automatic_reply_p=document.createElement("p");
                        creat_automatic_reply_p.className="repla";

                        var creat_time_p=document.createElement("p");
                        creat_time_p.className="time-message text-end";
                        creat_time_p_text = document.createTextNode(getHourMessage + ":" + getMeniuteMessage);

             

                        
                        self_message_parient.appendChild(creat_automatic_reply);
                        creat_automatic_reply.appendChild(creat_automatic_reply_p);

                        creat_automatic_reply_p_text = document.createTextNode("hi");
                        creat_automatic_reply_p.appendChild(creat_automatic_reply_p_text);
                        creat_automatic_reply_p.appendChild(creat_time_p);
                        creat_time_p.appendChild(creat_time_p_text);
    

                    },2000);

                }
                else{

                    setTimeout(function(){
                        var creat_automatic_reply = document.createElement("div");
                        creat_automatic_reply.className="persons-message w-100";
                        
                        var creat_automatic_reply_p=document.createElement("p");
                        creat_automatic_reply_p.className="repla";

                        var creat_time_p=document.createElement("p");
                        creat_time_p.className="time-message text-end";
                        creat_time_p_text = document.createTextNode(getHourMessage + ":" + getMeniuteMessage);

                        
                        self_message_parient.appendChild(creat_automatic_reply);
                        creat_automatic_reply.appendChild(creat_automatic_reply_p);

                        creat_automatic_reply_p_text = document.createTextNode("i dont understand!!!");
                        creat_automatic_reply_p.appendChild(creat_automatic_reply_p_text);
                        creat_automatic_reply_p.appendChild(creat_time_p);
                        creat_time_p.appendChild(creat_time_p_text);
    

                    },2000);

                }

                input_message.value =" ";

            

              
        }

       

    }

}

/////////////////////////////////////////////////////*  add story */
add_story.onclick=function(){
    click_input.click();

}
/////////////////////////////////////////////////////*  start  single calls */

var single_calls =document.querySelectorAll(".showcalls");
var single_style=document.querySelector(".single-calls");

for(i=0;i<single_calls.length;i++){
    single_calls[i].onclick=function(){
        whatsup2.style.display="none";
        whatsup_toolbar.style.display="none";
        whatsup_content.style.display="none";
        whatsup_calls.style.display="none";
        single_style.style.display="block";

        img_calls.src=this.children[0].src;
        calls_name.textContent=this.children[1].textContent;
        
    }

}

///////////////////////////////////////////* back single */

back_single.onclick=function(){
    whatsup2.style.display="block";
    whatsup_toolbar.style.display="block";
    whatsup_content.style.display="block";
    parient_single_page.style.display="none";
    whatsup_calls.style.display="none";
    whatsup_status.style.display="none";
    
}

back_story.onclick=function(){
    whatsup2.style.display="block";
    whatsup_toolbar.style.display="block";
    whatsup_content.style.display="none";
    single_story.style.display="none";
    whatsup_calls.style.display="none";
    whatsup_status.style.display="block";
    rangee.style.width = "0%";
    
}
back_phone.onclick=function(){
    whatsup2.style.display="block";
    whatsup_toolbar.style.display="block";
    whatsup_content.style.display="none";
    whatsup_calls.style.display="block";
    whatsup_status.style.display="none";
    single_style.style.display="none";
    
}
