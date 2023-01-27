import Title from "antd/es/typography/Title";
import { Button, Typography } from "antd";
import React from "react";
import moment from "moment";
type Props = {
  title?: string;
  image?: string;
  publishedAt?: string;
  content?: string;
  author?: string;
  action: Function;
};

const Detail = ({
  title,
  image,
  publishedAt,
  content,
  author,
  action,
}: Props) => {
  const { Text } = Typography;
  return (
    <div className="detail">
      <Button onClick={() => action()} type="primary" danger>
        Back
      </Button>
      <main>
        <Title level={3}>{title}</Title>

        <div>
          <span>Author : </span>
          <Text strong italic>
            {author}
          </Text>
        </div>

        <div className="content">
          <p>{content}</p>
        </div>
        <img className="img" src={image} alt="img" />
        <div style={{ marginTop: 12 }}>
          <span>Publised at : </span>
          <Text strong italic>
            {moment(publishedAt || "").format("DD-MM-YYYY")}
          </Text>
        </div>
      </main>
    </div>
  );
};

export default Detail;
