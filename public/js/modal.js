var questions = [
  {
    prompt: 'When x = 3 and y = 5, What is the degree measure of the acute angle formed by the hands of a 12-hour clock that reads exactly 1 o’clock?',
    options: ['5', '15', '30'],
    correctAnswer: '15'
  },
  {
    prompt: 'What is the probability that a number selected at random from the set {2, 3, 7, 12, 15, 22, 72, 108} will be divisible by both 2 and 3 ?',
    options: ['2','12','36','42'],
    correctAnswer: '36'
  },
  {
    prompt: 'A circle has a circumference of 16 feet. What is the radius of the circle, in feet?',
    options: ['2','12','36','42'],
    correctAnswer: '12'
  },
  {
    prompt: 'In the standard (x,y)coordinate plane, what are the coordinates of the midpoint of a line segment whose endpoints are (–3,0) and (7,4) ?',
    options: ['2','4','-4','-2'],
    correctAnswer: '12'
  },
  {
    prompt: 'An industrial cleaner is manufactured using only the 3 secret ingredients A, B, and C, which are mixed in the ratio of 2:3:5, respectively, by weight. How many pounds of secret ingredient B are in a 42-pound (net weight) bucket of this cleaner?',
    options: ['2', '6', '8', '12'],
    correctAnswer: '6'
  }
];
var currentQuestionIndex = 0;
var correct = 0;
var incorrect = 0;

var num;
function submit() {

  
  console.log("question num: "+num);
  var selected = $(".modal-body input:checked").val();

  $("#selected").text('You selected ' + selected);
    //var button = $(event.relatedTarget);  // Button that triggered the modal
    //var num = parseInt(button.data('num'));
  if (questions[num].correctAnswer == selected) {
    correct++;
    
  }
  else {
    incorrect++;
  }
  //make button diabled.
  $( "button[data-num='"+ num + "']" ).prop('disabled', true);

  if (correct + incorrect === 5){
    $("#mathScore").text(correct + " Correct / " + incorrect + " Incorrect");
  }
  
  console.log("correct: "+correct);
  console.log("incorrect : "+incorrect)
}

function getOptions(question) {
  var $buttonDiv = $('<div></div>');
  question.options.forEach(function (opt) {
    var $label = $('<label class="radio"></label');
    var $input = $('<input type="radio" name="opts" value="' + opt + '">');
    $label.append($input);
    $label.append(opt);
    $buttonDiv.append($label);
  });
  return $buttonDiv;
}

function showQuestion(event, $modal) {
  var button = $(event.relatedTarget);  // Button that triggered the modal
   num = parseInt(button.data('num'));
  var question = questions[num];
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));

}

$(function () {
  $("#myModal").on('show.bs.modal', function (event) {
    showQuestion(event, $(this));
  });
});
$(".go-button").on("click", function () {
  
  // Reactivate Buttons
  $( "button").prop('disabled', false);
  // Reset Score Text
  $("#mathScore").text("");

  $(".home-info").hide();
})
$(".questionSubmit").on("click", function (event) {
  submit();
 })

