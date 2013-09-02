(function() {
// html5shiv MIT @rem remysharp.com/html5-enabling-script
// iepp v1.6.2 MIT @jon_neal iecss.com/print-protector
/*@cc_on(function(m,c){var z="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";function n(d){for(var a=-1;++a<o;)d.createElement(i[a])}function p(d,a){for(var e=-1,b=d.length,j,q=[];++e<b;){j=d[e];if((a=j.media||a)!="screen")q.push(p(j.imports,a),j.cssText)}return q.join("")}var g=c.createElement("div");g.innerHTML="<z>i</z>";if(g.childNodes.length!==1){var i=z.split("|"),o=i.length,s=RegExp("(^|\\s)("+z+")",
"gi"),t=RegExp("<(/*)("+z+")","gi"),u=RegExp("(^|[^\\n]*?\\s)("+z+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),r=c.createDocumentFragment(),k=c.documentElement;g=k.firstChild;var h=c.createElement("body"),l=c.createElement("style"),f;n(c);n(r);g.insertBefore(l,
g.firstChild);l.media="print";m.attachEvent("onbeforeprint",function(){var d=-1,a=p(c.styleSheets,"all"),e=[],b;for(f=f||c.body;(b=u.exec(a))!=null;)e.push((b[1]+b[2]+b[3]).replace(s,"$1.iepp_$2")+b[4]);for(l.styleSheet.cssText=e.join("\n");++d<o;){a=c.getElementsByTagName(i[d]);e=a.length;for(b=-1;++b<e;)if(a[b].className.indexOf("iepp_")<0)a[b].className+=" iepp_"+i[d]}r.appendChild(f);k.appendChild(h);h.className=f.className;h.innerHTML=f.innerHTML.replace(t,"<$1font")});m.attachEvent("onafterprint",
function(){h.innerHTML="";k.removeChild(h);k.appendChild(f);l.styleSheet.cssText=""})}})(this,document);@*/
})();
// page init

jQuery(window).load(function () {
	initSlideshow();
});


var rotationduration = 5000;
var userInterupted = false;
var time = null;

function initSlideshow() {
    var images = $(".image-gallery .field-item");
    var cIndex = 0;
    var userInter = false;
    var timeOut = null;
    
/*    $(".img_rotator .imagerotator-text").each(function() {
        var me = $(this);
        var w = me.width(); 
        me.css('margin-left', 0 - (w / 2));
    });*/
    
    var gotoPrev = function() {
        var current = images.eq(cIndex);
        
        cIndex--;
        if (cIndex == -1) {
            cIndex = images.length - 1;
        }
        
        var next = images.eq(cIndex);
        next.css({'z-index': 30});
        current.css('z-index', 29);
        
        next.fadeIn('2000', function() {
            current.hide();
        });
    };
    
    var gotoNext = function() {
        var current = images.eq(cIndex);
        
        cIndex++;
        if (cIndex == images.length) {
            cIndex = 0;
        }
        
        var next = images.eq(cIndex);
        next.css({'z-index': 30});
        current.css('z-index', 29);
        
        next.fadeIn('2000', function() {
            current.hide();
            
            if(!userInter) {
                timeOut = setTimeout(gotoNext, rotationduration);
            }
        });
    };
    
    var gotoSlide = function(pos) {
        var current = images.eq(cIndex);
        
        cIndex=pos;
        if (cIndex >= images.length) {
        	cIndex = images.length - 1;
        }
        if (cIndex < 0) {
            cIndex = 0;
        }
        
        var next = images.eq(cIndex);
        next.css({'z-index': 30});
        current.css('z-index', 29);
        
        next.fadeIn('2000', function() {
            current.hide();
            if(!userInter) {
                timeOut = setTimeout(gotoNext, rotationduration);
            }
        });
    };
    
    if (images.length > 1) {
        images.css({
            "position": "absolute",
            "left": 0,
            "top": 0
        }).hide();
        
        images.eq(cIndex).show();
        
        $(".image-gallery .next").bind("click", function(){ 
            userInter = true;
            clearTimeout(timeOut);
            gotoNext();
        });
        
        $(".image-gallery .prev").bind("click", function(){
            userInter = true;
            clearTimeout(timeOut);
            gotoPrev();
        }); //.parent().css('z-index', 40);
        
        timeOut = setTimeout(gotoNext, rotationduration);
    }
}

$(document).ready(function(){

	$('#header #block-block-4').click(function(){
		$(this).toggleClass('active');
		
		$('.#header #block-search-form').slideToggle(200);
	});
	
	var buttons = "#page-wrapper #main-wrapper .content .node-product .field-name-field-spec h2, #page-wrapper #main-wrapper .content .node-product .field-name-field-file h2, #page-wrapper #main-wrapper .content .node-product .field-name-field-image-extra h2";
		
	$(buttons).click(function(){
		var $this = $(this);
		
		
		$this
		.toggleClass('active')
			.siblings('.field-items')
			.slideToggle(400);
	});
	
	$('#page-wrapper #main-wrapper .content .node-product .field-name-field-image-extra h2').trigger('click');
});