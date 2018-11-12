new Vue({
	el: '#carousel',
    components: {
  	    'carousel': VueCarousel.Carousel,
        'slide': VueCarousel.Slide
    },
  template:
   `<div>
        <carousel :perPage="1" :scrollPerPage="true" :autoplay="true" :autoplayTimeout="4000">
            <slide><img src="https://picsum.photos/800/300?image=1054" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1054" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1038" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1038" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1025" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1035" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1036" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1054" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1069" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1031" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1065" alt=""></slide>
            <slide><img src="https://picsum.photos/800/300?image=1084" alt=""></slide>
        </carousel>
    </div>`
});