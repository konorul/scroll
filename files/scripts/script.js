let fakeFeed = document.querySelector(".feed_fake")
let body = document.querySelector("body")

console.log(fakeFeed)


let scrollPosition = 0

body.onscroll = function(){
    scrollPosition = window.scrollY
    console.log("scroll")
    console.log(scrollPosition)
};


// let activeJSON = []
// let BROconfig
// let elemetnConfig





// let upload = document.querySelector(".upload")
// let fileInput = document.querySelector("#file")

// file.addEventListener("change", handleFile, false);

// function handleFile(e) { 
//     let file = e.target.files[0]

//     let reader = new FileReader()
//     reader.onload = function(e) {
//         let json = e.target.result;
//         activeJSON = [JSON.parse(json)][0];
//         generateFORM()
//     }

//     reader.readAsText(file);    
//     upload.classList.add("content_hidden")
// }





// function showChapter(chapter){
//     hideContent()
//     document.querySelector(`.${chapter.dataset.chapter}`).classList.remove("content_hidden")
//     chapter.classList.add("head_button__active")
// }

// function hideContent() {
//     let children = document.querySelectorAll(".content_form")
//     children.forEach(function(child){
//         child.classList.add("content_hidden")
//     })

//     let buttons = document.querySelectorAll(".head_button")
//     buttons.forEach(function(button){
//         button.classList.remove("head_button__active")
//     })


// }




// let browserConfig = []
// let browserConfigClean = []



// // Генератор конфига для элементов
// function generateElementsConfig (elementsArray, statesArray) {

//     let singleElementFullConfig = []

//     elementsArray.forEach(function(element) {
        
//         statesArray.forEach(function(state) {

//             let elementProperties = ""



//             // Проверка элемента на мьют

//             if (element.element_mute === true) {
//                 // console.log("muted")
//                 // console.log(element)
//             }


//             else {



//                 // Генерация конфига для смешанного табстрипа
//                 if (element.mixed_tabstrip === true && (
//                     state.selector === ":is(:dark_wp_top)" ||
//                     state.selector === ":is(:sly_zen:is(:dark_wp_top))" ||
//                     state.selector === ":is(:is([theme=blue]:is([tint=half]))):not([state=ntp], [state=protected], :incognito, :sly_zen)" ||
//                     state.selector === ":is(:is([theme=orange]:is([tint=half]))):not([state=ntp], [state=protected], :incognito, :sly_zen)" ||
//                     state.selector === ":is(:is([theme=red]:is([tint=half]))):not([state=ntp], [state=protected], :incognito, :sly_zen)" ||
//                     state.selector === ":is(:is([theme=purple]:is([tint=half]))):not([state=ntp], [state=protected], :incognito, :sly_zen)" ||
//                     state.selector === ":is(:is([theme=yellow]:is([tint=full]))):not([state=ntp], [state=protected], :incognito, :sly_zen)"
//                 )) {
                    

//                     for (let [key, value] of Object.entries(element.properties)) {
                        
                        
                        
//                         // Генерация свойства с кастомным значением
//                         if (value.indexOf('custom') == 0){
//                             let customValue = value.slice(7, -1)
//                             elementProperties += `"${key} !imp": ${customValue},`
//                             // console.log("custom-mixed")
//                             // console.log(`"${key} !imp": "${customValue}",`)
//                         }                        

//                         // Генерация свойства со стрикт значением
//                         else if (value.indexOf('strict') == 0 && value.indexOf(',') == -1) {
//                             elementProperties += `"${key} !imp": "var(${value})",`
//                             // console.log("strict")
//                             // console.log(value)
//                         }
                        
                        
//                         // Генерация свойства с значением в виде массива
//                         else if (value.indexOf(',') > -1){

//                             let colorsArray = value.split(", ");
//                             let colorsArrayVars = []

                                
//                             if (state.palleteElement.includes("inverted")) {


//                                 colorsArrayVars = colorsArray.map(function(color){

//                                     if (color.indexOf('strict') == 0) {
//                                         return `"var(${color})"`
//                                     }
                                    
//                                     else {
//                                         return `"var(${state.palleteElement}__${color})"`
//                                     }

//                                 })    

//                             }
                            
//                             else {
//                                 colorsArrayVars = colorsArray.map(function(color){

//                                     if (color.indexOf('strict') == 0) {
//                                         return `"var(${color})"`
//                                     }
                                    
//                                     else {
//                                         return `"var(${state.palleteElement}_inverted__${color})"`
//                                     }
//                                 })

//                             }


//                             elementProperties += `"${key} !imp":  [${String(colorsArrayVars)}],`
//                             // console.log("array-mixed")
//                             // console.log(`"${key} !imp":  [${String(colorsArrayVars)}],`)                        
//                         }
                        
                        
//                         // Генерация свойства с простым значением
//                         else {

//                             if (state.palleteElement.includes("inverted")) {
//                                 elementProperties += `"${key} !imp": "var(${state.palleteElement}__${value})",`
//                             }
//                             else {
//                                 elementProperties += `"${key} !imp": "var(${state.palleteElement}_inverted__${value})",`
//                             }
//                         }


//                     }                    
//                 }








                

//                 // Генерация конфига для всего остального
//                 else {
//                     for (let [key, value] of Object.entries(element.properties)) {

                            
//                         // Генерация свойства с кастомным значением
//                         if (value.indexOf('custom') == 0){
                            
//                             let customValue = value.slice(7, -1)
//                             elementProperties += `"${key} !imp": ${customValue},`
//                             // console.log("custom")
//                             // console.log(`"${key} !imp": "${customValue}",`)
//                         }
                        
//                         // Генерация свойства со стрикт значением
//                         else if (value.indexOf('strict') == 0 && value.indexOf(',') == -1) {
//                             elementProperties += `"${key} !imp": "var(${value})",`
//                             // console.log("strict")
//                             // console.log(value)
//                         }
                        
//                         // Генерация свойства с значением в виде массива
//                         else if (value.indexOf(',') > -1){
                            
//                             let colorsArray = value.split(", ");
//                             let colorsArrayVars = []
                            
//                             colorsArrayVars = colorsArray.map(function(color){
                                
//                                 if (color.indexOf('strict') == 0) {
//                                     return `"var(${color})"`
//                                 }
                                
//                                 else {
//                                     return `"var(${state.palleteElement}__${color})"`
//                                 }
                                
//                             })
                            
//                             elementProperties += `"${key} !imp":  [${String(colorsArrayVars)}],`

//                         }
                                        
                    
//                         // Генерация свойства с простым значением
//                         else {
//                             elementProperties += `"${key} !imp": "var(${state.palleteElement}__${value})",`
//                         }

//                     }    
//                 }


//                 let singeElementConfig = {

//                     selector: `${element.selector}${state.selector}`,
//                     properties: `${elementProperties}`
//                 };
                
                
//                 singleElementFullConfig.push(singeElementConfig)
//                 browserConfig.push(singeElementConfig)





//             }






//         });
//     });

//     return singleElementFullConfig
// }













// // Генератор конфига для блоков
// function generateBlocksConfig (elementsArray, statesArray) {

//     let singleElementFullConfig = []


//     elementsArray.forEach(function(element) {
        
//         statesArray.forEach(function(state) {

//             let elementProperties = ""

//                 for (let [key, value] of Object.entries(element.properties)) {


//                     // Генерация свойства с кастомным значением

//                     if (value.indexOf('custom') == 0){
    
//                         let customValue = value.slice(7, -1)
//                         elementProperties += `"${key} !imp": ${customValue},`
//                         // console.log("custom")
//                         // console.log(`"${key} !imp": "${customValue}",`)
//                     }

//                     // Генерация свойства со стрикт значением
//                     else if (value.indexOf('strict') == 0 && value.indexOf(',') == -1) {
//                         elementProperties += `"${key} !imp": "var(${value})",`
//                         // console.log("strict")
//                         // console.log(value)
//                     }

//                     // Генерация свойства с значением в виде массива
//                     else if (value.indexOf(',') > -1){
    
//                         let colorsArray = value.split(", ");
//                         let colorsArrayVars = []
                        
//                         colorsArrayVars = colorsArray.map(function(color){
                            

//                             if (color.indexOf('strict') == 0) {
//                                 return `"var(${color})"`
//                             }
                            
//                             else {
//                                 return `"var(${state.palleteBlock}__${color})"`
//                             }
                            
//                         })
                        
//                         elementProperties += `"${key} !imp":  [${String(colorsArrayVars)}],`

//                     }

//                     else {

//                         elementProperties += `"${key} !imp": "var(${state.palleteBlock}__${value})",`
//                     }


//                 }    

//             let singeElementConfig = {
//                 selector: `${element.selector}${state.selector}`,
//                 properties: `${elementProperties}`
//             };
            
            
//             browserConfig.push(singeElementConfig);
//             singleElementFullConfig.push(singeElementConfig)

//         });
//     });
//     return singleElementFullConfig

// }














































// // Группировка элементов с одинаковым набором свойств
// function groupConfig (inputConfig) {
    

//     // console.log(`Чистый конфиг начало`)
//     // console.log(${browserConfigClean})


    
//     //  Список элементов
//     let elementsPool = []
//     activeJSON[0].forEach(element => {
//         elementsPool.push(element.selector)
//     })
    
//     //  Список блоков
//     let blocksPool = []
//     activeJSON[2].forEach(element => {
//         blocksPool.push(element.selector)
//     })

//     //  Список элементов и блоков
//     let elemntsANDblocksPool = elementsPool.concat(blocksPool)

//     //  Количество стейтов
//     let statesCount = activeJSON[4].length
    
//     //  Количество блоков и элементов
//     let elemntsANDblocksCount = elemntsANDblocksPool.length
    
//     //  Количество конфигов блоков и элементов
//     let counterMultiplied = statesCount * elemntsANDblocksCount
    
//     //  Группировка кофнфигов поэлементно и поблочно
//     let inputConfigGrouped = []    
//     for (let index = 0; index < counterMultiplied; index = index + statesCount) {
//         inputConfigGrouped.push(inputConfig.slice(index, index + statesCount))    
//     }







//     // Индекс элемента или блока
//     let elementANDblockNumber = 0
    




    
//     // Генерация оптимизированных конфигов
//     inputConfigGrouped.forEach(element => {
        
//         // console.log("inputConfigGrouped")
//         // console.log(inputConfigGrouped)
//         // console.log("element")
//         // console.log(element)

    


//         // Массив уникальных наборов свойств
//         let propertiesPool = []
//         element.forEach(function(item) {
            
//             if (propertiesPool.includes(item.properties)){
//             }
//             else {
//                 propertiesPool.push(item.properties)
//             }
//             // console.log("element")
//             // console.log(element)
//             // console.log("propertiesPool")
//             // console.log(propertiesPool)
//         })


//         // console.log(browserConfigClean)



//         // Генерация конфига для элементов с одинаковыми свойствами в разных стейтах
//         if (propertiesPool.length === 1) {

//             let elementConfigOptimized = {
//                 selector: `${elemntsANDblocksPool[elementANDblockNumber]}`,
//                 properties: `${propertiesPool[0]}`
//             };    
//             browserConfigClean.push(elementConfigOptimized)
            
//             // console.log("element")
//             // console.log(element)
//             // console.log("elementConfigOptimized")
//             // console.log(elementConfigOptimized)
//             // console.log(browserConfigClean)

//         }
        



//         // Генерация конфига для элементов с разными свойствами в разных стейтах
//         else {


//             // Группировка конфигов элемента с одинаковыми свойствами
//             let elementConfigGrouped = []

//             propertiesPool.forEach(function(property) {


//                 let configsSameProperty = []

//                 element.forEach(function(item) {
        
 
//                     if (item.properties === property) {
//                         configsSameProperty.push(item)
//                     }

//                     else {}
                    
//                 })

//                 elementConfigGrouped.push(configsSameProperty)
                
//                 // console.log("element")
//                 // console.log(element)
//                 // console.log("elementConfigGrouped")
//                 // console.log(elementConfigGrouped)
//                 // console.log("configsSameProperty")
//                 // console.log(configsSameProperty)

//             })
            
            





//             // console.log("elementConfigGrouped")
//             // console.log(elementConfigGrouped)
            


            
//             // Генерация мета-селекторов для групп конфигов элемента с одинаковыми свойствами
//             elementConfigGrouped.forEach(function(group) {
                
//                 // console.log("group")
//                 // console.log(group)
                




                
//                 // Один стейт в группе
//                 if (group.length === 1) {                    
//                     // console.log("browserConfigClean before")
//                     // console.log(browserConfigClean)
                    
//                     // console.log("group")
//                     // console.log(group)
                    
//                     browserConfigClean.push(group[0])

//                     // console.log("browserConfigClean after")
//                     // console.log(browserConfigClean)
//                 }
                
                




//                 // Более одного стейта в группе
//                 else {
                
//                     let elementConfigOptimized = {}
//                     let metaSelector = []

//                     group.forEach(function(config) {
    
//                         let slicedSelector = config.selector.slice(elemntsANDblocksPool[elementANDblockNumber].length, )
    
//                         metaSelector.push(slicedSelector)
    
//                     })


//                     // Проверка на содержание дефолтного свойства 
//                     if (metaSelector.includes("")) {
//                         // console.log(metaSelector)
                        
//                         elementConfigOptimized = {
//                             selector: elemntsANDblocksPool[elementANDblockNumber],
//                             properties: group[0].properties
//                         };    
                        
//                         // console.log("default")
//                         // console.log(elementConfigOptimized)
                        
                        
//                     }
                    
//                     else {
//                         elementConfigOptimized = {
//                             selector: elemntsANDblocksPool[elementANDblockNumber],
//                             meta_selector: metaSelector,
//                             properties: group[0].properties
//                         };       
//                         // console.log("non-default")
//                         // console.log(elementConfigOptimized)
//                     }
                    
//                     browserConfigClean.push(elementConfigOptimized)
//                     // console.log("browserConfigClean")
//                     // console.log(browserConfigClean)



                    
//                 }
                
                
//             });
            
            
            
            
//         }
        
//         elementANDblockNumber = elementANDblockNumber + 1 
//     })

    
    
//     console.log("inputConfig")
//     console.log(inputConfig)
//     console.log("browserConfigClean")
//     console.log(browserConfigClean)

// }






























































// // Вывод конфига на страницу
// function generateBROconfig (inputConfig, inputPallets) {
    
//     let configString = ""
//     let palleteString = ""


//     // console.log(inputConfig)
//     // console.log(JSON.stringify(element))

//     // Генерация строк с конфигом
//     inputConfig.forEach(function(element) {     

//         if (typeof(element.meta_selector) === "undefined") {
//             configString += `{"selector": "${element.selector}", ${element.properties}},`;
//         }

//         else {
//             configString += `{"selector": "${element.selector}", "meta_selector": ${JSON.stringify(element.meta_selector)}, ${element.properties}},`;
//         }
        
//     });
    
//     // Генерация строк с палитрами

//     inputPallets.forEach(function(inputPalletsItem) {     
    
//         let palletelist = Object.entries(inputPalletsItem)
//         palletelist.forEach(function(pallete) {     
            
//             Object.entries(pallete[1]).forEach(function(color) {     
//                 palleteString += `"${pallete[0]}__${color[0]}": "${color[1]}",`
//             })
            
//         });

//     });
    

//     BROconfig = `{"variables":{${palleteString}},"style_sheet":[${configString}],  "browser_ui_config":{"tab_vertical_border_offset": 8,"tab_title_centered": true,},}`
// }




// // Вывод конфига элемента на страницу
// function generateELEMENTconfig (inputConfig) {
    
//     let configString = ""
//     let palleteString = ""

//     // Генерация строк с конфигом
//     inputConfig.forEach(function(element) {     
//         configString += `{"selector": [${element.selector}],${element.properties}},`;
//     })
    
//     elemetnConfig = `${configString}`

//     return elemetnConfig
// }









// // Создание формы ЭЛЕМЕНТОВ на основе JSON
// function createElementInterface(array, targetForm, type){
//     let allProperties = []
//     let allColors = []
    
//     let uniqueProperties = []
//     let uniqueColors = []

//     let uniquePropertiesString = ""
//     let uniqueColorsString = ""
    
//     targetForm.innerHTML = ``

//     array.forEach(function(element) {


//         let elementProp = ""
//         let mixed_tabstrip = ""


//         if (type === "element") {

    

//             if (element.mixed_tabstrip) {
//                 mixed_tabstrip = `<input class="element_mixed_tabstrip" type="checkbox" checked><p>В табстрипе</p></input>`;
//             }
            
//             else {
//                 mixed_tabstrip = `<input class="element_mixed_tabstrip" type="checkbox"><p>В табстрипе</p></input>`;
//             }
            

//         }

//         else {
//             mixed_tabstrip = ""
//         }



//         // Создание саджеста свойств и цветов
//         for (let [key, value] of Object.entries(element.properties)) {

//             allProperties.push(key)
//             allColors.push(value)

//         }




//         for (let [key, value] of Object.entries(element.properties)) {

//             elementProp += `
//                 <div class="${type}_property">
//                     <input class="${type}_property_key" type="text"  value="${key}" placeholder="Свойство" list="properties">

//                     <input class="${type}_property_value" type="text"  value='${value}' placeholder="Значение" list="colors">

//                     <button type="button" onclick="deleteProperty(this)">X</button>
//                 </div>
//                 `
                
//         }

        
//         targetForm.innerHTML += `
//             <div class="${type}" data-selector="${element.selector}">
//                 <input class="${type}_name" type="text"  value="${element.name}" placeholder="Название">
//                 <input class="${type}_selector" type="text"  value="${element.selector}" placeholder="Селектор">
//                 <div class="props_set">${elementProp}<button type="button" onclick="addProperty(this)">Добавить</button></div>
//                 <div class="checkbox_container">
//                     <div class="checkbox_wrapper">${mixed_tabstrip}</div>
//                     <div class="checkbox_wrapper"><input class="element_mute" type="checkbox"><p>Не генерировать</p></input></div>
//                 </div>
//                 <button type="button" class="delete-element-button" onclick="removeElement(this)">Удалить</button>
//             </div>`
        

//     })




//     function onlyUnique(value, index, self) { 
//         return self.indexOf(value) === index;
//     }
    
//     uniqueProperties = allProperties.filter(onlyUnique)
//     uniqueColors = allColors.filter(onlyUnique)

//     uniqueProperties.sort();
//     uniqueColors.sort();


//     uniqueProperties.forEach(function(element){
//         uniquePropertiesString += `<option value="${element}">`        
//     })
//     uniqueColors.forEach(function(element){
//         uniqueColorsString += `<option value="${element}">`
//     })



//     targetForm.innerHTML += `
//         <datalist id="properties">
//             ${uniquePropertiesString}
//         </datalist>
//         <datalist id="colors">
//             ${uniqueColorsString}
//         </datalist>
//     `



// }












// function deleteProperty(prop) {
//     prop.parentNode.remove()
// }


// function addProperty(button) {

//     let type = button.parentNode.parentNode.className

//     button.insertAdjacentHTML('beforebegin', `
//     <div class="${type}_property">
//         <input class="${type}_property_key" type="text"  placeholder="Свойство"  list="properties">
//         <input class="${type}_property_value" type="text"  placeholder="Значение"  list="colors">
//         <button type="button" onclick="deleteProperty(this)">X</button>
//     </div>`);

// }




// function removeElement(prop) {
//     prop.parentNode.remove()
// }
















// // Создание формы СТЕЙТОВ на основе JSON
// function createStateInterface(array, targetForm) {
    
//     targetForm.innerHTML = `
//     <div class="state_head">
//         <h4></h4>
//         <h4></h4>
//         <h4>Палитра элементов</h4>
//         <h4>Палитра Блоков</h4>
//     </div>`

    
//     array.forEach(function(state){
        
//         targetForm.innerHTML += `
//         <div class="state">
//             <input class="state_name" type="text"  value="${state.name}">
//             <input class="state_selector" type="text"  value="${state.selector}">
//             <input class="state_pallete_element" type="text"  value="${state.palleteElement}">
//             <input class="state_pallete_block" type="text"  value="${state.palleteBlock}">
//         </div>`
        
//     })
        
// }


// // Создание формы ПАЛИТР на основе JSON
// function createPalleteInterface(object, targetForm, type) {

//     targetForm.innerHTML = ``
    
    
//     for (let [key, value] of Object.entries(object)) {
        
//         let color = ""

//         for (let [colorName, colorValue] of Object.entries(value)) {
            
//             color += `
//             <div class="color_pair">
//                 <input onclick="lightUP(this)" class="color_name" type="text" value="${colorName}">
//                 <input onclick="lightUP(this)" class="color_value" type="text"  value="${colorValue}">
//             </div>`
        
//         }

        
//         targetForm.innerHTML += `
//         <div class="${type}_pallete" id="${key}">
//             <h4>${key}</h4>
//             ${color}
//         </div>`
    

//     }
    
// }











// // Создание JSON Элементов на основе данных формы
// function crateJsonFromElements(type){
//     let newJSON = []
//     let htmlInput = document.querySelectorAll(`.${type}`)

//     htmlInput.forEach(function(element){

//         elementJSON = {
//             name: element.querySelector(`.${type}_name`).value,
//             selector: element.querySelector(`.${type}_selector`).value,
//             properties: {},
//         }

//         let propertiesKeys = element.querySelectorAll(`.${type}_property_key`)
//         let propertiesValues = element.querySelectorAll(`.${type}_property_value`)

//         let Keys = []
//         let Values = []

//         propertiesKeys.forEach(function(propertyKey){
//             Keys.push(propertyKey.value)
//         })

//         propertiesValues.forEach(function(propertyValue){
//             Values.push(propertyValue.value)
//         })

//         Keys.forEach((key, i) => elementJSON.properties[key] = Values[i])

//         if (element.querySelector(`.${type}_mixed_tabstrip`)) {
//             elementJSON.mixed_tabstrip =  element.querySelector(`.${type}_mixed_tabstrip`).checked
//         }

//         if (element.querySelector(`.element_mute`)) {
//             elementJSON.element_mute =  element.querySelector(`.element_mute`).checked
//             // console.log(elementJSON.element_mute)
//         }
        
//         newJSON.push(elementJSON)
        
//     })
    
//     return newJSON
    
// }










// // Создание JSON Элементов на основе данных формы
// function crateJsonFromStates(){
//     let newJSON = []
//     let htmlInput = document.querySelectorAll(`.state`)

//     htmlInput.forEach(function(element){

//         elementJSON = {
//             name: element.querySelector(`.state_name`).value,
//             selector: element.querySelector(`.state_selector`).value,
//             palleteElement: element.querySelector(`.state_pallete_element`).value,
//             palleteBlock: element.querySelector(`.state_pallete_block`).value,            
//         }

//         newJSON.push(elementJSON)
        
//     })
    
    
//     return newJSON
    
// }





// function addElement(button) {
//     elementsForm.insertAdjacentHTML('beforeend', `
// 		<div class="element">
// 			<input class="element_name" type="text"  placeholder="Название">
// 			<input class="element_selector" type="text"  placeholder="Селектор">
// 			<div class="props_set">
// 				<div class="element_property">
// 					<input class="element_property_key" type="text"  placeholder="Свойство" list="properties">
// 					<input class="element_property_value" type="text"  placeholder="Значение" list="colors">
// 					<button type="button" onclick="deleteProperty(this)">X</button>
//                 </div>
//                 <button type="button" onclick="addProperty(this)">Добавить</button>
//             </div>
//             <div class="checkbox_container">
//                 <div class="checkbox_wrapper"><input class="element_mixed_tabstrip" type="checkbox"><p>В табстрипе</p></input></div>
//                 <div class="checkbox_wrapper"><input class="element_mute" type="checkbox"><p>Не генерировать</p></input></div>
//             </div>
//             <button type="button" class="delete-element-button" onclick="removeElement(this)">Удалить</button>
// 		</div>`);
// };


// function addBlock(button) {
//     blocksForm.insertAdjacentHTML('beforeend', `
// 		<div class="block">
// 			<input class="block_name" type="text"  placeholder="Название">
// 			<input class="block_selector" type="text"  placeholder="Селектор">
// 			<div class="props_set">
// 				<div class="block_property">
// 					<input class="block_property_key" type="text"  placeholder="Свойство" list="properties">
// 					<input class="block_property_value" type="text"  placeholder="Значение" list="colors">
// 					<button type="button" onclick="deleteProperty(this)">X</button>
//                 </div>
//                 <button type="button" onclick="addProperty(this)">Добавить</button>
//             </div>
//             <button type="button" class="delete-element-button" onclick="removeElement(this)">Удалить</button>
//         </div>`
//     );
// };




// // Создание JSON Палитр на основе данных формы
// function crateJsonFromPallete(type){
//     let newJSON = {}
//     let htmlInput = document.querySelectorAll(`.${type}_pallete`)

//     htmlInput.forEach(function(pallete){

//         let palleteJSON = {}

//         let colorNames = pallete.querySelectorAll(`.color_name`)
//         let colorValues = pallete.querySelectorAll(`.color_value`)
    
//         let Names = []
//         let Values = []
    
//         colorNames.forEach(function(colorName){
//             Names.push(colorName.value)
//         })
    
//         colorValues.forEach(function(colorValue){
//             Values.push(colorValue.value)
//         })
    
//         Names.forEach((key, i) => palleteJSON[key] = Values[i])
        
//         let palleteNames = []
//         let palleteColors = []
        
//         palleteNames.push(pallete.id)
//         palleteColors.push(palleteJSON)
        
//         palleteNames.forEach((key, i) => newJSON[key] = palleteColors[i])
        
//     })
   
//     return newJSON
    
// }







// let modifiedJSON







// let elementsForm = document.querySelector("#elements")
// let elemntsPalleteForm = document.querySelector("#elements_pallete")
// let blocksForm = document.querySelector("#blocks")
// let blocksPalleteForm = document.querySelector("#blocks_pallete")
// let statesForm = document.querySelector("#states")







// function generateFORM(){
//     createElementInterface(activeJSON[0], elementsForm, "element")
//     createPalleteInterface(activeJSON[1], elemntsPalleteForm, "element")
//     createElementInterface(activeJSON[2], blocksForm, "block")
//     createPalleteInterface(activeJSON[3], blocksPalleteForm, "block")
//     createStateInterface(activeJSON[4], statesForm)
// }




// function generateJSON() {
//     let elementsJSON = crateJsonFromElements("element")
//     let blocksJSON = crateJsonFromElements("block")
//     let statesJSON = crateJsonFromStates()
//     let blockspalleteJSON = crateJsonFromPallete("block")
//     let elementspalleteJSON = crateJsonFromPallete("element")

//     activeJSON = []
//     activeJSON = new Array(elementsJSON, elementspalleteJSON, blocksJSON, blockspalleteJSON, statesJSON)

// }



// function copyelementConfig(button) {
    
//     // Генерим полный JSON
//     generateJSON()
//     generateFORM()
  
    
//     // Найти элемент в JSON
//     let elementID = button.parentNode.querySelector(".element_selector").value
//     let element = activeJSON[0].find(item => item.selector == `${elementID}`)
    

//     //Сгенерить конфиг
//     let singeElementFullConfig = generateElementsConfig ([element], activeJSON[4])

    
//     //Сгруппировать конфиг
//     let singeElementFullConfigGrouped = groupConfig(singeElementFullConfig)
    

//     //Положить конфиг в буфер
//     navigator.clipboard.writeText(generateELEMENTconfig(singeElementFullConfigGrouped))


// }


// function copyblockConfig(button) {
    
//     // Генерим полный JSON
//     generateJSON()
//     generateFORM()
  
    
//     // Найти элемент в JSON
//     let elementID = button.parentNode.querySelector(".block_selector").value
//     let element = activeJSON[2].find(item => item.selector == `${elementID}`)


//     //Сгенерить конфиг
//     let singeElementFullConfig = generateBlocksConfig ([element], activeJSON[4])

    
//     //Сгруппировать конфиг
//     let singeElementFullConfigGrouped = groupConfig(singeElementFullConfig)
    

//     //Положить конфиг в буфер
//     navigator.clipboard.writeText(generateELEMENTconfig(singeElementFullConfigGrouped))


// }




// /// Подсветка таблицы цветов

// function lightUP(element) {

//     document.querySelectorAll(".color_pair").forEach(item => {
//         item.classList.remove("focused-row")
//     })


//     // получить номер строки
//     let index = Array.from(element.parentElement.parentElement.children).indexOf(element.parentElement)
//     index = index -1

//     // // выбрать все элементы строки
//     let rowItemParents = Array.from(document.querySelectorAll(`.element_pallete`));

   
//     rowItemParents.forEach(item => {

//         let myPair = Array.from(item.querySelectorAll(`.color_pair`))[index]

//         if (typeof(myPair) === "undefined") {
//             // console.log(myPair)

//         }
//         else {
//             myPair.classList.add("focused-row")
//         }

//     })
    
// }








// function copyCONFIG(){
//     BROconfig = []
//     browserConfig = []
//     browserConfigClean = []
//     generateJSON()
//     generateElementsConfig(activeJSON[0], activeJSON[4]);
//     generateBlocksConfig(activeJSON[2], activeJSON[4]);

//     // browserConfigClean = browserConfig
//     groupConfig(browserConfig);

//     generateBROconfig(browserConfigClean, [activeJSON[3], activeJSON[1]])
//     navigator.clipboard.writeText(BROconfig)



// }


// function copyJSON(){
//     generateJSON()
//     navigator.clipboard.writeText(JSON.stringify(activeJSON))

// }


