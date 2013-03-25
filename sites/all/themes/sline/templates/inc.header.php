<div id="header"><div class="section clearfix">
    <?php print render($page['header']);?>
   	
  	<div id="logo"><div class="section clearfix">
		<?php echo l("S-LINE OFFICE", "<front>"); ?>    
  	</div></div><!-- /.section, /#navigation -->
      
    <?php if ($page['navigation']): ?>
      <div id="nav"><div class="section clearfix">
        <?php print render($page['navigation']); ?>
      </div></div><!-- /.section, /#nav -->
    <?php endif; ?>

  </div></div><!-- /.section, /#header -->