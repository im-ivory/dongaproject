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
    y: -150,
    x: 300,
    scrollTrigger: {
    trigger: '.article02 > .text',
    scrub: 1,
    toggleActions: 'play reverse none reverse',
    start: 'top 80%',
    end: 'bottom 100%',
}
})
gsap.to('.background_image > img', {
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
gsap.to('.background_image > img', {
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


// ////page04/////
gsap.from('.page04 > .title > h1', {
    y:100,
    opacity: 0,
    stagger: 2,
    scrollTrigger: {
        trigger: '.page04',
        scrub: 1,
        toggleActions: 'play reverse none reverse',
        start: 'top 70%',
        markers: true,
        end: 'bottom bottom',
    }
})
