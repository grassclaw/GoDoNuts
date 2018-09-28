import React, { Component } from "react";
import { DonutChoice, DonutItem } from "../../components/donutChoice";
import { BoxItems, BoxContainer } from "../../components/boxContainer";
import { ListBtn } from "../../components/ListBtn";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import {Link} from "react-router-dom";

class Order extends Component {
    state = {
        donuts: [],
        name: "",
        id: "",
        image: "",
        users: [],
        box: {}
    };

    componentDidMount() {
        this.loadDonuts();
    }

    loadDonuts = () => {
        //API FOR GET DONUT
        API.getDonuts()
            .then(res =>
                this.setState({ donuts: res.data, name: "", id: "" })
            )
            .catch(err => console.log(err));
    };
    getBox = () => {
        console.log('test');
        API.getBox({
            where: {
                _id: "5bac50a33581942e3d5e08a0"
            }
        }).then(res =>
            this.setState({
                box: res.data
            })
        ).catch(err => console.log(err))
    };

    handleClick = id => {
        const donut = this.state.donuts.find(donut => donut._id === id);
        API.populateBox(donut).then(res => this.getBox());
    };

    render() {
        console.log(this.state.donuts);

        return (
            <Container fluid>
                <Row>
                    <Col size="md-3">
                        <h1>CHOICES</h1>
                        {this.state.donuts.length ? (
                            <DonutChoice>
                                {this.state.donuts.map(Donut => (
                                    <DonutItem key={Donut._id} handleClick={this.handleClick} donut_id={Donut._id}>
                                        <div>
                                            <p>
                                                <img src={Donut.image} alt={Donut.name} width="50" height="50" />
                                                {Donut.name}
                                            </p>
                                        </div>
                                    </DonutItem>
                                ))}
                            </DonutChoice>
                        ) : (
                                //placeholder image
                                <h3>No Donuts</h3>
                            )}
                    </Col>
                    <Col size="md-9 sm-12">
                        {this.state.box.length ? (
                            <BoxContainer>
                                {this.state.box.donutCount.map(Picked => (
                                    <BoxItems
                                        removeDonuts={this.removeDonuts}
                                        id={Picked.id}
                                        key={Picked.id}
                                    >
                                    </BoxItems>
                                ))}
                            </BoxContainer>

                        ) : (
                                <BoxContainer>
                                    <h1>Order Up!</h1>
                                </BoxContainer>
                            )}
                        <Link to="/orderlist">
                            <ListBtn />
                        </Link>

                    </Col>

                </Row>
            </Container>
        )
    }
}

export default Order;



