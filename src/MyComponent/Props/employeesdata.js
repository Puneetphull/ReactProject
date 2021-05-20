import React, { Component } from 'react';
import Employeestile from './employeestile';

export default  class employeesdata  extends Component {
    render() {
        return ( 
            <>
          <Employeestile data = {this.props.data[0]} />
          <Employeestile data = {this.props.data[1]} />
          <Employeestile data = {this.props.data[2]} />
          <Employeestile data = {this.props.data[3]} />
          <Employeestile data = {this.props.data[4]} />
          <Employeestile data = {this.props.data[5]} /> 
       </>
            
        )
            
        
    }
}
