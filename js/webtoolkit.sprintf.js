sprintfWrapper={init:function(){if(typeof arguments=="undefined"){return null}if(arguments.length<1){return null}if(typeof arguments[0]!="string"){return null}if(typeof RegExp=="undefined"){return null}var j=arguments[0];var c=new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g);var g=new Array();var l=new Array();var a=0;var h=0;var m=0;var d=0;var k="";var f=null;while(f=c.exec(j)){if(f[9]){a+=1}h=d;m=c.lastIndex-f[0].length;l[l.length]=j.substring(h,m);d=c.lastIndex;g[g.length]={match:f[0],left:f[3]?true:false,sign:f[4]||"",pad:f[5]||" ",min:f[6]||0,precision:f[8],code:f[9]||"%",negative:parseInt(arguments[a])<0?true:false,argument:String(arguments[a])}}l[l.length]=j.substring(d);if(g.length==0){return j}if((arguments.length-1)<a){return null}var b=null;var f=null;var e=null;for(e=0;e<g.length;e++){if(g[e].code=="%"){substitution="%"}else{if(g[e].code=="b"){g[e].argument=String(Math.abs(parseInt(g[e].argument)).toString(2));substitution=sprintfWrapper.convert(g[e],true)}else{if(g[e].code=="c"){g[e].argument=String(String.fromCharCode(parseInt(Math.abs(parseInt(g[e].argument)))));substitution=sprintfWrapper.convert(g[e],true)}else{if(g[e].code=="d"){g[e].argument=String(Math.abs(parseInt(g[e].argument)));substitution=sprintfWrapper.convert(g[e])}else{if(g[e].code=="f"){g[e].argument=String(Math.abs(parseFloat(g[e].argument)).toFixed(g[e].precision?g[e].precision:6));substitution=sprintfWrapper.convert(g[e])}else{if(g[e].code=="o"){g[e].argument=String(Math.abs(parseInt(g[e].argument)).toString(8));substitution=sprintfWrapper.convert(g[e])}else{if(g[e].code=="s"){g[e].argument=g[e].argument.substring(0,g[e].precision?g[e].precision:g[e].argument.length);substitution=sprintfWrapper.convert(g[e],true)}else{if(g[e].code=="x"){g[e].argument=String(Math.abs(parseInt(g[e].argument)).toString(16));substitution=sprintfWrapper.convert(g[e])}else{if(g[e].code=="X"){g[e].argument=String(Math.abs(parseInt(g[e].argument)).toString(16));substitution=sprintfWrapper.convert(g[e]).toUpperCase()}else{substitution=g[e].match}}}}}}}}}k+=l[e];k+=substitution}k+=l[e];return k},convert:function(b,d){if(d){b.sign=""}else{b.sign=b.negative?"-":b.sign}var a=b.min-b.argument.length+1-b.sign.length;var c=new Array(a<0?0:a).join(b.pad);if(!b.left){if(b.pad=="0"||d){return b.sign+c+b.argument}else{return c+b.sign+b.argument}}else{if(b.pad=="0"||d){return b.sign+b.argument+c.replace(/0/g," ")}else{return b.sign+b.argument+c}}}};sprintf=sprintfWrapper.init;