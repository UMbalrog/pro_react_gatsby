import React from "react"
import '../styles/layer.less'

export default class Layer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      namew: '',
      value: ''
    };

  }
  setNamew(event) {
    this.setState({namew: event.target.value})
  }
  setValue(event) {
    this.setState({value: event.target.value})
  }
  handleChange (data) {
    let pop = this.props.list.pop();
    if(this.props.list.length > 7){
      this.props.list.shift();
    };
    let link = this.state.value;
    if(this.state.value.indexOf('http') < 0){
      link = 'https://' + link;
    } 
    this.props.list.push({
      type: 1,
      name: this.state.namew,
      icon: link + '/favicon.ico',
      href: link
    })

    this.props.list.push(pop);

    let json = JSON.stringify(this.props.list);
    localStorage.setItem('x_bookmark', json);
    // this.props.listPush()
    this.props.showEvent(0);
  }
  render() {
    return (
      <div className="mark">
        <div className="content">
          <div className="title">添加快捷方式</div>
          <div className="bodys">
            <div className="name">名称</div>
            <label className="label">
              <input type="text" value={this.state.namew} onChange={this.setNamew.bind(this)} />        
            </label>
            <div className="name">网址</div>
            <label className="label">
              <input type="text" value={this.state.value} onChange={this.setValue.bind(this)} />        
            </label>
          </div>
          <div className="button-container">
            <button className="cancel-button" onClick={() => this.props.showEvent(0)}>取消</button>
            {(this.state.namew && this.state.value) ? 
              <button className="cancel-button done-button" onClick={() => this.handleChange()}>完成</button>
              : <button className="cancel-button action-button">完成</button>
            }
            </div>
        </div>
      </div>
    )

  }
}