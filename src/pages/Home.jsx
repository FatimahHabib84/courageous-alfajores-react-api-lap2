import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Card from '../component/Card';
import Nav from "../component/Nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://665736bb9f970b3b36c86669.mockapi.io/charcter")
      .then(function (res) {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  const deleteCharacter = (id) => {
    axios
      .delete(`https://665736bb9f970b3b36c86669.mockapi.io/charcter/${id}`)
      .then(function (res) {
        setData(
          data.filter((res) => {
            res.id !== id;
          })
        );
        navigate(0);
        console.log(res);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className=" bg-indigo-100">
      <Nav />
      <h1 className="max-sm:col-span-3 col-span-3 font-bold text-xl text-center text-indigo-900 my-8">
        Characters
      </h1>
      <p className="max-sm:col-span-3 col-span-3 font-bold text-l text-center text-indigo-950 px-2">
        choose your favorate character to see its details{" "}
      </p>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 px-12 max-sm:px-2">
        {data.map((item) => {
          return (
            <div
              className="flex flex-col shadow-md shadow-black rounded-lg m-2 bg-white max-sm:col-span-3 p-2 gap-2"
              key={item.id}
            >
              <img className="w-2/3 m-auto rounded-lg" src={item.image} />
              <p className="text-center font-bold">{item.name}</p>
              <div className="flex flex-row gap-2">
                <Link className="w-full" to={`/info/${item.id}`}>
                  <button className="px-8 py-1 font-bold text-l text-white bg-indigo-800 hover:bg-indigo-900 w-1/2 m-auto rounded-lg">
                    View
                  </button>
                </Link>
                <button
                  className="px-8 py-1 font-bold text-l text-white bg-red-800 hover:bg-red-900 w-1/2 m-auto rounded-lg"
                  onClick={() => {
                    deleteCharacter(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>

            // <Card id={item.id} key={item.id} image={item.image} name={item.name} deletCharacter={deleteCharacter(item.id)}/>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
