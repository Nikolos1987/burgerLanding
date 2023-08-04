import { renderGoods } from "./render.js"
export const PORT = "localhost:5500"

fetch(`http://${PORT}/scripts/index.json`)
      .then(response => response.json())
      .then(json => {
            renderGoods( ".goods",json);          
      })



