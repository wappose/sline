<div id="header">
	<?php print render($page['header']);?>
	<div id="logo">
		<a href="<?php echo base_path(); ?>">
			<img src="<?php echo base_path() . path_to_theme(); ?>/images/page/logo.jpg" alt="S-line Office" />
		</a>
	</div>
	
	<?php if ($page['navigation']): ?>
		<?php print render($page['navigation']); ?>
	<?php endif; ?>
	
	
	<div class="language">
		<?php
		$langBlock = module_invoke('locale', 'block_view', 'language');
		if ($langBlock):
			print render($langBlock); 
		endif;
		?>
	</div>
</div>