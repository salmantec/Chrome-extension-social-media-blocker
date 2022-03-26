const renderHTMLPage = () => {
    return `<div style="display: flex;justify-content: center;align-items: center;height: 500px">
                <h1>You're gonna waste your valuable time, instead continue your work/study</h1>
            </div>`
}


switch (window.location.hostname) {
    case "www.youtube.com":
        document.body.innerHTML = renderHTMLPage()
        break;
    case "www.facebook.com":
        document.body.innerHTML = renderHTMLPage()
        break;
    case "www.netflix.com":
        document.body.innerHTML = renderHTMLPage()
        break;
    case "www.instagram.com":
        document.body.innerHTML = renderHTMLPage()
        break;
}