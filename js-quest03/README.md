
<!DOCTYPE html>
<html>
  <body>
    <script>
      /*
        1# declare a function called detonation_in
        2# receives a parameter named seconds_left
        3# include console.log("detonation in... "+seconds_left+" seconds.")
        inside the block of the function
      */
     function detonation_in(seconds_left){
        console.log("detonation in... "+seconds_left+" seconds.");
     }

      var timer = 10;

      function startDetonationTimer() {
        if (timer > 0) {
          detonation_in(timer);
          timer--;
          setTimeout(startDetonationTimer, 1000);
        }
      }

      startDetonationTimer();
    </script>
  </body>
</html>

