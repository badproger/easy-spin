class Spin {
    constructor(input){
        if(document.querySelectorAll(`${input}`).length > 0){
            this.inputs = document.querySelectorAll(`${input}`);
            this.onInit();
        }else{
            return
        }
    }
    onInit(){
        for(let item of this.inputs){
            if(item.parentElement.parentElement.querySelector('.button-minus') !== null){
                item.parentElement.parentElement.querySelector('.button-minus').addEventListener('click', this.onDownClick);
            }
            if(item.parentElement.parentElement.querySelector('.button-plus') !== null){
                item.parentElement.parentElement.querySelector('.button-plus').addEventListener('click', this.onUpClick);
            }
            item.addEventListener('change', this.onChange);
        }
    }
    onUpClick(){
        let input = this.parentElement.querySelector('input'),
            value = parseFloat(input.value),
            event = new CustomEvent('change');
        value += 1;
        input.value = value;
        input.dispatchEvent(event);
    }
    onDownClick(){
        let input = this.parentElement.querySelector('input'),
            value = parseFloat(input.value),
            event = new CustomEvent('change');
        value -= 1;
        input.value = value;
        input.dispatchEvent(event);
    }
    onChange(){
        if(this.value < 1){
            this.value = 1;
        }
    }
}
new Spin('[name="count"]');