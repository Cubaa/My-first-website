const btns = document.querySelectorAll("div.barsMenu i")
const btnTimes = document.querySelector("div.barsMenu i.fa-times")
const btnBars = document.querySelector("div.barsMenu i.fa-bars")
const navMenu = document.querySelector('nav')
const menuLists = document.querySelectorAll('nav a')
const autoChangetxt = document.querySelector(".appForwhoWrapper .autoChangeTxt")
const galleryWrokers = document.querySelector('.galerryWorkers');
const galleryWorkersImages = document.querySelectorAll('.galerryWorkers img')
const rightArrowBtn = document.querySelector('.rightArrow')
const leftArrowBtn = document.querySelector('.leftArrow')
const galleryWorkersDiv = document.querySelectorAll('.galerryWorkers div')
const wrapperFeatures1 = document.querySelector('.wrapperFeatures1')
const wrapperFeatures2 = document.querySelector('.wrapperFeatures2')
const wrapperFeatures3 = document.querySelector('.wrapperFeatures3')
const changeFeaturesSpan = document.querySelectorAll('div.changeFeatures div span')
const configIcon = document.querySelector("div.configuring span i")
const trackingIcon = document.querySelector("div.tracking span i")
const monitoringIcon = document.querySelector("div.monitoring span i")
const btnGoalsSettingLightBox = document.querySelector('div.infoGoalsSetting button.btnGoalsSetting')
const btnCalendarInputLightBox = document.querySelector('div.infoCalendarInput2 button.btnCalendarInput')
const lightBoxGoalsSetting = document.querySelector('div.lightBoxGoalsSetting')
const lightBoxCalendarInput = document.querySelector('div.lightBoxCalendarInput')
const timesClosedLightBoxGoalsSetting = document.querySelector('div.lightBoxGoalsSetting i.fa-times')
const timesClosedLightBoxCalendarInput = document.querySelector('div.lightBoxCalendarInput i.fa-times')
const btnClosedLightBoxGoalsSetting = document.querySelector('div.lightBoxGoalsSetting button:nth-of-type(2)')
const btnClosedLightBoxCalendarInput = document.querySelector('div.lightBoxCalendarInput button:nth-of-type(2)')


 let counterSlideImage=1;
let sizeImage = galleryWrokers.clientWidth
let flaga = true
const arrTxt = ['Designers', 'Marketers', 'Developers']
let incrArrTxt = 0



btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
       
        if(flaga)
        {
            btnBars.style.display = "none"
            btnTimes.style.display = "block"
            navMenu.classList.add("dropDown")
            flaga=false
        }
        else{
            btnBars.style.display = "block"
            btnTimes.style.display = "none"
            navMenu.classList.remove("dropDown")
            flaga=true
        }
    })
})
menuLists.forEach((a)=>{
a.addEventListener("click", ()=>{
    menuLists.forEach((a)=>{
        a.style.color="#fff"
    })
    
    a.style.color="rgb(0, 201, 219)"
    

})
})

const autoChangetxtFunction = ()=>{
    autoChangetxt.textContent = `${arrTxt[incrArrTxt]}`
   
    incrArrTxt++
    if(incrArrTxt===arrTxt.length)
    {
        incrArrTxt=0
    }
   

}

setInterval(autoChangetxtFunction, 2000)

galleryWrokers.style.transform="translateX(" + (-sizeImage*counterSlideImage) + "px)"
rightArrowBtn.addEventListener("click", ()=>{
    if(counterSlideImage>=galleryWorkersImages.length-1)
    return
    galleryWrokers.style.transition = "transform .3s ease-in-out"
    counterSlideImage++
 
    galleryWrokers.style.transform="translateX(" + (-sizeImage*counterSlideImage) + "px)"

})
leftArrowBtn.addEventListener("click", ()=>{
    if(counterSlideImage<=0)
        return
    galleryWrokers.style.transition = "transform .3s ease-in-out"
    counterSlideImage--
    
    galleryWrokers.style.transform="translateX(" + (-sizeImage*counterSlideImage) + "px)"

})
galleryWrokers.addEventListener("transitionend", ()=>{
    if(galleryWorkersImages[counterSlideImage].id==='lastClone')
    {
        galleryWrokers.style.transition="none"
    counterSlideImage=galleryWorkersDiv.length-2
    galleryWrokers.style.transform="translateX(" + (-sizeImage*counterSlideImage) + "px)"

    }
    if(galleryWorkersImages[counterSlideImage].id==='firstClone')
    {
        galleryWrokers.style.transition="none"
    counterSlideImage=galleryWorkersDiv.length-counterSlideImage
    galleryWrokers.style.transform="translateX(" + (-sizeImage*counterSlideImage) + "px)"

    }


})

changeFeaturesSpan.forEach((span)=>{
    span.addEventListener("click", ()=>{
        changeFeaturesSpan.forEach((span)=>{
            
            span.style.color="rgb(241, 241, 248)"
            span.style.borderBottomColor="white"
            configIcon.style.color="rgb(241, 241, 248)"
            trackingIcon.style.color="rgb(241, 241, 248)"
            monitoringIcon.style.color="rgb(241, 241, 248)"
            


        })
        if(span.parentElement.className==="configuring")
        {
            
            wrapperFeatures1.style.display="block"
            wrapperFeatures2.style.display="none"
            wrapperFeatures3.style.display="none"
           span.style.color="rgb(0, 201, 219)"
            span.style.borderBottomColor="#00c9db"
        configIcon.style.color="rgb(0, 201, 219)"



        }
            
            if(span.parentElement.className==="tracking")
            {
               
                wrapperFeatures1.style.display="none"
                wrapperFeatures2.style.display="block"
                wrapperFeatures3.style.display="none"
                span.style.color="rgb(0, 201, 219)"
            span.style.borderBottomColor="#00c9db"
            trackingIcon.style.color="rgb(0, 201, 219)"

            
            }
           
            if(span.parentElement.className==="monitoring")
            {
               
                wrapperFeatures1.style.display="none"
                wrapperFeatures2.style.display="none"
                wrapperFeatures3.style.display="block"
                span.style.color="rgb(0, 201, 219)"
            span.style.borderBottomColor="#00c9db"
            monitoringIcon.style.color="rgb(0, 201, 219)"

            }
            
    })
})

btnGoalsSettingLightBox.addEventListener("click", ()=>{
lightBoxGoalsSetting.style.display="block"
})
btnCalendarInputLightBox.addEventListener("click", ()=>{
    lightBoxCalendarInput.style.display="block"
    })
timesClosedLightBoxGoalsSetting.addEventListener("click", ()=>{
    lightBoxGoalsSetting.style.display="none"

}) 
timesClosedLightBoxCalendarInput.addEventListener("click", ()=>{
    lightBoxCalendarInput.style.display="none"

})
btnClosedLightBoxGoalsSetting.addEventListener("click", ()=>{
    lightBoxGoalsSetting.style.display="none"

})
    btnClosedLightBoxCalendarInput.addEventListener("click", ()=>{
        lightBoxCalendarInput.style.display="none"

    })
    
    
     const MainWrapperPhoneSlider = document.querySelector(".phoneSlider")
     const wrapperSlider = document.querySelector(".slider")
     const phoneSliderImages = document.querySelectorAll('.phoneSlider .slider img')

     const rightArrowPhoneSlider = document.querySelector('.rightArrowPhoneSlider')
     const leftArrowPhoneSlider = document.querySelector('.leftArrowPhoneSlider')

     
     let phoneImageCounter = 1;
     const sizePhoneImage = wrapperSlider.clientWidth;

     wrapperSlider.style.transform='translateX(' +  (-sizePhoneImage * phoneImageCounter) + 'px)'

     rightArrowPhoneSlider.addEventListener("click", ()=>{

        if(phoneImageCounter>=phoneSliderImages.length-1)
            return
    wrapperSlider.style.transition = "transform .3s ease-in-out"
    phoneImageCounter++
 
    wrapperSlider.style.transform="translateX(" + (-sizePhoneImage*phoneImageCounter) + "px)"

     })
     






 leftArrowPhoneSlider.addEventListener("click", ()=>{
        if(phoneImageCounter<=0)
            return
            wrapperSlider.style.transition = "transform .3s ease-in-out"
            phoneImageCounter--
        
        wrapperSlider.style.transform="translateX(" + (-sizePhoneImage*phoneImageCounter) + "px)"
    
    })
    wrapperSlider.addEventListener("transitionend", ()=>{
        if(phoneSliderImages[phoneImageCounter].id==='lastClone')
        {
            wrapperSlider.style.transition="none"
            phoneImageCounter=phoneSliderImages.length-2
        wrapperSlider.style.transform="translateX(" + (-sizePhoneImage*phoneImageCounter) + "px)"
    
        }
        if(galleryWorkersImages[counterSlideImage].id==='firstClone')
        {
            wrapperSlider.style.transition="none"
            phoneImageCounter=phoneSliderImages.length-phoneImageCounter
        wrapperSlider.style.transform="translateX(" + (-sizePhoneImage*phoneImageCounter) + "px)"
    
        }
    
    
    })


            
const btnBacktoUp = document.querySelector("div.btnBackToUp")
const websiteHeader= document.querySelector("section.websiteHeader")
const featuresSection = document.querySelector('section.featuresSection')
const videoAboutApp = document.querySelector('section.videoAboutApp')
const detailsOption = document.querySelector('section.detailsOptions')
const contactForm = document.querySelector("section.contactForm")

const btnHome = document.querySelector("nav ul li a.home")
const btnFeatures = document.querySelector("nav ul li a.features")
const btnPreview = document.querySelector("nav ul li a.preview")
const btnDetails = document.querySelector("nav ul li a.details")
const btnContact = document.querySelector("nav ul li a.contact")
const allMenuBtns = document.querySelectorAll('nav ul li a')

btnBacktoUp.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})
window.addEventListener("scroll", ()=> {
    
    if(window.scrollY > websiteHeader.clientHeight/2)
        btnBacktoUp.style.opacity="1"
    if(window.scrollY < websiteHeader.clientHeight/2)
        btnBacktoUp.style.opacity="0"

    if(window.scrollY>=0)
    { 
        btnHome.style.color = "rgb(0, 201, 219)"
        btnFeatures.style.color = "white"
        btnPreview.style.color="white"
        btnDetails.style.color = "white"
        btnContact.style.color="white"
    }
    if(window.scrollY>featuresSection.offsetTop)
    { 
        btnHome.style.color = "white"
        btnFeatures.style.color = "rgb(0, 201, 219)"
       btnPreview.style.color="white"
        btnDetails.style.color = "white"
        btnContact.style.color="white"
    }
    if(window.scrollY>videoAboutApp.offsetTop)
    { 
        
        btnHome.style.color = "white"
        btnFeatures.style.color = "white"
        btnPreview.style.color = "rgb(0, 201, 219)"
        btnDetails.style.color = "white"
        btnContact.style.color="white"

    }
    if(window.scrollY>detailsOption.offsetTop)
    { 
         btnHome.style.color = "white"
        btnFeatures.style.color = "white"
        btnPreview.style.color = "white"
        btnDetails.style.color = "rgb(0, 201, 219)"
        btnContact.style.color="white"
    }
    if(window.scrollY>contactForm.offsetTop)
    { 
        btnHome.style.color = "white"
        btnFeatures.style.color = "white"
        btnPreview.style.color = "white"
        btnDetails.style.color = "white"
        btnContact.style.color = "rgb(0, 201, 219)"
        
    }
   
})

btnHome.addEventListener("click", (e)=>{
    
    e.preventDefault()
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    )
    btnFeatures.addEventListener("click", (e)=>{
        e.preventDefault()
         window.scrollTo({
            top: featuresSection.offsetTop + 1,
            left: 0,
            behavior: 'smooth'
          });
        }
        )
        btnPreview.addEventListener("click", (e)=>{
            e.preventDefault()
            window.scrollTo({
                top: videoAboutApp.offsetTop + 1,
                left: 0,
                behavior: 'smooth'
              });
            }
            )

            btnDetails.addEventListener("click", (e)=>{
                e.preventDefault()
                 window.scrollTo({
                    top: detailsOption.offsetTop + 1,
                    left: 0,
                    behavior: 'smooth'
                  });
                }
                )

                btnContact.addEventListener("click", (e)=>{
                    e.preventDefault()
                     window.scrollTo({
                        top: contactForm.offsetTop + 1,
                        left: 0,
                        behavior: 'smooth'
                      });
                    }
                    )
        
    allMenuBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
       
        if(flaga)
        {
            btnBars.style.display = "none"
            btnTimes.style.display = "block"
            navMenu.classList.add("dropDown")
            flaga=false
        }
        else{
            btnBars.style.display = "block"
            btnTimes.style.display = "none"
            navMenu.classList.remove("dropDown")
            flaga=true
        }
    })
})
