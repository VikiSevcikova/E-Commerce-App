import React, { useState, useEffect } from "react";
import { Card, ButtonToolbar, Button } from "react-bootstrap";
import axios from "axios";

const Products = (props) => {
  //set useState to undefined first
  const [fetchedData, setFetchedData] = useState();
  const [visible, setVisible] = useState(20);

  const SeeMore = () => {
    setVisible(visible + 20);
  };

  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.get(
        "https://e-commerce-api.belzaondrej.com/products"
      );
      setFetchedData(api.data);
      const onTrigger = () => {
        props.parentCallback(fetchedData);
        console.log(fetchedData);
        //e.preventDefault();
      };
      onTrigger();
    };
    fetchData();
  }, []);

  const renderProducts = (item, i) => {
    return (
      <div key={i} className="eachProduct">
        <div>
          <Card className="border-0" style={{ width: "100%" }} href="#">
            <div className="product-image">
              <a href="#">
                <Card.Img
                  variant="top"
                  className="card-img-top rounded-0"
                  src={item.previewImage}
                  alt="productImage"
                />
              </a>
              <div className="quick-add-overlay rounded py-2 px-2">
                <h6 className="text-uppercase fw-bold">Quick Add</h6>
                <ButtonToolbar className="text-center well">
                  <Button
                    type="button"
                    variant="outline-dark"
                    size="sm"
                    className="me-1"
                  >
                    XS
                  </Button>
                  <Button
                    type="button"
                    variant="outline-dark"
                    size="sm"
                    className="me-1"
                  >
                    S
                  </Button>
                  <Button
                    type="button"
                    variant="outline-dark"
                    size="sm"
                    className="me-1"
                  >
                    M
                  </Button>
                  <Button
                    type="button"
                    variant="outline-dark"
                    size="sm"
                    className="me-1"
                  >
                    L
                  </Button>
                  <Button type="button" variant="outline-dark" size="sm">
                    XL
                  </Button>
                </ButtonToolbar>
              </div>
            </div>

            <Card.Body className="px-0 mx-0">
              <a
                href="#"
                className="card-text text-decoration-none link-dark d-flex flex-row justify-content-between"
              >
                <h6>{item.name}</h6>
                <h6 className="fw-bold">{item.price} CAD</h6>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="productContainer">
        {fetchedData && fetchedData.slice(0, visible).map(renderProducts)}
      </div>
      {fetchedData && visible < fetchedData.length && (
        <div className="seeMoreButtonContainer">
          <Button className="seeMoreButton" variant="dark" onClick={SeeMore}>
            See more
          </Button>
        </div>
      )}
    </>
  );
};
export default Products;

// {fetchedData &&
//   fetchedData.map((item, i) => {
//     return (
//       <div key={i} className="eachProduct">
//         <div>
//           <Card className="border-0" style={{ width: "100%" }} href="#">
//             <div className="product-image">
//               <a href="#">
//                 <Card.Img
//                   variant="top"
//                   className="card-img-top rounded-0"
//                   src={item.previewImage}
//                   alt="productImage"
//                 />
//               </a>
//               <div className="quick-add-overlay rounded py-2 px-2">
//                 <h6 className="text-uppercase fw-bold">Quick Add</h6>
//                 <ButtonToolbar className="text-center well">
//                   <Button
//                     type="button"
//                     variant="outline-dark"
//                     size="sm"
//                     className="me-1"
//                   >
//                     XS
//                   </Button>
//                   <Button
//                     type="button"
//                     variant="outline-dark"
//                     size="sm"
//                     className="me-1"
//                   >
//                     S
//                   </Button>
//                   <Button
//                     type="button"
//                     variant="outline-dark"
//                     size="sm"
//                     className="me-1"
//                   >
//                     M
//                   </Button>
//                   <Button
//                     type="button"
//                     variant="outline-dark"
//                     size="sm"
//                     className="me-1"
//                   >
//                     L
//                   </Button>
//                   <Button
//                     type="button"
//                     variant="outline-dark"
//                     size="sm"
//                   >
//                     XL
//                   </Button>
//                 </ButtonToolbar>
//               </div>
//             </div>

//             <Card.Body className="px-0 mx-0">
//               <a
//                 href="#"
//                 className="card-text text-decoration-none link-dark d-flex flex-row justify-content-between"
//               >
//                 <h6>{item.name}</h6>
//                 <h6 className="fw-bold">{item.price} CAD</h6>
//               </a>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     );
//   })}

// fetch(api)
//       .then((res) => {
//         if (!res.ok) throw new Error(`${res.status}`);
//         res.json().then((data) => {
//           setFetchedData(data);
//           console.log(fetchedData);
//           props.parentCallback(fetchedData);
//         });
//       })
//       .catch((err) => {
//         alert(`Something went wrong. ${err.message}`);
//       });
