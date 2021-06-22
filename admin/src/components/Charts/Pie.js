import React, {Component} from 'react';
import {Bar , Line , Pie} from 'react-chartjs-2';
import axios from 'axios';
import { Paper } from '@material-ui/core';
//labels and data of chart
var LabelArray = [];
var DataArray =[];

class pie extends Component{

    constructor(props){
        super(props);


        this.getAllActiveCategories = this.getAllActiveCategories.bind(this);
        this.getProductsCountByCategory = this.getProductsCountByCategory.bind(this);

        this.state={
            
            foodArray:[],
            productArray:[],
              productCount:[],
              labels:[],
              data:[],
              Chartdata: null
        }
    }

    // get all active categories
   async getAllActiveCategories() {

       
    
      await  axios.get('http://localhost:5000/food/getall', {
          headers:
          {
            
    
          }
        }).then(res => {
          this.setState({
    
            foodArray: res.data


    
          })

          for (let index = 0; index < this.state.foodArray.length; index++) {
              
            this.state.labels.push(this.state.foodArray[index].category_name);
            LabelArray[index]=(this.state.foodArray[index].category_name).toString();
              
          
         

        }
       

        this.getProductsCountByCategory();
          
          
        }).catch(err => {
          console.log(err);
    
    
        })
    
      }

      //get product count of  single category
      getProductsCountByCategory(){


        for (let index = 0; index < this.state.labels.length; index++) {

            let key = this.state.labels[index];

           const token = localStorage.getItem('manager_token');
        axios.get('http://localhost:5000/food/ByCategory/' + key, {
            headers:
            {
                manager_token: token

            }
        }).then(res => {

            this.setState({
    
                productArray: res.data.data
    
    
        
              })

              
              
              this.state.data.push(this.state.productArray.length);
              DataArray[index]=this.state.productArray.length;

            
            
            

            

            
        }).catch(err => {
            console.log(err);


        })
            
        }

        
        
          
      }
    async  componentDidMount() {
       await this.getAllActiveCategories();
     
        //set chart values

        this.setState({
    
            Chartdata:{
                labels: LabelArray,
                datasets: [{
                  label: "Categories",
                  backgroundColor:[ "#FFCA28","#FFAB91",'#C62828','#4DD0E1','#03A9F4','#E91E63','#7E57C2','#A5D6A7','#AD1457','#FFAB91','#EF5350','#D84315','#81D4FA','#673AB7','#81D4FA','#FFE082','#A5D6A7','#E1BEE7','#FFE0B2','#EF6C00','#EF9A9A','#FFF176','#FFCA28','#263238','#4A148C','#6A1B9A','#01579B','#B71C1C','#4A148C','#D84315','#EF5350','#E91E63','#283593','#E65100','#42A5F5','#F57F17','#4DD0E1','#37474F','#01579B',],
                  data: DataArray
                }]
              }


    
          })

        
       
        
        

      }

    render(){
      const paperStyle={padding :20,height:'68vh',width:1000, margin:"20px auto"}
       
        return(
            <div className="chart" >
<Paper elevation={10} style={paperStyle}>
                <Pie


                
                data ={this.state.Chartdata}
                   
            
                options={{legend:{position:"bottom"}}}
                
                
                redraw />

</Paper>
            </div>
        )
    }



}
export default pie;