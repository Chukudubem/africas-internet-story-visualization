var checker = true; var state = 'start';var sortBy = 'ascending'; var title_ = "Percentage of Internet Users";
var datum;

var check_country = function (a, b) {return a.Country.localeCompare(b.Country)}
var check_percentage = function (a, b) {return a.Year - b.Year; }

function update(data, svg, X, y, height, width, title_) {
    var x = d3.scaleBand()          
              .range([50, width])
              .padding(0.3)
             x.domain(data.map(function(d) { return d.Country; }));

    var xAxis = d3.axisBottom()
                  .scale(x);

    d3.select(".x")
      .transition()
      .duration(300)
      .call(xAxis);
      
    var rects = svg.selectAll("rect")
                   .data(data, function (d) { return d.Country; });

if (state == 'top-5' || state == 'bottom-5' ){
   rects.transition()
        .duration(300)
        .delay(function(d, i) { return i * 10; })
        .attr('x', function (d) { return x(d.Country); })
        .attr('y', function (d) { return y(d.Year); })
        .attr('width',x.bandwidth())
        .attr('height', function (d) { return height - y(d.Year) ; })
    rects.enter()
        .append('rect')
        .transition()
        .duration(300)
        .delay(function(d, i) { return i * 10; })
        .attr('x', function (d) { return x(d.Country); })
        .attr('y', function (d) { return y(d.Year); })
        .attr('width', x.bandwidth())
        .attr('height', function (d) { return height - y(d.Year); })
    rects.exit()
        .transition()
        .delay(500)
        .style("opacity", 0)
        .remove();
   }
  else{
    rects.transition()
         .duration(300)
         .delay(function(d, i) { return i * 10; })
         .attr('x', function (d) { return x(d.Country); })
         .attr('y', function (d) { return y(d.Year) ; })
         .attr('width', x.bandwidth())
         .attr('height', function (d) { return height - y(d.Year); })

    rects.enter()
         .append('rect')
         .transition()
         .duration(300)
         .delay(function(d, i) { return i * 10; })
         .attr('x', function (d) { return x(d.Country); })
         .attr('y', function (d) { return y(d.Year); })
         .attr('width', x.bandwidth())
         .attr('height', function (d) { return height - y(d.Year); })
    rects.exit()
         .transition()
         .duration(500)
         .style("opacity", 0)
         .remove();
        }
    }



var bar_chart_svg = function(data, title_) {
    var margin = { top:20,bottom:60,left:60,right:20 };
    var width = 1200 - margin.left - margin.right,
        height = 590 - margin.top - margin.bottom;
    var maxPct = d3.max(data, function (d) {return d.Year; });

    var svg = d3.select('#svg0')
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left +  "," + margin.top + ")");
    
    var X = svg.append("g")
               .attr("transform", "translate(0," + height + ")")
               .attr("class", "x")
               
    
    var x = d3.scaleBand()
              .range([0, width])
              .padding(0.3);
        
    var y = d3.scaleLinear()
              .domain([0, 100])
              .range([height,0]);
    
    var yAxis = d3.axisLeft(y)
                  .ticks(8);
    
    svg.append("g")
        .attr("transform", "translate(50,0)")
        .call(yAxis);
    
    svg.append("text")
        .attr("x", -width /4)
        .attr("y", 10)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Percentage");
    
    svg.append('text')
        .attr("x", width/2)
        .attr("y", 555)
        .text("Country")

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 5 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text(title_);
    
    
  
    update(data, svg, X, y, height,width, title_);
    datum = data.map(x => x)


    d3.select("#reset").on("click", function() {
      state = 'reset';
      checker = true;
      title_ = "Percentage of Internet Users"
      data = datum.map(x => x)
      update(data, svg, X, y, height,width,title_);
    });

    d3.select("#all-10").on("click", function() {
        state = 'all-10';
        data = datum.map(x => x)
        title_ = "Percentage of Internet Users"
        if (checker == true){
          data.sort(check_country);
          update(data, svg, X, y, height,width,title_);
        }
        else {
          if (sortBy == 'ascending'){
            data.sort(check_percentage);
            update(data, svg, X, y, height,width, title_);
          }
          else {
            data.sort(check_percentage);
            update(data, svg, X, y, height,width, title_);
          }
        }
      });
  
      d3.select("#top-5").on("click", function() {
        state = 'top-5';
        title_ = "Top 5 Internet Users";
        data = datum.map(x => x)
        data = data.sort(check_percentage)
        data = data.reverse().slice(0, 5);
        if (checker == true){
          data.sort(check_country);
          update(data, svg, X, y, height,width,title_);
        }
        else {
          if (sortBy == 'ascending'){
            data.sort(check_percentage);
            update(data, svg, X, y, height,width,title_);
          }
          else {
            data.sort(check_percentage);
            update(data, svg, X, y, height,width,title_);
          }
        }
      });
  
      d3.select("#bottom-5").on("click", function() {
        state = 'bottom-5';
        title_ = "Bottom 5 Internet Users"
        data = datum.map(x => x)
        data = data.sort(check_percentage).slice(0, 5);
        if (checker == true){
          data.sort(check_country);
          update(data, svg, X, y, height,width,title_);
        }
        else {
          if (sortBy == 'ascending'){
            data.sort(check_percentage);
            update(data, svg, X, y, height,width,title_);
          }
          else {
            data.sort(check_percentage);
            update(data, svg, X, y, height,width,title_);
          }
        }
      });
  
      d3.select("#alphabet").on("click", function() {
        checker = true;
        data = data.sort(check_country)
        update(data, svg, X, y, height,width,title_);
      });
  
      d3.select("#ascending").on("click", function() {
        sortBy = 'ascending';
        checker = false;
        title_ = "In Ascending Order"
        data = data.sort(check_percentage)
        update(data, svg, X, y, height,width,title_);
      });
  
      d3.select("#descending").on("click", function() {
        sortBy = 'desc';
        checker = false;
        title_ = "In Descending Order"
        data = data.sort(check_percentage)
        data = data.reverse()
        update(data, svg, X, y, height,width,title_);
      });

    };

d3.json("undata.json").then(function (data) {
    bar_chart_svg(data)  
        });