import React, { Component } from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

// const text = `Трололо!!!`;

class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name:'all', label:'Все'},
            {name:'like', label:'Понравилось'},
            
        ];
    }
    render(){
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info':'btn-outline-secondary';
            return (
                <button 
                    type = "button" 
                    className={`btn ${clazz}`} 
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}
                    >{label}
                </button>
            )
        });
        return (
            <div className="btn-group">
                {/* <Button color='info'>Всё</Button> */}
                {/* <button type = "button" className="btn btn-info">Всё</button> */}
                {/* <button type = "button" className="btn btn-outline-secondary">Понравилось</button> */}
                {buttons}
            </div>
        )
    }
};

export default PostStatusFilter;