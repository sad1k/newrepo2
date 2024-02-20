/*
 function makeCounter() {
  
    function counter(){
       return counter.count++
    }
   counter.count = 0
       counter.set = (value) =>{
         counter.count = value
       }
       counter.decrease = () =>{
         return counter.count--
       }
   return counter
   
  }
  
  let counter = makeCounter();
  
   console.log( counter() ); // 0
   console.log( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  console.log( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  console.log( counter() ); // 10 (вместо 11)



let map = new WeakMap()
let stack = []

// функция если видит, что очередной обьект уже был (сравнение идет по ссылке) до этого в стеке, то возвращает ноль так как это циклическая ссылка
function getStringCount(obj){
  
 if(map.has(obj)){
   return map.get(obj)
 } else{
   let sum = (function(){
    if(typeof obj === 'object'){
      if(stack.includes(obj)){
        return 0
      }else{
        stack.push(obj)
      }
     
    let sum = 0
    for(let key in obj){
      if(typeof obj[key] === 'object'){
      sum += getStringCount(obj[key])
      }else if(typeof obj[key] === 'string'){
        sum += 1
      }
    }
    stack.splice(stack.indexOf(obj), 1)
    return sum
  }else if(typeof obj === 'string'){
    return 1
 }
 })()
 map.set(obj, sum)  
   return sum
}
}
let obj = {
  title: '1223',
  second: ['1', '2', '3'],
  secondobj: {
    self: ''
  }
}
obj.secondobj.self = obj
console.log(getStringCount(obj))
*/



// function Farm(name, countPlant, plants, season){
//     this.name = name
//     this.countPlant = countPlant
//     this.plants = plants
//     this.season = season
//     for(let plant of plants){
//         this.season.adjustPlantCare(plant)
//     }
//     this.start = () => {
//         let irrigation = new IrrigationSystem(100, 0.5)
//         console.log(`Начался сезон ${this.season.currentSeason}`)
//         for(let plant of plants){
//             console.log('Растение посажено')
//             plant.displayStatus()
//             plant.grow()

//         }
//     }

// }


// function Plant(type, growthStage, waterNeeds, status, fertilizerNeeds){
//     this.type = type
//     this.growthStage = growthStage
//     this.waterNeeds = waterNeeds
//     this.fertilizerNeeds = fertilizerNeeds
//     this.status = status // количество воды и удобрений
//     this.grow = () => {
        
//         if(this.status.waterLevel - waterNeeds <= 0){
//             this.status.waterLevel = 0
//         }else{
//             this.status.waterLevel -= this.waterNeeds
//         }
//         if(this.status.fertilizerLevel - this.fertilizerNeeds <= 0){
//             this.status.fertilizerLevel = 0
//         }else{
//             this.status.fertilizerLevel -= this.fertilizerNeeds
//         }
//         if(this.growthStage === 'Seeding'){
//             this.growthStage = 'Mature'
//         }
//     }
//     this.displayStatus = () => {
//         console.log(`Plant Type: ${this.type}, stage: ${this.growthStage} water level: ${this.status.waterLevel}
//         fertilizer level: ${this.status.fertilizerLevel} `)
//     }
// }

// function IrrigationSystem(waterCapacity, efficienty){
//     this.waterCapacity = waterCapacity
//     this.efficienty = efficienty,
//     this.waterPlant = (plant) => {
//         if(this.waterCapacity - plant.waterNeeds < 0){
//             this.refill()
//         }
//         console.log(`Растение ${plant.type} полито`)
//         plant.waterLevel += plant.waterNeeds * efficienty
//     }
//     this.checkWaterLevel = () => {
//         if(waterCapacity < 50){
//             console.log('Нужно добавить воды')
//         }else{
//             console.log('Воды достаточно')
//         }
//     }
//     this.refill = () => {
//         console.log('Запас воды пополнен')
//         this.waterCapacity = 100
//     }
// }

// function FertilizerDispenser(fertilizerType, quantity, fertilizerCapacity){
//     this.fertilizerType = fertilizerType
//     this.fertilizerCapacity = fertilizerCapacity
//     this.quantity = quantity
//     this.dispenseFertilizer = (plant) => {
//         if(this.fertilizerCapacity - plant.fertilizerNeeds < 0){
//             this.refill()
//         }
//         console.log(`Растение ${plant.type} удобрено`)
//         plant.status.fertilizerLevel += plant.fertilizerNeeds * this.quantity
//         this.fertilizerCapacity -= plant.fertilizerNeeds
//     }
//     this.checkFertilizerLevel = () => {
//         console.log(`Запас удобрений: ${this.fertilizerCapacity}`)
//     }
//     this.refill = () =>{
//         console.log('Запас удобрений был пополнен')
//         this.fertilizerCapacity = 100
//     }
// }


// function Season(season){
//     this.seasons = ['winter', 'spring','summer','autumn']
//     this.currentSeason = season
//     this.changeSeason = () => {
//         this.currentSeason = this.seasons[
//             (this.seasons.indexOf(this.currentSeason.toLowerCase()) + 1)%4]
//     }
//     this.adjustPlantCare = (plant) => {
//         switch(this.currentSeason.toLowerCase()){
//             case 'winter':
//                 plant.waterNeeds = 20
//                 plant.fertilizerNeeds = 30
//                 break
//             case 'spring':
//                 plant.waterNeeds = 15
//                 plant.fertilizerNeeds = 20
//                 break
//             case 'summer':
//                 plant.waterNeeds = 30
//                 plant.fertilizerNeeds = 15
//                 break
//             case 'autumn':
//                 plant.waterNeeds = 15
//                 plant.fertilizerNeeds = 20
//                 break
//             }
//     }
// }

// let season = new Season('summer')

// let farm = new Farm('Простоквашено', 4, [
//     new Plant('tomato','Seeding', 10, {waterLevel: 50, fertilizerLevel: 50}, 20),
//     new Plant('wheat','Seeding', 10, {waterLevel: 50, fertilizerLevel: 50}, 20),
//     new Plant('tomato','Seeding', 10, {waterLevel: 50, fertilizerLevel: 50}, 20),
//     new Plant('wheat','Seeding', 10, {waterLevel: 50, fertilizerLevel: 50}, 20),
// ], season)


const str = `1
Первый канал
290
2
Россия 1
290
3
Матч ТВ
290
4
НТВ
290
5
Пятый Канал
290
6
Россия К
298
7
Россия 24
298
8
Карусель
298
9
ОТР
298
10
ТВЦ
298
11
Рен ТВ
306
12
Спас
714
13
СТС
306
14
Домашний
306
15
ТВ3
346
16
Пятница
314
17
Звезда
306
18
Мир
306
19
ТНТ
314
20
Муз ТВ
714
21
Губерния 33
722
22
Известия Владимир
322
23
Вариант
314
24
Русский Бестселлер
314
25
Русский Детектив
714
26
viju TV1000
298
27
viju TV1000 Action
298
28
viju TV1000 Русское Кино
298
29
Русский Иллюзион
338
30
Индия
330
31
Че
306
32
Моя Планета
314
33
Русский Роман
314
34
viju History
298
35
viju Explore
298
36
viju Nature
298
37
Дом Кино
298
38
Матч! Страна
322
39
6 Канал
738
40
viju Sport
322
41
КХЛ ТВ
322
42
Солнце
330
43
Мульт
314
44
Бридж ТВ Русский Хит
306
45
Уникум
338
46
2x2
314
47
Кино ТВ HD
314
48
Европа Плюс ТВ
306
49
ТНТ Music
346
50
Живи
306
51
Кухня
322
52
Усадьба
330
53
Здоровое ТВ
330
54
Охота и Рыбалка
330
55
Драйв
330
56
Беларусь 24
290
57
РБК ТВ HD
314
58
Мультик HD
738
59
Бобер ТВ
338
60
Настоящее Страшное Телевидение
314
61
Первый HD
290
62
Россия 1 HD
290
63
НТВ HD
746
64
Приключения HD
346
65
Охотник и Рыболов HD
346
66
Матч! Арена HD
330
67
360° HD
330
68
RTG HD
322
69
Мир HD
338
70
СТС HD
746
71
Тайны Галактики
338
72
Загородная жизнь
338
73
Матч ТВ HD
714
74
Матч! Игра HD
730
75
Star Cinema HD
714
76
Наука
714
77
Ю
306
78
СОЮЗ
714
79
Star Family HD
714
80
СТС Love
714
81
.black
722
82
Музыка Первого
722
83
Телекафе
722
84
Время
714
85
Бридж ТВ
306
86
Romance
722
87
FAN HD
722
88
Travel+Adventure HD
722
89
Мосфильм. Золотая коллекция
322
90
Мультиландия
346
91
World Fashion Channel HD
722
92
КВН ТВ
298
93
Дом Кино Премиум HD
730
94
Bolt HD
722
95
Комедия
730
96
Cinema
730
97
РУ ТВ
738
98
В мире животных HD
730
99
Капитан Фантастика HD
738
100
Первый космический HD
738
101
Радио России (Радио)
290
102
Вести ФМ (Радио)
290
103
Маяк (Радио)
290
104
История
314
105
о2тв
306
106
Матч! Боец
306
107
Суббота!
322
108
RTG
346
109
Поехали!
738
110
О!
738
111
Мультимузыка
738
112
Доктор
738
113
Диалоги о рыбалке
322
114
ТНТ4
738
115
НТВ Хит
746
116
Красная Линия
746
117
Шансон ТВ
746
118
Ностальгия
746
119
Индийское кино
746
120
Победа
746
121
Fashion TV 4K
746
122
RTД Rus HD
338
123
Shot TV
330
124
СТС Kids
746
125
Ювелирочка
754
126
Хит HD
754
127
Блокбастер HD
754
128
Камеди HD
754
129
Кинопоказ HD
754
130
КХЛ HD
762
131
Кинеко HD
338
132
КХЛ Prime HD
762
133
Калейдоскоп ТВ
338
134
Кинокомедия
338
135
Киномикс
338
136
Лапки Live
346`


const CHANNELS_NAMES = {
}


str.split('\n').forEach((elem, index, arr) => {
    if((index % 3) === 0){
        CHANNELS_NAMES[elem] = arr[index + 1]
    }
})

const PORTS = []

const MODES = {
    econom : () => {
        this.option.mode = 'econom'
        this.power = 100
        this.option.brightness = 30
    },
    cinematic: () => {
        this.option.mode = 'cinematic'
        this.option.brightness = 65
        this.option.gamma = 10
    },

    game: () => {
        this.option.mode = 'games'
        this.option.brightness = 90
        this.option.gamma = 5
    }
}

function makeBlockedProperties(...args){
    const blockedProperties = {}
    console.log(args)
    args.forEach((elem) => {

        blockedProperties[elem] = {value: name,
            writable:false,
            enumerable:true,
            configurable: false
            
    }
    })
 return blockedProperties
}

function Televisor(name, type, power, inches, size, aspectRatio, ports, price){
   const blockedProperties = makeBlockedProperties(name, type, power, inches, size, aspectRatio, price)
    Object.defineProperties(this, blockedProperties)
 // this.name = name
 // this.type = type
//  this.power = power
//  this.inches = inches
//  this.size = size
 // this.aspectRatio = aspectRatio
    this.isOn = false
    this.ports = ports 
    this.channel = 0
    // this.price = price
    this.options = {
        brightness: 50,
        gamma: 0,
        mode: 'normal',

    }
    this.on = function(){
        this.isOn = true
        console.log('Телевизор включен!');
        if(!this.tvBox){
            console.log('Связи нет!');
        }else{
            this.channel = this.tvBox.currentChannel
        }
    }

    this.off = function(){
        if(!this.tvBox.isOn){
            console.log('Телевизор выключен!')
            this.isOn = false;  
        }
    }

    this.connectTvBox = function(tvBox){
        this.tvBox = tvBox;
        const connectionPorts = tvBox.ports.filter(elem => this.ports.includes(elem))
        if(connectionPorts.length >= 1){
          console.log(`Приставка ${this.tvBox.name} подключена по порту ${connectionPorts[0]}`)
        }else{
            throw new Error('Приставку невозможно подключить так как нет совпадающих портов')
        }
    }

    this.changeChannel = function(channel){
        if(this.tvBox.channels.includes(channel.toString())){
            this.channel = channel
            console.log(`Вы переключились на канал ${CHANNELS_NAMES[channel]}`)
        }else{
            throw new Error('Такого канала нет')
        }
    }
    this.changeOptions = function(mode){
        console.log(`Изменены настройки на режим ${mode}`)
        this.options = {
            ...this.options,
            ...MODES[mode]
        }
    }

    this.changeBrightness = (brightness) => {
        if(brightness >= 0){
            this.options.brightness = brightness;
            console.log(`Вы изменили яркость на ${brightness}`)
        }else{
            throw new Error('Яркость должна быть больше или равна нулю')
        }
    }

    this.changeGamma = (gamma) => {
        if(Math.abs(gamma) <= 100){
          this.options.gamma = gamma
          console.log(`Вы изменили гамму на ${gamma}`)
        }else{
            throw new Error('Гамма по модулю меньше 100')
        }
    }

    this.openFavouriteChannel = (number) => {
        if(this.tvBox.favouriteChannels[number]){
            this.currentChannel = number
            console.log(`Вы переключились на канал ${this.tvBox.favouriteChannels[number]} `)
        }else{
            throw new Error('Такого канала нет в избранных')
        }
    }

}



function TvBox(name, type, channels, ports){
    const blockedProperties = makeBlockedProperties(name, type, channels)
    Object.defineProperties(this, blockedProperties)
    // this.name = name
    this.ports = ports
    // this.type = type
    this.accessNetwork = this.type === 'SMART'
    this.channels = channels
    this.currentChannel = 0
    this.isOn = false;
    this.favouriteChannels = {}
    this.on = function(){
        if(!this.isOn){
            console.log(`Включена приставка ${this.name}`)
            this.isOn = true
        }
    }

    this.off = function(){
        if(this.isOn){
            console.log(`Приставка ${this.name} выключена`)
            this.isOn = false
        }
    }

    this.addFavouriteChannel = (number) => {
        if(CHANNELS_NAMES[number]){
            this.favouriteChannels[number] = CHANNELS_NAMES[number]
            console.log(`Добавили канал ${CHANNELS_NAMES[number]} в избранное`)
        }else{
            throw new Error('Такого канала не существует')
        }
    }

}


const configTvBox = {
    name: 'Приставка Дом.ру',
    type: 'SMART',
    channels: Object.keys(CHANNELS_NAMES).slice(0, 30),
    ports: ['HDMI', 'DVI']
}

const configTv = {
    name: 'Samsung TV E-450',
    type: 'QUADHD', 
    power: 200, 
    inches: '35', 
    size: [4086, 2076], 
    aspectRatio: [16, 9],
    ports: ['HDMI', 'DVI'], 
    price: '30000$'
}

const tv = new Televisor(...Object.values(configTv))
const tvBox = new TvBox(...Object.values(configTvBox))
tv.connectTvBox(tvBox)
tv.on()
tv.changeChannel(1)
tv.changeBrightness(90)
tv.changeGamma(5)
tv.changeOptions('econom')


Array.prototype.myForEach = function(func){
    for(let i = 0; i< this.length; i++){
        func(this[i], i, this)
    }
}
