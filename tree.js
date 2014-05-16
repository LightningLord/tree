$(function(){
  var my_parser = new parser()
  $('body').append(my_parser.parseObject(data))
})
var parser = function(){

}
parser.prototype = {
  parseObject : function(obj){
    var result = ["<ul>"]
    for (var key in obj){
      result.push("<li>")
      result.push(key)
      result.push(this.parseArray(obj[key]))
      result.push("</li>")
    }
    result.push("</ul>")
    return result.join("")
  },
  parseArray : function(arr){
    var result = ["<ul>"]
    for (var i = 0; i < arr.length; i++){
      if (typeof(arr[i]) == "object"){
        result.push(this.parseInnerObject(arr[i]))
      } else {
        result.push("<li>")
        result.push(arr[i])
        result.push("</li>")
      }
    }
    result.push("</ul>")
    return result.join("")
  },
  parseInnerObject : function(obj){
    var result = []
    for (var key in obj){
      result.push("<li>")
      result.push(key)
      result.push(this.parseArray(obj[key]))
      result.push("</li>")
    }
    return result.join("")
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
