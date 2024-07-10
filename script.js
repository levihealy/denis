const imageFilenames = ["denis1.jpg", "denis2.jpg", "denis3.jpg", "denis4.jpg", "denis5.jpg", "denis6.jpg", "denis7.jpg", "denis8.jpg", "denis9.jpg"];

const correctAnswers = ["denis1.jpg", "denis2.jpg", "denis3.jpg", "denis4.jpg", "denis5.jpg", "denis6.jpg", "denis7.jpg", "denis8.jpg", "denis9.jpg"]; 

let selectedAnswers = [];

function checkAnswers() {
    const resultDiv = document.getElementById("result");

    const allAnswersCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) && selectedAnswers.length === correctAnswers.length;

    if (allAnswersCorrect) {
        resultDiv.textContent = "Congratulations! You passed!";
        
        setTimeout(function() {
            window.location.href = "page2.html";
        }, 2000);
    } else {
        resultDiv.textContent = "Shame on you..... Do you even know Denis?";
    }
}

document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', function() {
        const imageName = this.src.substring(this.src.lastIndexOf("/") + 1); 

        if (selectedAnswers.includes(imageName)) {
            selectedAnswers = selectedAnswers.filter(answer => answer !== imageName);
            this.classList.remove('selected');
        } else {
            selectedAnswers.push(imageName);
            this.classList.add('selected');
        }
    });
});

document.getElementById('checkButton').addEventListener('click', function() {
    checkAnswers();
});
