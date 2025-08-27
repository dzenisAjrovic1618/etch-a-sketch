
// function createDivArray(count) {
//     const divs = [];

//     for (let i = 0; i < count; i++) {
    //         const div = document.createElement("div");
//         div.classList.add("square");
//         divs.push(div);
//     }

//     return divs;
// }

//querySelectors
const input = document.querySelector("input");
const container = document.querySelector(".container");
const button = document.querySelector("button");
//  CREATES ARRAY OF DIVS


button.addEventListener("click",() =>
    {
        container.innerHTML = "";
        const count = parseInt(input.value);
        if(count < 1 || count > 100)
            {
                console.error("Number has to be between 1 and 100")
                container.innerHTML = "";
                return
            }
    else
    {
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight - 100;
        const maxSize = Math.min(maxWidth, maxHeight);

        container.style.width = maxSize + "px";
        container.style.height = maxSize + "px";

        container.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${count}, 1fr)`;
            
        for(let i = 0; i < count*count; i++)
        {
            const div = document.createElement("div");
            div.classList.add("square")
            div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        })
        container.appendChild(div);
        }
    }
    })