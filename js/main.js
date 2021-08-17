//--------------page01--------------

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power1", duration: 3});


ScrollTrigger.matchMedia({  
  "(min-width: 768px)": function() {
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
        pin: true,
        toggleActions: 'play reverse none reverse',
        start: 'top 0%',
        end: 'bottom 120%',
    }
})
},
});



//--------------page02--------------
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

const tl2 = gsap.timeline();
tl2.to(".background_image > img", {
  scale:0.8, 
  x:"33vw", 
  y:"-5vw",
  scrollTrigger: {
  trigger: ".content_container",
  scrub: 1,
  toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=500",
}
})
tl2.fromTo(".background_image > img", {scale:0.8, x:"33vw", y:"-5vw"},{
  scale:3,
  y: "-25vw",
  x: "20vw",
  scrollTrigger: {
  trigger: ".article01",
  scrub: 1,
  toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=500",
}
})
tl2.to(".background_image > .wuhan", {
opacity:1,
scrollTrigger: {
trigger: ".article01",
scrub: 1,
toggleActions: "play none reverse reset",
start: "top 100%",
end: "+=500",
}
})
tl2.to(".background_image > .wuhan", {
opacity:0,
scrollTrigger: {
trigger: ".article02",
scrub: 1,
toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=100",
}
})
tl2.to(".background_image > .airplane", {
opacity:1,
scrollTrigger: {
trigger: ".article02",
scrub: 1,
toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=300",
}
})
tl2.fromTo(".background_image > img", { y: "-25vw",x: "20vw"}, {
  y: "-1vw",
  x: "-52vw",
  scrollTrigger: {
  trigger: ".article03",
  scrub: 1,
  toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=200",
}
})
tl2.to(".background_image > .airport", {
opacity:1,
scrollTrigger: {
trigger: ".article03",
scrub: 1,
toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=200",
}
})
tl2.fromTo(".background_image > img", {x:"-52vw"}, {
  x: "-55vw",
  scrollTrigger: {
  trigger: ".article04 > .text",
  scrub: 1,
  toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=500",
}
})
tl2.to(".background_image > .airplane", {
opacity:0,
scrollTrigger: {
trigger: ".article04 > .text",
scrub: 1,
toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=200",
}
})
tl2.to(".background_image > .airport", {
opacity:0,
scrollTrigger: {
trigger: ".article04 > .text",
scrub: 1,
toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=200",
}
})
tl2.to(".background_image > .hospital", {
opacity:1,
scrollTrigger: {
trigger: ".article04 > .text",
scrub: 1,
toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=200",
}
})
tl2.to(".background_image > .confirmed", {
  opacity:1,
  scrollTrigger: {
  trigger: ".article05 > .text",
  scrub: 1,
  toggleActions: "play none reverse reset",
    start: "top 100%",
    end: "+=200",
  }
  })
tl2.to(".article06 > .page_fadeout", {
scale: 11,
scrollTrigger: {
trigger: ".article06 > .page_fadeout",
scrub: 1,
toggleActions: "play none reverse reset",
  start: "top 100%",
  end: "+=500",
}
})


//--------------page04--------------
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

////확진자 수 버튼//

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
    scrollTop : $('#up').offset().top - 400
}, 5000)
});

btn.addEventListener("click", increase);


// //날짜 카운터// 

$('#jsBtn').click(function(){
    var year = 2020;
    var month = 1;
    var day = 1;
    timeCounter();
    
    function timeCounter() {
         
      dateYear = setInterval(changeYear, 3600); 
      function changeYear() {
        year++;
        if (year > 2021) {    
          clearInterval(dateYear);
        } else {
          $(".number").eq(0).text(year);
        }
      }
    
      dateMonth = setInterval(changeMonth, 300);
      function changeMonth() {
        month++;
        if (month > 12) {
          month = 0;
        } else if (month == 9 && year == 2021 && day == 3){
            clearInterval(dateMonth);
        }else {
          $(".number").eq(1).text(month);
        }
      }
    
        dateDay = setInterval(changeDay, 10);
        function changeDay() {
          day++;
          if (day > 31) {
            day = 0;
          }  else if (month == 8 && year == 2021 && day == 3){
            clearInterval(dateDay);
          }else{
            $(".number").eq(2).text(day);
          }
      }
    }
});


// //누적 확진자 수 라인 그래프// 

var margin = {top: 30, right: 20, bottom: 100, left: 150},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.timeParse("%Y-%m-%d");
var formatTime = d3.timeFormat("%y/%m/%d");

var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom(x)
    .ticks(10);
var yAxis = d3.axisLeft(y)
    .ticks(5);

var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.case); });

var lineTooltip = d3.select("body .page04 .case_line").append("div")	
    .attr("class", "line_tooltip")				
    .style("opacity", 0);

var lineDsc = d3.select("body .page04 .case_line").append("div")
    .attr("class", "line_dsc")
    .html("<p>대한민국 누적 확진자 수</p><p>누적 확진자 수(명)</p>")

var svg = d3.select("body .page04 .case_line")
    .append("svg")
    .attr("viewBox", `0 0 1000 500`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var lineDuration = d3.select("body .page04 .case_line").append("div")
.attr("class", "line_duration")
.html("<p>통계기간: 2020년 01월 20일 ~ 2021년 08월 02일<br>(출처: 질병관리청)</p>")


d3.csv("./content/case_data.csv", function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.case = +d.case;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.case; })]);

    svg.append("path")
       .attr("class", "line")
       .attr("d", valueline(data));

    svg.selectAll("dot")	
       .data(data)			
       .enter().append("circle")								
        .attr("r", 5)		
        .attr("cx", function(d) { return x(d.date); })		 
        .attr("cy", function(d) { return y(d.case); })		
        .on("mouseover", function(d) {		
          lineTooltip	.html("<p>"+formatTime(d.date)+"</p>" + "<p>"+d3.format(',')(d.case)+"명</p>")	
                .style("left", (d3.event.pageX- 50) + "px")		
                .style("top", (d3.event.pageY- 75) + "px")
                .style("opacity", 1);	
            })					
        .on("mouseout", function(d) {		
          lineTooltip.style("opacity", 0);	
        });

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

});


//--------------page05--------------
gsap.from('.page05 > .title:nth-child(1) > h1', {
  y:100,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page05 > .title:nth-child(1)',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 70%',
      end: 'bottom bottom',
  }
})
gsap.from('.page05 > .title:nth-child(3) > h1', {
  y:100,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page05 > .title:nth-child(3)',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 70%',
      end: 'bottom bottom',
  }
})

// //국가별 백신 접종률 세계 지도//

const worldMapWidth = 1000;
const worldMapHeight = 700; // svg 크기 설정

const worldMapProjection = d3.geoMercator() //평면지도로 설정
    .translate([worldMapWidth/2, worldMapHeight/1.55]) // 지도를 svg 가운데로 위치 옮기기
    .scale([150]);// 크기 설정

const worldMapPath = d3.geoPath().projection(worldMapProjection); // 평면지도로 path(지도윤곽선)을 그린다

var worldMapDsc = d3.select("body .page05 .world_vaccine").append("div")
    .attr("class", "worldmap_dsc")
    .html("<p>국가별 백신 접종률</p><p>백신 접종률(%)</p>")

const worldMapContainer = d3.select(".page05 .world_vaccine"); //svg지도가 담길 container = body의 <div class="home">
const worldMapSvg = worldMapContainer.append("svg"); // container에 svg 추가하기

var worldMapDuration = d3.select("body .page05 .world_vaccine").append("div")
    .attr("class", "worldmap_duration")
    .html("<p>통계 기간: 2020년 12월 27일 ~ 2021년 08월 02일</p>")

var worldMapTooltip = d3.select(".page05 .world_vaccine").append("div")	
.attr("class", "worldmap_tooltip")				
.style("opacity", 0);


  d3.json("./content/worldmap_topo.json", function(error, data) {

          var features = topojson.feature(data, data.objects.worldmap).features;
          
          worldMapSvg.attr("viewBox", `0 0 ${worldMapWidth} ${worldMapHeight}`)
      
          worldMapSvg.selectAll("path") 
              .data(features) 
              .enter()
              .append("path") 
              .attr("d", worldMapPath) 
              .attr("class", "country") 

      newFeatures = features.filter( function(d){return d.properties.vaccinated !==undefined} )

              worldMapSvg.selectAll("circle")
              .data(newFeatures)
              .enter().append("circle")
              .attr("transform", function(d) { return "translate(" + worldMapPath.centroid(d) + ")"; })
              .attr("r", 10)
              .attr("class", (function(d) { return "country-name "+d.properties.iso_a3; }))
              .style("fill", "red")
              .on("mouseover", function(d) {		
                worldMapTooltip	.html(`<p>${d.properties.name}</p><p>${d.properties.vaccinated}%</p>`)
                      .style("left", (d3.event.pageX) + "px")		
                      .style("top", (d3.event.pageY - 28) + "px")
                      .style("opacity", 1)	
                  })					
                  .on("mouseout", function(d) {		
                    worldMapTooltip.style("opacity", 0);	
                      });
          
          })



// //한국 연령대별 백신 접종률 막대 그래프//

var korVaccineData = [
  {x: 77.1, y: "80세 이상", z:1738733},
  {x: 41.2, y: "70~79", z:1548133},
  {x: 7.6, y: "60~69", z:543993},
  {x: 7.4, y: "50~59", z:632641},
  {x: 8.2, y: "40~49", z:662120},
  {x: 17.4, y: "30~39", z:1165851},
  {x: 11.2, y: "18~29", z:854927},
];

var korVWidth = 1000;
var korVHeight = 700;

  var korVDsc= d3.select("body .page05 .korea_vaccine").append("div")
    .attr("class", "korV_dsc")
    .html("<p>연령대별 백신접종률</p><p>백진접종률(%)</p>")

  var korVsvg = d3.select(".page05 .korea_vaccine")
  .append("svg")
  .attr("viewBox", `0 0 ${korVWidth} ${korVHeight}`)
  .append("g") 
  .attr("transform", "translate(0,20)"); 

  // var korVSrc= d3.select("body .page05 .korea_vaccine").append("div")
  // .attr("class", "korV_src")
  // .html("<p>출처: 질병관리청</p>")


  var korVyScale = d3.scaleBand()
      .domain(korVaccineData.map(function(d) {return d.y;}))
      .range([0, korVHeight-200]).paddingInner(0.4);
  var korVxScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, korVWidth-150]);

  var svgG = korVsvg.append("g")
      .attr("transform", "translate(130,0)");

  svgG.selectAll('rect')
  .data(korVaccineData)
  .enter() 
  .append('rect')
      .attr('height', 50)
      .attr('y', (d,i)=>korVyScale(d.y))
      .attr('width', 10) 
      .on("mouseover", function(d) {		
        korVTooltip	.html("<p>접종완료자: <strong>"+d3.format(",")(d.z)+"</strong>명</p>" +"<p>접종률: <strong>"+ d.x+"</strong>%</p>")	
              .style("left", (d3.event.pageX) + "px")		
              .style("top", (d3.event.pageY - 10) + "px")
              .style("opacity", 1);	
          })					
      .on("mouseout", function(d) {		
        korVTooltip.style("opacity", 0);	
      })
      .transition().duration(1500) 
      .attr('width', d=>(d.x*8.2)) 
      

  var yAxis2 = d3.axisLeft().scale(korVyScale);
  var xAxis2 = d3.axisBottom().scale(korVxScale);

  svgG.append("g")
      .call(yAxis2);

  svgG.append("g")
      .attr("transform", "translate(0,"+(height+135)+")")
      .call(xAxis2);

  var korVTooltip = d3.select("body .page05 .korea_vaccine").append("div")
  .attr("class", "korV_tooltip")
  .style("opacity", 0);




//--------------page06--------------

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

var korMapSvg = d3.select(".page06 .korea_case").append("svg")
.attr("viewBox", `0 0 ${korMapWidth} ${korMapHeight}`)
.style("min-width", 500)

var korMapProjection = d3.geoMercator()
.center([127.2895, 37.4651])
.scale(8000)
.translate([width/2, height/2]);

var korMapPath = d3.geoPath().projection(korMapProjection);

var korMapTooltip = d3.select(".page06 .korea_case").append("div")	
.attr("class", "kormap_tooltip")				
.style("opacity", 0);


d3.json("./content/skorea_provinces_topo_simple.json", function(error, data) {

    var features = topojson.feature(data, data.objects.skorea_provinces_geo).features;

    var quantize = d3.scaleQuantize()
    .domain([0,10000])
    .range(d3.range(9).map(function(i){ return i ;}))

    features.forEach(function(d){
    d.properties.quantized = quantize(d.properties.case);
    })

    korMapSvg.selectAll("path")
    .data(features)
    .enter().append("path")
    .attr("class", function(d) { return "city c" + d.properties.quantized; })
    .attr("d", korMapPath)
    .on("mouseover", function(d) {		
      korMapTooltip	.html(`<p>${d.properties.name}</p><p>${d3.format(",")(d.properties.case)}</p><p>(+${d.properties.new})</p>`)
        .style("left", (d3.event.pageX) + "px")		
        .style("top", (d3.event.pageY - 28) + "px")
        .style("opacity", 1)	
    })					
    .on("mouseout", function(d) {		
      korMapTooltip.style("opacity", 0);	
    });

    korMapSvg.selectAll("text")
    .data(features)
    .enter().append("text")
    .attr("transform", function(d) { return "translate(" + korMapPath.centroid(d) + ")"; })
    .attr("dx", "-.6em")
    .attr("dy", function(d){
      if(d.properties.code == 31){
        return "-3em"
      }else if(d.properties.code == 33){
        return "-2em"
      }else{
        return ".55em"
      }
    })
    .style("fill", function(d){
      if(d.properties.code == 23 || d.properties.code == 21){
        return "white"
      }else{
        return "black"
      }
    })
    .attr("class", (function(d) { return "city-label "+d.properties.code; }))
    .text(function(d) { return d.properties.name; })
    .on("mouseover", function(d) {		
      korMapTooltip	.html(`<p>${d.properties.name}</p><p>${d3.format(",")(d.properties.case)}</p><p>(+${d.properties.new})</p>`)
        .style("left", (d3.event.pageX) + "px")		
        .style("top", (d3.event.pageY - 28) + "px")
        .style("opacity", 1)
    })					
    .on("mouseout", function(d) {		
      korMapTooltip.style("opacity", 0);	
    });

});

// d3.selectAll(".municipality-label")
// .attr("dy", ".5em");


//--------------page07--------------

const tlL = gsap.timeline();
tlL.from('.page07 > .title > div',  {
  y:100,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page07 > div',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 100%',
      end: "+=500",
  }
})
.to('.page07 > .bg',  {
  opacity: 0.5,
  scrollTrigger: {
      trigger: '.page07 > .title > .text:nth-child(3)',
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
      trigger: '.page07 > .title > .text:last-child',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 70%',
      end: 'bottom 30%',
  }
})
.to('.page07 > .bg',  {
  scale: 3,
  scrollTrigger: {
      trigger: '.page07 > .title > .text:last-child',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: "top 50%",
      end: "+=50",
  }
})
