// var parametres = document.querySelectorAll('div[class="ux-panel-item"][ng-if="!loadingContent"]');
// var query = '[ng-click="sharePresentation()"]';
// var partage = document.querySelectorAll(query);

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


//To test still
// waitForElm('[ng-click="sharePresentation()"]').then((elm) => {
	// console.log('Element is ready');
    // console.log(elm.textContent);
	// console.log(elm.getAttribute("aria-label"));
	// var txtPartage = elm[0].getAttribute("aria-label");
    // console.log('Element is ready');
    // elm.children[0].textContent = elm.getAttribute("aria-label");
	

	
	
// });



//Some tests
	// var newDiv = document.createElement("div");
	
	// var el1 = document.querySelector('.views-elements');
	// var uxtabs = document.querySelector(".ux-tabs");
		// console.log("COUCOU");
	
	// var el0 = el1.closest("ng-include");
	
	// var customPres = document.querySelector(".custom-presentation-elements");
	
	// newDiv.innerHTML = customPres.innerHTML;
	
	// uxtabs.parentNode.insertBefore(newDiv, uxtabs);
	// customPres.parentNode.removeChild(customPres);
	// el0.insertBefore(newDiv, el0.nextSibling);


