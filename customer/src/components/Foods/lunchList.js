import React, { Component } from 'react'
import axios from 'axios';
import { Paper } from '@material-ui/core'
import {Button,Row} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import AddFoodNavbBar from './foodNavBar';
const Food=props=>(
    <tr>

            <td><a href={props.food.image ? props.food.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum"} target="_blank">
            <Image src="holder.js/180x200" roundedCircle src={props.food.image ? props.food.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum" } 
            style={{ height: "55px" , width :"80px"}} /></a></td>
        <td>{props.food.foodname}</td>
        <td>{props.food.fooddescription}</td>
        <td>{props.food.foodprice}</td>
       
        
    
    <td>
    <Button variant="outline-success">Select</Button>{' '}
    </td>
    </tr>
)

export default class LunchList extends Component {

    constructor(props){
        super(props);

        this.deleteFood=this.deleteFood.bind(this);
        this.state={foods:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/lunch')
        .then(response=>{
            this.setState({foods:response.data})
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    deleteFood(id){
        axios.delete('http://localhost:5000/lunch/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            foods:this.state.foods.filter(el=>el._id!==id)
        })
    }

    foodList(){
        return this.state.foods.map(currentfood=>{
            return <Food food={currentfood} deleteFood={this.deleteFood} key={currentfood._id}/>;
        })
    }

    render() {
        const paperStyle={padding :20,height:'72vh',width:1000, margin:"20px auto"}
        return (
            
            <div>
                <Paper elevation={10} style={paperStyle}>
                
                <AddFoodNavbBar/>   
                <h3>Food Menu for Lunch</h3>
                
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Food Img</th>
                        <th>Food Name</th>
                        <th>Food discription</th>
                        <th>Food Price (SL Rs.)</th>
                        
                        <th>Selection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.foodList()}
                    </tbody>
                </table>
                </Paper>
            </div>
        )
    }
}
