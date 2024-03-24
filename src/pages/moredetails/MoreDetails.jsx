import React from "react";
import "./moreDetails.css";
import { details } from "../../utils/data";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MoreDetails = () => {
  const params = useParams();

  const navigate = useNavigate();
  const selectedId = +params.id;
  const selectedPrice = +params.price;

  console.log(selectedId, selectedPrice);
  const data = details.find((item) => item.id === selectedId);
  console.log(data);
  const priced = data.data.find((item) => item.price === selectedPrice);

  return (
    <div className="full-body">
      <div className="more-details">
        <h1 className="title-text">
          <i
            onClick={() => {
              navigate(-1);
            }}
            class="fa-solid fa-chevron-left"
          ></i>{" "}
          about this service
        </h1>
        <div className="md-top">
          <div className="md-top-content">
            <h2>
              ${priced.price}/- <span className="Verified">Verified</span>
            </h2>
            <p className="title-text">What is Included in this Service</p>
          </div>
          <div className="thumbnail">
            <img src={priced.thumbnail} />
          </div>
        </div>
        <div className="more-details-banners">
          <img src="/no-img.png" />
        </div>
        <div className="how-details">
          <h3 className="title-text">how this service works</h3>
          <ol>
            {priced.howItWorks.map((item, index) => {
              return (
                <div>
                  <span>{index + 1}</span>
                  <li>{item}</li>
                </div>
              );
            })}
          </ol>
        </div>
        <div className="addtionals">Essentials services</div>
        <div className="addtionals">additionals services</div>
        <div className="addtionals">Frequently asked</div>
        <div className="add-to-cart-btn">
          <span>{priced.price}/-</span> <span>add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
