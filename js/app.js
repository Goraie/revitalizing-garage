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


const servicesTabs = document.querySelectorAll('.services__tab')
const servicesText = document.querySelectorAll('.services__content')
const servicesImages = document.querySelectorAll('.services__img')

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


const headerBtn = document.querySelector('.header__btn')
const offerBtnQuest = document.querySelector('.offer__btn_quest')
const offerBtnServ = document.querySelector('.offer__btn_serv')
const popupQuest = document.querySelector('.popup-question')
const popupService = document.querySelector('.popup-service')
const popups = document.querySelectorAll('.popup')

const btnQuest = [headerBtn,offerBtnQuest]
const btnService = [offerBtnServ]


btnQuest.forEach(btn => {
	btn.addEventListener('click', (e) => {
		popupQuest.classList.add('active')
		document.querySelector('body').style.overflow = "hidden"
	})
})
btnService.forEach(btn => {
	btn.addEventListener('click', (e) => {
		popupService.classList.add('active')
		document.querySelector('body').style.overflow = "hidden"
	})
})
popups.forEach(pop => {
	pop.addEventListener('click', (e) => {
		if(e.target.classList.contains('active')){
			popupQuest.classList.remove('active')
			popupService.classList.remove('active')
			document.querySelector('body').style.overflow = "visible"
		}
	})
})