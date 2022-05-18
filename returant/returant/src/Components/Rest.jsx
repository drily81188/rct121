import axios from "axios";
import { useState, useEffect } from "react";

export const Rest = () => {
  const [list, setList] = useState([]);
  const [rating, setRating] = useState([]);
  const [sort, setSort] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/resturant").then((data) => {
      setList(data.data);
      //   setRating(data.data);
    });
  }, [sort]);
  const handlerRating = (data) => {
    console.log(data);
    const shortingData = list.filter((e) => {
      return e.rating === data;
    });
    setRating(shortingData);
  };
  const handlerPayment = (p) => {
    console.log(p);
    const PaymentData = list.filter((event) => {
      return p === "all" ? event : event.payment === p;
    });
    setRating(PaymentData);
  };
  const handlerSoting = (s) => {
    setSort(s);
    const sorting = list.sort((a, b) => {
      return s === "ase" ? a.cost - b.cost : b.cost - a.cost;
    });
    setRating(sorting);
    console.log(rating);
  };
  return (
    <div>
      <button
        onClick={() => {
          handlerRating(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          handlerRating(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          handlerRating(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          handlerRating(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          handlerPayment("card");
        }}
      >
        card
      </button>
      <button
        onClick={() => {
          handlerPayment("all");
        }}
      >
        all
      </button>
      <button
        onClick={() => {
          handlerPayment("cash");
        }}
      >
        cash
      </button>
      <button
        onClick={() => {
          handlerSoting("dse");
        }}
      >
        high to low
      </button>
      <button
        onClick={() => {
          handlerSoting("ase");
        }}
      >
        low to high
      </button>
      {/* {rating.map((item) => {
        return (
          <div key={item.id}>
            {item.id} {item.resturantName} {item.rating}
          </div>
        );
      })} */}
      {rating.length > 0
        ? rating.map((item) => {
            return (
              <div key={item.id}>
                {item.id} {item.resturantName} {item.rating} {item.cost}
              </div>
            );
          })
        : list.map((item) => {
            return (
              <div key={item.id}>
                {item.id} {item.resturantName} {item.rating} {item.cost}
              </div>
            );
          })}
    </div>
  );
};
