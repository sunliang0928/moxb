import { observable , action } from 'mobx'
export default class Count{
    @observable count = 1000
    @action  change(type){
        type=='+'?this.count++:this.count--
    }
}