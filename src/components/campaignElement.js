import React, { Component } from 'react';
import { Button, Container, Row, Col, Card } from 'reactstrap';
import ModalComponent from './modalComponent';

export default class CampaignElement extends Component {

    constructor(props) {
        super(props)

        this.state = { modal: false, item: this.props.item }
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => this.setState({ modal: !this.state.modal })


    render() {
        return (
            <div width="100px">
                <Container className="themed-container" fluid="sm">
                    <br></br>
                    <Col sm="6" md={{ offset: 2 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85%', width: '50%', paddingTop: '1%' }}>
                        <Card>
                            <Row >
                                <Col xs="2">
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75%', paddingLeft: '40%' }}> {this.props.item.point} POINTS </div>
                                </Col>
                                <Col xs="10">
                                    <Row><h1>{this.props.item.name}</h1></Row>
                                    <Row><h3>{this.props.item.description}</h3></Row>
                                    <br></br>
                                    <Row style={{ paddingRight: '1%' }}>
                                        <Col><Button outline color="success" onClick={() => this.props.increasePoint(this.props.item.id)}>+</Button></Col>
                                        <Col><Button outline color="danger" onClick={() => this.props.decreasePoint(this.props.item.id)}>-</Button></Col>
                                        <Col><Button outline color="warning" onClick={this.toggle}>Update</Button></Col>
                                        <Col><Button outline color="danger" onClick={() => this.props.deleteCampaign(this.props.item.id)}>Delete</Button></Col>
                                    </Row>
                                    <br></br>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <br></br>
                </Container>
                <br></br>
                <ModalComponent
                    modal={this.state.modal}
                    toggle={this.toggle}
                    item={this.state.item}
                    updateCampaign={(newItem) => this.props.updateCampaign(newItem, this.state.item.id)} />
            </div>
        );
    }
}