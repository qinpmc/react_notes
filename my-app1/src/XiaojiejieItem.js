import React,{Component} from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    static propTypes = {
        //index: PropTypes.number
        index: PropTypes.string
      }

    static defaultProps = {
        avname: 'pengpeng'
      }

    render(){
        console.log('child-render');
        return (
            <div onClick={this.handleClick}> {this.props.avname}为你-{this.props.content}</div>
        )
    }

    handleClick(){
        //关键代码——---------start
        //this.props.list=[] //错误，不能直接修改
        //关键代码-----------end
        this.props.deleteItem(this.props.index);
    }

    componentWillReceiveProps(nextProps,nextContext){
        // console.log(`this.props-->${JSON.stringify(this.props)}`);
        // console.log(`nextProps-->${JSON.stringify(nextProps)}`);
        // console.log(`nextContext-->${JSON.stringify(nextContext)}`);
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !==this.props.content){
            return true;
        }
        return false;
    }
}

//覆盖static 声明的属性  类型检查
XiaojiejieItem.propTypes = {
    content:PropTypes.string,
    index: PropTypes.number 
}


XiaojiejieItem.defaultProps = {
    avname:'mingming'
}

export default XiaojiejieItem ;