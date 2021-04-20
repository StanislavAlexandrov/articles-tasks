let clickNumber = 0;
let sentenceBankNumber = 1;
function hideArticles() {
    let strOriginalText = sentenceBanks[sentenceBankNumber][clickNumber];
    let count = strOriginalText.match(/\bthe\b/g);
    let count_a = strOriginalText.match(/\ba\b/g);
    count = count ? count.length : 0; //checking if there are matches or not.
    count_a = count_a ? count_a.length : 0; //checking if there are matches or not.

    document.querySelector(
        '.articles-task_main__container__numberOfArticles'
    ).innerHTML =
        count +
        ' definite (THE) articles missing' +
        ' and ' +
        count_a +
        ' indefinite (A/AN) articles missing';

    let removedArticles = strOriginalText
        .replace(/\bthe\b/g, '')
        .replace(/\ba\b/g, '');

    document.querySelector(
        '.articles-task_main__container__updatedText'
    ).innerHTML = `${clickNumber + 1} of ${
        sentenceBanks[sentenceBankNumber].length
    }:
      ${removedArticles}`;

    if (clickNumber < sentenceBanks[sentenceBankNumber].length - 1) {
        clickNumber += 1;
    } else {
        clickNumber = 0;
    }

    document.querySelector(
        '.articles-task_main__container__answerText'
    ).innerHTML = '';
}

function showAnswers() {
    console.log(clickNumber);
    if (clickNumber > 0) {
        let colorAnswer = sentenceBanks[sentenceBankNumber][clickNumber - 1];

        let finalAnswer = colorAnswer
            .replace(/\bthe\b/g, '<span style="color:red;">THE</span>')
            .replace(/\ba\b/g, '<span style="color:red;">A</span>');
        document.querySelector(
            '.articles-task_main__container__updatedText'
        ).innerHTML = `${clickNumber} of ${sentenceBanks[sentenceBankNumber].length}: ${finalAnswer}`;
    } else {
        let colorAnswer =
            sentenceBanks[sentenceBankNumber][
                sentenceBanks[sentenceBankNumber].length - 1
            ];
        document.querySelector(
            '.articles-task_main__container__updatedText'
        ).innerHTML = `${sentenceBanks[sentenceBankNumber].length} of ${
            sentenceBanks[sentenceBankNumber].length
        }: ${colorAnswer
            .replace(/\bthe\b/g, '<span style="color:red;">THE</span>')
            .replace(/\ba\b/g, '<span style="color:red;">A</span>')}`;
    }
}

window.addEventListener('load', () => {
    hideArticles();
});
