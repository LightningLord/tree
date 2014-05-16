$(function(){
  var myParser = new parser()
  $('body').append(myParser.parseObject(data))
})
var parser = function(){}
parser.prototype = {
  parseObject : function(obj, inner){
    var result = []
    for (var key in obj){
      result.push("<li>")
      result.push(key)
      result.push(this.parseArray(obj[key]))
      result.push("</li>")
    }
    if (inner){
      return result.join("")
    } else {
      return this.joinUL(result)
    }
  },
  parseArray : function(arr){
    var result = []
    for (var i = 0; i < arr.length; i++){
      if (typeof(arr[i]) == "object"){
        result.push(this.parseObject(arr[i], true))
      } else {
        result.push("<li>")
        result.push(arr[i])
        result.push("</li>")
      }
    }
    return this.joinUL(result)
  },
  joinUL : function(toJoin){
    toJoin.unshift("<ul>")
    toJoin.push("</ul>")
    return toJoin.join("")
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
