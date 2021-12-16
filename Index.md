<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
        content="width=device-width,
        initial-scale=1.0">
        <title>Quiz App</title>
        <link rel="stylesheet" href="style.css">
        <script src="script.js" defer></script>
    </head>
    <body>
        <h1 class="lfc">Liverpool FC Quiz</h1>

        <!-- .quiz-container  ->   Enter  -->
        <div class="quiz-container" id="quiz">
            <div class="quiz-header">

            

                <h2 id='question'>Question Text</h2>
                
                <!--  ul>li*4>input+label ->  Enter --> 
                <ul>
                    <li><input type="radio" id="a" name="answer" class="answer"><label id="a_text" for="a">Question</label></li>
                    <li><input type="radio" id="b" name="answer" class="answer"><label id="b_text" for="b">Question</label></li>
                    <li><input type="radio" id="c" name="answer" class="answer"><label id="c_text" for="c">Question</label></li>
                    <li><input type="radio" id="d" name="answer" class="answer"><label id="d_text" for="d">Question</label></li>

                </ul>


            </div>

         <button id="submit">Submit</button>
      
        </div>

    </body>
</html>