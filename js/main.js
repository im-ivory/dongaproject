gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ease: "power1", duration: 3});

const tl = gsap.timeline();

tl.to('.page01 > .inner > .title', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.page_loader',
        scrub: 1,
        toggleActions: 'play reverse none reverse',
        start: 'top 100%',
        end: 'bottom 100%',
    }
})
.to('.page01 > .inner > .img', {
    xPercent: 50,
    duration: 1,
    scale: 1.3,
    scrollTrigger: {
        trigger: '.page_loader',
        scrub: 1,
        toggleActions: 'play reverse none reverse',
        start: 'top 80%',
        end: 'bottom 100%',
    }
})
.to('.page01 > .inner > .img', {
    scale: 0,
    scrollTrigger: {
        trigger: '.page_loader',
        scrub: 1,
        toggleActions: 'play reverse none reverse',
        start: 'top 0%',
        end: 'bottom 120%',
    }
})


// ///////page2///////
gsap.from('.page02 > .title', {
    y:100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.page02',
        scrub: 1,
        toggleActions: 'play reverse none reverse',
        start: 'top 30%',
        end: 'top 60%',
    }
})

// gsap.fromTo('.page02 > .article', {
//     y:50,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '.page02',
//         scrub: 1,
//         toggleActions: 'play reverse none reverse',
//         start: 'top 30%',
//         end: 'top 60%',
//     }
// })

// const tl2 = gsap.timeline();
// tl2.fromTo('.content_container > .article > .text',  {opacity: 0, y: -100}, {
//     y:100,
//     opacity: 1,
// });

// gsap.utils.toArray(".content_container > .article > .text").forEach((article, i) => {
//     ScrollTrigger.create({
//       animation: tl2,
//       trigger: article,
//       start: "top 0%", 
//     end: 'bottom 0%',
//     // pin: true,
//     scrub: true,
//     anticipatePin: 1,
//     });
//   });

// const tl2 = gsap.timeline();
gsap.to('.background_image > img', {
    scale:3,
    y: -350,
    x: 300,
    scrollTrigger: {
    trigger: '.article01 > .text',
    scrub: 1,
    toggleActions: 'play reverse none reverse',
    start: 'top 80%',
    end: 'bottom 100%',
}
})
gsap.to('.background_image > .wuhan', {
  opacity:1,
  scrollTrigger: {
  trigger: '.article01 > .text',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 80%',
  end: 'bottom 100%',
}
})
// gsap.fromTo('.background_image > .place-dot > .dot', {boxShadow: "none"}, {
//   boxShadow: "rgba(0, 165, 110, 0.575) 0px 5px 35px 13px",
//   repeat: -1
// })
gsap.to('.background_image > .wuhan', {
  opacity:0,
  scrollTrigger: {
  trigger: '.article02 > .text',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 80%',
  end: 'bottom 100%',
}
})
gsap.to('.background_image > .airplane', {
  opacity:1,
  scrollTrigger: {
  trigger: '.article02 > .text',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 80%',
  end: 'bottom 100%',
}
})
gsap.fromTo('.background_image > img', {y: -350, x: 300}, {
    // scale:3,
    y: 10,
    x: -1000,
    scrollTrigger: {
    trigger: '.article03 > .text',
    scrub: 1,
    toggleActions: 'play reverse none reverse',
    start: 'top 85%',
    end: 'bottom 90%',
}
})
gsap.to('.background_image > .airplane', {
  y: -50,
  x: -150,
  scrollTrigger: {
  trigger: '.article03 > .text',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 80%',
  end: 'bottom 100%',
}
})
gsap.to('.background_image > .airport', {
  opacity:1,
  scrollTrigger: {
  trigger: '.article03 > .text',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 70%',
  end: 'bottom 90%',
}
})
gsap.fromTo('.background_image > img', {x: -1000}, {
    // scale:3,
    // y: 10,
    x: -1100,
    scrollTrigger: {
    trigger: '.article04 > .text',
    scrub: 1,
    toggleActions: 'play reverse none reverse',
    start: 'top 90%',
    end: 'bottom 100%',
}
})
gsap.to('.background_image > .airplane', {
  opacity:0,
  scrollTrigger: {
  trigger: '.article04 > .text',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 90%',
  end: 'bottom 100%',
}
})
gsap.to('.background_image > .airport', {
  opacity:0,
  scrollTrigger: {
  trigger: '.article04 > .text',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 90%',
  end: 'bottom 100%',
}
})
gsap.to('.background_image > .hospital', {
  opacity:1,
  scrollTrigger: {
  trigger: '.article04 > .text',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 90%',
  end: 'bottom 100%',
}
})
gsap.to('.article06 > .page_fadeout', {
  scale: 11,
  scrollTrigger: {
  trigger: '.article06 > .page_fadeout',
  scrub: 1,
  toggleActions: 'play reverse none reverse',
  start: 'top 90%',
  end: 'bottom 100%',
}
})


// ////page04/////
gsap.from('.page04 > .title > h1', {
    y:100,
    opacity: 0,
    stagger: 2,
    scrollTrigger: {
        trigger: '.page04 > .title',
        scrub: 1,
        toggleActions: 'play reverse none reverse',
        start: 'top 70%',
        end: 'bottom bottom',
    }
})


//button

const btn = document.querySelector("#jsBtn");
var chartHeight = document.querySelector(".chart_container").clientHeight;

function increase(){
    const tl3 = gsap.timeline();
    tl3.to('.bar',{
    transformOrigin: "0 0",
    height: chartHeight - 128,
    duration: 6.5,
    ease: "power1",
})
    tl3.to('#up',{
        opacity: 1,
    });
};

$('#jsBtn').click(function () { 
    $(".counter_container").css("display", "flex");
    $('html, body').stop().animate({
    scrollTop : $('#up').offset().top -400
}, 5000)
});


btn.addEventListener("click", increase);

// ///// 시계


$('#jsBtn').click(function(){
    var count0 = 2020;
    var count1 = 1;
    var count2 = 1;
    timeCounter();
    
       function timeCounter() {
         id0 = setInterval(count0Fn, 3600); 
        function count0Fn() {
          count0++;
          if (count0 > 2021) {    
            clearInterval(id0);
          } else {
            $(".number").eq(0).text(count0);
          }
        }
    
        id1 = setInterval(count1Fn, 300);
        function count1Fn() {
          count1++;
          if (count1 > 12) {
            count1 = 0;
          } else if (count1 == 9 && count0 == 2021 && count2 == 3){
              clearInterval(id1);
          }else {
            $(".number").eq(1).text(count1);
          }
        }
    
        id2 = setInterval(count2Fn, 10);
    
        function count2Fn() {
          count2++;
          if (count2 > 31) {
            count2 = 0;
          }  else if (count1 == 8 && count0 == 2021 && count2 == 3){
            clearInterval(id2);
          }else{
            $(".number").eq(2).text(count2);
          }
      }
    }
});


// //// 라인차트

var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.timeParse("%Y-%m-%d");
var formatTime = d3.timeFormat("%b %d");

// Set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Define the axes
var xAxis = d3.axisBottom(x)
    .ticks(10);

var yAxis = d3.axisLeft(y)
    .ticks(10);

// Define the line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.case); });

// Define the div for the tooltip
var div = d3.select("body .page04 .case_line").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

// Adds the svg canvas
var svg = d3.select("body .page04 .case_line")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("../content/case_data.csv", function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.case = +d.case;
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.case; })]);

    // Add the valueline path.
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    // Add the scatterplot
    svg.selectAll("dot")	
        .data(data)			
    .enter().append("circle")								
        .attr("r", 3)		
        .attr("cx", function(d) { return x(d.date); })		 
        .attr("cy", function(d) { return y(d.case); })		
        .on("mouseover", function(d) {		
            div	.html(formatTime(d.date) + "<br/>"  + d.case)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px")
                .style("opacity", 1);	
            })					
        .on("mouseout", function(d) {		
            div.style("opacity", 0);	
        });

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

});


// /////page05//////
gsap.from('.page05 > .title > h1', {
  y:100,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page05 > .title',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 70%',
      end: 'bottom bottom',
  }
})


// ///korea_vaccine////

var korVaccineData = [
  {x: 77.1, y: "80세 이상", z:1738733},
  {x: 41.2, y: "70~79", z:1548133},
  {x: 7.6, y: "60~69", z:543993},
  {x: 7.4, y: "50~59", z:632641},
  {x: 8.2, y: "40~49", z:662120},
  {x: 17.4, y: "30~39", z:1165851},
  {x: 11.2, y: "18~29", z:854927},
];
  // var color = ['red','blue','yellow','green']
  var svg2 = d3.select('.korea_vaccine svg');
  var width2 = parseInt(svg2.style("width"), 10);
  var height2 = parseInt(svg2.style("height"), 10) -20;

  var yScale2 = d3.scaleBand()
      .domain(korVaccineData.map(function(d) {return d.y;}))
      .range([0, height2]).paddingInner(0.2);
  var xScale2 = d3.scaleLinear()
      .domain([0, d3.max(korVaccineData, function(d) {return d.x; })])
      .range([0, width2]);

  var svgG = svg2.append("g")
      .attr("transform", "translate(60,0)");
  
  svgG.selectAll('rect')
  .data(korVaccineData)
  .enter() //부족한 선택물은 추가 계산 | enter(): 부족한 선택물을 추가하는 ㄴ메서드
  .append('rect')
      .attr('height', 60)
      .attr('y', (d,i)=>yScale2(d.y)) // y축에 data들을 70만큼 거리를 둔다
      .attr('width', 10) //width 기본값
      .on("mouseover", function() {tooltip.style("display", null);})
      .on("mouseout", function() {tooltip.style("display", "none");})
      .on("mousemove", function(d){
          tooltip.style("left", (d3.event.pageX + 10) +"px");
          tooltip.style("top", (d3.event.pageY -10) + "px");
          tooltip.html("<p>접종완료자: "+d.z+"명</p>" +"<p>접종률: "+ d.x+"%</p>");
      })
      .transition().duration(1500) //추가된 선택물을 움직여준다.
      .attr('width', d=>(d.x*700)/100) //svg의 가로길이만큼 곱해주고 100으로 나눠 백분율로 나타나게함
      

  var yAxis2 = d3.axisLeft().scale(yScale2);
  var xAxis2 = d3.axisBottom().scale(xScale2);

  svgG.append("g")
      .call(yAxis2);

  svgG.append("g")
      .attr("transform", "translate(0)")
      .call(xAxis2);

  // svgG.append("image")
  //     .attr("xlink")

  svgG.selectAll('text')
  .data(korVaccineData)
  .enter().append('text')
  .text(function(d) {return d.x})
  .transition().duration(1500)
  .style('opacity', 1)
  .attr('class','text')
  .attr('x', d=>(d*500)/100 +40)
  .attr('y', (d,i)=>i*70 +40);


  var tooltip = d3.select("body .page05 .korea_vaccine").append("div")
      .attr("class", "toolTip")
      .style("display", "none");



// /////////page06

gsap.from('.page06 > .title > h1', {
  y:100,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page06 > .title',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 70%',
      end: 'bottom bottom',
  }
})


var korMapWidth = 1000,
korMapHeight = 1000;

var korMapSvg = d3.select(".page06 .korea_case #chart").append("svg")
.attr("width", korMapWidth)
.attr("height", korMapHeight);

var korMap = korMapSvg.append("g").attr("id", "map");

var korMapProjection = d3.geoMercator()
.center([127.2895, 37.4651])
.scale(7000)
.translate([width/2, height/2]);

var korMapPath = d3.geoPath().projection(korMapProjection);

var korMapTooltip = d3.select(".page06 .korea_case").append("div")	
.attr("class", "tooltip")				
.style("opacity", 0);


d3.json("../content/skorea_provinces_topo_simple.json", function(error, data) {

var features = topojson.feature(data, data.objects.skorea_provinces_geo).features;

var quantize = d3.scaleQuantize()
.domain([0,10000])
.range(d3.range(9).map(function(i){return i ;}))

features.forEach(function(d){
d.properties.quantized = quantize(d.properties.case);
})

korMap.selectAll("path")
.data(features)
.enter().append("path")
.attr("class", function(d) { return "municipality c" + d.properties.quantized; })
.attr("d", korMapPath)
.on("mouseover", function(d) {		
div	.html(`<p>${d.properties.name}</p><p>${d.properties.case}</p><p>(+${d.properties.new})</p>`)
    .style("left", (d3.event.pageX) + "px")		
    .style("top", (d3.event.pageY - 28) + "px")
    .style("opacity", 1)	
})					
.on("mouseout", function(d) {		
div.style("opacity", 0);	
});

korMap.selectAll("text")
.data(features)
.enter().append("text")
.attr("transform", function(d) { return "translate(" + korMapPath.centroid(d) + ")"; })
.attr("dy", ".35em")
.attr("dx", "-.6em")
.attr("class", (function(d) { return "municipality-label "+d.properties.code; }))
.text(function(d) { return d.properties.name; })


});

d3.selectAll(".municipality-label")
.attr("dy", ".5em");


// ////page07
const tlL = gsap.timeline();
tlL.from('.page07 > .title > h1',  {
  y:100,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page07 > .title',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 50%',
      end: 'bottom 60%',
  }
})
.from('.page07 > .title> div',  {
  y:100,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page07 > .title >div',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 50%',
      end: 'bottom 60%',
  }
})
.to('.page07 > .bg',  {
  opacity: 0.5,
  scrollTrigger: {
      trigger: '.page07 > .title >div',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 50%',
      end: 'bottom 60%',
  }
},200)

.to('.page07 > .title > .people > img:nth-child(2)',  {
  paddingRight:100,
  paddingLeft:100,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page07 > .title > h1:last-child',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 80%',
      end: 'bottom 60%',
  }
})
.to('.page07 > .bg',  {
  scale: 3,
  scrollTrigger: {
      trigger: '.page07 > .title > h1:last-child',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 80%',
      end: 'bottom 60%',
  }
})
// .set('.page07 > .title > h1:nth-child(2)', { 
//   scrollTrigger: {
//     trigger: '.page07 > .title> h1:nth-child(2)',
//     scrub: 1,
//     toggleActions: 'play reverse none reverse',
//     toggleClass: "space",
//     start: 'top 50%',
//     markers: true,
//     end: 'bottom bottom',
// }
// })


// to('.page07 > .title > h1:nth-child(2)',  {
//   letterSpacing: 100,
//   scrollTrigger: {
//       trigger: '.page07 > .title> h1:nth-child(2)',
//       scrub: 1,
//       toggleActions: 'play reverse none reverse',
//       start: 'top 50%',
//       markers: true,
//       end: 'bottom 60%',
//   }
// })