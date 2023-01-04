const APP_OBJECTS = [];

export class AppObject {
    constructor() {
        APP_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start(){

    }

    update(){

    }
    
    on_destroy(){

    }

    destroy(){
        this.on_destroy();

        for(let i in APP_OBJECTS)
        {
            const obj = APP_OBJECTS[i];
            if(obj === this)
            {
                APP_OBJECTS.slice(i);
                break;
            }
        }
    }
}
let last_timestamp; //上次执行的时刻
const step = timestamp => {
    for (let obj of APP_OBJECTS){
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }
        else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;

    requestAnimationFrame(step)
}

requestAnimationFrame(step)