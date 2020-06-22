let tit = document.getElementById("title");
let cont= document.getElementById("content");
let submitBtn = document.querySelector(".submit-btn");

let titleTxt, contTxt, dayTxt;
let todoData = [];
let str = '';
let card = document.querySelector(".card-wrap");

// 新增 Task
submitBtn.addEventListener('click',addTask);
function addTask(){
    dayTxt = new Date().toLocaleDateString();
    // console.log("date",dayTxt);
    titleTxt = tit.value;
    contTxt  = cont.value;
    if (titleTxt === "" && contTxt === ""){
        alert("Please type the title & content");
    }else if(titleTxt === ""){
        alert("Please type the title");
    }else if(contTxt === ""){
        alert("Please type the content");
    }else{
        todoData.push({
            title: tit.value,
            content: cont.value,
            date: dayTxt
        });
        render();
        tit.value = '';
        cont.value  = '';
    }
};

function render(){
    todoData.forEach(function(task,index){
        str = `
            <div class="card d-flex flex-d-col jc-space-between mb-1 pb-1 pt-1" task-index=${index+1}>
                <div class="pr-xs pl-xs">
                    <p class="pb-1 fz-sm color-primary font-primary decoration-line-b word-wrap-break">${task.title}</p>
                    <p class="pl-1 mt-1 color-secondary decoration-line-l word-wrap-break">${task.content}</p>
                </div>
                <ul class="d-flex jc-space-between pt-1 pr-xs pl-xs">
                    <li class="card-btn done-btn d-flex jc-center ai-center flex-1">
                        <span class="material-icons mr-tiny">calendar_today</span>
                        <p class="fw-bold">${task.date}</p>
                    </li>
                    <li class="card-btn done-btn d-flex jc-center ai-center flex-1">
                        <span class="material-icons mr-tiny">check_circle_outline</span>
                        <p class="fw-bold">Done</p>
                    </li>
                    <li class="card-btn dele-btn d-flex jc-center ai-center flex-1">
                        <span class="material-icons mr-tiny">delete</span>
                        <p class="fw-bold">Delete</p>
                    </li>
                </ul>
            </div>`
    });
    card.innerHTML += str;
    let doneBtn = document.querySelectorAll(".done-btn");
    let deleBtn = document.querySelectorAll(".dele-btn");
    // DONE 事件
    doneBtn.forEach(function(done){
        done.addEventListener('click',doneTask);
    });
    // Delete 事件
    deleBtn.forEach(function(del){
        del.addEventListener('click',deleTask);
    })
}

function doneTask(){
    this.closest(".card").style.opacity = "0.5";
}
function deleTask(){
    this.closest(".card").remove();
}

render();