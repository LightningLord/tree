$(function(){
  $('body').append(parser.parseObject(data))
  $('ul ul').hide()
  interactor.bind($('li'))
})
var interactor = (function(){
  return {
    bind: function(elem){
      elem.on("click", function(){
        $(this).children().show(500)
      })
    }
  }
})()


var parser = (function(){
  var uListify = function(toJoin){
    toJoin.unshift("<ul>")
    toJoin.push("</ul>")
    return toJoin.join("")
  }
  var listItemify = function(item){
    item.unshift("<li>")
    item.push("</li>")
    return item
  }
  return {
    parseObject : function(obj, inner){
      var result = []
      for (var key in obj){
        result = result.concat(listItemify([key, this.parseArray(obj[key])]))
      }
      if (inner){
        return result.join("")
      } else {
        return uListify(result)
      }
    },
    parseArray : function(arr){
      var result = []
      for (var i = 0; i < arr.length; i++){
        if (typeof(arr[i]) == "object"){
          result.push(this.parseObject(arr[i], true))
        } else {
          result = result.concat(listItemify([arr[i]]))
        }
      }
      return uListify(result)
    }
  }
})()



var data = {
  "fruits": [
    {
      "apples": [
        "green",
        "red",
        "fuji"
      ]
    },
    "oranges",
    "mangoes"
  ],
  "animals": [
    {
      "mammals": [
        {
          "cats": [
            "lion",
            "leopard",
            "panther"
          ],
          "dogs": [
            "bulldog",
            "poodle"
          ]
        }
      ],
      "reptiles": [
        "dinosaurs",
        "lizards",
        {
          "snakes": [
            "python",
            "anaconda"
          ]
        }
      ]
    }
  ]
}
