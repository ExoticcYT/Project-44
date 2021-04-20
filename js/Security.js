class Security {

    constructor(){
        this.access1 = createInput('Code1');
        this.access1.position(100,210);
        this.access1.style('width', '200px');
        this.access1.style('height', '30px');
        
        this.access2 = createInput('Code2');
        this.access2.position(100, 680);
        this.access2.style('width', '200px');
        this.access2.style('height', '30px');

        this.access3 = createInput('Code3');
        this.access3.position(900, 150+260);
        this.access3.style('width', '200px');
        this.access3.style('height', '30px');

        this.button1 = createButton('Check');
        this.button1.position(100, 260);
        this.button1.style('width', '70px');
        this.button1.style('height', '30px');
        this.button1.style('background', 'grey');

        this.button2 = createButton('Check');
        this.button2.position(100, 730);
        this.button2.style('width', '70px');
        this.button2.style('height', '30px');
        this.button2.style('background', 'grey');

        this.button3 = createButton('Check');
        this.button3.position(900, 150+310);
        this.button3.style('width', '70px');
        this.button3.style('height', '30px');
        this.button3.style('background', 'grey');
    }

    display(){
        this.button1.mousePressed(() =>{
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        })

        this.button2.mousePressed(() =>{
            if(system.authenticate(accessCode3, this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        })

        this.button3.mousePressed(() =>{
            if(system.authenticate(accessCode2, this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        })
    }
}