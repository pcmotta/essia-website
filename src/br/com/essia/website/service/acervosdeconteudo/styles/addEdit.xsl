<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:import href="/lumis/doui/style/DouiControls.xsl" />
	<xsl:output omit-xml-declaration="yes" method="xml" />
	
	<xsl:template match="control[@id='colorScript']">
		${lum_beforeWrite('<xsl:text disable-output-escaping="yes">&lt;link href="lumis-theme/br/com/essia/website/theme/essia-website/colorpicker/css/colorpicker.css" rel="stylesheet" type="text/css" charset="UTF-8"/&gt;</xsl:text>', 'colorpicker.css')}
		${lum_beforeWrite('<xsl:text disable-output-escaping="yes">&lt;link href="lumis-theme/br/com/essia/website/theme/essia-website/colorpicker/css/layout.css" rel="stylesheet" type="text/css" charset="UTF-8"/&gt;</xsl:text>', 'layout.css')}
		
		${lum_beforeWrite('<xsl:text disable-output-escaping="yes"><![CDATA[<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/colorpicker/js/jquery.js"></script>]]></xsl:text>', 'jquery.js')}
		${lum_beforeWrite('<xsl:text disable-output-escaping="yes"><![CDATA[<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/colorpicker/js/colorpicker.js"></script>]]></xsl:text>', 'colorpicker.js')}
		${lum_beforeWrite('<xsl:text disable-output-escaping="yes"><![CDATA[<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/colorpicker/js/eye.js"></script>]]></xsl:text>', 'eye.js')}
		${lum_beforeWrite('<xsl:text disable-output-escaping="yes"><![CDATA[<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/colorpicker/js/utils.js"></script>]]></xsl:text>', 'utils.js')}
		${lum_beforeWrite('<xsl:text disable-output-escaping="yes"><![CDATA[<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/colorpicker/js/layout.js"></script>]]></xsl:text>', 'layout.js')}

		<script>
			var onShow = function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			}
			
			var onHide = function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			}
		
			$( document ).ready(function() {
				$('#colorSelector').data('colorpickerId', 'colorSelectorId');
				$('#colorTextSelector').data('colorpickerId', 'colorTextSelectorId');
			
			    $('#colorSelector').ColorPicker({
					color: $("#cor").val() != "" ? $("#cor").val() : "#e6e6e6",
					onShow: onShow,
					onHide: onHide,
					onChange: function (hsb, hex, rgb) {
						$('#colorSelector div').css('backgroundColor', '#' + hex);
						$('#cor').val('#' + hex);
					}
				});
				
				$('#colorTextSelector').ColorPicker({
					color: $("#corTexto").val() != "" ? $("#corTexto").val() : "#e6e6e6",
					onShow: onShow,
					onHide: onHide,
					onChange: function (hsb, hex, rgb) {
						$('#colorTextSelector div').css('backgroundColor', '#' + hex);
						$('#corTexto').val('#' + hex);
					}
				});
				
				$("#cor").change(function(){
					$("#colorSelectorId .colorpicker_hex input").val($(this).val().replace("#",""));
					$("#colorSelectorId .colorpicker_hex input").change();
				});
				
				$("#corTexto").change(function(){
					$("#colorTextSelectorId .colorpicker_hex input").val($(this).val().replace("#",""));
					$("#colorTextSelectorId .colorpicker_hex input").change();
				});
				
				$("#colorSelector div").css('backgroundColor', $("#cor").val() != "" ? $("#cor").val() : "#e6e6e6");
				$("#colorTextSelector div").css('backgroundColor', $("#corTexto").val() != "" ? $("#corTexto").val() : "#e6e6e6");
			});
		</script>
	</xsl:template>
</xsl:stylesheet>