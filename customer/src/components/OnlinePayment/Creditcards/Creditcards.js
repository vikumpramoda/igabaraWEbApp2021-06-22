
import Form from 'react-bootstrap/Form';
//import '../calendar/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Paper } from '@material-ui/core'
import { useLocation } from "react-router-dom";
import { Container ,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Creditcards= () => {
    
   

    const [input, setInput] = useState({slotDate:  null, exercise: null, food: null});
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const location = useLocation();
    useEffect(() => {
        setInput({ ...input, ...(location?.state)});
    }, [location]);

    const paperStyle={padding :20,height:'120vh',width:1000, margin:"20px auto", backgroundColor:'#ff9933'}

    return(

        
        <div>
            <Paper elevation={10} style={paperStyle}>
                <div><h1>Total Bill</h1></div>
            <Container>
    <Row>
    <Col>Booking Date</Col>
    <Col><div>={location?.state?.slotDate}</div></Col>
    </Row>
    <Row>
    <Col>Package Description</Col>
    <Col><div>={location?.state?.exercise?.description}</div></Col>
    </Row>
    <Row>
    <Col>Package Name</Col>
    <Col><div>={location?.state?.exercise?.pakagename}</div></Col>
    </Row>
    <Row>
    <Col>Package Price</Col>
    <Col><div>={location?.state?.exercise?.packageprice}</div></Col>
    </Row>
    <Row>
    <Col>Package Rate</Col>
    <Col><div>={location?.state?.exercise?.packagerate}</div></Col>
    </Row>
    <Row>
    <Col>Food Description</Col>
    <Col><div>={location?.state?.food?.fooddescription}</div></Col>
    </Row>
    <Row>
    <Col>Food Name</Col>
    <Col><div>={location?.state?.food?.foodname}</div></Col>
    </Row>
    <Row>
    <Col>Food Price</Col>
    <Col><div>={location?.state?.food?.foodprice}</div></Col>
    </Row>
    <Row>
    <Col><h2>Total Payment</h2></Col>
    <Col><div>={(function(packageprice, packagerate,foodprice) {
                      return (packageprice * packagerate) + foodprice;
                    }, 0)
                }</div></Col>
    </Row>
    
            </Container>

<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <h2>Online Payment Form</h2>
<Cards
cvc={cvc}
expiry={expiry}
focused={focus}
name={name}
number={number}
/>
<br></br><br></br>
  <Form>
  <Row>
  <Col>  
    <Form.Control type="text" placeholder="Normal text" 
    type="tel"
    name="number"
    val={number}
    placeholder="enter Number"
    onChange={e=>setNumber(e.target.value)}
    onFocus={e=>setFocus(e.target.name)}
    />
    </Col>  
    <Col>  
    <Form.Control type="text" placeholder="Normal text" 
    type="tel"
    name="name"
    val={name}
    placeholder="enter name"
    onChange={e=>setName(e.target.value)}
    onFocus={e=>setFocus(e.target.name)}
    />
    </Col>
    </Row>

    <br></br>

    <Row>
        <Col>
    <Form.Control type="text" placeholder="Normal text" 
    type="tel"
    name="expiry"
    val={expiry}
    placeholder="enter expiry"
    onChange={e=>setExpiry(e.target.value)}
    onFocus={e=>setFocus(e.target.name)}
    />
    </Col>

    <Col>
    <Form.Control type="text" placeholder="Normal text" 
    type="tel"
    name="cvc"
    val={cvc}
    placeholder="enter cvc"
    onChange={e=>setCvc(e.target.value)}
    onFocus={e=>setFocus(e.target.name)}
    />
     </Col>
    </Row>
    </Form>
    <br></br>
    <Link to =''><Button className='btn btn-success btn-block' > Pay with Credit Card </Button>{' '}</Link>
    
    </Paper>
</div>       
    )
}
export default Creditcards;