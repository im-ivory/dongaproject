/////////////page01//////////

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power1", duration: 3});

// ScrollTrigger.saveStyles(".mobile, .desktop");


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

    // if(window.matchMedia("(min-width: 768px)").matches){
    //   var yAxis = d3.axisLeft(y)
    //         .ticks(10);
    // }else{
    //   var yAxis = d3.axisLeft(y)
    //         .ticks(5);
    // }

var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.case); });

var lineTooltip = d3.select("body .page04 .case_line").append("div")	
    .attr("class", "line_tooltip")				
    .style("opacity", 0);

var desc = d3.select("body .page04 .case_line").append("div")
    .attr("class", "desc")
    .html("<p>대한민국 누적확진자 수 | 출처: 질병관리청</p><p>누적 확진자수(명)</p>")


var svg = d3.select("body .page04 .case_line")
    .append("svg")
          .attr("viewBox", `0 0 1000 500`)
          .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("width", "100%")
        // .attr("height", "100%")
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

var lineDuration = d3.select("body .page04 .case_line").append("div")
.attr("class", "line_duration")
.html("<p>통계기간: 2020년 01월 20일 ~ 2021년 08월 02일</p>")

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
        .attr("r", 3)		
        .attr("cx", function(d) { return x(d.date); })		 
        .attr("cy", function(d) { return y(d.case); })		
        .on("mouseover", function(d) {		
          lineTooltip	.html("<p>"+formatTime(d.date)+"</p>" + "<p>누적 확진자 수: "+d.case+"명</p>")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px")
                .style("opacity", 1);	
            })					
        .on("mouseout", function(d) {		
          lineTooltip.style("opacity", 0);	
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

// ///world_vaccine////
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
          // worldMapSvg.attr("width", worldMapWidth)
          // .attr("height", worldMapHeight) // 맨 위에서 설정한 값으로 svg 크기값 전달
          .append("g"); //svg 그룹화
      
      worldMapSvg.selectAll("path") //지도 그릴 선들을 모두 선택
          .data(features) //연결된 world.js 파일에서 선언한 변수 worldMap의 features값들을 가져옴
          .enter()
          .append("path") //새로운 값이 추가되면 또 path로 그린다
          .attr("d", worldMapPath) // 여기서 d가 뭘까?
          .attr("class", "country") // 각각의 path들에 country라는 class값을 준다.
          .on("mouseover", function(d) {		
            worldMapTooltip	.html(`<p>${d.properties.name}</p><p>${d.properties.vaccinated}%</p>`)
              .style("left", (d3.event.pageX) + "px")		
              .style("top", (d3.event.pageY - 28) + "px")
              .style("opacity", 1)	
          })					
          .on("mouseout", function(d) {		
            worldMapTooltip.style("opacity", 0);	
              });
      
      
      // worldMapSvg.selectAll("text")
      // .data(features)
      // .enter().append("text")
      // .attr("transform", function(d) { return "translate(" + worldMapPath.centroid(d) + ")"; })
      // .attr("dy", ".35em")
      // .attr("dx", "-.6em")
      // .attr("class", (function(d) { return "country-name "+d.properties.iso_a3; }))
      // // .text(function(d) { return d.properties.iso_a3; })
      // .text(function(d){
      //             if (d.properties.vaccinated !== undefined){
      //                 return d.properties.iso_a3;
      //             }
      //         })

              worldMapSvg.selectAll("circle")
              .data(features)
              .enter().append("circle")
              .attr("transform", function(d) { return "translate(" + worldMapPath.centroid(d) + ")"; })
              .attr("r", function(d){
                  if (d.properties.vaccinated !== undefined){
                              return 10;
                          }else{
                              return 0;
                          }
              })
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

var korVWidth = 1000;
var korVHeight = 700;
  // var color = ['red','blue','yellow','green']

  var korVDsc= d3.select("body .page05 .korea_vaccine").append("div")
    .attr("class", "korV_dsc")
    .html("<p>연령대별 백신접종률 | 출처: 질병관리청</p><p>백진접종률(%)</p>")

  var korVsvg = d3.select(".page05 .korea_vaccine")
  .append("svg")
  .attr("viewBox", `0 0 ${korVWidth} ${korVHeight}`)
  .append("g") //svg전체를 그룹화시킨다, 이거 안쓰면 axis(축)은 안움직임
  .attr("transform", "translate(0,20)"); //svg위치를 전체 옮긴다.


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
  .enter() //부족한 선택물은 추가 계산 | enter(): 부족한 선택물을 추가하는 ㄴ메서드
  .append('rect')
      .attr('height', 50)
      .attr('y', (d,i)=>korVyScale(d.y)) // y축에 data들을 70만큼 거리를 둔다
      .attr('width', 10) //width 기본값
      .on("mouseover", function(d) {		
        korVTooltip	.html("<p>접종완료자: "+d.z+"명</p>" +"<p>접종률: "+ d.x+"%</p>")	
              .style("left", (d3.event.pageX) + "px")		
              .style("top", (d3.event.pageY - 10) + "px")
              .style("opacity", 1);	
          })					
      .on("mouseout", function(d) {		
        korVTooltip.style("opacity", 0);	
      })
      // .on("mouseover", function() {korVcTooltip.style("display", "block");})
      // .on("mouseout", function() {korVcTooltip.style("display", "none");})
      // .on("mousemove", function(d){
      //   korVcTooltip.style("left", (d3.event.pageX + 10) +"px");
      //   korVcTooltip.style("top", (d3.event.pageY -10) + "px");
      //   korVcTooltip.html("<p>접종완료자: "+d.z+"명</p>" +"<p>접종률: "+ d.x+"%</p>");
      // })
      .transition().duration(1500) //추가된 선택물을 움직여준다.
      .attr('width', d=>(d.x*8.2)) //svg의 가로길이만큼 곱해주고 100으로 나눠 백분율로 나타나게함
      

  var yAxis2 = d3.axisLeft().scale(korVyScale);
  var xAxis2 = d3.axisBottom().scale(korVxScale);

  svgG.append("g")
      .call(yAxis2);

  svgG.append("g")
      .attr("transform", "translate(0,"+(height+64)+")")
      .call(xAxis2);

  // svgG.append("image")
  //     .attr("xlink")

  var korVTooltip = d3.select("body .page05 .korea_vaccine").append("div")
  .attr("class", "korV_tooltip")
  .style("opacity", 0);




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

var korMapSvg = d3.select(".page06 .korea_case").append("svg")
.attr("viewBox", `0 0 ${korMapWidth} ${korMapHeight}`)
// .attr("width", korMapWidth)
// .attr("height", korMapHeight);

// var korMap = korMapSvg.append("g").attr("id", "map");

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
.range(d3.range(9).map(function(i){return i ;}))

features.forEach(function(d){
d.properties.quantized = quantize(d.properties.case);
})

korMapSvg.selectAll("path")
.data(features)
.enter().append("path")
.attr("class", function(d) { return "municipality c" + d.properties.quantized; })
.attr("d", korMapPath)
.on("mouseover", function(d) {		
  korMapTooltip	.html(`<p>${d.properties.name}</p><p>${d.properties.case}</p><p>(+${d.properties.new})</p>`)
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
.attr("dy", ".35em")
.attr("dx", "-.6em")
.attr("class", (function(d) { return "municipality-label "+d.properties.code; }))
.text(function(d) { return d.properties.name; })


});

d3.selectAll(".municipality-label")
.attr("dy", ".5em");


// ////page07
const tlL = gsap.timeline();
tlL.from('.page07 > .title > div',  {
  y:100,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
      trigger: '.page07 > div',
      scrub: 1,
      toggleActions: 'play reverse none reverse',
      start: 'top 50%',
      end: "+=700",
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
