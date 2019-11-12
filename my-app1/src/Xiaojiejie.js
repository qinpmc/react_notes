import React,{Component,Fragment } from 'react'
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import "./myStyle.css"
import Boss from "./Boss"



class Xiaojiejie extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:"",
            //list:["钓鱼","放风筝"]
            list:[]
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
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index) =>{
                            return (
                                
                                <XiaojiejieItem key={index+item} content={item} index={index}
                                 
                                deleteItem={this.deleteItem.bind(this)}/>
                                
                            )
                        })
                    }
                </ul>
                <div>
                    <Boss />
                </div>
            </Fragment>
        )
    
    
    }


    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5dcabcc3d678512807e1b8dd/jspangdemo/workcontent')
            .then((res)=>{
                console.log('axios 获取数据成功:'+JSON.stringify(res));
                this.setState({
                    list:res.data.data
                })
            
            })
            .catch((error)=>{console.log('axios 获取数据失败'+error)})
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
        },function(){
            console.log(this.ul.querySelectorAll("div").length);
        })

        // console.log(this.ul.querySelectorAll("div").length); //错误的写法，setState异步更新
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