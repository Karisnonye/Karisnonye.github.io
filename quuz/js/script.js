   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var game={
                  questions:[
                     {q:'What is the capital of Kenya?', options:['a. Johannesburg','b. Nairobi','c. Chad','d. Abuja'],answer:2},
                     {q:'In what year did Nigeria gain her independence?',options:['a. 1971','b. 1960','c. 1914','d. 1970'],answer:2},
                     {q:'How many colours has the Nigerian flag?',options:['a. Three','b. Four','c. One','d. Two'],answer:4},
                     {q:'In what year did Nigeria become amalgamated?',options:['a. 1971','b. 1960','c. 1914','d. 1970'],answer:3},
                     {q:'Who is the President of Nigeria',options:['a. Donald Trump','b. Muhammed Musa','c. Muhammed Buhari','d. Muhammed Ali'],answer:3}
                     ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Hello there! You have completed this quiz, see your score below"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";	
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=game.load();

           function button(ele){
           	     game.check(ele);
           	     game.notClickAble();
           }

         function  next(){
              game.next();
              game.clickAble();
         } 



