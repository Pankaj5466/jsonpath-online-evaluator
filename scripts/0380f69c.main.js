(function(){var a;a=function(){var a,b,c,d;console.log("evaluate"),c=$("input").val();try{b=JSON.parse($("textarea").val().replace(/(\r\n|\n|\r)/gm,"")),$("#json-area").removeClass("has-error"),$("#json-aler").text("")}catch(e){a=e,$("#json-area").addClass("has-error"),$("#json-aler").text(a.message)}return d=JSONPath({json:b,path:c}),$(".result").empty(),d?$(".result").append(dump(d)):void 0},$(function(){return $("input").on("textchange",a),$("textarea").on("textchange",a),a()})}).call(this);