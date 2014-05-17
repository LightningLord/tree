$(function(){
  $('body').append(new parser().parseObject(data))
  $('ul ul').hide()
  new interactor().bind($('li'))
})
var interactor = function(){}

interactor.prototype = {
  bind: function(elem){
    elem.on("click", function(){
      $(this).children().show(500)
    })
  }
}

var parser = function(){
  function uListify(toJoin){
    toJoin.unshift("<ul>")
    toJoin.push("</ul>")
    return toJoin.join("")
  }
  function listItemify(item){
    item.unshift("<li>")
    item.push("</li>")
    return item
  }

  this.parseObject = function(obj, inner){
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
  this.parseArray = function(arr){
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
