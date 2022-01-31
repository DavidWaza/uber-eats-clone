import React, {Components} from "react";

class DisabledButton extends Components {
    constructor(){
        super();
        this.State = {IsEnabled: false};
    }
 handleButtonEnabled(e) {
     const value = e.value.target;
     if(value.length > 0){
         this.setState({IsEnabled: true});
     }
 }
}
export default DisabledButton