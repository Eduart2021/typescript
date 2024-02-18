import  basePage  from "./basePage";

class Checkbox extends basePage {

    get checkBox1(){
        return $('//*[@id="checkboxes"]/input[1]')
    }
    get checkBoxStatus(){
        return $('[type="checkbox"]')
    }
    
    public open(){
        return super.open('checkboxes');
    }

}
export default new Checkbox();