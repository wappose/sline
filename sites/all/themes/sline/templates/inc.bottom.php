
<?php print render($page['bottom']); ?>
      
      <?php
      	if(is_array($action_links) && count($action_links) > 0 && is_array($tabs)) {
      		$action_links[0]['#theme'] =  'menu_local_task';
      		unset($action_links[0]['#printed']);
      		$tabs['#primary'][] = $action_links[0];
      	}
      	if ($tabs = render($tabs)): ?>
<div id="editorLinks">      	
        <?php print $tabs; ?>
</div>
        <?php endif; ?>


<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-30363568-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<!-- Tracking code for www.sline.se -->
<script type="text/javascript">var psSite = "dc0c5957f2";var peJsHost = (("https:" == document.location.protocol) ? "https://" : "http://");
document.write(unescape("%3Cscript src='" + peJsHost + "tr.prospecteye.com/track.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<noscript><img src="http://tr.prospecteye.com/?id=dc0c5957f2" style="border:0;display:none;"></noscript>
<!-- End Tracking code -->         