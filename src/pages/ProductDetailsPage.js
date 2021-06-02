import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Accordion, Card, Carousel, CarouselItem } from "react-bootstrap";

import p from "../assets/product1.jpg";
import RowOfProducts from "../components/RowOfProducts";
import ProductDetailsForm from "../components/ProductDetailsForm";
import ProductCarousel from "../components/ProductCarousel";

import "../scss/ProductDetailsPage.scss";

const ProductDetailsPage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const url = `https://e-commerce-api.belzaondrej.com/products/${id}`;
        console.log(url+id);
        try {
          var response = await axios.get(url);
          console.log(response.data);
          setProduct(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <Container className="py-2">
            <Row className="d-flex px-0 mx-0">
                {product && <>
                    <Col md={8}>
                        <Row>
                            <ProductCarousel previewImage={product.previewImage} detailImages={product.detailImages}/>
                        </Row>
                        <Accordion defaultActiveKey="0" className="mt-3">
                            <Card color="light" border="light">
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Description
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>{product.description}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col md={4}>
                        <ProductDetailsForm product={product}/>
                    </Col>
                </>}
            </Row>
            <RowOfProducts category="you might like"/>

        </Container>
    );
}

export default ProductDetailsPage;
