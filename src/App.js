import { createElement } from "./utils";
import { initRouter } from "./router";

function Header(mainDiv) {
    const siteName = createElement("a", {
        href: "index.html",
      }, [createElement("h1", {
        textContent: "MoviesDix",
      })]);
    const favLink = createElement("div", {
		className: "favorite-box",
	},[createElement("span", {
		className: "material-symbols-outlined",
		id: "favorite",
		textContent: "favorite",
	})]);   
      
	const searchBox = createElement("div", {
		className: "box",
	})
    const searchForm = createElement("form", {
        id: "search-form",		
    },[createElement("input", {
        className: "search-input",
        type: "text",
        name: "search",
        onmouseout: `this.value = ''; this.blur();`,
        autocomplete: "off"
    })]);

    const searchSpan = createElement("span", {
		className: "material-symbols-rounded",
		textContent: "search",
	});

    searchBox.appendChild(searchSpan);
    searchBox.appendChild(searchForm);
      
	const nav = createElement("navbar", {}, [
		siteName,        
		favLink,		
		searchBox,        
	]);

	return createElement("header", {}, [nav]);
}

function Footer() {
	const copyright = createElement("span", {
		textContent: `Copyright © ${new Date().getFullYear()} Peter Osagie Ohenhen`,
	});

	return createElement("footer", {}, [copyright]);
}

function App() {
	const main = createElement("main", {},[createElement("div", {
        className: "cards",
        id: "cards"
    })]);

	// initRouter(main);

	return createElement("div", {        
    }, [Header(main), main, Footer()]);
}

export default App;