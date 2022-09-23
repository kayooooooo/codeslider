  <script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName(&quot;mySlides&quot;);
  var dots = document.getElementsByClassName(&quot;demo&quot;);
  var captionText = document.getElementById(&quot;caption&quot;);
  if (n &gt; slides.length) {slideIndex = 1}
  if (n &lt; 1) {slideIndex = slides.length}
  for (i = 0; i &lt; slides.length; i++) {
      slides[i].style.display = &quot;none&quot;;
  }
  for (i = 0; i &lt; dots.length; i++) {
      dots[i].className = dots[i].className.replace(&quot;active&quot;, &quot;&quot;);
  }
  slides[slideIndex-1].style.display = &quot;block&quot;;
  dots[slideIndex-1].className += &quot; active&quot;;
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>