<%@ Control Inherits="CMS.WebUtilities.Components.Controls.Banner" Language="C#" %>
<%--<table class="banner<%=DivID%>" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <div class="bannerframe">
	            <% if (!string.IsNullOrEmpty(ZoneID) && ZoneID.Length < 6) {%>
                    <div class="bannercontainer">
                        <script type="text/JavaScript"> 
	                        <!--
	                        var ord=Math.round(Math.random()*100000000);
	                        document.write('<sc'+'ript language=JavaSc'+'ript src="http://ad.adverticum.net/js.prm?zona=<%=ZoneID%>&ord='+ord+'"><\/scr'+'ipt>');
	                        //-->
                        </script>
                        <noscript>
	                        <a href="http://ad.adverticum.net/click.prm?zona=<%=ZoneID%>" target="_top">
		                        <img height="<%=Height%>" alt="Kattintson a hirdetésre!" src="http://ad.adverticum.net/img.prm?zona=<%=ZoneID%>" width="<%=Width%>" border="0" />
	                        </a>
                        </noscript>

                    </div>
	            <%} else { %>
                    <div id="zone<%=ZoneID%>" class="goAdverticum"></div>
                    <script type="text/javascript" src="http://imgs.adverticum.net/scripts/goa3/goa3.js?zona=<%=ZoneID%>&ord='+ord+'"></script>
	            <%} %>
            </div>
        </td>
    </tr>
</table> --%>  


<div class="bannerwrap banner<%=DivID%>">
    <div id="zone<%=ZoneID%>" class="goAdverticum"></div>
    <a href="/ratecard" title="Hirdetés" class="caption"></a>
</div>
