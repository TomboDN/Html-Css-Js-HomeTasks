window.onload = function () {
    let result = {};
    let step = 0;
    function showQuestion() {
        document.querySelector('.question').innerHTML = quiz[step]['q'];
        let answer = '';
        for (let key in quiz[step]['a']) {
            answer += `<li data-v='${key}' class="option">${quiz[step]['a'][key]}</li>`;
        }
        document.querySelector('.answers').innerHTML = answer;

    }
    showQuestion();


    document.addEventListener('click', function (event) {
        event.stopPropagation();
        if (event.target.classList.contains('option') && step < quiz.length) {
            // event.target.data
            if (result[event.target.dataset.v] != undefined) {
                result[event.target.dataset.v]++;
            }
            else {
                result[event.target.dataset.v] = 0;
            }
            step++;
            if (step == quiz.length) {
                document.querySelector('.question').remove();
                document.querySelector('.answers').remove();
                showResult();
            }
            else {
                showQuestion();
            }
        }
        if (event.target.classList.contains('refresh')) {
            location.reload();
        }
    });

    function showResult() {
        let key = Object.keys(result).reduce(function (a, b) { return result[a] > result[b] ? a : b });

        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('.quiz-container').appendChild(div);

        let img = document.createElement('img');
        img.src = answers[key]['image'];
        img.classList.add('result-img')
        document.querySelector('.quiz-container').appendChild(img);

        let reloadButton = document.createElement('button');
        reloadButton.innerHTML = 'Пройти еще раз';
        reloadButton.classList.add('refresh');
        document.querySelector('.quiz-container').appendChild(reloadButton);
    }

}