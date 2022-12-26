const swiper = new Swiper('.swiper', {
  loop: true,
	centeredSlides: true,
	spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView:1.3,
    },
		454: {
			slidesPerView:1.5,
		},
		768: {
      slidesPerView: 2.5,
    },
		1200: {
      slidesPerView: 3.5,
    },
		1400: {
      slidesPerView: 4.5,
    }
  }
});

const servicesSLider = new Swiper('.services__slider', {
  loop: true,
	slidesPerView: 'auto',
	spaceBetween: 20,
	breakpoints: {
		320: {
			spaceBetween: 0
		},
		480: {
			spaceBetween: 20
		}
	}
});

const offerHalf = document.querySelector('.offer_half')
const offerImg = document.querySelector('.offer__i img')

window.addEventListener('resize', () => {
	if(window.innerWidth <= 768){
		offerHalf.style.height = offerImg.clientHeight + 'px'
	} else {
		offerHalf.style.height = offerImg.clientHeight + 40 + 'px'
	}
})



const servicesTabs = document.querySelectorAll('.services__tab')
const servicesText = document.querySelectorAll('.services__content')
const servicesImages = document.querySelectorAll('.services__img')
const headerServies = document.querySelectorAll('.header__menu .dropdown-item')

servicesTabs.forEach(item => {
	item.addEventListener('click', (e) => {
		if(!item.classList.contains('active')){
			removeActive(servicesTabs,'active')
			item.classList.add('active')
			removeActive(servicesText, 'd-none')
			findAtttr(servicesText, item.dataset.tab)
			removeActive(servicesImages, 'd-none')
			findAtttr(servicesImages, item.dataset.tab)
		}
	})
})

headerServies.forEach(elem => {
	elem.addEventListener('click', (e) => {
		console.dir(e.target.dataset.service);
		removeActive(servicesTabs,'active')
		removeActive(servicesText, 'd-none')
		removeActive(servicesImages, 'd-none')
		for(i = 0; i < servicesTabs.length; i++){
			if(elem.dataset.service === servicesTabs[i].dataset.tab){
				servicesTabs[i].classList.add('active')
				findAtttr(servicesText, elem.dataset.service)
				findAtttr(servicesImages, elem.dataset.service)	
			}
		}
	})
});

function removeActive(els, cls){
	els.forEach(el => cls === 'd-none' ? el.classList.add(cls) : el.classList.remove(cls))
}

// учитывается порядок следования атрибутов в html !!!!!!
function findAtttr(elements, idx){
	elements.forEach(el => {
		if(el.attributes[1].value == idx){
			el.classList.remove('d-none')
		}
	})
}
