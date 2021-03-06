import React,{Component,Fragment } from 'react'
 
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:"",
            list:["钓鱼","放风筝"]
        };
        this.inputAlias = React.createRef(); // 第二种 ref
    }

    render(){
        return (
            <Fragment>
                {
                    /* 正确的注释1   需用{}包裹*/ 
                    //正确的注释2    需用{}包裹
                }
                <div>
                    {
                        // 注意 label 使用htmlFor，而不是原生的for
                        // input 使用className ，而不是原生的class
                    }
                    <label htmlFor="">加入服务：</label>
                    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}
                    ref ={
                        // (input)=>{this.input222=input}   // 第一种 ref
                        this.inputAlias          // 第二种 ref
                    }
                    />
                    <button onClick={this.addList.bind(this)}>增加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) =>{
                            return (
                                
                                <XiaojiejieItem key={index+item} content={item} index={index}
                                 
                                deleteItem={this.deleteItem.bind(this)}/>
                                
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e){
        this.setState({
            //inputValue:e.target.value
            // inputValue:this.input222.value   // 第一种 ref
            inputValue: this.inputAlias.current.value   // 第二种 ref
        })
    }

    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:""
        })
    }

    deleteItem(index){
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie ;