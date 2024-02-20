import { Page3D } from "./src/World/Page3D.js";
import * as THREE from './three.js-master/build/three.module.js'
function main(){
    const canvas = document.querySelector('#c')
    const page = new Page3D(canvas)
    page.render()
}

main()