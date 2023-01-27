import Title from "antd/es/typography/Title";
import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Detail from "./components/Detail";
import Tables from "./components/Table";
const url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=01a31026d16940239c2c36d23c29e819";

const App: FC = () => {
  const [dataArticles, setDataArticles] = useState<[]>([]);
  const [detail, setDetail] = useState({});
  const [isDetail, setIsDetail] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();

      setDataArticles(json?.articles);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDetail = (data: any) => {
    setIsDetail(true);
    const dataFilter = dataArticles
      .filter((item: any) => item.publishedAt === data.publishedAt)
      .map((item: any) => ({
        ...item,
        content: item?.description,
        image: item?.urlToImage,
      }));
    if (dataFilter.length > 0) {
      setDetail(dataFilter[0]);
    }
  };
  const handleBack = () => {
    setIsDetail(false);
  };

  return (
    <div className="main">
      <nav className="nav">
        <Title
          style={{
            fontSize: 24,
          }}
        >
          Frontend Challenge
        </Title>
      </nav>

      <main>
        {isDetail === false ? <Title level={4}>List of Articles</Title> : null}
        <div
          style={{
            marginTop: 20,
            width: "100%",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
          }}
        >
          {isDetail ? (
            <Detail
              {...detail}
              action={() => {
                handleBack();
              }}
            />
          ) : (
            <Tables
              action={(data: any) => handleDetail(data)}
              data={dataArticles}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
