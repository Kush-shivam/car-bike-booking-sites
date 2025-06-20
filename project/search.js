function searchPage(event) {
    event.preventDefault();
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    let pages = {
        "mahindra": "mahindra.html",
        "mahindra xuv 700": "mahindra.html#carousel1",
        "mahindra xuv": "mahindra.html#carousel1",
        "xuv": "mahindra.html#carousel1",
        "xuv 700": "mahindra.html#carousel1",
        "mahindra thar": "mahindra.html#carousel2",
        "thar": "mahindra.html#carousel2",
        "mahindra xev 9e": "mahindra.html#carousel3",
        "mahindra xev": "mahindra.html#carousel3",
        "xev": "mahindra.html#carousel3",
        "xev 9e": "mahindra.html#carousel3",
        "mahindra 9e": "mahindra.html#carousel3",
        "mahindra be 6": "mahindra.html#carousel4",
        "mahindra be": "mahindra.html#carousel4",
        "be 6": "mahindra.html#carousel4",
        "be": "mahindra.html#carousel4",
        "royal enfield": "royal.html",
        "royal enfield hunter 350": "royal.html#carousel1",
        "hunter 350": "royal.html#carousel1",
        "hunter": "royal.html#carousel1",
        "royal enfield hunter": "royal.html#carousel1",
        "royal enfield interceptor 650": "royal.html#carousel2",
        "interceptor 650": "royal.html#carousel2",
        "royal enfield interceptor": "royal.html#carousel2",
        "interceptor": "royal.html#carousel2",
        "tata": "tata.html",
        "tata harrier": "tata.html#carousel1",
        "harrier": "tata.html#carousel1",
        "tata safari": "tata.html#carousel2",
        "safari": "tata.html#carousel2",
        "tata curvv ev": "tata.html#carousel3",
        "curvv ev": "tata.html#carousel3",
        "curvv": "tata.html#carousel3",
        "tata curvv": "tata.html#carousel3",
        "tata ev": "tata.html#carousel3",
        "tata nexon ev": "tata.html#carousel4",
        "nexon ev": "tata.html#carousel4",
        "tata nexon": "tata.html#carousel4",
        "nexon": "tata.html#carousel4",
        "tvs": "tvs.html",
        "tvs raider": "tvs.html#carousel1",
        "raider": "tvs.html#carousel1",
        "tvs apache rtr 310": "tvs.html#carousel2",
        "apache rtr 310": "tvs.html#carousel2",
        "tvs apache": "tvs.html#carousel2",
        "rtr 310": "tvs.html#carousel2",
        "apache": "tvs.html#carousel2",
        "revolt": "revolt.html",
        "revolt rv400 brz": "revolt.html",
        "rv400 brz": "revolt.html",
        "revolt rv400": "revolt.html",
        "brz": "revolt.html",
        "rv400": "revolt.html",
        "revolt rv1": "revolt.html#carousel2",
        "rv1": "revolt.html#carousel2",
        "ola": "ola.html",
        "ola roadster pro": "ola.html",
        "ola roadster": "ola.html",
        "roadster pro": "ola.html",
        "tork": "tork.html",
        "tork kratos r urban": "tork.html",
        "tork kratos": "tork.html",
        "kratos": "tork.html",
        "kratos r urban": "tork.html"
    };

    if (pages[input]) {
        window.location.href = pages[input];
    } else {
        alert("We do not deal with vehicle you mentioned");
    }
}


function submitPage(event) {
    event.preventDefault();
    alert("your message has been sent. Thank you for contacting.");
}