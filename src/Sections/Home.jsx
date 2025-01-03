import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const [wardrobejson, setWardrobejson] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/items")
      .then((response) => {
        const links = response.data.map((item) => item.storePhoto);
        setWardrobejson(links);
        // debugging lol
        console.log("data", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // debugging lol
  console.log("data", wardrobejson);

  return (
    <>
    <div className="flex justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {wardrobejson.map((link, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src={link} alt="item" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

      <div className="flex justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {wardrobejson.map((link, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src={link} alt="item" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>


      <div className="flex w-full justify-between">
        <p>hi</p>
        <p>bye</p>
      </div>

      {/* {wardrobejson ?
                (wardrobejson.map((item, index) => (
                    <div key={index}>
                        <h1>{item.item}</h1>
                        <a href={item.shopLink} target="_blank">
                            <img src={item.storePhoto} alt="item" style={{ width: "200px", height: "auto" }} />
                        </a>
                    </div>
                ))) :
                (<h1>Loading...</h1>)
            } */}
    </>
  );
};

export default Home;
