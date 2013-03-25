
$(document).ready(function() {

	$( "#navigation" )
	  .accordion({
	    	header: "> div > h3",
	    	collapsible: true,
	    	heightStyle: "fill"
	  })
	  .sortable({
		    axis: "y",
		    handle: "h3",
		    stop: function( event, ui ) {
		      // IE doesn't register the blur when sorting
		      // so trigger focusout handlers to remove .ui-state-focus
		      ui.item.children( "h3" ).triggerHandler( "focusout" );
		}
	});


	myLayout = $('body').layout({
			west__size:			300
			// RESIZE Accordion widget when panes resize
		,	west__onresize:		$.layout.callbacks.resizePaneAccordions
		});

		// ACCORDION - in the West pane
		$("#accordion1").accordion({
			heightStyle:	"fill"
		});
		
});