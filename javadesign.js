function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('departures');
  const url = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=39b04a61ce264e30abe28a7c8036d501&siteid=9731&timewindow=30';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let departures = data.ResponseData.Trains;
      return departures.map(function (departure) {
        let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');

        span.innerHTML = `${ departure.GroupOfLine + ":" + departure.Destination + " " + departure.DisplayTime}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  
   setInterval (function(){
       window.location.reload();
   },10000);
   

 
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let departures = data.ResponseData.Buses;
      return departures.map(function (departure) {
        let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
        span.innerHTML = `${"Bus " +departure.LineNumber + ":" + departure.Destination + " " + departure.DisplayTime }`;
        append(li, img); 
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    