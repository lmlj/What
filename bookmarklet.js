javascript:(function(){if(window.asdfzxvmasdfjkl!==true){var c='<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"><style>#scw-buttons{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:moz-none;-ms-user-select:none;user-select:none;margin:0 0 18px}#sc-widget{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:moz-none;-ms-user-select:none;user-select:none}.scw-button{cursor:pointer;display:inline-block;white-space:nowrap;background:rgba(0,0,0,0.85);border:4px solid rgba(255,255,255,0.85);color:rgba(255,255,255,0.85);font-size:32px;transition:.25s all;border-radius:72px;vertical-align:middle;width:36px;height:36px;position:relative;top:6px;margin:0 8px;padding:8px}.scw-button.large{font-size:48px;width:42px;height:42px;padding:14px}.scw-button.large > span{transition:none!important}.scw-button.large > span.icon-play{position:relative;top:-2px;left:4px}.scw-button.large > span.icon-pause{position:relative;top:-1px;left:1px;font-size:44px}.scw-button:not(.large) > span{position:relative;top:2px}.scw-button:hover{color:rgba(255,255,255,1);border:4px solid rgba(255,255,255,1);background:rgba(0,0,0,0.95)}</style>',a=$(".header h2").text(),b=$(".header h2 span").text(),d;if(document.location.href.indexOf("artist.php")>0){d=a}else{if(document.location.href.indexOf("torrents.php")>0){d=b}}$.getJSON("http://api.soundcloud.com/tracks.json?q="+encodeURIComponent(d)+"&client_id=7568f7d549cbd2cfd5e33fc5d827afe7",function(e){if(e!==null&&e.length>0){$.getScript("https://w.soundcloud.com/player/api.js").done(function(){var f=$('<iframe id="sc-widget" src="https://w.soundcloud.com/player/?url='+encodeURIComponent(e[0].uri)+'" width="240" height="104" scrolling="no" frameborder="no" style="position:relative;left:5px;margin-bottom:12px;user-select:none;"></iframe>'),i=$('<div id="scw-buttons" align="center"></div>'),l=$('<div id="scw-play" class="scw-button large"><span class="icon-play"></span></div>'),g=$('<div id="scw-next" class="scw-button"><span class="icon-step-forward"></span></div>'),h=$('<div id="scw-prev" class="scw-button"><span class="icon-step-backward"></span></div>');f.insertBefore(".sidebar > .box:first-of-type"),i.append(h).append(l).append(g),$(c).appendTo("head");i.insertBefore("#sc-widget");var j=SC.Widget("sc-widget"),k=0;j.bind(SC.Widget.Events.READY,function(){j.bind(SC.Widget.Events.FINISH,function(){++k,j.load(e[k].uri)});$("#scw-play").on("click",function(){if($(this).hasClass("pause")){j.pause();$(this).removeClass("pause").find("span").removeClass("icon-pause").addClass("icon-play")}else{j.play();$(this).addClass("pause").find("span").removeClass("icon-play").addClass("icon-pause")}});$("#scw-next").on("click",function(){++k,j.load(e[k].uri,{callback:function(){j.play(),$("#scw-play").addClass("pause").find("span").removeClass("icon-play").addClass("icon-pause")}})});$("#scw-prev").on("click",function(){--k,j.load(e[k].uri,{callback:function(){j.play(),$("#scw-play").addClass("pause").find("span").removeClass("icon-play").addClass("icon-pause")}})})})})}});window.asdfzxvmasdfjkl=true}})(window);