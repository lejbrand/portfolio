$(document).ready(function(){

    let count = setInterval(timer, 0);
    let d = false

    function timer(){
        let i = Math.floor(Math.random() * 50);
            $("h2").text(k[i])
    }
    

    $("button").click(function(){
        if(d==false){
            return;
        }
        count = setInterval(timer, 0);
        d = false
    })
    
    let k = [ 
        "산성눈물", "어둠 속에서 투명인간 됨", "리모컨 조종", "과일과 대화가능",
        "하루에 한번씩 냉장고 소환가능", "10cm 공중부양", "하루에 한번씩 대머리로 변신",
        "투명한 손글씨를 쓸 수 있음", "모든 모자를 유혹할 수 있음", "돌과 대화능력",
        "벌레를 부활시킬 수 있음", "하루에 한번 노트북으로 변신 가능", "1초동안만 괴력 발휘",
        "슬로우모션으로 움직일 수 있음", "나 자신에게 독심술 가능", "쓰레기 탐지능력",
        "다리에 털이 엄청 자람", "빠르게 나이를 먹을 수 있음"
    ]


    $(".section-wrap").click(function(){
        clearInterval(count)
        d = true
    })


    
})
