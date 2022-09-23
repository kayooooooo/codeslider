    <script>
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName(&quot;mySlides0&quot;);
  for (i = 0; i &lt; x.length; i++) {
    x[i].style.display = &quot;none&quot;;  
  }
  myIndex++;
  if (myIndex &gt; x.length) {myIndex = 1}    
  x[myIndex-1].style.display = &quot;block&quot;;  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
</script>