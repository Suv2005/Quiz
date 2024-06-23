let data=[
    {
        Q: "In which year was The Godfather first released?",
        a:"1971",
        b:"1976",
        c:"1972",
        d:"1980",
        soln:"ans2"
    },
    {
        Q: "What sport did Neil Adams excel in? ",
        a:"Cricket",
        b:"Football",
        c:"Basketball",
        d:"Judo",
        soln:"ans4",
    },
    {
        Q: "Canadian Connor McDavid is a rising star in which sport?",
        a:"Hockey",
        b:"Football",
        c:"Ice Hockey",
        d:"Athletics",
        soln:"ans2"
    },
    {
        Q: "How many hearts does an Octopus Have?",
        a:"3",
        b:"4",
        c:"2",
        d:"1",
        soln:"ans1",
    },
    {
        Q: "If the Earth were made into a black hole, what would be the diameter of it?",
        a:"20000mm",
        b:"20mm",
        c:"200mm",
        d:"2m",
        soln:"ans2",
    },
    {
        Q: "What’s the average surface temperature on Venus?",
        a:"440°C",
        b:"460°C ",
        c:"4000°C",
        d:"1980°C",
        soln:"ans2"
    },
    {
        Q: "Most famous game in the world?",
        a:"Football",
        b:"Hockey",
        c:"Basketball",
        d:"Cricket",
        soln:"ans1"
    },
    {
        Q: "Messi won how many BallonD'or?",
        a:"5",
        b:"6",
        c:"7",
        d:"8",
        soln:"ans4"
    }
]
    let ques= document.getElementById("q");
    let option1=document.getElementById("opt1");
    let option2=document.getElementById("opt2");
    let option3=document.getElementById("opt3");
    let option4=document.getElementById("opt4");

    let num=0;
    let score=0;
    let myScore=document.querySelector(".myScore");
    let des=document.querySelector(".btn");
    let answers=document.querySelectorAll(".options");

    ques.innerHTML=data[num].Q;
    option1.innerHTML=data[num].a;
    option2.innerHTML=data[num].b;
    option3.innerHTML=data[num].c;
    option4.innerHTML=data[num].d;

    var timer;
    var time=document.getElementById("time");

    function clock(){
        var sec=0;
        timer=setInterval(()=>{
            time.innerHTML="00:"+sec;
            sec++;
            if(sec>=60){
                clearInterval(timer);
                showResult();
            }
        },1000);
    }
    

    function checkAns(){
        let ans;
        answers.forEach((CurElement)=>{
            if(CurElement.checked){
                ans=CurElement.id;
                console.log(ans);
            }
        })
        return ans;
    }
    function disselect(){
        answers.forEach((CurElement)=>{
            CurElement.checked=false;
            }
        )
    }


    function next(){
        let given=checkAns();
        disselect();
        if(given==data[num].soln){
            score++;
        }
        num++;
        if(num<data.length){
        ques.innerHTML=data[num].Q;
        option1.innerHTML=data[num].a;
        option2.innerHTML=data[num].b;
        option3.innerHTML=data[num].c;
        option4.innerHTML=data[num].d;
        }
        else{
            showResult();
        }
        
    }
    function showResult() {
        myScore.innerHTML = `Your Score: ${score}/${data.length} <br/>
            <button class="button" onclick="location.reload()">Again</button>`;
        document.getElementById("nxt").style.display = "none";
        des.style.backgroundColor = "red";
    }
    clock();


