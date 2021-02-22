
function stepBarProcess(proId,circlesSelctor,action) {

    const circles = document.querySelectorAll(circlesSelctor);  //--circlesSelctor

    var nodeActiveClassName = circlesSelctor+'.active';
    const activesNodes = document.querySelectorAll(nodeActiveClassName);
    let currentActive = activesNodes.length;


    if (action === 'next'){
        currentActive++;

        if (currentActive > circles.length) {
            currentActive = circles.length
        }

        update(proId,circlesSelctor,currentActive)

    }
    if (action === 'prev'){
        currentActive--;

        if (currentActive < 1) {
            currentActive = 1
        }

        update(proId,circlesSelctor,currentActive)
    }

}


function update(proId,circlesSelctor,currentActive) {

    console.log('update-----enter');


    const prev = document.getElementById('prev1');
    const next = document.getElementById('next1');
    const circles = document.querySelectorAll(circlesSelctor);  //--circlesSelctor

    const progress = document.getElementById(proId);    //--proId

    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });


    var selectorAll = circlesSelctor+'.active';

    const actives = document.querySelectorAll(selectorAll);
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';


    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}