var questions = {"JS":
    [
        {
            "id":1,
            "question" : "Inside which HTML element do we put the JavaScript?",
            "options":[
                {
                    "a": "&lt;script&gt",
                    "b":"&lt;javascript&gt;",
			        "c":"&lt;scripting&gt;",
			        "d":"&lt;js&gt;"
                }
            ],
            "answer":"&lt;script&gt;",
            "score":0,
            "status":"",
        },
        {
            "id" : 2,
            "question" : "Where is the correct place to insert a JavaScript?",
            "options" : [
                {"a": "The &lt;head&gt; section", 
                 "b":"The &lt;body&gt; section", 
                 "c":"Both the &lt;head&gt; section and the &lt;body&gt; section are correct"}
                ],
            "answer":"Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
            "score":0,
            "status": ""
        },
        {
            "id" : 3,
            "question" : "How do you call a function named &quot;myFunction&quot;?",
            "options" : [
                {"a": "call function myFunction()", 
                 "b":"call myFunction()",
                 "c":"myFunction()",
                }
                ],
            "answer":"myFunction()",
            "score":0,
            "status": ""
        },
        {
            "id" : 4,
            "question" : "How does a WHILE loop start?",
            "options" : [
                {"a": "while i = 1 to 10", 
                 "b":"while (i &lt;= 10; i++)",
                 "c":"while (i &lt;= 10)"
                }
                ],
            "answer":"while (i &lt;= 10)",
            "score":0,
            "status": ""
        },
        {
            "id" :5 ,
            "question" : "How do you declare a JavaScript variable?",
            "options" : [
                {"a": "var carName;", 
                 "b":"variable carName;",
                 "c":"v carName;"
                }
                ],
            "answer":"var carName;",
            "score":0,
            "status": ""
        },
    ]
}

var quizApp = function(){
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = questions.JS.length;

    this.displayQuiz = function(cque){
        this.currentque = cque;
        if(this.currentque < totalque){
            document.getElementById("tque").innerText = totalque;
            document.getElementById("previous").classList.remove("disabled");
            document.getElementById("previous").classList.add("enabled")
            document.getElementById("next").classList.remove("disabled")
            document.getElementById("next").classList.add("enabled")
            document.getElementById("qid").innerText = questions.JS[this.currentque].id + '.';
            document.getElementById("question").innerText = questions.JS[this.currentque].question;
            document.getElementById("question-options").innerText = "";
            for (var key in questions.JS[this.currentque].options[0]) {
                if (questions.JS[this.currentque].options[0].hasOwnProperty(key)) {
          
                 $("#question-options").append(
                      "<div class='form-check option-block'>" +
                      "<label class='form-check-label'>" +
                                "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + questions.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
                                questions.JS[this.currentque].options[0][key] +
                               "</span></label>"
                  );
                }
              }
        }
        if(this.currentque <=0){
            document.getElementById("previous").classList.remove("enabled");
            document.getElementById("previous").classList.add("disabled");
        }
        if(this.currentque >= totalque){
            document.getElementById("next").classList.remove("enabled");
            document.getElementById("next").classList.add("disabled");
            for(var i=0; i<totalque; i++){
                this.score = this.score + questions.JS[i].score;
            }
            return this.showResult(this.score);
        }
    }

    this.showResult = function(score) {
        document.getElementById("result").classList.add("result");
        document.getElementById("result").innerHTML = `<h1 class='res-header'>Total Score: &nbsp; ${score}/${totalque}</h1>`;
		for(var j = 0; j < totalque; j++) {
			var res;
			if(questions.JS[j].score == 0) {
				res = '<span class="wrong">' + questions.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + questions.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + questions.JS[j].id + '</span> &nbsp;' + questions.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + questions.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}

    this.checkAnswer = function(option) {
		var answer = questions.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  questions.JS[this.currentque].answer) {
			if(questions.JS[this.currentque].score == "") {
				questions.JS[this.currentque].score = 1;
				questions.JS[this.currentque].status = "correct";
		}
		} else {
			questions.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}

    
}

var jsq = new quizApp();

var selectedOption;
$(document).ready(function(){
    jsq.displayQuiz(0);

    $("#question-options").on("change","input[type=radio][name=option]", function(e){
        $(this).prop("checked",true);
        selectedOption = $(this).val();
    });
});

$("#next").click(function(e){
    e.preventDefault();
    if(selectedOption){
        jsq.checkAnswer(selectedOption);
    }
    jsq.changeQuestion(1);
});

$("#previous").click(function(e){
    e.preventDefault();
    if(selectedOption){
        jsq.checkAnswer(selectedOption);
    }
    jsq.changeQuestion(-1);
});